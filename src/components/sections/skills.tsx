import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";

const groups = ["Core & Operations", "Technical Skills"] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-glass-border py-20 sm:py-28">
      <SectionHeading>Skills & Capabilities</SectionHeading>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-5">
        {groups.map((group) => (
          <div key={group}>
            <div className="mb-5 flex items-center justify-between border-b border-glass-border pb-4">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{group}</h3>
              <span className="text-sm tabular-nums text-muted">
                {String(skills.filter((skill) => skill.category === group).length).padStart(2, "0")}
              </span>
            </div>

            <div className="space-y-3">
              {skills.filter((skill) => skill.category === group).map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
