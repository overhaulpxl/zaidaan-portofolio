import { skillGroups } from "@/content/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";

export function SkillsSection() {
  const sortedGroups = [...skillGroups].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="skills" className="border-t border-glass-border py-20 sm:py-28">
      <div className="mb-12 max-w-3xl sm:mb-16">
        <SectionHeading className="mb-6">Skills & Capabilities</SectionHeading>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          A practical mix of customer-facing operations, technical problem-solving, and modern development workflows.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        {sortedGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-6 border-b border-glass-border pb-4">
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
                {group.title}
              </h3>
            </div>

            <div className="space-y-3">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}