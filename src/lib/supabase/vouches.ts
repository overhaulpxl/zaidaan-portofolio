import type { SupabaseClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabase } from "./client";
import { getAdminSupabase } from "./admin";
import { snapshotSiteSettingsValue } from "./backup";

export type VouchItem = {
  id: string;
  name: string;
  handle?: string;
  role: string;
  rating: number;
  transactionNominal?: string;
  comment: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  reviewedAt?: string;
};

type DbClient = SupabaseClient | null;

type VouchRow = {
  id: string;
  name: string;
  handle: string | null;
  role: string;
  rating: number;
  transaction_nominal: string | null;
  comment: string;
  status: string;
  created_at: string;
  reviewed_at: string | null;
};

function readClient(): DbClient {
  try {
    return getAdminSupabase();
  } catch {
    return isSupabaseConfigured ? supabase : null;
  }
}

function writeClient(): SupabaseClient {
  return getAdminSupabase();
}

function isMissingTableError(error: { code?: string; message?: string } | null): boolean {
  if (!error) return false;
  return (
    error.code === "PGRST205" ||
    error.code === "42P01" ||
    /schema cache|does not exist/i.test(error.message || "")
  );
}

function rowToVouch(row: VouchRow): VouchItem {
  return {
    id: row.id,
    name: row.name,
    handle: row.handle || undefined,
    role: row.role,
    rating: Number(row.rating) || 5,
    transactionNominal: row.transaction_nominal || undefined,
    comment: row.comment,
    status: (["pending", "approved", "rejected"].includes(row.status)
      ? row.status
      : "pending") as VouchItem["status"],
    createdAt: row.created_at,
    reviewedAt: row.reviewed_at || undefined,
  };
}

function vouchToRow(vouch: VouchItem): VouchRow {
  return {
    id: vouch.id,
    name: vouch.name,
    handle: vouch.handle || null,
    role: vouch.role,
    rating: vouch.rating,
    transaction_nominal: vouch.transactionNominal || null,
    comment: vouch.comment,
    status: vouch.status,
    created_at: vouch.createdAt,
    reviewed_at: vouch.reviewedAt || null,
  };
}

async function tableAvailable(admin: SupabaseClient): Promise<boolean> {
  const { error } = await admin.from("vouches").select("id").limit(1);
  return !error || !isMissingTableError(error);
}

async function readJsonbVouches(db: DbClient): Promise<VouchItem[]> {
  if (!db) return [];
  const { data, error } = await db
    .from("site_settings")
    .select("value")
    .eq("key", "middleman_vouches")
    .maybeSingle();
  if (error || !Array.isArray(data?.value?.vouches)) return [];
  return data.value.vouches as VouchItem[];
}

async function writeJsonbVouches(
  admin: SupabaseClient,
  vouches: VouchItem[],
  reason: string
): Promise<void> {
  const { data: prev } = await admin
    .from("site_settings")
    .select("value")
    .eq("key", "middleman_vouches")
    .maybeSingle();
  await snapshotSiteSettingsValue(admin, "middleman_vouches", prev?.value ?? null, reason);
  const { error } = await admin.from("site_settings").upsert({
    key: "middleman_vouches",
    value: { vouches },
    updated_at: new Date().toISOString(),
  });
  if (error) throw new Error("Failed to record vouch. Please try again.");
}

function byNewest(a: VouchItem, b: VouchItem) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

export async function fetchApprovedVouches(): Promise<VouchItem[]> {
  if (!isSupabaseConfigured) return [];
  const db = readClient();
  if (!db) return [];

  try {
    const { data, error } = await db
      .from("vouches")
      .select("*")
      .eq("status", "approved")
      .order("created_at", { ascending: false });
    if (!error) return ((data || []) as VouchRow[]).map(rowToVouch);
    if (!isMissingTableError(error)) return [];
  } catch {
    // fall through to JSONB fallback
  }

  const all = await readJsonbVouches(db);
  return all.filter((v) => v.status === "approved").sort(byNewest);
}

export async function fetchAllVouches(): Promise<VouchItem[]> {
  if (!isSupabaseConfigured) return [];
  const db = readClient();
  if (!db) return [];

  try {
    const { data, error } = await db
      .from("vouches")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) return ((data || []) as VouchRow[]).map(rowToVouch);
    if (!isMissingTableError(error)) return [];
  } catch {
    // fall through to JSONB fallback
  }

  return (await readJsonbVouches(db)).sort(byNewest);
}

export async function insertVouch(vouch: VouchItem): Promise<void> {
  const admin = writeClient();

  if (await tableAvailable(admin)) {
    const { error } = await admin.from("vouches").insert(vouchToRow(vouch));
    if (error) throw new Error("Failed to record vouch. Please try again.");
    return;
  }

  const current = await readJsonbVouches(admin);
  await writeJsonbVouches(admin, [vouch, ...current], "insertVouch");
}

