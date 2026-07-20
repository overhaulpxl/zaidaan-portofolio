"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const dialog = menuDialogRef.current;
    const toggleButton = toggleButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusableElements = dialog?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 pointer-events-none">
      <div className={cn(
        "mx-auto pointer-events-auto transition-all duration-300",
        scrolled ? "max-w-4xl" : "max-w-6xl"
      )}>
        <LiquidGlassSurface
          className="rounded-full shadow-lg"
          fallbackClassName="bg-glass-base border-glass-border backdrop-blur-xl"
          intensity={0.2}
          cornerRadius={999}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <div className="font-semibold text-lg tracking-tight">
              <Link href="#home">Zaidaan</Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-foreground/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="/documents/Zaidaan_Zalfaa_CV.pdf" className="text-sm font-medium hover:underline">
                Download CV
              </a>
              <Link
                href="#contact"
                className="bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              ref={toggleButtonRef}
              className="md:hidden flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 pointer-events-auto md:hidden">
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" onClick={closeMobileMenu} />
          <div
            ref={menuDialogRef}
            id="mobile-navigation-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="absolute inset-x-4 bottom-4 top-20"
          >
            <LiquidGlassSurface className="h-full rounded-2xl" intensity={0.12} cornerRadius={16}>
              <div className="flex h-full flex-col overflow-y-auto p-6">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <h2 id="mobile-navigation-title" className="text-lg font-semibold">
                    Navigation
                  </h2>
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-glass-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    aria-label="Close navigation menu"
                  >
                    <X aria-hidden="true" size={20} />
                  </button>
                </div>
                <nav className="flex flex-col space-y-6 text-lg" aria-label="Mobile navigation">
                  {NAV_LINKS.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="rounded-md font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-glass-border flex flex-col space-y-4">
                    <a href="/documents/Zaidaan_Zalfaa_CV.pdf" className="font-medium">
                      Download CV
                    </a>
                    <Link
                      href="#contact"
                      onClick={closeMobileMenu}
                      className="bg-foreground text-background px-6 py-3 rounded-full text-center font-medium"
                    >
                      Hire Me
                    </Link>
                  </div>
                </nav>
              </div>
            </LiquidGlassSurface>
          </div>
        </div>
      )}
    </header>
  );
}
