import { skillGroups } from "@/content/skills";

export function SkillsSection() {
  const orderedGroups = [...skillGroups].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="skills" className="w-full px-[5vw] py-14 lg:py-20 flex flex-col">
      <div className="w-full flex flex-col">
        <div className="border-b border-black pb-8 mb-16">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] block mb-4 uppercase tracking-widest">CHAPTER 04 / SKILLS</span>
          <h2 className="font-['Montserrat'] text-[48px] lg:text-[80px] font-black text-black uppercase leading-[1] tracking-[-0.02em]">SKILLS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-[2rem] items-start w-full">
          {orderedGroups.map((group, index) => (
            <div key={group.title} className="flex flex-col gap-6 min-w-0">
              <div className="border-b border-black pb-4">
                <h3 className="font-['Montserrat'] text-[24px] font-bold text-black uppercase tracking-wide">
                  <span className="text-[#5c5f60] font-light mr-2">{String(index + 1).padStart(2, "0")}</span>{group.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-4 mt-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="font-['Inter'] text-[18px] text-black border-b border-[#dadada] pb-4 flex items-start gap-3">
                    <span className="w-1 h-1 bg-black rotate-45 shrink-0 mt-[0.65em]" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
