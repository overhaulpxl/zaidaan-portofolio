"use client";

import { useLayoutEffect } from "react";
import "./chapter-motion.css";

const CHAPTERS = [
  { id: "home", number: "00", name: "ENTRY" },
  { id: "about", number: "01", name: "IDENTITY" },
  { id: "experience", number: "02", name: "EXPERIENCE" },
  { id: "selected-work", number: "03", name: "SELECTED WORK" },
  { id: "skills", number: "04", name: "SKILLS" },
  { id: "tools", number: "05", name: "TOOLS & PROGRAMS" },
  { id: "education", number: "06", name: "EDUCATION" },
  { id: "credentials", number: "07", name: "CREDENTIALS & INVOLVEMENT" },
  { id: "contact", number: "08", name: "CONTACT" },
] as const;

function roles(selector: string, role: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
    element.dataset.sceneRole = role;
    element.style.setProperty("--item-index", String(index));
  });
}

export function ChapterMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("chapter-motion-ready");
    root.classList.toggle("chapter-motion-reduced", reduced);

    const chapters = CHAPTERS.map((chapter) => ({ chapter, element: document.getElementById(chapter.id) }))
      .filter((entry): entry is { chapter: (typeof CHAPTERS)[number]; element: HTMLElement } => Boolean(entry.element));
    const footer = document.querySelector<HTMLElement>("footer");
    const scenes = chapters.map(({ element }) => element);
    scenes.forEach((scene, index) => {
      scene.dataset.scene = index === 0 ? "entry" : scene === footer ? "footer" : scene.id;
      scene.style.setProperty("--scene-progress", "0");
      scene.style.setProperty("--scene-exit", "0");
    });

    roles("#about [class*='lg:flex'][class*='items-center'], #about > div > div:first-child", "identity-cue");
    roles("#about [class*='aspect-[4/3]']", "identity-portrait");
    roles("#about h2 span", "identity-title");
    roles("#about [class*='max-w-2xl'] p", "identity-copy");
    roles("#about [class*='flex-wrap']", "identity-actions");

    roles("#experience > div > div:first-child", "experience-header");
    roles("#experience article", "experience-record");
    roles("#experience article h3", "experience-role");
    roles("#experience article h3 ~ p", "experience-company");
    roles("#experience article ul", "experience-description");
    roles("#experience article > div:last-child", "experience-date");

    roles("#selected-work > div:first-child p", "work-cue");
    roles("#selected-work h2", "work-title");
    roles("#selected-work a[href='/work']", "work-link");
    roles("#selected-work > div:last-child > div", "work-grid");
    roles("#selected-work article", "work-cell");

    roles("#skills > div > div:first-child", "skills-header");
    roles("#skills [class*='md:grid-cols-3'] > div", "skill-column");

    roles("#tools > div > div:first-child", "tools-header");
    roles("#tools [class*='border-b'][class*='grid']", "tool-group");
    roles("#tools li", "tool-item");

    roles("#education > div > div:first-child", "education-header");
    roles("#education article", "education-record");
    roles("#education article h3", "education-institution");
    roles("#education article > div:last-child", "education-date");

    roles("#credentials > div:first-child", "credentials-header");
    roles("#credentials > div:last-child", "credentials-split");
    roles("#credentials > div:last-child > div", "certifications-column");
    roles("#credentials > div:last-child > aside", "organizations-column");
    roles("#credentials ol:first-of-type > li", "certificate-record");

    roles("#contact [class*='md:hidden'], #contact [class*='md:block']", "contact-cue");
    roles("#contact [data-contact-line]", "contact-line");
    roles("#contact h2 + p", "contact-support");
    roles("#contact a", "contact-action");
    const records = [...document.querySelectorAll<HTMLElement>("#experience article")];
    let raf = 0;
    const update = () => {
      raf = 0;
      const viewport = innerHeight;
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (viewport * 0.88 - rect.top) / Math.max(rect.height + viewport * 0.28, 1)));
        const exit = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height - viewport * 0.25, 1)));
        scene.style.setProperty("--scene-progress", progress.toFixed(3));
        scene.style.setProperty("--scene-exit", exit.toFixed(3));
        if (reduced || rect.top < viewport * 0.98) scene.classList.add("scene-approach");
        if (reduced || rect.top < viewport * 0.66) scene.classList.add("scene-established");
        if (reduced || rect.top < viewport * 0.43) scene.classList.add("scene-content");
      });

      records.forEach((record) => {
        const rect = record.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.min(1, Math.abs(center - viewport * 0.52) / (viewport * 0.68));
        record.style.setProperty("--record-distance", distance.toFixed(3));
        if (reduced || rect.top < viewport * 0.78) record.classList.add("record-approach");
        if (reduced || rect.top < viewport * 0.58) record.classList.add("record-active");
      });

      const focalY = viewport * 0.42;
      const candidates = chapters.map((entry, index) => {
        const rect = entry.element.getBoundingClientRect();
        const distance = rect.top <= focalY && rect.bottom > focalY ? 0 : Math.min(Math.abs(rect.top - focalY), Math.abs(rect.bottom - focalY));
        return { ...entry, index, rect, distance };
      });
      const current = candidates.reduce((best, candidate) => candidate.distance < best.distance ? candidate : best);
      const chapterProgress = Math.min(1, Math.max(0, (focalY - current.rect.top) / Math.max(current.rect.height, 1)));
      const footerRect = footer?.getBoundingClientRect();
      const hidden = Boolean(footerRect && footerRect.top <= viewport * 0.82);
      dispatchEvent(new CustomEvent("chapterchange", { detail: {
        index: current.index,
        number: current.chapter.number,
        name: current.chapter.name,
        progress: hidden && current.chapter.number === "08" ? 1 : chapterProgress,
        hidden,
      } }));
    };

    const request = () => { if (!raf) raf = requestAnimationFrame(update); };
    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", request, { passive: true });
    addEventListener("chapterrequest", request);
    addEventListener("introcomplete", request);
    update();

    return () => {
      removeEventListener("scroll", request);
      removeEventListener("resize", request);
      removeEventListener("chapterrequest", request);
      removeEventListener("introcomplete", request);
      if (raf) cancelAnimationFrame(raf);
      root.classList.remove("chapter-motion-ready", "chapter-motion-reduced");
    };
  }, []);

  return null;
}
