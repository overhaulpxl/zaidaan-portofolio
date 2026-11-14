import crypto from "node:crypto";

/**
 * Stealth-console session helpers.
 *
 * The console is intentionally invisible to casual visitors (404). Access is
 * granted either by presenting the CONSOLE_SECRET_KEY as ?key=<secret> or by
 * holding a signed, expiring `console_auth` cookie issued after key access.
 *
 * Security properties:
 * - No secret material is hardcoded or shipped to the client.
 * - The ?key comparison uses HMAC digests with timingSafeEqual so it does not
 *   leak length or content timing.
 * - The cookie value is an HMAC-signed payload `v1.<expiresMs>.<signature>`;
 *   it carries no secret and expires after maxAge.
 */

export const CONSOLE_COOKIE = "console_auth";
export const CONSOLE_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds
const SESSION_TTL_MS = CONSOLE_COOKIE_MAX_AGE * 1000;

export function getConsoleSecret(): string {
  const secret = process.env.CONSOLE_SECRET_KEY;
  if (!secret || secret.length < 8) {
    throw new Error(
      "CONSOLE_SECRET_KEY is not configured. Set it in the environment (min 8 chars) to use /console."
    );
  }
  return secret;
}

function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input).digest("hex");
}

/** Timing-safe equality that does not leak length. */
export function safeKeyEqual(provided: string, expected: string): boolean {
  if (!provided || !expected) return false;
  const a = crypto.createHash("sha256").update(provided).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

function signSessionPayload(payload: string): string {
  return crypto
    .createHmac("sha256", getConsoleSecret())
    .update(`console-session:${payload}`)
    .digest("hex");
}

export function createConsoleSessionValue(now: number = Date.now()): string {
  const expiresMs = now + SESSION_TTL_MS;
  const payload = `v1.${expiresMs}`;
  return `${payload}.${signSessionPayload(payload)}`;
}

export function verifyConsoleSessionValue(value: string | undefined | null): boolean {
  if (!value) return false;
  const parts = value.split(".");
  if (parts.length !== 3 || parts[0] !== "v1") return false;
  const expiresMs = Number(parts[1]);
  if (!Number.isFinite(expiresMs) || Date.now() > expiresMs) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = signSessionPayload(payload);
  const a = Buffer.from(parts[2]);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export { sha256Hex };
