"use client";

import type { ProjectFilterType } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";

const CATEGORIES: ProjectFilterType[] = [
  "All",
  "Bots",
  "Websites",
  "Services",
  "Automation",
  "Community Systems",
];

interface ProjectFilterProps {
  activeCategory: ProjectFilterType;
  onCategoryChange: (category: ProjectFilterType) => void;
}

export function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <LiquidGlassSurface
      className="inline-flex max-w-full overflow-x-auto rounded-full p-1"
      intensity={0.08}
      cornerRadius={999}
    >
      <div className="flex items-center gap-1">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "focus-ring inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-colors",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-foreground/[0.04]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </LiquidGlassSurface>
  );
}