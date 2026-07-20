import React from "react";
import type { Project } from "@/types";
import { GlassCard } from "./glass-card";

export function ProjectCard({ project }: { project: Project }) {
  const displayedTechnologies = project.cardTechnologies ?? project.technologies;

  return (
    <GlassCard
      className="h-full flex flex-col group hover:shadow-md transition-shadow"
      intensity={0.1}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4 gap-4">
          <div className="min-w-0">
            {project.category && (
              <div className="mb-1 text-xs font-medium text-foreground/60">
                {project.category}
              </div>
            )}
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <span className="text-xs px-2 py-1 bg-foreground/5 rounded-full border border-glass-border whitespace-nowrap">
            {project.status}
          </span>
        </div>

        <p className="text-foreground/70 text-sm mb-6 flex-grow">
          {project.shortDescription}
        </p>

        <div className="space-y-4 mt-auto">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1">Role</div>
            <div className="text-sm">{project.role}</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {displayedTechnologies.map(tech => (
              <span key={tech} className="text-xs px-2 py-1 bg-glass-highlight rounded-md border border-glass-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
