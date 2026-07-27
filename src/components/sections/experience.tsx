import { experiences } from "@/content/experience";

export function ExperienceSection() {
  const orderedExperiences = [...experiences].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="experience" className="w-full px-[5vw] py-14 lg:py-20">
      <div className="grid min-w-0 max-w-full grid-cols-12 gap-[2rem] w-full">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 border-b border-black pb-8 mb-8 lg:mb-12">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest block mb-4">CHAPTER 02 / EXPERIENCE</span>
          <h2 className="font-['Montserrat'] text-[42px] sm:text-[48px] md:text-[80px] font-black text-black uppercase tracking-[-0.02em] leading-[1]">EXPERIENCE</h2>
        </div>

        <div className="col-span-12 min-w-0 max-w-full flex flex-col border-t border-black">
          {orderedExperiences.map((experience) => (
            <article key={`${experience.company}-${experience.startDate}`} className="grid min-w-0 max-w-full grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-[2rem] py-10 lg:py-14 border-b border-black group hover:bg-[#f3f3f4] transition-colors duration-300">
              <div className="w-full min-w-0 max-w-[90vw] lg:max-w-none lg:col-span-9 lg:pl-[8.333vw]">
                <h3 className="font-['Montserrat'] text-[26px] lg:text-[36px] font-black text-black uppercase tracking-[-0.02em] leading-tight mb-3">{experience.role}</h3>
                <p className="font-['Inter'] text-[14px] font-bold text-black uppercase tracking-widest mb-1">{experience.company}</p>
                {experience.arrangement ? <p className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-wide mb-6">{experience.arrangement}</p> : <div className="mb-6" />}
                <ul className="max-w-full font-['Inter'] text-[16px] text-[#5c5f60] lg:max-w-3xl leading-relaxed space-y-3 list-none p-0 m-0">
                  {experience.responsibilities.map((responsibility) => <li key={responsibility} className="max-w-full break-words">{responsibility}</li>)}
                </ul>
              </div>
              <div className="lg:col-span-3 lg:text-right lg:pr-[2vw] lg:pt-2">
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">{experience.startDate} — {experience.endDate}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
