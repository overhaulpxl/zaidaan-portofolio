import { experiences } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  const sortedExperiences = [...experiences].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="experience" className="border-t border-glass-border py-20 sm:py-28">
      <SectionHeading className="mb-10 sm:mb-12">Work Experience</SectionHeading>

      <ol className="border-b border-glass-border">
        {sortedExperiences.map((experience) => {
          const isPresent = experience.endDate === "Present";

          return (
            <li
              key={`${experience.company}-${experience.startDate}`}
              className="grid gap-6 border-t border-glass-border py-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12 lg:py-12"
            >
              <div>
                <p className="text-sm font-semibold text-muted">
                  {experience.startDate} –{" "}
                  {isPresent ? (
                    <span className="text-success">{experience.endDate}</span>
                  ) : (
                    experience.endDate
                  )}
                </p>
                {experience.arrangement && (
                  <p className="mt-2 text-xs font-semibold text-muted">
                    {experience.arrangement}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                  {experience.company}
                </h3>
                <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {experience.role}
                </p>

                <ul className="mt-6 space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="grid grid-cols-[0.65rem_minmax(0,1fr)] gap-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] size-1.5 rounded-full bg-foreground/30"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}