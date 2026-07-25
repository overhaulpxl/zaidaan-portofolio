import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { WorkArchiveClient } from "@/components/projects/work-archive-client";
import { projects } from "@/content/projects";

export default function WorkPage() {
  return (
    <>
      <StructuredData />
      <div id="top" className="flex min-h-screen flex-col bg-[#f8f9fa] text-[#000000]">
        <Header />
        
        <main className="flex-grow pt-[120px] pb-48 px-[5vw]">
          {/* Chapter Header */}
          <div className="grid grid-cols-12 gap-[2rem] mb-24">
            <div className="col-span-12 md:col-span-8 md:col-start-2">
              <h1 className="font-['Montserrat'] text-[48px] md:text-[80px] font-black uppercase leading-[1.05] tracking-[-0.02em]">
                Project<br />Archive.
              </h1>
            </div>
          </div>

          <WorkArchiveClient initialProjects={projects} />
        </main>
        
        <Footer />
      </div>
    </>
  );
}