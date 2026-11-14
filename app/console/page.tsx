import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import rawManifest from "@/content/testimonials-manifest.json";
import type { TestimonialsManifest } from "@/types/middleman";

const manifest = rawManifest as unknown as TestimonialsManifest;

async function logoutAction() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.delete("console_auth");
}

async function persistSessionAction() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.set("console_auth", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

type ConsolePageProps = {
  searchParams: Promise<{ key?: string }>;
};

export default async function ConsolePage({ searchParams }: ConsolePageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("console_auth");

  const masterKey = process.env.CONSOLE_SECRET_KEY || "zaidaan1337";
  const hasValidCookie = authCookie?.value === "authenticated";
  const hasValidKey = params.key === masterKey;
  const isAuthenticated = hasValidCookie || hasValidKey;

  // Stealth gate: trigger true 404 Not Found if unauthenticated
  if (!isAuthenticated) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#000000] px-[5vw] py-16 font-['Inter']">
      <div className="max-w-5xl mx-auto border border-black bg-white p-8 md:p-12 shadow-sm">
        {/* Console Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black pb-8 gap-4">
          <div>
            <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c5f60]">
              SYSTEM CONSOLE · STEALTH OPS
            </span>
            <h1 className="font-['Montserrat'] text-[32px] md:text-[44px] font-black uppercase tracking-tight mt-1">
              TESTIMONIALS MANAGER
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 border border-emerald-400 text-[11px] font-bold uppercase tracking-wider">
              ONLINE · AUTHENTICATED
            </span>
            <form action={logoutAction}>
              <button
                type="submit"
                className="border border-black px-4 py-1.5 text-[12px] font-bold uppercase hover:bg-black hover:text-white transition-colors"
              >
                LOGOUT
              </button>
            </form>
          </div>
        </div>

        {/* Session Persistence Prompt if accessed via URL key */}
        {hasValidKey && !hasValidCookie && (
          <div className="mt-6 border border-black bg-amber-50 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider block">KEY AUTHENTICATED</span>
              <span className="text-[12px] text-[#5c5f60]">Persist this browser session so you do not need ?key= next time?</span>
            </div>
            <form action={persistSessionAction}>
              <button
                type="submit"
                className="border border-black bg-black text-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                REMEMBER THIS DEVICE
              </button>
            </form>
          </div>
        )}

        {/* System Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="border border-black p-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5c5f60]">TOTAL EVIDENCE</span>
            <p className="font-['Montserrat'] text-[36px] font-black mt-1">{manifest.count || manifest.items?.length || 0}</p>
            <span className="text-[11px] text-[#5c5f60]">Items in manifest</span>
          </div>

          <div className="border border-black p-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5c5f60]">STORAGE TARGET</span>
            <p className="font-['Montserrat'] text-[24px] font-bold mt-2">SUPABASE</p>
            <span className="text-[11px] text-[#5c5f60]">Bucket: &apos;testimonials&apos;</span>
          </div>

          <div className="border border-black p-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5c5f60]">MANIFEST DATE</span>
            <p className="font-['Montserrat'] text-[24px] font-bold mt-2">{manifest.generatedAt || "N/A"}</p>
            <span className="text-[11px] text-[#5c5f60]">Last synchronized</span>
          </div>
        </div>

        {/* Supabase Storage Instructions & Configuration */}
        <div className="border border-black p-6 mb-8 bg-[#f8f9fa]">
          <h2 className="font-['Montserrat'] text-[18px] font-bold uppercase mb-3">
            SUPABASE STORAGE CONNECTION
          </h2>
          <p className="text-[14px] text-[#3c3c3c] leading-relaxed mb-4">
            Upload the processed <code className="bg-white px-1.5 py-0.5 border border-black">t/</code> (thumbnails) and <code className="bg-white px-1.5 py-0.5 border border-black">f/</code> (full resolution) folders to your Supabase public bucket <code className="bg-white px-1.5 py-0.5 border border-black">testimonials</code>.
          </p>
          <div className="border border-black bg-white p-4 font-mono text-[12px] overflow-x-auto">
            <p className="text-[#5c5f60]"># Add this variable to your .env.local and Vercel project settings:</p>
            <p className="font-bold text-black mt-1">
              NEXT_PUBLIC_SUPABASE_STORAGE_URL=https://[YOUR_PROJECT_REF].supabase.co/storage/v1/object/public/testimonials
            </p>
          </div>
        </div>

        {/* Quick Link Navigation */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-black">
          <a
            href="/middleman"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-black text-white px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            VIEW LIVE GALLERY ↗
          </a>
          <Link
            href="/"
            className="border border-black px-6 py-3 text-[12px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            RETURN TO HOMEPAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
