"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getAdminSupabase } from "@/lib/supabase/admin";

async function verifyAuth() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("console_auth");
  if (auth?.value !== "authenticated") {
    throw new Error("Unauthorized: Invalid console session");
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("console_auth");
  revalidatePath("/console");
}

export async function persistSessionAction() {
  const cookieStore = await cookies();
  cookieStore.set("console_auth", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  revalidatePath("/console");
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
