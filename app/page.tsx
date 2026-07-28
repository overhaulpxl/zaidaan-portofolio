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

import { ChapterMotion } from "@/components/motion/chapter-motion";
import { ChapterIndicator } from "@/components/navigation/chapter-indicator";

export default function Home() {
  return (
    <>
      <StructuredData />
      <ChapterMotion />
      <ChapterIndicator />
      <div id="top" data-site-shell className="flex min-h-full flex-col bg-[#f8f9fa] text-[#1b1b1b]">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main-content" data-route-page="home" className="w-full flex-1 overflow-x-hidden" tabIndex={-1}>
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