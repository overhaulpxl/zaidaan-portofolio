import { fetchProjects } from "@/lib/supabase/data";
import { TransitionLink } from "@/components/navigation/transition-link";

export async function ProjectsSection() {
  const allProjects = await fetchProjects();
  const featuredProjects = allProjects
    .filter((project) => project.published && project.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="selected-work" className="w-full scroll-mt-24 py-14 lg:scroll-mt-28 lg:py-20 relative">
      <div className="px-[5vw] mb-12 relative">
        <span id="projects" className="absolute -top-28 pointer-events-none" aria-hidden="true" />
        <div className="grid grid-cols-12 gap-6 md:gap-[2rem] items-end">
          <div className="col-span-12 md:col-span-9">
            <p data-scene-role="work-cue" className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase mb-4 tracking-widest">CHAPTER 03 / SELECTED WORK</p>
            <h2 data-scene-role="work-title" className="font-['Montserrat'] text-[48px] md:text-[80px] font-black text-black uppercase leading-[1] tracking-[-0.02em]">SELECTED WORK</h2>
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end mt-8 md:mt-0">
            <TransitionLink data-scene-role="work-link" href="/work" className="group inline-flex min-h-11 items-center gap-2 py-2 font-['Inter'] text-[12px] font-bold text-black uppercase tracking-widest hover:opacity-70 transition-opacity">
              VIEW ALL WORK
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </TransitionLink>
          </div>
        </div>
      </div>

      <div className="px-[5vw]">
        <div data-scene-role="work-grid" className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-black">
          {featuredProjects.map((project, index) => (
            <article key={project.slug} data-scene-role="work-cell" className="p-8 border-r border-b border-black flex flex-col justify-between min-h-[400px] hover:bg-[#f3f3f4] transition-all duration-300 group/card">
              <div>
                <div className="flex items-start justify-between gap-6 mb-4">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest shrink-0">{String(index + 1).padStart(3, "0")}</span>
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest text-right">{project.category}</span>
                </div>
                <h3 className="font-['Montserrat'] text-[32px] md:text-[40px] font-black text-black uppercase mb-6 tracking-[-0.02em] leading-tight transition-transform duration-200 group-hover/card:translate-x-1">{project.title}</h3>
                <p className="font-['Inter'] text-[16px] text-[#4c4546] leading-relaxed mb-8 max-w-md">{project.description}</p>
              </div>

              <div>
                <div className="w-full h-px bg-black opacity-20 mb-4" />
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  <span className="font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">STATUS: {project.status}</span>
                  <span className="font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">ROLE: {project.role}</span>
                  <span className="font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">TECH: {(project.featuredTechnologies ?? project.technologies).join(" · ")}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {project.links?.map((link) => {
                    const isInternal = link.href.startsWith("/") && !link.href.startsWith("//");
                    if (isInternal) {
                      return (
                        <TransitionLink
                          key={link.href}
                          href={link.href}
                          className="font-['Inter'] text-[12px] font-bold text-black uppercase flex items-center gap-1.5 hover:opacity-70 transition-all group/link w-max"
                        >
                          <span>{link.label}</span>
                          <svg className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </TransitionLink>
                      );
                    }
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Inter'] text-[12px] font-bold text-black uppercase flex items-center gap-1.5 hover:opacity-70 transition-all group/link w-max"
                      >
                        <span>{link.label}</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
