import React from "react";
import { Skill } from "@/types";
import { GlassCard } from "./glass-card";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <GlassCard
      className="group"
      intensity={0.07}
    >
      <article className="flex h-full flex-col p-5 sm:p-6">
        <h4 className="mb-3 text-lg font-semibold tracking-[-0.015em]">{skill.name}</h4>
        <p className="mb-5 flex-grow text-sm leading-relaxed text-muted">
          {skill.evidence}
        </p>
        {skill.badge && (
          <div className="mt-auto">
            <span className="inline-block rounded-full bg-foreground/[0.06] px-2.5 py-1 text-xs font-semibold text-muted">
              {skill.badge}
            </span>
          </div>
        )}
      </article>
    </GlassCard>
  );
}
