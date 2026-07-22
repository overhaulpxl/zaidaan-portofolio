"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "zaidaan:readiness:v1";
const SHOW_DELAY_MS = 120;
const MINIMUM_VISIBLE_MS = 420;
const FONT_ACCEPTANCE_MS = 900;
const HARD_TIMEOUT_MS = 2250;

type CompletionReason =
  | "hard-timeout"
  | "reduced-motion"
  | "repeat-session"
  | "save-data"
  | "success";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function CriticalReadinessLoader() {
  const [visible, setVisible] = useState(false);
  const [milestones, setMilestones] = useState(1);

  useEffect(() => {
    const siteShell = document.getElementById("site-shell");

    if (!siteShell) {
      return;
    }

    const startedAt = performance.now();
    const deadline = startedAt + HARD_TIMEOUT_MS;
    const timers = new Set<number>();
    const frames = new Set<number>();
    let mounted = true;
    let finalized = false;
    let overlayShownAt: number | null = null;
    let previousBodyOverflow: string | null = null;

    const clearScheduledWork = () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
      frames.forEach((frame) => window.cancelAnimationFrame(frame));
      frames.clear();
    };

    const releaseInteractionLock = () => {
      siteShell.removeAttribute("inert");
      siteShell.removeAttribute("aria-busy");

      if (previousBodyOverflow !== null) {
        document.body.style.overflow = previousBodyOverflow;
        previousBodyOverflow = null;
      }
    };

    const cleanup = (updateReactState: boolean) => {
      clearScheduledWork();
      document
        .querySelector<HTMLElement>("[data-readiness-loader]")
        ?.style.setProperty("pointer-events", "none");
      releaseInteractionLock();

      if (updateReactState && mounted) {
        setVisible(false);
      }
    };

    const writeSessionComplete = () => {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "complete");
      } catch {
        // Storage is optional. The bounded loader flow remains safe without it.
      }
    };

    const finalize = (reason: CompletionReason) => {
      if (finalized) {
        return;
      }

      finalized = true;
      writeSessionComplete();
      cleanup(true);

      if (reason === "hard-timeout") {
        return;
      }
    };

    const requestCompletion = (reason: CompletionReason) => {
      if (finalized) {
        return;
      }

      if (reason === "hard-timeout" || overlayShownAt === null) {
        finalize(reason);
        return;
      }

      const now = performance.now();
      const minimumVisibleAt = overlayShownAt + MINIMUM_VISIBLE_MS;
      const finishAt = Math.min(minimumVisibleAt, deadline);
      const remaining = Math.max(0, finishAt - now);

      if (remaining === 0) {
        finalize(reason);
        return;
      }

      const timer = window.setTimeout(() => {
        timers.delete(timer);
        finalize(reason);
      }, remaining);
      timers.add(timer);
    };

    const scheduleFrame = (callback: () => void) => {
      const frame = window.requestAnimationFrame(() => {
        frames.delete(frame);
        callback();
      });
      frames.add(frame);
      return frame;
    };

    const showOverlay = () => {
      if (overlayShownAt !== null || finalized) {
        return;
      }

      overlayShownAt = performance.now();
      setVisible(true);

      const lockWhenVisible = () => {
        if (finalized) {
          return;
        }

        if (!document.querySelector("[data-readiness-loader]")) {
          scheduleFrame(lockWhenVisible);
          return;
        }

        previousBodyOverflow = document.body.style.overflow;
        siteShell.setAttribute("inert", "");
        siteShell.setAttribute("aria-busy", "true");
        document.body.style.overflow = "hidden";
      };

      scheduleFrame(lockWhenVisible);
    };

    const scheduleTimer = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, delay);
      timers.add(timer);
      return timer;
    };

    const nextFrame = () =>
      new Promise<void>((resolve) => {
        scheduleFrame(resolve);
      });

    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "complete") {
        finalize("repeat-session");
        return () => {
          mounted = false;
          cleanup(false);
        };
      }
    } catch {
      // Continue with the bounded readiness flow when storage is unavailable.
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const saveData = Boolean(
      (navigator as NavigatorWithConnection).connection?.saveData
    );

    if (reducedMotion || saveData) {
      finalize(reducedMotion ? "reduced-motion" : "save-data");
      return () => {
        mounted = false;
        cleanup(false);
      };
    }

    scheduleTimer(showOverlay, SHOW_DELAY_MS);
    scheduleTimer(() => requestCompletion("hard-timeout"), HARD_TIMEOUT_MS);

    const acceptFonts = () =>
      new Promise<void>((resolve) => {
        let accepted = false;

        const finish = () => {
          if (accepted) {
            return;
          }

          accepted = true;
          resolve();
        };

        scheduleTimer(finish, FONT_ACCEPTANCE_MS);

        if (document.fonts?.ready) {
          void document.fonts.ready.then(finish, finish);
        } else {
          finish();
        }
      });

    void (async () => {
      try {
        await acceptFonts();

        if (!mounted || finalized) {
          return;
        }

        setMilestones(2);
        await nextFrame();
        await nextFrame();

        if (!mounted || finalized) {
          return;
        }

        setMilestones(3);
        requestCompletion("success");
      } catch {
        if (!finalized) {
          finalized = true;
          cleanup(true);
        }
      }
    })();

    return () => {
      mounted = false;
      cleanup(false);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="readiness-loader"
      data-readiness-loader
      data-readiness-milestones={milestones}
    >
      <div className="readiness-loader__content">
        <p className="readiness-loader__name">ZAIDAAN ZALFAA</p>
        <p className="readiness-loader__label">PERSONAL PORTFOLIO</p>
        <div className="readiness-loader__trace" aria-hidden="true">
          <span style={{ inlineSize: `${(milestones / 3) * 100}%` }} />
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          Preparing portfolio
        </p>
      </div>
    </div>
  );
}