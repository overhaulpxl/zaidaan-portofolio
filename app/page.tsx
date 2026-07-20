import { GlassNavbar } from "@/components/layout/glass-navbar";
import { Container } from "@/components/ui/container";
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

export default function Home() {
  return (
    <>
      <StructuredData />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <GlassNavbar />
      <main id="main-content" className="w-full flex-1 overflow-x-clip pb-20" tabIndex={-1}>
        <Container className="relative">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ToolsSection />
          <EducationSection />
          <ContactSection />
        </Container>
      </main>
      <Footer />
    </>
  );
}
