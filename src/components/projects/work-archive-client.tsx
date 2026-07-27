"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectFilterType } from "@/types/portfolio";

interface WorkArchiveClientProps {
  initialProjects: Project[];
}

const CATEGORIES: readonly ProjectFilterType[] = [
  "All",
  "Bots",
  "Websites",
  "Services",
  "Automation",
  "Community Systems",
];

export function WorkArchiveClient({ initialProjects }: WorkArchiveClientProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectFilterType>("All");

  const filteredProjects = useMemo(
    () => activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((project) => project.filters?.includes(activeCategory)),
    [activeCategory, initialProjects],
  );

  return (
    <>
      <div className="grid grid-cols-12 gap-[2rem] mb-16 border-b border-[#dadada] pb-4">
        <div className="col-span-12 flex overflow-x-auto whitespace-nowrap gap-x-6 gap-y-4 pb-2 -mx-[5vw] px-[5vw] md:mx-0 md:px-0 no-scrollbar">
          <div className="flex gap-6 min-w-max">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`font-['Inter'] text-[14px] font-semibold uppercase whitespace-nowrap transition-colors ${activeCategory === category ? "text-black border-b-2 border-black pb-1" : "text-[#5c5f60] hover:text-black"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <article key={project.slug} className="border border-[#dadada] p-8 hover:bg-[#e8e8e8] transition-colors group flex flex-col justify-between min-w-0">
            <div>
              <div className="flex justify-between items-start gap-6 mb-8">
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest shrink-0">{String(index + 1).padStart(3, "0")}</span>
                <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest text-right">{project.category}</span>
              </div>
              <h2 className="font-['Montserrat'] text-[24px] font-bold text-black uppercase mb-2">{project.title}</h2>
              <p className="font-['Inter'] text-[16px] text-[#4c4546] mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-col gap-2 mb-8 font-['Inter'] text-[11px] font-bold text-[#5c5f60] uppercase tracking-wider">
                <span>Status: {project.status}</span>
                <span>Role: {project.role}</span>
              </div>
            </div>

            <div className="border-t border-[#dadada] pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mt-auto">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">{project.technologies.join(" • ")}</span>
              {project.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-[14px] font-semibold text-black uppercase hover:opacity-70 transition-opacity flex items-center gap-1 group/link shrink-0">
                  {link.label}
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
