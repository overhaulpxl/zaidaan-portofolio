"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./route-transition.css";

type Phase = "idle" | "covering" | "covered" | "navigating" | "revealing";
type Destination = { href: string; eyebrow: string; title: string; index: string };

type TransitionContextValue = {
  phase: Phase;
  start: (href: string) => boolean;
};

const TransitionContext = createContext<TransitionContextValue>({ phase: "idle", start: () => false });

const COVER_MS = 240;
const REVEAL_MS = 280;
const SAFETY_MS = 1800;

function destinationFor(href: string): Destination {
  const pathname = new URL(href, "http://local").pathname;
  return pathname === "/work"
    ? { href, eyebrow: "ZAIDAAN", title: "WORK ARCHIVE", index: "01" }
    : { href, eyebrow: "ZAIDAAN", title: "HOME", index: "00" };
}

export function RouteTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [introBlocking, setIntroBlocking] = useState(true);
  const [destination, setDestination] = useState<Destination>(() => destinationFor(pathname));
  const phaseRef = useRef<Phase>("idle");
  const targetPathRef = useRef<string | null>(null);
  const timersRef = useRef<Set<number>>(new Set());
  const reducedRef = useRef(false);

  const setOwnedPhase = useCallback((next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const schedule = useCallback((callback: () => void, delay: number) => {
    const timer = window.setTimeout(() => {
      timersRef.current.delete(timer);
      callback();
    }, delay);
    timersRef.current.add(timer);
    return timer;
  }, []);

  const release = useCallback(() => {
    targetPathRef.current = null;
    window.scrollTo(0, 0);
    setOwnedPhase("idle");
    requestAnimationFrame(() => {
      const main = document.querySelector<HTMLElement>("main");
      main?.focus({ preventScroll: true });
    });
  }, [setOwnedPhase]);

  const reveal = useCallback(() => {
    window.scrollTo(0, 0);
    setOwnedPhase("revealing");
    requestAnimationFrame(() => window.scrollTo(0, 0));
    schedule(() => window.scrollTo(0, 0), reducedRef.current ? 30 : 120);
    schedule(release, reducedRef.current ? 80 : REVEAL_MS);
  }, [release, schedule, setOwnedPhase]);

  const start = useCallback((href: string) => {
    if (phaseRef.current !== "idle") return false;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === pathname) return false;

    const destination = destinationFor(href);
    targetPathRef.current = url.pathname;
    setDestination(destination);
    setOwnedPhase("covering");

    schedule(() => {
      setOwnedPhase("covered");
      schedule(() => {
        setOwnedPhase("navigating");
        router.push(href, { scroll: false });
      }, reducedRef.current ? 20 : 100);
    }, reducedRef.current ? 80 : COVER_MS);

    schedule(() => {
      if (phaseRef.current !== "idle") release();
    }, SAFETY_MS);
    return true;
  }, [pathname, release, router, schedule, setOwnedPhase]);

  useEffect(() => {
    reducedRef.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const handlePopState = () => {
      if (phaseRef.current !== "idle" || window.location.pathname === pathname) return;
      const href = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      setDestination(destinationFor(href));
      setOwnedPhase("covering");
      router.replace(href, { scroll: false });
      schedule(reveal, reducedRef.current ? 80 : 180);
    };
    addEventListener("popstate", handlePopState);
    return () => removeEventListener("popstate", handlePopState);
  }, [pathname, reveal, router, schedule, setOwnedPhase]);

  useEffect(() => {
    if (phaseRef.current === "covered" || phaseRef.current === "navigating") {
      requestAnimationFrame(() => requestAnimationFrame(reveal));
    }
  }, [pathname, reveal]);

  useEffect(() => {
    const complete = () => setIntroBlocking(false);
    addEventListener("introcomplete", complete);
    if (document.documentElement.classList.contains("intro-complete")) complete();
    return () => removeEventListener("introcomplete", complete);
  }, []);

  useLayoutEffect(() => {
    const blocked = introBlocking || phase !== "idle";
    document.body.style.overflow = blocked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [introBlocking, phase]);

  useEffect(() => () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    document.body.style.overflow = "";
  }, []);

  return (
    <TransitionContext.Provider value={{ phase, start }}>
      <div data-route-shell data-route-phase={phase} inert={introBlocking || phase !== "idle"} aria-busy={introBlocking || phase !== "idle"}>{children}</div>
      <div className="route-transition" data-phase={phase} aria-hidden="true">
        <div className="route-transition__meta"><span>{destination.eyebrow}</span><span>{destination.index}</span></div>
        <div className="route-transition__rule" />
        <strong>{destination.title}</strong>
      </div>
    </TransitionContext.Provider>
  );
}

export function useRouteTransition() {
  return useContext(TransitionContext);
}
