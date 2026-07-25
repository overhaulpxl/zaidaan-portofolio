export function ProjectsSection() {
  const projects = [
    {
      id: "01",
      category: "DISCORD BOT",
      title: "NORDEN",
      description: "A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.",
      status: "In Development",
      role: "Product Development",
      tech: "Python · discord.py",
      link: "https://github.com/overhaulpxl/Norden-Discord-Bot",
      linkText: "VIEW REPOSITORY"
    },
    {
      id: "02",
      category: "AI RPG BOT",
      title: "WAY 2 ETERNAL",
      description: "An AI-powered RPG and economy bot leveraging modern language models to transform text channels into dynamic storytelling environments.",
      status: "Live",
      role: "Bot Development",
      tech: "Python · Gemini API",
      link: "https://github.com/overhaulpxl/W2E-Rpg-Bot",
      linkText: "VIEW REPOSITORY"
    },
    {
      id: "03",
      category: "SERVICE OPS",
      title: "MIDDLEMAN",
      description: "A rigorous service operation facilitating over 500 successful transactions with clear protocols for escrow and dispute resolution.",
      status: "Completed",
      role: "Operations Lead",
      tech: "Discord · Spreadsheets",
      link: "https://www.instagram.com/zaidaanzalfaa/",
      linkText: "OPEN INSTAGRAM"
    },
    {
      id: "04",
      category: "WEB PLATFORM",
      title: "MANDALAWANGI",
      description: "A comprehensive digital presence for an outdoor expedition company, serving as a central hub for booking and experiential marketing.",
      status: "Live",
      role: "Web Development",
      tech: "Next.js · Tailwind CSS",
      link: "https://mandalawangioutbound.com",
      linkText: "VISIT WEBSITE"
    }
  ];

  return (
    <section id="work" className="w-full mb-24 lg:mb-48">
      {/* Chapter Header */}
      <div className="px-[5vw] mb-12">
        <div className="grid grid-cols-12 gap-[2rem]">
          <div className="col-span-12 md:col-span-10">
            <p className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase mb-4 tracking-widest">CHAPTER 03 /</p>
            <h2 className="font-['Montserrat'] text-[48px] md:text-[80px] font-black text-[#000000] uppercase leading-[1] tracking-[-0.02em]">
              SELECTED WORK
            </h2>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-[#000000]">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="p-8 border-r border-b border-[#000000] flex flex-col justify-between min-h-[400px] hover:bg-[#f3f3f4] transition-colors"
            >
              <div>
                <p className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase mb-4 tracking-widest">
                  {project.id} / {project.category}
                </p>
                <h3 className="font-['Montserrat'] text-[32px] font-bold text-[#000000] uppercase mb-6 tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="font-['Inter'] text-[16px] text-[#4c4546] leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>
              </div>
              
              <div>
                <div className="w-full h-[1px] bg-[#000000] opacity-20 mb-4"></div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  <span className="font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">
                    STATUS: {project.status}
                  </span>
                  <span className="font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">
                    ROLE: {project.role}
                  </span>
                  <span className="font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">
                    TECH: {project.tech}
                  </span>
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-[12px] font-bold text-[#000000] uppercase flex items-center gap-1 hover:opacity-70 transition-opacity group w-max"
                >
                  {project.linkText} 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}