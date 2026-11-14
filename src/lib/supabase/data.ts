import { isSupabaseConfigured, supabase } from "./client";
import { projects as staticProjects } from "@/content/projects";
import { certificates as staticCertificates } from "@/content/certificates";
import {
  fetchApprovedVouches,
  fetchAllVouches,
  type VouchItem,
} from "./vouches";
import type { Project, Certification, ProjectStatus, ProjectFilterType } from "@/types/portfolio";

export async function fetchProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured) return staticProjects;
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return staticProjects;
    }

    return data.map((row) => ({
      slug: row.slug,
      title: row.title,
      category: row.category,
      filters: (row.filters || []) as ProjectFilterType[],
      status: row.status as ProjectStatus,
      description: row.description,
      role: row.role,
      technologies: row.technologies || [],
      featuredTechnologies: row.featured_technologies || [],
      year: row.year || undefined,
      featured: Boolean(row.featured),
      published: Boolean(row.published),
      sortOrder: row.sort_order ?? 0,
      links: row.links || [],
      media: row.media || null,
    }));
  } catch {
    return staticProjects;
  }
}

export async function fetchCertificates(): Promise<Certification[]> {
  if (!isSupabaseConfigured) return staticCertificates;
  try {
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return staticCertificates;
    }

    return data.map((row) => ({
      title: row.title,
      issuer: row.issuer || undefined,
      issuedLabel: row.issued_label || "",
      issuedDate: row.issued_date || undefined,
      level: row.level || undefined,
      scoreLabel: row.score_label || undefined,
      scoreValue: row.score_value || undefined,
      duration: row.duration || undefined,
      documentUrl: row.document_url || null,
      published: Boolean(row.published),
      sortOrder: row.sort_order ?? 0,
    }));
  } catch {
    return staticCertificates;
  }
}

export type SiteSettings = {
  availability: string;
  totalProofs: number;
  whatsappVisible: boolean;
};

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const defaultSettings: SiteSettings = {
    availability: "Available for Select Opportunities",
    totalProofs: 2451,
    whatsappVisible: true,
  };

  if (!isSupabaseConfigured) return defaultSettings;
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("value")
      .eq("key", "general")
      .single();

    if (error || !data?.value) {
      return defaultSettings;
    }

    return {
      availability: data.value.availability || defaultSettings.availability,
      totalProofs: Number(data.value.totalProofs) || defaultSettings.totalProofs,
      whatsappVisible: data.value.whatsappVisible !== false,
    };
  } catch {
    return defaultSettings;
  }
}

export type { VouchItem };
export { fetchApprovedVouches, fetchAllVouches };
