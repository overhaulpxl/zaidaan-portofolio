"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TransitionLink } from "@/components/navigation/transition-link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const closeMenu = useCallback(() => { setMobileMenuOpen(false); document.body.style.overflow = "auto"; }, []);
  const openMenu = useCallback(() => { setMobileMenuOpen(true); document.body.style.overflow = "hidden"; }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalRoot(document.body);
  }, []);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(); };
    if (mobileMenuOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen, closeMenu]);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleScroll = () => closeMenu();
    window.addEventListener("scroll", handleScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, closeMenu]);

  const navLinks = [
    { href: "/#about", label: "ABOUT" }, { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#selected-work", label: "WORK" }, { href: "/#skills", label: "SKILLS" },
    { href: "/#tools", label: "TOOLS" }, { href: "/#education", label: "EDUCATION" },
    { href: "/#contact", label: "CONTACT" }, { href: "/work", label: "PROJECT ARCHIVE" },
  ];

  const menu = (
    <motion.div className="fixed inset-0 z-[60] bg-[#f8f9fa] flex flex-col items-start justify-center px-[5vw]" role="dialog" aria-modal="true"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: [0.22, 0.61, 0.36, 1] }}>
      <div className="absolute top-8 right-[5vw]"><button onClick={closeMenu} className="text-[#1b1b1b] hover:opacity-70 transition-opacity p-2" aria-label="Close menu"><X size={24} /></button></div>
      <motion.div className="mb-12" initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.5 }}>
        <h2 className="text-[24px] font-bold text-[#1b1b1b] uppercase font-['Montserrat'] tracking-widest">ZAIDAAN</h2>
        <p className="text-[12px] font-semibold text-[#5c5f60] mt-2 font-['Inter'] tracking-[0.05em] uppercase">Editorial Portfolio</p>
      </motion.div>
      <nav className="flex flex-col gap-6">
        {navLinks.map((link, index) => (
          <motion.div key={link.href} initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.12 + index * 0.045, duration: 0.4 }}>
            <TransitionLink href={link.href} onClick={closeMenu} className="text-[14px] font-semibold text-[#5c5f60] hover:text-[#1b1b1b] transition-colors uppercase font-['Inter'] tracking-[0.1em]">{link.label}</TransitionLink>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );

  return <>
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[5vw] py-8 bg-[#f8f9fa] border-b border-[#000000] lg:border-none">
      <TransitionLink href="/" className="text-[12px] font-semibold text-[#1b1b1b] uppercase tracking-widest font-['Inter'] hover:opacity-70 transition-opacity active:scale-95">ZAIDAAN</TransitionLink>
      <button onClick={openMenu} className="text-[#1b1b1b] hover:opacity-70 transition-opacity active:scale-95 flex items-center justify-center p-2" aria-label="Open menu"><Menu size={24} /></button>
    </header>
    {portalRoot ? createPortal(<AnimatePresence>{mobileMenuOpen ? menu : null}</AnimatePresence>, portalRoot) : null}
  </>;
}
