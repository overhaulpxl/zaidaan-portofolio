"use server";

import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import crypto from "node:crypto";
import { getAdminSupabase } from "@/lib/supabase/admin";
import { snapshotSiteSettingsValue } from "@/lib/supabase/backup";
import {
  checkAndRecordVouchRateLimit,
  deleteVouch,
  insertVouch,
  updateVouchStatus,
} from "@/lib/supabase/vouches";
import {
  CONSOLE_COOKIE,
  CONSOLE_COOKIE_MAX_AGE,
  createConsoleSessionValue,
  verifyConsoleSessionValue,
} from "@/lib/console-session";

async function verifyAuth() {
  const cookieStore = await cookies();
  const auth = cookieStore.get(CONSOLE_COOKIE);
  if (!verifyConsoleSessionValue(auth?.value)) {
    throw new Error("Unauthorized: Invalid console session");
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(CONSOLE_COOKIE);
  revalidatePath("/console");
}

export async function persistSessionAction() {
  const cookieStore = await cookies();
  cookieStore.set(CONSOLE_COOKIE, createConsoleSessionValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: CONSOLE_COOKIE_MAX_AGE,
  });
  revalidatePath("/console");
}

export async function exportSiteSettingsAction() {
  await verifyAuth();
  const admin = getAdminSupabase();

  const { data } = await admin
    .from("site_settings")
    .select("key, value, updated_at")
    .in("key", ["general", "middleman_vouches", "settings_history"]);

  const settings: Record<string, unknown> = {};
  for (const row of data || []) {
    settings[row.key] = row.value;
  }

  return {
    filename: `zaidaan-settings-backup-${new Date().toISOString().slice(0, 10)}.json`,
    payload: JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        siteSettings: settings,
      },
      null,
      2
    ),
  };
}

