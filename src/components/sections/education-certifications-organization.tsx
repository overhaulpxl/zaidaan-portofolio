import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/content/certificates";
import { education } from "@/content/education";
import { organizations } from "@/content/organizations";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="certifications" className="border-t border-glass-border py-20 sm:py-28">
      <SectionHeading>Education, Certifications & Organization</SectionHeading>

      <div className="space-y-20">
        <section aria-labelledby="education-heading">
          <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-glass-border pb-4">
            <h3 id="education-heading" className="text-xl font-semibold tracking-[-0.02em]">Education</h3>
            <span className="text-sm text-muted">2020–2023</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <h4 className="text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-none tracking-[-0.035em]">{education.school}</h4>
              <p className="mt-4 text-lg text-muted">{education.major}</p>
              <p className="mt-2 text-sm text-muted">{education.qualification} · {education.location}</p>
            </div>
            <dl className="border-y border-glass-border py-4">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-muted">Academic GPA</dt>
                <dd className="text-xl font-semibold tabular-nums">{education.gpa}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-labelledby="certificates-heading">
          <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-glass-border pb-4">
            <h3 id="certificates-heading" className="text-xl font-semibold tracking-[-0.02em]">Certifications</h3>
            <span className="text-sm text-muted">03 records</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {certificates.map((certificate, index) => (
              <GlassCard
                key={certificate.title}
                className={index === 1 ? "lg:row-span-2" : undefined}
                intensity={0.08}
              >
                <article className="flex h-full flex-col p-6 sm:p-7">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</p>
                    <p className="text-sm text-muted">{certificate.issued}</p>
                  </div>
                  <h4 className="max-w-xl text-xl font-semibold tracking-[-0.02em] sm:text-2xl">{certificate.title}</h4>
                  <p className="mt-2 text-sm text-muted">{certificate.issuer}</p>

                  {(certificate.result || certificate.duration || certificate.activityScore) && (
                    <dl className="mt-6 grid gap-3 border-y border-glass-border py-4 text-sm">
                      {certificate.result && <div className="flex justify-between gap-4"><dt className="text-muted">Result</dt><dd className="font-semibold">{certificate.result}</dd></div>}
                      {certificate.duration && <div className="flex justify-between gap-4"><dt className="text-muted">Learning duration</dt><dd className="font-semibold">{certificate.duration}</dd></div>}
                      {certificate.activityScore && <div className="flex justify-between gap-4"><dt className="text-muted">Training Activity Score</dt><dd className="font-semibold tabular-nums">{certificate.activityScore}</dd></div>}
                    </dl>
                  )}

                  {certificate.competencies && (
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold">Competency coverage</p>
                      <ul className="grid gap-x-6 gap-y-2 text-sm leading-relaxed text-muted sm:grid-cols-2">
                        {certificate.competencies.map((competency) => (
                          <li key={competency} className="flex gap-2">
                            <span aria-hidden="true">—</span>
                            <span>{competency}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {certificate.certificateUrl && (
                    <a
                      className="focus-ring mt-7 inline-flex w-fit items-center gap-1 rounded-md text-sm font-semibold"
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${certificate.title} certificate (opens in a new tab)`}
                    >
                      View Certificate <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  )}
                </article>
              </GlassCard>
            ))}
          </div>
        </section>

        <section aria-labelledby="organizations-heading">
          <div className="mb-1 flex items-baseline justify-between gap-4 border-b border-glass-border pb-4">
            <h3 id="organizations-heading" className="text-xl font-semibold tracking-[-0.02em]">Organization Experience</h3>
            <span className="text-sm text-muted">02 roles</span>
          </div>

          <div className="divide-y divide-glass-border border-b border-glass-border">
            {organizations.map((organization) => (
              <article key={organization.name} className="grid gap-4 py-7 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
                <div>
                  <h4 className="text-lg font-semibold">{organization.name}</h4>
                  <p className="mt-1 text-sm text-muted">{organization.role}</p>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                  {organization.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3"><span aria-hidden="true">—</span><span>{responsibility}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
