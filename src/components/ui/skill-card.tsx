import React from "react";
import { SkillItem } from "@/types/portfolio";

export function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-glass-border bg-surface shadow-soft p-4 sm:p-5">
      <h4 className="text-[0.9375rem] font-semibold tracking-[-0.015em] text-foreground">{skill.name}</h4>
    </article>
  );
}
