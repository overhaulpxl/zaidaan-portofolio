import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Sitemap — Zaidaan Zalfaa" },
  description: "Directory of all public pages on zaidaan.my.id — identity, project archive, middleman escrow archive, and CV.",
  alternates: { canonical: `${siteConfig.url}/sitemap` },
};

const entries = [
  {
    num: "01",
    title: "HOME",
    href: "/",
    desc: "Identity — who Zaidaan Zalfaa is, what is available for, and how to get in touch.",
  },
  {
    num: "02",
    title: "PROJECT ARCHIVE",
    href: "/work",
    desc: "Selected work — Discord bots, websites, automation projects, community systems.",
  },
  {
    num: "03",
    title: "MIDDLEMAN",
    href: "/middleman",
    desc: "Transaction testimonials — 2,400+ verified escrow proofs, domestic & international.",
  },
  {
    num: "04",
    title: "SITEMAP",
    href: "/sitemap",
    desc: "This page — human-readable directory indexing every public page on this site.",
  },
  {
    num: "05",
    title: "DOWNLOAD CV",
    href: "/cv",
    desc: "Résumé (PDF) — delivered directly to the browser as a file download.",
  },
];

export default function SitemapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa] text-[#000000] overflow-x-hidden">
      <Header />
      <main
        data-route-page="sitemap"
        className="flex-grow pt-[120px] pb-32 lg:pt-40 lg:pb-40 px-[5vw]"
      >
        <div className="border-b border-black pb-12 mb-12 max-w-6xl">
          <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5c5f60] mb-4 block">
            DIRECTORY / ALL PUBLIC PAGES
          </span>
          <h1 className="font-['Montserrat'] text-[48px] md:text-[88px] lg:text-[112px] font-black uppercase leading-[0.9] tracking-[-0.03em]">
            SITEMAP.
          </h1>
          <p className="font-['Inter'] text-[15px] md:text-[17px] text-[#2c2d2e] mt-6 max-w-2xl leading-relaxed">
            Every public page on {siteConfig.url.replace("https://", "")}, indexed in one place.
          </p>
        </div>

        <div className="max-w-6xl w-full border-t border-black">
          {entries.map((entry) => (
            <Link
              key={entry.num}
              href={entry.href}
              className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline border-b border-black py-6 md:py-8 px-2 md:px-4 -mx-2 md:-mx-4 hover:bg-black hover:text-white transition-colors focus-visible:outline-1 focus-visible:outline-black"
            >
              <span className="col-span-2 md:col-span-1 font-['Inter'] text-[13px] md:text-[14px] font-bold text-[#5c5f60] group-hover:text-[#a0a0a0] tabular-nums">
                {entry.num}
              </span>
              <span className="col-span-10 md:col-span-4">
                <span className="font-['Montserrat'] text-[22px] md:text-[30px] font-black uppercase tracking-tight block leading-none">
                  {entry.title}
                </span>
                <span className="font-mono text-[11px] md:text-[12px] text-[#5c5f60] group-hover:text-[#a0a0a0] mt-2 block truncate">
                  {siteConfig.url}
                  {entry.href === "/" ? "" : entry.href}
                </span>
              </span>
              <span className="col-span-10 col-start-4 md:col-span-7 md:col-start-auto font-['Inter'] text-[13px] md:text-[14px] text-[#2c2d2e] group-hover:text-[#e8e8e8] leading-snug">
                {entry.desc}
              </span>
              <span
                aria-hidden="true"
                className="hidden md:block col-span-1 justify-self-end font-['Inter'] text-[20px] group-hover:translate-x-1 transition-transform"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
