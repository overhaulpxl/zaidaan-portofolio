import React from "react";
import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-glass-border">
      <SectionHeading>Skills & Capabilities</SectionHeading>

      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Core & Operations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.filter(s => s.category === "Core & Operations").map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.filter(s => s.category === "Technical Skills").map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
