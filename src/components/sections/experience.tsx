import { experiences } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-glass-border py-20 sm:py-28">
      <SectionHeading>Work Experience</SectionHeading>

      <ol className="border-b border-glass-border">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.period}`} className="grid gap-5 border-t border-glass-border py-8 lg:grid-cols-[3rem_15rem_minmax(0,1fr)] lg:gap-8 lg:py-10">
            <span className="text-sm font-semibold tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</span>

            <div>
              <p className="text-sm font-semibold text-muted">{experience.period}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em]">{experience.company}</h3>
              <p className="mt-1 text-sm text-muted">{experience.role}</p>
              {experience.employment && <p className="mt-3 text-xs font-semibold text-muted">{experience.employment}</p>}
            </div>

            <div>
              <p className="mb-5 text-sm font-medium text-muted">{experience.context}</p>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="grid grid-cols-[0.65rem_minmax(0,1fr)] gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span aria-hidden="true" className="mt-[0.65rem] size-1 rounded-full bg-foreground/45" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
