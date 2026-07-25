import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ToolsSection } from "@/components/sections/tools";
import { EducationSection } from "@/components/sections/education-certifications-organization";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { CriticalReadinessLoader } from "@/components/layout/critical-readiness-loader";

export default function Home() {
  return (
    <>
      <StructuredData />
      <CriticalReadinessLoader />
      <div id="top" className="flex min-h-full flex-col bg-[#f8f9fa] text-[#1b1b1b]">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="w-full flex-1 overflow-x-hidden pt-32 pb-20" tabIndex={-1}>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ToolsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}