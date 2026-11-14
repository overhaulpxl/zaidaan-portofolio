import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MiddlemanGalleryClient } from "@/components/middleman/middleman-gallery-client";
import { MiddlemanVouches } from "@/components/middleman/middleman-vouches";
import { fetchApprovedVouches } from "@/lib/supabase/data";
import { siteConfig } from "@/content/site";
import rawManifest from "@/content/testimonials-manifest.json";
import type { TestimonialsManifest } from "@/types/middleman";

const manifest = rawManifest as unknown as TestimonialsManifest;
const totalCount = Array.isArray(manifest.items) ? manifest.items.length : (manifest.count || 0);

// Only the fields the client actually renders — trims ~250KB of unused data
// (amount, w, h, ts) from the serialized RSC payload.
const galleryItems = (manifest.items || []).map((item) => ({
  id: item.id,
  category: item.category,
  highValue: item.highValue,
  date: item.date,
  year: item.year,
  month: item.month,
  thumb: item.thumb,
  full: item.full,
}));

const title = "Middleman Testimonials & Transaction Proofs — Zaidaan Zalfaa";
const description = `Verified evidence and transaction screenshots from ${totalCount.toLocaleString()}+ completed middleman (escrow) services coordinated by Zaidaan Zalfaa.`;
const socialImageUrl = new URL("/middleman/opengraph-image", siteConfig.url).toString();

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteConfig.url}/middleman` },
  openGraph: {
    type: "website",
    title,
    description,
    url: `${siteConfig.url}/middleman`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [{ url: socialImageUrl, alt: "Middleman Testimonials Archive" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: socialImageUrl, alt: "Middleman Testimonials Archive" }],
  },
};

export default async function MiddlemanPage() {
  const approvedVouches = await fetchApprovedVouches();

  const middlemanStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Middleman Testimonials",
            item: `${siteConfig.url}/middleman`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/middleman#collection`,
        url: `${siteConfig.url}/middleman`,
        name: title,
        description,
        isPartOf: {
          "@type": "WebSite",
          url: `${siteConfig.url}/`,
          name: siteConfig.seo.title,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(middlemanStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div id="top" className="flex min-h-screen flex-col overflow-x-hidden bg-[#f8f9fa] text-[#000000]">
      <Header />

      <main data-route-page="middleman" tabIndex={-1} className="flex-grow pt-[120px] pb-48 px-[5vw]">
        {/* Editorial Heading & Metadata Rail */}
        <div className="grid grid-cols-12 gap-6 md:gap-[2rem] mb-16 border-b border-black pb-12">
          <div className="col-span-12 lg:col-span-8">
            <span
              data-archive-meta
              className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5c5f60] mb-4 block"
            >
              PROJECT / MIDDLEMAN ARCHIVE
            </span>
            <h1
              data-archive-heading
              className="font-['Montserrat'] text-[clamp(2.75rem,6.4vw,6rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] mb-6 break-words"
            >
              TRANSACTION<br />TESTIMONIALS.
            </h1>
            <p
              data-archive-desc
              className="font-['Inter'] text-[15px] md:text-[17px] text-[#2c2d2e] max-w-2xl leading-relaxed"
            >
              Every image in this archive is direct evidence from completed middleman (escrow) transactions coordinated by Zaidaan Zalfaa, covering Indonesian domestic services and international cross-border trades. Buyer–seller communications, payment proofs, and account handovers are thoroughly verified before release.
            </p>
          </div>

          <div
            data-archive-rail
            className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-3 lg:border-l lg:border-black lg:pl-8"
          >
            <div className="border border-black p-4 bg-white transition-all hover:bg-[#f2f2f3]">
              <span className="block font-['Inter'] text-[11px] font-semibold uppercase tracking-widest text-[#5c5f60]">
                TOTAL VERIFIED PROOFS
              </span>
              <span className="block font-['Montserrat'] text-[32px] font-black tracking-tight mt-1">
                {totalCount.toLocaleString()}
              </span>
            </div>
            <div className="border border-black p-3 bg-white text-[11px] font-['Inter'] font-semibold uppercase tracking-wider text-[#5c5f60]">
              PRIVACY COMPLIANT · SENSITIVE DATA REDACTED
            </div>
          </div>
        </div>

        {/* Community Vouches & Reviews Section */}
        <MiddlemanVouches initialVouches={approvedVouches} />

        {/* Gallery Interface */}
        <div data-archive-content>
          <MiddlemanGalleryClient items={galleryItems} totalCount={totalCount} />
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
