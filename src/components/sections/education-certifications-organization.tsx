import { fetchCertificates } from "@/lib/supabase/data";
import { education } from "@/content/education";
import { organizations } from "@/content/organizations";

function ExternalArrow() {
  return (
    <svg className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export async function EducationSection() {
  const dynamicCertificates = await fetchCertificates();
  const orderedEducation = [...education].sort((a, b) => a.sortOrder - b.sortOrder);
  const publishedCertificates = dynamicCertificates.filter((certificate) => certificate.published).sort((a, b) => a.sortOrder - b.sortOrder);
  const orderedOrganizations = [...organizations].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="w-full px-[5vw] flex-grow">
      <section id="education" className="py-14 lg:py-20">
        <div className="grid min-w-0 max-w-full grid-cols-12 gap-6 md:gap-[2rem] w-full">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 mb-8 lg:mb-12">
            <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] tracking-widest block mb-4">CHAPTER 06 / EDUCATION</span>
            <h2 className="font-['Montserrat'] text-[48px] md:text-[72px] font-black text-black uppercase leading-none tracking-[-0.02em] mb-8">Education</h2>
            <div className="w-full h-px bg-black" />
          </div>

          <div className="col-span-12 min-w-0 max-w-full flex flex-col border-t border-black">
            {orderedEducation.map((item) => (
              <article key={item.institution} className="grid min-w-0 max-w-full grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-[2rem] py-10 lg:py-14 border-b border-black">
                <div className="w-full min-w-0 max-w-[90vw] lg:max-w-none lg:col-span-9 lg:pl-[8.333vw]">
                  <h3 className="font-['Montserrat'] text-[26px] md:text-[34px] font-black text-black tracking-tight leading-tight mb-3">{item.institution}</h3>
                  <p className="max-w-full break-words font-['Inter'] text-[14px] font-bold uppercase text-[#5c5f60] mb-5 tracking-widest">{item.program}</p>
                  {item.description ? <p className="max-w-full break-words font-['Inter'] text-[16px] text-[#4c4546] lg:max-w-3xl leading-relaxed">{item.description}</p> : null}
                  {item.gradeLabel && item.gradeValue ? <p className="font-['Inter'] text-[16px] text-[#4c4546] max-w-3xl leading-relaxed">{item.gradeLabel} {item.gradeValue}</p> : null}
                </div>
                <div className="lg:col-span-3 lg:text-right lg:pr-[2vw] lg:pt-2">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">{item.startYear}{item.endYear ? ` — ${item.endYear}` : ""}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="pt-14 pb-0 lg:pt-20 lg:pb-0 relative">
        <div className="mb-12 lg:mb-20 relative">
          <span id="certifications" className="absolute -top-28 pointer-events-none" aria-hidden="true" />
          <span className="font-['Inter'] text-[12px] font-semibold uppercase text-[#5c5f60] tracking-widest block mb-4">CHAPTER 07 / CREDENTIALS &amp; INVOLVEMENT</span>
          <h2 className="max-w-full font-['Montserrat'] text-[36px] min-[360px]:text-[40px] md:text-[64px] font-black text-black uppercase leading-none tracking-[-0.02em] mb-8">Credentials &amp; Involvement</h2>
          <div className="w-full h-px bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 lg:gap-16 items-start">
          <div className="order-1 md:col-span-8 min-w-0">
            <h3 className="font-['Montserrat'] text-[24px] md:text-[28px] font-bold text-black mb-4 border-b border-black pb-5 uppercase tracking-wide">Certifications</h3>
            <ol className="flex flex-col list-none p-0 m-0">
              {publishedCertificates.map((certificate, index) => (
                <li key={certificate.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 py-9 lg:py-11 border-b border-[#d5d5d5]">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] opacity-60 pt-1">{String(index + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <h4 className="font-['Montserrat'] text-[19px] md:text-[24px] font-bold uppercase text-black leading-tight tracking-[-0.01em] mb-3">{certificate.title}</h4>
                    {certificate.issuer ? <p className="font-['Inter'] text-[14px] font-semibold text-[#4c4546] mb-3">{certificate.issuer}</p> : null}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 font-['Inter'] text-[12px] font-semibold uppercase tracking-wider text-[#5c5f60]">
                      <span>Issued {certificate.issuedLabel}</span>
                      {certificate.level ? <span>Level {certificate.level}</span> : null}
                      {certificate.duration ? <span>Duration {certificate.duration}</span> : null}
                      {certificate.scoreLabel && certificate.scoreValue ? <span>{certificate.scoreLabel} {certificate.scoreValue}</span> : null}
                    </div>
                    {certificate.documentUrl ? (
                      <a href={certificate.documentUrl} target="_blank" rel="noopener noreferrer" className="group/link font-['Inter'] text-[12px] font-bold text-black uppercase mt-4 inline-flex items-center gap-1.5 w-max hover:opacity-65 transition-opacity">
                        View Certificate <ExternalArrow />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="order-2 md:col-span-4 md:border-l md:border-[#d5d5d5] md:pl-8 lg:pl-10 min-w-0">
            <h3 className="font-['Montserrat'] text-[20px] font-bold text-black mb-4 border-b border-[#d5d5d5] pb-5 uppercase tracking-wide">Organizations</h3>
            <ol className="flex flex-col list-none p-0 m-0">
              {orderedOrganizations.map((organization, index) => (
                <li key={organization.name} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-6 border-b border-[#e2e2e2]">
                  <span className="font-['Inter'] text-[11px] font-semibold text-[#5c5f60] opacity-50 pt-0.5">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-['Inter'] text-[13px] font-bold uppercase text-black tracking-widest leading-snug mb-1.5">{organization.name}</h4>
                    <p className="font-['Inter'] text-[14px] text-[#5c5f60]">{organization.role}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </div>
  );
}
