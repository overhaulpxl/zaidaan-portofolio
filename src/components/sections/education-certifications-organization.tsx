import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/content/certificates";
import { education } from "@/content/education";
import { organizations } from "@/content/organizations";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  const sortedCertifications = [...certificates]
    .filter((c) => c.published)
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const sortedEducation = [...education].sort((a, b) => a.sortOrder - b.sortOrder);
  const sortedOrganizations = [...organizations].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <>
      <section id="education" className="border-t border-glass-border pt-20 sm:pt-28">
        <SectionHeading className="sr-only">Education & Credentials</SectionHeading>

        <div className="space-y-20 pb-20 sm:pb-28">
          <section aria-labelledby="education-heading">
            <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-glass-border pb-4">
              <h2 id="education-heading" className="text-xl font-semibold tracking-[-0.02em]">Education</h2>
            </div>

            <div className="divide-y divide-glass-border border-b border-glass-border">
              {sortedEducation.map((record) => (
                <article
                  key={record.institution}
                  className="grid gap-6 py-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end"
                >
                  <div>
                    <h3 className="text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-none tracking-[-0.035em] text-foreground">
                      {record.institution}
                    </h3>
                    <p className="mt-4 text-lg text-foreground">{record.program}</p>
                    <p className="mt-2 text-sm font-medium text-muted">
                      <time>{record.startYear}</time>{record.endYear ? `–` : ""}<time>{record.endYear}</time>
                    </p>
                    {record.description && (
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                        {record.description}
                      </p>
                    )}
                  </div>

                  {record.gradeLabel && record.gradeValue && (
                    <dl className="border-y border-glass-border py-4">
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-sm font-medium text-muted">{record.gradeLabel}</dt>
                        <dd className="text-xl font-semibold tabular-nums text-foreground">{record.gradeValue}</dd>
                      </div>
                    </dl>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" aria-labelledby="certifications-heading">
            <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-glass-border pb-4">
              <h2 id="certifications-heading" className="text-xl font-semibold tracking-[-0.02em]">Certifications</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {sortedCertifications.map((cert) => (
                <article
                  key={cert.title}
                  className="flex flex-col rounded-2xl border border-glass-border bg-surface p-6 shadow-soft sm:p-8"
                >
                  <h3 className="mb-1 text-lg font-semibold tracking-[-0.015em] text-foreground leading-snug">
                    {cert.title}
                  </h3>

                  {cert.issuer && (
                    <p className="mb-6 text-sm text-muted">{cert.issuer}</p>
                  )}

                  <dl className="mt-auto grid gap-3 border-t border-glass-border pt-5 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Issued</dt>
                      <dd className="font-medium text-foreground">{cert.issuedLabel}</dd>
                    </div>

                    {cert.level && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted">Level</dt>
                        <dd className="font-medium text-foreground">{cert.level}</dd>
                      </div>
                    )}

                    {cert.duration && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted">Duration</dt>
                        <dd className="font-medium text-foreground">{cert.duration}</dd>
                      </div>
                    )}

                    {cert.scoreLabel && cert.scoreValue && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted">{cert.scoreLabel}</dt>
                        <dd className="font-medium tabular-nums text-foreground">{cert.scoreValue}</dd>
                      </div>
                    )}
                  </dl>

                  {cert.documentUrl && (
                    <div className="mt-6 border-t border-glass-border pt-5">
                      <a
                        className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-muted transition-colors"
                        href={cert.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View Certificate: ${cert.title} (opens in a new tab)`}
                      >
                        View Certificate <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="organizations" aria-labelledby="organizations-heading">
            <div className="mb-2 flex items-baseline justify-between gap-4 border-b border-glass-border pb-4">
              <h2 id="organizations-heading" className="text-xl font-semibold tracking-[-0.02em]">Organizations</h2>
            </div>

            <div className="divide-y divide-glass-border border-b border-glass-border">
              {sortedOrganizations.map((org) => (
                <article key={org.name} className="py-6 sm:py-8">
                  <h3 className="text-lg font-semibold text-foreground">{org.name}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{org.role}</p>
                  {org.description && (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                      {org.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}