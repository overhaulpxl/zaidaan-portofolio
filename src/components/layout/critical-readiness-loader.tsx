"use client";

import { useEffect, useState } from "react";
import "./critical-readiness-loader.css";

const FIRST_ADVANCE_MS = 360;
const CHAPTER_INTERVAL_MS = 210;
const CONTACT_HOLD_MS = 240;
const HARD_TIMEOUT_MS = 2480;
const EXIT_MS = 360;
const REDUCED_HOLD_MS = 220;
const REDUCED_EXIT_MS = 120;

const CHAPTERS = [
  ["00", "ENTRY"],
  ["01", "IDENTITY"],
  ["02", "EXPERIENCE"],
  ["03", "SELECTED WORK"],
  ["04", "SKILLS"],
  ["05", "TOOLS & PROGRAMS"],
  ["06", "EDUCATION"],
  ["07", "CREDENTIALS & INVOLVEMENT"],
  ["08", "CONTACT"],
] as const;

type IntroState = "opening" | "ready" | "exiting" | "complete";
type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

export function CriticalReadinessLoader() {
  const [state, setState] = useState<IntroState>("opening");
  const [progress, setProgress] = useState(1 / CHAPTERS.length);
  const [chapterIndex, setChapterIndex] = useState(0);

  useEffect(() => {
    const shell = document.querySelector<HTMLElement>("[data-route-shell]");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = Boolean((navigator as NavigatorWithConnection).connection?.saveData);

    const finishImmediately = () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("intro-running", "intro-releasing");
      document.documentElement.classList.add("intro-complete");
      window.dispatchEvent(new Event("introcomplete"));
      setState("complete");
    };

    if (!shell || saveData) {
      finishImmediately();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("intro-running");

    let disposed = false;
    let released = false;
    const timers = new Set<number>();
    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
    };

    const showChapter = (nextIndex: number) => {
      setChapterIndex(nextIndex);
      setProgress((nextIndex + 1) / CHAPTERS.length);
    };

    if (reduced) {
      schedule(() => {
        setProgress(1);
        setState("ready");
        document.documentElement.classList.add("intro-releasing", "intro-complete");
        setState("exiting");
      }, REDUCED_HOLD_MS);
      schedule(finishImmediately, REDUCED_HOLD_MS + REDUCED_EXIT_MS);

      return () => {
        disposed = true;
        timers.forEach((timer) => window.clearTimeout(timer));
        document.body.style.overflow = previousOverflow;
        document.documentElement.classList.remove("intro-running", "intro-releasing");
      };
    }

    const release = () => {
      if (disposed || released) return;
      released = true;
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove("intro-running");
      document.documentElement.classList.remove("intro-releasing");
      document.documentElement.classList.add("intro-complete");
      window.dispatchEvent(new Event("introcomplete"));
      setState("complete");
    };

    const exit = () => {
      if (disposed || released) return;
      setProgress(1);
      setState("ready");
      document.documentElement.classList.add("intro-releasing", "intro-complete");
      setState("exiting");
      schedule(release, EXIT_MS);
    };

    for (let index = 1; index < CHAPTERS.length; index += 1) {
      schedule(() => showChapter(index), FIRST_ADVANCE_MS + (index - 1) * CHAPTER_INTERVAL_MS);
    }

    const contactStartsAt = FIRST_ADVANCE_MS + (CHAPTERS.length - 2) * CHAPTER_INTERVAL_MS;
    schedule(exit, contactStartsAt + CONTACT_HOLD_MS);
    schedule(release, HARD_TIMEOUT_MS);

    return () => {
      disposed = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove("intro-running", "intro-releasing");
    };
  }, []);

  if (state === "complete") return null;

  const [chapterNumber, chapterName] = CHAPTERS[chapterIndex];

  return (
    <div
      className="editorial-loader"
      data-intro-state={state}
      data-chapter={chapterNumber}
      data-readiness-loader
      role="status"
      aria-label="Preparing portfolio index"
    >
      <div className="editorial-loader__meta">
        <span>ZAIDAAN</span>
        <span>PERSONAL PORTFOLIO</span>
        <span>2026</span>
      </div>

      <div className="editorial-loader__stage">
        <div className="editorial-loader__rule" aria-hidden="true" />
        <div className="editorial-loader__index">
          <div className="editorial-loader__title-mask">
            <h1>PORTFOLIO INDEX</h1>
          </div>
          <div className="editorial-loader__range" aria-hidden="true">00—08</div>
        </div>
        <div className="editorial-loader__chapter-window">
          <div key={chapterNumber} className="editorial-loader__chapter">
            <span>{chapterNumber}</span>
            <strong>{chapterName}</strong>
          </div>
        </div>
      </div>

      <div className="editorial-loader__loading">
        <span>LOADING</span>
        <span className="editorial-loader__track" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </span>
      </div>
      <span className="sr-only">Chapter {chapterNumber}: {chapterName}</span>
    </div>
  );
}
