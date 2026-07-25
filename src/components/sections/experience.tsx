export function ExperienceSection() {
  const experiences = [
    {
      role: "Community Operations & Transactions",
      company: "WAY 2 ETERNAL COMMUNITY",
      date: "Nov 2025 — Present",
      description: "Managing community operations, user transactions, and technical support. Focus on maintaining reliable workflows for digital asset exchange and member coordination."
    },
    {
      role: "Independent Middleman / Escrow",
      company: "FREELANCE",
      date: "Aug 2023 — Present",
      description: "Facilitated over 500 successful digital transactions with strict adherence to operational security and transparent protocol execution."
    },
    {
      role: "Creative Team / Editor",
      company: "RIPPLE STUDIO",
      date: "Nov 2024 — Mar 2025",
      description: "Collaborated on creative direction and multimedia editing, delivering structured content pipelines."
    },
    {
      role: "Staff Administrasi",
      company: "MANDALAWANGI OUTBOUND",
      date: "Sep 2024 — Nov 2024",
      description: "Handled scheduling, data processing, and client coordination to ensure seamless outdoor activity operations."
    },
    {
      role: "Network Technician Trainee",
      company: "RTRW NET",
      date: "Feb 2022 — Jun 2022",
      description: "Supported local network infrastructure maintenance, including router configuration, cable management, and client troubleshooting."
    }
  ];

  return (
    <section id="experience" className="w-full px-[5vw] mb-24 lg:mb-48">
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16 border-b border-[#000000] pb-4">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest block mb-4">
            CHAPTER 02 / EXPERIENCE
          </span>
          <h2 className="font-['Montserrat'] text-[32px] md:text-[48px] font-bold text-[#000000] uppercase">
            EXPERIENCE
          </h2>
        </div>

        {/* Chronology List */}
        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="w-full border-b border-[#000000] py-6 lg:py-8 flex flex-col gap-1 group hover:bg-[#f3f3f4] transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline w-full mb-2 lg:mb-1">
                <h3 className="font-['Montserrat'] text-[20px] lg:text-[24px] font-bold text-[#000000] m-0 p-0 uppercase">
                  {exp.role}
                </h3>
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] md:text-right shrink-0 mt-1 md:mt-0 md:ml-4 tracking-widest uppercase">
                  {exp.date}
                </span>
              </div>
              <p className="font-['Inter'] text-[14px] font-bold text-[#000000] uppercase m-0 p-0 mb-3 tracking-wide">
                {exp.company}
              </p>
              <p className="font-['Inter'] text-[16px] text-[#5c5f60] m-0 p-0 max-w-4xl leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}