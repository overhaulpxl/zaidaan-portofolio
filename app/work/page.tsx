import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WorkArchiveClient } from "@/components/projects/work-archive-client";
import { fetchProjects } from "@/lib/supabase/data";
import { siteConfig } from "@/content/site";

const description = "Selected digital products, Discord bots, websites, automation projects, community systems, and transaction services by Zaidaan Zalfaa.";
const socialImageUrl = new URL("/opengraph-image", siteConfig.url).toString();

export const metadata: Metadata = {
  title: { absolute: "Project Archive — Zaidaan Zalfaa" },
  description,
  alternates: { canonical: `${siteConfig.url}/work` },
  openGraph: {
    type: "website",
    title: "Project Archive — Zaidaan Zalfaa",
    description,
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [{ url: socialImageUrl, alt: `${siteConfig.name} project archive` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive — Zaidaan Zalfaa",
    description,
    images: [{ url: socialImageUrl, alt: `${siteConfig.name} project archive` }],
  },
};

export default async function WorkPage() {
  const allProjects = await fetchProjects();

  return (
    <>
      <div id="top" className="flex min-h-screen flex-col overflow-x-hidden bg-[#f8f9fa] text-[#000000]">
        <Header />
        
        <main data-route-page="work" tabIndex={-1} className="flex-grow pt-[120px] pb-48 px-[5vw]">
          {/* Chapter Header */}
          <div data-archive-heading className="grid grid-cols-12 gap-[2rem] mb-24">
            <div className="col-span-12 md:col-span-8 md:col-start-2">
              <h1 className="font-['Montserrat'] text-[48px] md:text-[80px] font-black uppercase leading-[1.05] tracking-[-0.02em]">
                Project<br />Archive.
              </h1>
            </div>
          </div>

          <div data-archive-content><WorkArchiveClient initialProjects={allProjects} /></div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}