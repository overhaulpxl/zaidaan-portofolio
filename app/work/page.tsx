import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WorkArchiveClient } from "@/components/projects/work-archive-client";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

const description = "Selected digital products, Discord bots, websites, automation projects, community systems, and transaction services by Zaidaan Zalfaa.";
const socialImageUrl = new URL("/opengraph-image", siteConfig.url).toString();

export const metadata: Metadata = {
  title: { absolute: "Project Archive" },
  description,
  alternates: { canonical: `${siteConfig.url}/work` },
  openGraph: {
    type: "website",
    title: "Project Archive",
    description,
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [{ url: socialImageUrl, alt: `${siteConfig.name} project archive` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Archive",
    description,
    images: [{ url: socialImageUrl, alt: `${siteConfig.name} project archive` }],
  },
};

export default function WorkPage() {
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

          <div data-archive-content><WorkArchiveClient initialProjects={projects} /></div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}