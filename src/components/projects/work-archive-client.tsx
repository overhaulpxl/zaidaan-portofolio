"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectFilter } from "@/components/projects/project-filter";
import type { Project, ProjectCategory } from "@/types/portfolio";

interface WorkArchiveClientProps {
  initialProjects: Project[];
}

export function WorkArchiveClient({ initialProjects }: WorkArchiveClientProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);
  }, [initialProjects, activeCategory]);

  const selectedWork = filteredProjects
    .filter((p) => p.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const earlierWork = filteredProjects
    .filter((p) => !p.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const hasNoResults = selectedWork.length === 0 && earlierWork.length === 0;

  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="mb-10 sm:mb-16">
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {hasNoResults && (
        <div className="rounded-2xl border border-glass-border py-16 text-center">
          <p className="text-muted">No published work matches this category yet.</p>
        </div>
      )}

      {selectedWork.length > 0 && (
        <section>
          <h2 className="mb-8 text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
            Selected Work
          </h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {selectedWork.map((project) => (
              <div key={project.slug} className="h-full">
                <ProjectCard project={project} variant="archive" />
              </div>
            ))}
          </div>
        </section>
      )}

      {earlierWork.length > 0 && (
        <section>
          <h2 className="mb-8 text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
            Earlier / Archived Work
          </h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {earlierWork.map((project) => (
              <div key={project.slug} className="h-full">
                <ProjectCard project={project} variant="archive" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}