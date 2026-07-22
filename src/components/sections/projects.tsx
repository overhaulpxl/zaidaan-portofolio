import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = projects.filter(
    (project) => project.published && project.featured
  ).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="work" className="border-t border-glass-border py-20 sm:py-28">
      <span id="projects" aria-hidden="true" className="block h-0" />
      <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-end">
        <div>
          <p className="type-metadata mb-4 text-muted">SELECTED WORK</p>
          <SectionHeading className="mb-0">Projects & Ongoing Work</SectionHeading>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            A selection of platforms, services, and digital projects I develop, operate, and have completed.
          </p>
        </div>
        <div className="hidden lg:block lg:text-right">
           <Link href="/work" className="focus-ring inline-flex items-center gap-1 font-semibold hover:text-muted transition-colors">
              View All Work <ArrowUpRight className="size-4" aria-hidden="true" />
           </Link>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <div key={project.slug} className="h-full">
            <ProjectCard
              project={project}
              index={index + 1}
              variant="featured"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 lg:hidden">
        <Link href="/work" className="focus-ring inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:opacity-85">
            View All Work <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}