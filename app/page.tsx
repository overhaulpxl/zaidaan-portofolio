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

export default function Home() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1 w-full pb-24">
        <Container>
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
