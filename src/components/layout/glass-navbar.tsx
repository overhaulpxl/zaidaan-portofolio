"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#about", hash: "#about", label: "About" },
  { href: "/#work", hash: "#work", label: "Work" },
  { href: "/#experience", hash: "#experience", label: "Experience" },
  { href: "/#skills", hash: "#skills", label: "Skills" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
] as const;

const SECTION_HASHES = new Set<string>(NAV_LINKS.map(({ hash }) => hash));

function canInterceptHomepageNavigation(event: MouseEvent<HTMLAnchorElement>) {
  const anchor = event.currentTarget;
  const destination = new URL(anchor.href, window.location.href);

  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    !anchor.hasAttribute("download") &&
    (!anchor.target || anchor.target === "_self") &&
    window.location.pathname === "/" &&
    destination.origin === window.location.origin &&
    destination.pathname === "/" &&
    Boolean(destination.hash)
  );
}

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const navigateTo = useCallback(
    (
      event: MouseEvent<HTMLAnchorElement>,
      hash: string,
      options: { focusHeading?: boolean } = {}
    ) => {
      if (!canInterceptHomepageNavigation(event)) {
        return;
      }

      const target = document.querySelector<HTMLElement>(hash || "#home");

      if (!target) {
        return;
      }

      event.preventDefault();
      const normalizedUrl = `${window.location.pathname}${window.location.search}${hash}`;

      if (window.location.hash === hash) {
        window.history.replaceState(null, "", normalizedUrl);
      } else {
        window.history.pushState(null, "", normalizedUrl);
      }

      setActiveHash(hash === "#home" ? "" : hash);
      closeMobileMenu();

      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({
        behavior: isReduced ? "auto" : "smooth",
        block: "start",
      });

      if (options.focusHeading) {
        window.requestAnimationFrame(() => {
          target
            .querySelector<HTMLElement>("[data-section-heading]")
            ?.focus({ preventScroll: true });
        });
      }
    },
    [closeMobileMenu]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let legacyScrollFrame: number | null = null;

    const syncActiveHash = (synchronizeScroll = false) => {
      let hash = window.location.hash;
      let normalizedLegacyHash = false;

      if (hash === "#projects") {
        hash = "#work";
        normalizedLegacyHash = true;
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}${hash}`
        );
      }

      setActiveHash(SECTION_HASHES.has(hash) ? hash : "");

      if (normalizedLegacyHash) {
        legacyScrollFrame = window.requestAnimationFrame(() => {
          document.querySelector<HTMLElement>(hash)?.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        });
      } else if (synchronizeScroll) {
        const target = document.querySelector<HTMLElement>(hash || "#home");
        const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target?.scrollIntoView({
          behavior: isReduced ? "auto" : "smooth",
          block: "start",
        });
      }
    };

    syncActiveHash();
    const handleHistoryNavigation = () => syncActiveHash(true);
    window.addEventListener("popstate", handleHistoryNavigation);
    window.addEventListener("hashchange", handleHistoryNavigation);

    return () => {
      if (legacyScrollFrame !== null) {
        window.cancelAnimationFrame(legacyScrollFrame);
      }
      window.removeEventListener("popstate", handleHistoryNavigation);
      window.removeEventListener("hashchange", handleHistoryNavigation);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ hash }) =>
      document.querySelector<HTMLElement>(hash)
    ).filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      () => {
        if (window.scrollY < window.innerHeight * 0.52) {
          setActiveHash("");
          return;
        }

        const anchorLine = window.innerHeight * 0.28;
        const closest = sections.reduce<{
          hash: string;
          distance: number;
        } | null>((best, section) => {
          const distance = Math.abs(
            section.getBoundingClientRect().top - anchorLine
          );
          const candidate = { hash: `#${section.id}`, distance };
          return !best || distance < best.distance ? candidate : best;
        }, null);

        if (closest) {
          setActiveHash(closest.hash);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.05, 0.25, 0.55] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const closeAtDesktop = () => {
      if (desktopQuery.matches) {
        closeMobileMenu();
      }
    };

    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, [closeMobileMenu]);

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

      if (
        toggleButton?.isConnected &&
        toggleButton.getClientRects().length > 0
      ) {
        toggleButton.focus();
      }
    };
  }, [closeMobileMenu, mobileMenuOpen]);

  const mobileMenu = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          className="pointer-events-auto fixed inset-0 z-[60] lg:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
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
            className="absolute inset-x-3 top-[calc(4.75rem+env(safe-area-inset-top))] sm:inset-x-6"
            initial={reduceMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <LiquidGlassSurface
              className="mobile-navigation-surface max-h-[calc(100svh-5.5rem-env(safe-area-inset-bottom))] rounded-2xl"
              intensity={0.12}
              strength="standard"
              cornerRadius={16}
            >
              <div className="flex max-h-[calc(100svh-5.5rem-env(safe-area-inset-bottom))] flex-col overflow-y-auto p-5 sm:p-6">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <h2
                    id="mobile-navigation-title"
                    className="text-xl font-semibold tracking-[-0.02em]"
                  >
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
                  {NAV_LINKS.map((link) => {
                    const active = activeHash === link.hash;

                    return (
                      <a
                        key={link.hash}
                        href={link.href}
                        onClick={(event) => navigateTo(event, link.hash)}
                        aria-current={active ? "location" : undefined}
                        className={cn(
                          "focus-ring flex min-h-12 items-center justify-between border-t border-glass-border px-1 text-lg font-semibold last:border-b",
                          active ? "text-foreground" : "text-muted"
                        )}
                      >
                        {link.label}
                        {active && (
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-foreground"
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-7">
                  <Link
                    href="/#contact"
                    onClick={(event) =>
                      navigateTo(event, "#contact", { focusHeading: true })
                    }
                    className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-center font-semibold text-background transition-opacity hover:opacity-85"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </LiquidGlassSurface>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6 sm:py-4">
        <div
          inert={mobileMenuOpen ? true : undefined}
          aria-hidden={mobileMenuOpen ? true : undefined}
          className={cn(
            "pointer-events-auto mx-auto transition-[max-width] duration-300",
            scrolled ? "max-w-5xl" : "max-w-[70rem]"
          )}
        >
          <LiquidGlassSurface
            className={cn(
              "rounded-full transition-colors duration-200",
              scrolled && "bg-glass-base"
            )}
            intensity={scrolled ? 0.16 : 0.1}
            strength="subtle"
            cornerRadius={999}
          >
            <div className="flex min-h-14 items-center justify-between gap-3 px-4 sm:px-5">
              <Link
                href="/#home"
                onClick={(event) => navigateTo(event, "#home")}
                className="focus-ring inline-flex min-h-11 items-center rounded-md text-lg font-semibold tracking-[-0.025em]"
              >
                Zaidaan
              </Link>

              <nav
                className="hidden items-center gap-1 lg:flex"
                aria-label="Primary navigation"
              >
                {NAV_LINKS.map((link) => {
                  const active = activeHash === link.hash;

                  return (
                    <Link
                      key={link.hash}
                      href={link.href}
                      onClick={(event) => navigateTo(event, link.hash)}
                      aria-current={active ? "location" : undefined}
                      className={cn(
                        "focus-ring relative inline-flex min-h-11 items-center rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                        active
                          ? "bg-foreground/[0.09] text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/#contact"
                onClick={(event) =>
                  navigateTo(event, "#contact", { focusHeading: true })
                }
                className="focus-ring hidden min-h-11 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-85 lg:inline-flex"
              >
                Hire Me
              </Link>

              <button
                ref={toggleButtonRef}
                type="button"
                className="focus-ring flex min-h-11 min-w-11 items-center justify-center rounded-full lg:hidden"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-dialog"
              >
                {mobileMenuOpen ? (
                  <X aria-hidden="true" size={20} />
                ) : (
                  <Menu aria-hidden="true" size={20} />
                )}
              </button>
            </div>
          </LiquidGlassSurface>
        </div>
      </header>
      <div ref={setPortalRoot} data-mobile-navigation-portal />
      {portalRoot && typeof document !== "undefined" && document.body
        ? createPortal(mobileMenu, portalRoot)
        : null}
    </>
  );
}