export async function saveProjectAction(formData: FormData) {
  await verifyAuth();
  const admin = getAdminSupabase();

  const id = (formData.get("id") as string)?.trim() || null;
  const slug = (formData.get("slug") as string)?.trim() || "";
  const title = (formData.get("title") as string)?.trim() || "";
  const category = (formData.get("category") as string)?.trim() || "Websites";
  const status = (formData.get("status") as string)?.trim() || "Completed · Live";
  const role = (formData.get("role") as string)?.trim() || "";
  const description = (formData.get("description") as string)?.trim() || "";
  const sortOrder = parseInt(formData.get("sort_order") as string, 10) || 0;
  const featured = formData.get("featured") === "on" || formData.get("featured") === "true";
  const published = formData.get("published") === "on" || formData.get("published") === "true";

  const rawTech = (formData.get("technologies") as string) || "";
  const technologies = rawTech
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const rawFeaturedTech = (formData.get("featured_technologies") as string) || "";
  const featuredTechnologies = rawFeaturedTech
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const rawFilters = (formData.get("filters") as string) || category;
  const filters = rawFilters
    .split(",")
    .map((f) => f.trim())
    .filter(Boolean);

  const linkLabel = (formData.get("link_label") as string)?.trim();
  const linkHref = (formData.get("link_href") as string)?.trim();
  const links = linkHref ? [{ label: linkLabel || "Visit Link", href: linkHref }] : [];

  const payload = {
    slug,
    title,
    category,
    filters,
    status,
    description,
    role,
    technologies,
    featured_technologies: featuredTechnologies,
    featured,
    published,
    sort_order: sortOrder,
    links,
    updated_at: new Date().toISOString(),
  };

  if (id) {
    const { error } = await admin.from("projects").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { error } = await admin.from("projects").insert([{ ...payload, created_at: new Date().toISOString() }]);
    if (error) throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/work");
  revalidatePath("/console");
  return { success: true };
}

export async function deleteProjectAction(id: string) {
  await verifyAuth();
  const admin = getAdminSupabase();
  const { error } = await admin.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/work");
  revalidatePath("/console");
  return { success: true };
}

export async function toggleProjectFieldAction(id: string, field: "featured" | "published", nextValue: boolean) {
  await verifyAuth();
  const admin = getAdminSupabase();
  const { error } = await admin
    .from("projects")
    .update({ [field]: nextValue, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/work");
  revalidatePath("/console");
  return { success: true };
}

export async function saveCertificateAction(formData: FormData) {
  await verifyAuth();
  const admin = getAdminSupabase();

  const id = (formData.get("id") as string)?.trim() || null;
  const title = (formData.get("title") as string)?.trim() || "";
  const issuer = (formData.get("issuer") as string)?.trim() || "";
  const issuedLabel = (formData.get("issued_label") as string)?.trim() || "";
  const level = (formData.get("level") as string)?.trim() || null;
  const scoreLabel = (formData.get("score_label") as string)?.trim() || null;
  const scoreValue = (formData.get("score_value") as string)?.trim() || null;
  const duration = (formData.get("duration") as string)?.trim() || null;
  const documentUrl = (formData.get("document_url") as string)?.trim() || null;
  const sortOrder = parseInt(formData.get("sort_order") as string, 10) || 0;
  const published = formData.get("published") === "on" || formData.get("published") === "true";

  const payload = {
    title,
    issuer: issuer || null,
    issued_label: issuedLabel,
    level,
    score_label: scoreLabel,
    score_value: scoreValue,
    duration,
    document_url: documentUrl,
    published,
    sort_order: sortOrder,
    updated_at: new Date().toISOString(),
  };

  if (id) {
    const { error } = await admin.from("certificates").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { error } = await admin.from("certificates").insert([{ ...payload, created_at: new Date().toISOString() }]);
    if (error) throw new Error(error.message);
  }

  revalidatePath("/");
  revalidatePath("/console");
  return { success: true };
}

export async function deleteCertificateAction(id: string) {
  await verifyAuth();
  const admin = getAdminSupabase();
  const { error } = await admin.from("certificates").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/console");
  return { success: true };
}

export async function toggleCertificatePublishedAction(id: string, nextValue: boolean) {
  await verifyAuth();
  const admin = getAdminSupabase();
  const { error } = await admin
    .from("certificates")
    .update({ published: nextValue, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/console");
  return { success: true };
}

export async function saveSiteSettingsAction(formData: FormData) {
  await verifyAuth();
  const admin = getAdminSupabase();

  const availability = (formData.get("availability") as string)?.trim() || "Available for Select Opportunities";
  const totalProofs = parseInt(formData.get("total_proofs") as string, 10) || 2451;

  const { data: prev } = await admin
    .from("site_settings")
    .select("value")
    .eq("key", "general")
    .maybeSingle();
  await snapshotSiteSettingsValue(admin, "general", prev?.value ?? null, "saveSiteSettingsAction");

  const { error } = await admin.from("site_settings").upsert({
    key: "general",
    value: {
      availability,
      totalProofs,
    },
    updated_at: new Date().toISOString(),
  });

  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/middleman");
  revalidatePath("/console");
  return { success: true };
}

export async function submitPublicVouchAction(formData: FormData) {
  // 1. Anti-spam honeypot
  const honeypot = (formData.get("website_url_hp") as string)?.trim();
  if (honeypot) {
    return { success: true, message: "Vouch received." };
  }

  const name = (formData.get("name") as string)?.trim();
  const comment = (formData.get("comment") as string)?.trim();
  const handle = (formData.get("handle") as string)?.trim() || "";
  const role = (formData.get("role") as string)?.trim() || "Buyer";
  const transactionNominal = (formData.get("transaction_nominal") as string)?.trim() || "";
  const rawRating = parseInt(formData.get("rating") as string, 10);
  const rating = Math.min(5, Math.max(1, isNaN(rawRating) ? 5 : rawRating));

  if (!name || name.length < 2) {
    throw new Error("Name is required (minimum 2 characters).");
  }
  if (!comment || comment.length < 5) {
    throw new Error("Review comment is required (minimum 5 characters).");
  }

  // 2. Per-IP rate limit (HMAC-hashed; raw IPs are never stored)
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for") || "";
  const ip =
    forwarded.split(",")[0].trim() || headerList.get("x-real-ip") || "unknown";
  const pepper = process.env.CONSOLE_SECRET_KEY || "console-pepper";
  const ipHash = crypto
    .createHmac("sha256", pepper)
    .update(`vouch-ip:${ip}`)
    .digest("hex")
    .slice(0, 24);

  try {
    const rate = await checkAndRecordVouchRateLimit(ipHash);
    if (!rate.ok) {
      return { success: false, message: rate.message || "Too many submissions. Please try again later." };
    }
  } catch {
    // Rate-limit storage must never make the form unusable; proceed.
  }

  const newVouch = {
    id: crypto.randomUUID(),
    name: name.slice(0, 50),
    handle: handle.slice(0, 50),
    role: role.slice(0, 20),
    rating,
    transactionNominal: transactionNominal.slice(0, 50),
    comment: comment.slice(0, 500),
    status: "pending" as const,
    createdAt: new Date().toISOString(),
  };

  await insertVouch(newVouch);

  revalidatePath("/middleman");
  revalidatePath("/console");
  return {
    success: true,
    message: "Thank you! Your review has been submitted and is pending verification.",
  };
}

export async function updateVouchStatusAction(id: string, nextStatus: "approved" | "rejected") {
  await verifyAuth();
  await updateVouchStatus(id, nextStatus);

  revalidatePath("/middleman");
  revalidatePath("/console");
  return { success: true };
}

export async function deleteVouchAction(id: string) {
  await verifyAuth();
  await deleteVouch(id);

  revalidatePath("/middleman");
  revalidatePath("/console");
  return { success: true };
}
