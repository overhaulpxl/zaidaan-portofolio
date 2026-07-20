"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";
import { CvAction } from "@/components/ui/cv-action";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const navigateTo = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string, focusHeading = false) => {
      event.preventDefault();
      const target = document.querySelector<HTMLElement>(href);

      if (!target) {
        return;
      }

      closeMobileMenu();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", href);

      if (focusHeading) {
        window.requestAnimationFrame(() => {
          target.querySelector<HTMLElement>("[data-section-heading]")?.focus({ preventScroll: true });
        });
      }
    },
    [closeMobileMenu, reduceMotion]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector<HTMLElement>(href)).filter(
      (section): section is HTMLElement => Boolean(section)
    );

    const observer = new IntersectionObserver(
      () => {
        if (window.scrollY < window.innerHeight * 0.52) {
          setActiveHref("");
          return;
        }

        const anchorLine = window.innerHeight * 0.28;
        const closest = sections.reduce<{ href: string; distance: number } | null>((best, section) => {
          const distance = Math.abs(section.getBoundingClientRect().top - anchorLine);
          const candidate = { href: `#${section.id}`, distance };
          return !best || distance < best.distance ? candidate : best;
        }, null);

        if (closest) {
          setActiveHref(closest.href);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.05, 0.25, 0.55] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const dialog = menuDialogRef.current;
    const toggleButton = toggleButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusableElements = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements?.[0];
    const lastFocusable = focusableElements?.[focusableElements.length - 1];

    document.body.style.overflow = "hidden";
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
        return;
      }

      if (event.key !== "Tab" || !firstFocusable || !lastFocusable) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      toggleButton?.focus();
    };
  }, [closeMobileMenu, mobileMenuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6 sm:py-4">
      <div
        inert={mobileMenuOpen ? true : undefined}
        aria-hidden={mobileMenuOpen ? true : undefined}
        className={cn(
          "pointer-events-auto mx-auto transition-[max-width] duration-300",
          scrolled ? "max-w-5xl" : "max-w-7xl"
        )}
      >
        <LiquidGlassSurface
          className="rounded-full"
          fallbackClassName="bg-glass-base"
          intensity={0.18}
          cornerRadius={999}
        >
          <div className="flex min-h-14 items-center justify-between gap-3 px-4 sm:px-5">
            <a
              href="#home"
              onClick={(event) => navigateTo(event, "#home")}
              className="focus-ring inline-flex min-h-11 items-center rounded-md text-lg font-semibold tracking-[-0.025em]"
            >
              Zaidaan
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => {
                const active = activeHref === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => navigateTo(event, link.href)}
                    aria-current={active ? "location" : undefined}
                    className={cn(
                      "focus-ring inline-flex min-h-11 items-center rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                      active ? "bg-foreground/[0.08] text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <CvAction appearance="text" className="hidden xl:inline-flex" />
              <a
                href="#contact"
                onClick={(event) => navigateTo(event, "#contact", true)}
                className="focus-ring inline-flex min-h-11 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                Hire Me
              </a>
            </div>

            <button
              ref={toggleButtonRef}
              type="button"
              className="focus-ring flex min-h-11 min-w-11 items-center justify-center rounded-full lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
            >
              {mobileMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </LiquidGlassSurface>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-[60] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
          >
            <button
              type="button"
              tabIndex={-1}
              className="absolute inset-0 bg-black/55"
              aria-hidden="true"
              onClick={closeMobileMenu}
            />
            <motion.div
              ref={menuDialogRef}
              id="mobile-navigation-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-title"
              className="absolute inset-x-3 bottom-3 top-20 sm:inset-x-6 sm:bottom-6"
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <LiquidGlassSurface className="h-full rounded-2xl" intensity={0.12} cornerRadius={16}>
                <div className="flex h-full flex-col overflow-y-auto p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 id="mobile-navigation-title" className="text-xl font-semibold tracking-[-0.02em]">
                      Navigation
                    </h2>
                    <button
                      type="button"
                      onClick={closeMobileMenu}
                      className="focus-ring flex min-h-11 min-w-11 items-center justify-center rounded-full border border-glass-border"
                      aria-label="Close navigation menu"
                    >
                      <X aria-hidden="true" size={20} />
                    </button>
                  </div>

                  <nav className="flex flex-col" aria-label="Mobile navigation">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(event) => navigateTo(event, link.href)}
                        aria-current={activeHref === link.href ? "location" : undefined}
                        className="focus-ring border-t border-glass-border py-3.5 text-lg font-semibold last:border-b"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto flex flex-col gap-3 pt-6">
                    <CvAction appearance="text" className="w-fit" />
                    <a
                      href="#contact"
                      onClick={(event) => navigateTo(event, "#contact", true)}
                      className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-center font-semibold text-background"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </LiquidGlassSurface>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
