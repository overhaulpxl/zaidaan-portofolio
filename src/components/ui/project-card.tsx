import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const displayedTechnologies = project.cardTechnologies ?? project.technologies;

  return (
    <GlassCard className={cn("group flex h-full flex-col", className)} intensity={0.1}>
      <article className="flex h-full flex-col p-6 sm:p-8">
        <div className="mb-10 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {project.category && <p className="mb-2 text-sm font-medium text-muted">{project.category}</p>}
            <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{project.title}</h3>
          </div>
          <span className="text-sm font-semibold tabular-nums text-muted">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <p className="mb-8 max-w-xl flex-grow text-base leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        <div className="mt-auto space-y-5 border-t border-glass-border pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-foreground/[0.06] px-3 py-1.5 text-xs font-semibold">
              {project.status}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center gap-1 rounded-md text-sm font-semibold"
              >
                Visit Website <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            )}
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-muted">Role</p>
            <p className="text-sm font-medium">{project.role}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {displayedTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-glass-border px-2.5 py-1 text-xs font-medium text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </GlassCard>
  );
}
