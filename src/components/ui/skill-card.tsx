import React from "react";
import { Skill } from "@/types";
import { GlassCard } from "./glass-card";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <GlassCard
      className="p-5 group hover:-translate-y-1 transition-transform"
      intensity={0.05}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-semibold">{skill.name}</h4>
        </div>
        <p className="text-sm text-foreground/70 mb-4 flex-grow">
          {skill.evidence}
        </p>
        {skill.badge && (
          <div className="mt-auto">
            <span className="inline-block text-xs font-medium px-2 py-1 bg-foreground/5 border border-glass-border rounded-full">
              {skill.badge}
            </span>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
