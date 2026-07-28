"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./chapter-indicator.css";

export type ChapterDetail = {
  index: number;
  number: string;
  name: string;
  progress: number;
  hidden: boolean;
};

const INITIAL: ChapterDetail = {
  index: 0,
  number: "00",
  name: "ENTRY",
  progress: 0,
  hidden: false,
};

export function ChapterIndicator() {
  const [chapter, setChapter] = useState(INITIAL);

  useEffect(() => {
    const update = (event: Event) => {
      setChapter((event as CustomEvent<ChapterDetail>).detail);
    };
    window.addEventListener("chapterchange", update);
    requestAnimationFrame(() => window.dispatchEvent(new Event("chapterrequest")));
    return () => window.removeEventListener("chapterchange", update);
  }, []);

  return (
    <aside
      className="chapter-indicator"
      data-chapter-indicator
      data-hidden={chapter.hidden ? "true" : "false"}
      style={{ "--chapter-progress": chapter.progress } as React.CSSProperties}
      aria-label={`Current chapter: ${chapter.number} ${chapter.name}`}
    >
      <span className="chapter-indicator__rule chapter-indicator__rule--upper" aria-hidden="true">
        <span />
      </span>
      <span className="chapter-indicator__viewport" aria-live="polite">
        <AnimatePresence initial={false} mode="sync">
          <motion.span
            key={`${chapter.index}-${chapter.name}`}
            className="chapter-indicator__label"
            initial={{ opacity: 0, y: 9, z: -10, clipPath: "inset(100% 0 0)" }}
            animate={{ opacity: 1, y: 0, z: 0, clipPath: "inset(0)" }}
            exit={{ opacity: 0, y: -8, z: -8, clipPath: "inset(0 0 100%)" }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            transformTemplate={(_, generated) => `translate(-50%, -50%) rotate(90deg) ${generated}`}
          >
            <span>CHAPTER {chapter.number}</span>
            <strong>{chapter.name}</strong>
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="chapter-indicator__rule chapter-indicator__rule--lower" aria-hidden="true">
        <span />
      </span>
    </aside>
  );
}
