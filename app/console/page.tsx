import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import rawManifest from "@/content/testimonials-manifest.json";
import type { TestimonialsManifest } from "@/types/middleman";
import { getAdminSupabase } from "@/lib/supabase/admin";
import { logoutAction, persistSessionAction } from "@/lib/actions/console";
import { fetchAllVouches, type VouchItem } from "@/lib/supabase/data";
import {
  CONSOLE_COOKIE,
  getConsoleSecret,
  safeKeyEqual,
  verifyConsoleSessionValue,
} from "@/lib/console-session";
import { ConsoleManager, type ProjectRow, type CertificateRow, type SettingsRow } from "@/components/console/console-manager";
import Link from "next/link";

const manifest = rawManifest as unknown as TestimonialsManifest;

type ConsolePageProps = {
  searchParams: Promise<{ key?: string }>;
};

export default async function ConsolePage({ searchParams }: ConsolePageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(CONSOLE_COOKIE);

  let hasValidKey = false;
  try {
    hasValidKey = Boolean(params.key && safeKeyEqual(params.key, getConsoleSecret()));
  } catch {
    hasValidKey = false;
  }
  const hasValidCookie = verifyConsoleSessionValue(authCookie?.value);
  const isAuthenticated = hasValidCookie || hasValidKey;

  // Slow down brute-force attempts against the key gate
  if (params.key && !hasValidKey) {
    await new Promise((resolve) => setTimeout(resolve, 750));
  }

  // Stealth gate: trigger true 404 Not Found if unauthenticated
  if (!isAuthenticated) {
    notFound();
  }

  // Fetch live administrative datasets from Supabase
  const admin = getAdminSupabase();

  const [projectsRes, certsRes, settingsRes, vouchesList] = await Promise.all([
    admin.from("projects").select("*").order("sort_order", { ascending: true }),
    admin.from("certificates").select("*").order("sort_order", { ascending: true }),
    admin.from("site_settings").select("value").eq("key", "general").single(),
    fetchAllVouches(),
  ]);

  const projects: ProjectRow[] = projectsRes.data || [];
  const certificates: CertificateRow[] = certsRes.data || [];
  const vouches: VouchItem[] = vouchesList || [];
  const settings: SettingsRow = {
    availability: settingsRes.data?.value?.availability || "Available for Select Opportunities",
    totalProofs: Number(settingsRes.data?.value?.totalProofs) || 2451,
    whatsappVisible: settingsRes.data?.value?.whatsappVisible !== false,
  };

  const manifestStats = {
    count: manifest.count || manifest.items?.length || 2451,
    generatedAt: manifest.generatedAt || "2026-11-14",
    storageUrl: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL || "",
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#000000] px-[5vw] py-16 font-['Inter']">
      <div className="max-w-6xl mx-auto border border-black bg-white p-6 md:p-12 shadow-sm">
        {/* Console Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black pb-8 gap-4 mb-8">
          <div>
            <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c5f60]">
              SYSTEM CONSOLE · STEALTH OPS
            </span>
            <h1 className="font-['Montserrat'] text-[32px] md:text-[44px] font-black uppercase tracking-tight mt-1">
              PORTFOLIO ADMIN
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-400 text-[11px] font-bold uppercase tracking-wider">
              ONLINE · AUTHENTICATED
            </span>
            <form action={logoutAction}>
              <button
                type="submit"
                className="border border-black px-4 py-1.5 text-[12px] font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                LOGOUT
              </button>
            </form>
          </div>
        </div>

        {/* Session Persistence Prompt if accessed via URL key */}
        {hasValidKey && !hasValidCookie && (
          <div className="mb-8 border border-black bg-amber-50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider block">KEY AUTHENTICATED</span>
              <span className="text-[12px] text-[#5c5f60]">
                Persist this browser session cookie so you do not need ?key= next time?
              </span>
            </div>
            <form action={persistSessionAction}>
              <button
                type="submit"
                className="border border-black bg-black text-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                REMEMBER THIS DEVICE
              </button>
            </form>
          </div>
        )}

        {/* Interactive Manager Tabs & Forms */}
        <ConsoleManager
          initialProjects={projects}
          initialCertificates={certificates}
          initialVouches={vouches}
          initialSettings={settings}
          manifestStats={manifestStats}
        />

        {/* Quick Link Navigation */}
        <div className="flex flex-wrap gap-4 pt-8 mt-12 border-t border-black">
          <Link
            href="/"
            className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            RETURN TO HOMEPAGE
          </Link>
          <Link
            href="/work"
            className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            VIEW PROJECT ARCHIVE ↗
          </Link>
          <Link
            href="/middleman"
            className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            VIEW MIDDLEMAN GALLERY ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