export async function updateVouch(id: string, fields: Partial<VouchItem>): Promise<void> {
  const admin = writeClient();

  if (await tableAvailable(admin)) {
    const patch: Record<string, unknown> = {};
    if (fields.name !== undefined) patch.name = String(fields.name).slice(0, 50);
    if (fields.handle !== undefined) patch.handle = String(fields.handle).slice(0, 50) || null;
    if (fields.role !== undefined) patch.role = String(fields.role).slice(0, 20);
    if (fields.rating !== undefined) {
      const rating = Math.min(5, Math.max(1, Math.round(Number(fields.rating) || 5)));
      patch.rating = rating;
    }
    if (fields.transactionNominal !== undefined) {
      patch.transaction_nominal = String(fields.transactionNominal).slice(0, 50) || null;
    }
    if (fields.comment !== undefined) patch.comment = String(fields.comment).slice(0, 500);

    const { error } = await admin
      .from("vouches")
      .update(patch)
      .eq("id", id);

    if (error) throw new Error(error.message);
    return;
  }

  const current = await readJsonbVouches(admin);
  const updated = current.map((v) =>
    v.id === id
      ? {
          ...v,
          ...fields,
          name: fields.name !== undefined ? String(fields.name).slice(0, 50) : v.name,
          handle: fields.handle !== undefined ? String(fields.handle).slice(0, 50) : v.handle,
          role: fields.role !== undefined ? String(fields.role).slice(0, 20) : v.role,
          rating:
            fields.rating !== undefined
              ? Math.min(5, Math.max(1, Math.round(Number(fields.rating) || 5)))
              : v.rating,
          transactionNominal:
            fields.transactionNominal !== undefined
              ? String(fields.transactionNominal).slice(0, 50)
              : v.transactionNominal,
          comment:
            fields.comment !== undefined ? String(fields.comment).slice(0, 500) : v.comment,
        }
      : v
  );
  await writeJsonbVouches(admin, updated, "updateVouch");
}

export async function updateVouchStatus(
  id: string,
  nextStatus: "approved" | "rejected"
): Promise<void> {
  const admin = writeClient();
  const reviewedAt = new Date().toISOString();

  if (await tableAvailable(admin)) {
    const { error } = await admin
      .from("vouches")
      .update({ status: nextStatus, reviewed_at: reviewedAt })
      .eq("id", id);
    if (error) throw new Error(error.message);
    return;
  }

  const current = await readJsonbVouches(admin);
  await writeJsonbVouches(
    admin,
    current.map((v) => (v.id === id ? { ...v, status: nextStatus, reviewedAt } : v)),
    "updateVouchStatus"
  );
}

export async function deleteVouch(id: string): Promise<void> {
  const admin = writeClient();

  if (await tableAvailable(admin)) {
    try {
      const { data: row } = await admin.from("vouches").select("*").eq("id", id).maybeSingle();
      if (row) await snapshotSiteSettingsValue(admin, "vouches_row", row, "deleteVouch");
    } catch {
      // best-effort snapshot; proceed with delete
    }
    const { error } = await admin.from("vouches").delete().eq("id", id);
    if (error) throw new Error(error.message);
    return;
  }

  const current = await readJsonbVouches(admin);
  await writeJsonbVouches(
    admin,
    current.filter((v) => v.id !== id),
    "deleteVouch"
  );
}

// --- Rate limiting -----------------------------------------------------------

const RATE_KEY = "vouch_ratelimit";
const MAX_PER_DAY = 5;
const COOLDOWN_MS = 60 * 1000;
const WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_ATTEMPTS = 5000;

export async function checkAndRecordVouchRateLimit(
  ipHash: string
): Promise<{ ok: boolean; message?: string }> {
  const admin = writeClient();
  const now = Date.now();

  const { data } = await admin
    .from("site_settings")
    .select("value")
    .eq("key", RATE_KEY)
    .maybeSingle();

  const attempts: Array<{ h: string; at: number }> = Array.isArray(data?.value?.attempts)
    ? (data.value.attempts as Array<{ h: string; at: number }>).filter(
        (a) => typeof a?.at === "number" && now - a.at <= WINDOW_MS
      )
    : [];

  const mine = attempts.filter((a) => a.h === ipHash);
  const last = mine.length ? Math.max(...mine.map((a) => a.at)) : 0;

  if (last && now - last < COOLDOWN_MS) {
    return { ok: false, message: "Please wait a minute before submitting another vouch." };
  }
  if (mine.length >= MAX_PER_DAY) {
    return { ok: false, message: "Too many vouches submitted today. Please try again tomorrow." };
  }

  attempts.push({ h: ipHash, at: now });

  await admin.from("site_settings").upsert({
    key: RATE_KEY,
    value: { attempts: attempts.slice(-MAX_ATTEMPTS) },
    updated_at: new Date().toISOString(),
  });

  return { ok: true };
}
