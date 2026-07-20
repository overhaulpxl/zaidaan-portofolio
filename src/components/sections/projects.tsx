import React from "react";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-glass-border">
      <SectionHeading className="mb-4">Projects & Ongoing Work</SectionHeading>
      <p className="text-lg text-foreground/60 mb-12 max-w-2xl">
        A selection of platforms, services, and digital projects I develop, operate, and have completed.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
