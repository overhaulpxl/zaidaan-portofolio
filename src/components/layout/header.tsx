"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const openMenu = useCallback(() => {
    setMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    // Only access document inside useEffect
    // Suppress the warning since this is just mounting the portal to body once
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalRoot(document.body);
  }, []); // Run once on mount to capture document.body

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen, closeMenu]);

  const navLinks = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#work", label: "WORK" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#tools", label: "TOOLS" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/#contact", label: "CONTACT" },
    { href: "/work", label: "PROJECT ARCHIVE" },
  ];

  const menu = (
    <div
      className="fixed inset-0 z-[60] bg-[#f8f9fa] flex flex-col items-start justify-center px-[5vw]"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute top-8 right-[5vw]">
        <button 
          onClick={closeMenu}
          className="text-[#1b1b1b] hover:opacity-70 transition-opacity p-2"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="mb-12">
        <h2 className="text-[24px] font-bold text-[#1b1b1b] uppercase font-['Montserrat'] tracking-widest">
          ZAIDAAN
        </h2>
        <p className="text-[12px] font-semibold text-[#5c5f60] mt-2 font-['Inter'] tracking-[0.05em] uppercase">
          Editorial Portfolio
        </p>
      </div>
      
      <nav className="flex flex-col gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-[14px] font-semibold text-[#5c5f60] hover:text-[#1b1b1b] transition-colors uppercase font-['Inter'] tracking-[0.1em]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[5vw] py-8 bg-[#f8f9fa] border-b border-[#000000] lg:border-none">
        <Link 
          href="/"
          className="text-[12px] font-semibold text-[#1b1b1b] uppercase tracking-widest font-['Inter'] hover:opacity-70 transition-opacity active:scale-95"
        >
          ZAIDAAN
        </Link>
        <button 
          onClick={openMenu}
          className="text-[#1b1b1b] hover:opacity-70 transition-opacity active:scale-95 flex items-center justify-center p-2"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>
      
      {mobileMenuOpen && portalRoot ? createPortal(menu, portalRoot) : null}
    </>
  );
}