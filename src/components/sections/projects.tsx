import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

const cardSpans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-glass-border py-20 sm:py-28">
      <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-end">
        <SectionHeading className="mb-0">Projects & Ongoing Work</SectionHeading>
        <p className="max-w-xl text-base leading-relaxed text-muted lg:pb-1">
          A selection of platforms, services, and digital projects I develop, operate, and have completed.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index + 1}
            className={cardSpans[index]}
          />
        ))}
      </div>
    </section>
  );
}
