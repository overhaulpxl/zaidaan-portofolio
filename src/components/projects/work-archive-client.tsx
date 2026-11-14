"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project, ProjectFilterType } from "@/types/portfolio";
import { TransitionLink } from "@/components/navigation/transition-link";

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
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(
    () => activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((project) => project.filters?.includes(activeCategory)),
    [activeCategory, initialProjects],
  );

  return (
    <>
      <div className="grid grid-cols-12 gap-6 md:gap-[2rem] mb-16 border-b border-[#dadada] pb-4">
        <div className="col-span-12 flex overflow-x-auto whitespace-nowrap gap-x-6 gap-y-4 pb-2 -mx-[5vw] px-[5vw] md:mx-0 md:px-0 no-scrollbar">
          <div className="flex gap-6 min-w-max">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`relative font-['Inter'] text-[14px] font-semibold uppercase whitespace-nowrap transition-colors pb-1 ${activeCategory === category ? "text-black" : "text-[#5c5f60] hover:text-black"}`}
              >
                {category}
                {activeCategory === category ? <motion.span layoutId="archive-filter" className="absolute inset-x-0 -bottom-px h-0.5 bg-black" transition={{ duration: reduceMotion ? 0.01 : 0.3 }} /> : null}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="contents"
          >
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="border border-[#dadada] hover:border-black p-8 hover:bg-[#f0f0f2] transition-colors duration-200 group flex flex-col justify-between min-w-0"
              >
                <div>
                  <div className="flex justify-between items-start gap-6 mb-8">
                    <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest shrink-0">{String(project.sortOrder).padStart(3, "0")}</span>
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
                  <div className="flex flex-wrap items-center gap-4">
                    {project.links?.map((link) => {
                      const isInternal = link.href.startsWith("/") && !link.href.startsWith("//");
                      if (isInternal) {
                        return (
                          <TransitionLink
                            key={link.href}
                            href={link.href}
                            className="font-['Inter'] text-[14px] font-semibold text-black uppercase hover:opacity-70 transition-all flex items-center gap-1 group/link shrink-0"
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
                          className="font-['Inter'] text-[14px] font-semibold text-black uppercase hover:opacity-70 transition-all flex items-center gap-1 group/link shrink-0"
                        >
                          <span>{link.label}</span>
                          <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
