import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "archive";
  index?: number;
}

export function ProjectCard({ project, variant = "featured", index }: ProjectCardProps) {
  const displayedTechnologies = project.featuredTechnologies ?? project.technologies;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-glass-border bg-glass-base p-6 sm:p-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-2 text-sm font-medium text-muted">
            {project.category}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{project.title}</h3>
        </div>
        {variant === "featured" && index !== undefined && (
          <span className="text-sm font-semibold tabular-nums text-muted">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <p className="mb-8 max-w-xl flex-grow text-base leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-auto space-y-5 border-t border-glass-border pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-foreground/[0.06] px-3 py-1.5 text-xs font-semibold">
            {project.status}
          </span>
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center gap-1 rounded-md text-sm font-semibold"
            >
              {link.label} <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          ))}
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold text-muted">Role</p>
          <p className="text-sm font-medium">{project.role}</p>
        </div>

        {displayedTechnologies.length > 0 && (
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
        )}
      </div>
    </article>
  );
}