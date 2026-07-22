import { GlassNavbar } from "@/components/layout/glass-navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { projects } from "@/content/projects";
import { WorkArchiveClient } from "@/components/projects/work-archive-client";

export const metadata = {
  title: {
    absolute: "Work — Zaidaan Zalfaa",
  },
  description: "Selected and earlier work by Zaidaan Zalfaa across bots, websites, services, automation, and community systems.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work — Zaidaan Zalfaa",
    description: "Selected and earlier work by Zaidaan Zalfaa across bots, websites, services, automation, and community systems.",
    url: "https://zaidaan.my.id/work",
  },
};

export default function WorkPage() {
  const publishedProjects = projects.filter((p) => p.published);

  return (
    <div id="top" className="flex min-h-full flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <GlassNavbar />
      <main id="main-content" className="w-full flex-1 pt-32 pb-20 sm:pt-40" tabIndex={-1}>
        <Container>
          <header className="mb-12 max-w-3xl sm:mb-20">
            <p className="type-metadata mb-4 text-muted">WORK ARCHIVE</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Selected Work and Earlier Projects
            </h1>
            <p className="mt-6 text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-relaxed text-muted sm:mt-8">
              A collection of bots, websites, services, automation, and community systems I have built, maintained, or operated.
            </p>
          </header>

          <WorkArchiveClient initialProjects={publishedProjects} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}