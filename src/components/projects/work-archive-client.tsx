"use client";

import { useState } from "react";
import { type Project } from "@/types/portfolio";

interface WorkArchiveClientProps {
  initialProjects: Project[];
}

const CATEGORIES = [
  "ALL",
  "BOTS",
  "WEBSITES",
  "SERVICES",
  "AUTOMATION",
  "COMMUNITY SYSTEMS"
] as const;

export function WorkArchiveClient({ initialProjects }: WorkArchiveClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredProjects = activeCategory === "ALL" 
    ? initialProjects 
    : initialProjects.filter(p => p.category.toUpperCase() === activeCategory);

  return (
    <>
      {/* Filters */}
      <div className="grid grid-cols-12 gap-[2rem] mb-16 border-b border-[#dadada] pb-4">
        <div className="col-span-12 flex overflow-x-auto gap-x-6 gap-y-4 pb-2 -mx-[5vw] px-[5vw] md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-6 min-w-max">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-['Inter'] text-[14px] font-semibold uppercase whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "text-[#000000] border-b-2 border-[#000000] pb-1"
                    : "text-[#5c5f60] hover:text-[#000000]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Archive Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => {
          const numberStr = String(index + 1).padStart(3, '0');
          
          return (
            <div 
              key={project.slug}
              className="border border-[#dadada] p-8 hover:bg-[#e8e8e8] transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">
                    {project.category} / {project.year}
                  </span>
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest">{numberStr}</span>
                </div>
                
                <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase mb-2">
                  {project.title}
                </h3>
                <p className="font-['Inter'] text-[16px] text-[#4c4546] mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-[#dadada] pt-4 flex justify-between items-end mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">
                    {project.technologies.slice(0, 3).join(" • ")}
                  </span>
                </div>
                
                {project.links && project.links.length > 0 && (
                  <a 
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Inter'] text-[14px] font-semibold text-[#000000] uppercase hover:opacity-70 transition-opacity flex items-center gap-1 group/link"
                  >
                    VIEW
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}