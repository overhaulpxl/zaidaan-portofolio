"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function ContactSection({
  whatsappVisible = true,
  contactEmail = siteConfig.contact.email,
}: {
  whatsappVisible?: boolean;
  contactEmail?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        window.location.href = `mailto:${contactEmail}`;
      }
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  };

  return (
    <section id="contact" className="w-full px-[5vw] pt-24 pb-32 lg:pt-44 lg:pb-44">
      <div className="grid grid-cols-12 gap-6 md:gap-[2rem] text-[#000000]">
        
        {/* Mobile Chapter Indicator */}
        <div className="col-span-12 md:hidden mb-8">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 08 — CONTACT</span>
        </div>

        {/* Left Side: Massive Typography */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-end pb-12">
          <p className="hidden md:block font-['Montserrat'] text-[24px] font-bold mb-4 uppercase">CHAPTER 08</p>
          <h2 className="font-['Montserrat'] text-[48px] md:text-[clamp(96px,8vw,120px)] font-black leading-[0.85] tracking-tighter uppercase w-full">
            <span data-contact-line className="block">LET&apos;S</span><span data-contact-line className="block">WORK</span><span data-contact-line className="block whitespace-nowrap">TOGETHER</span>
          </h2>
          <p className="font-['Inter'] text-[18px] mt-8 md:mt-12 max-w-md text-[#5c5f60]">
            {profile.opportunityNote}
          </p>
        </div>

        {/* Right Side: Contact Actions */}
        <div
          className={`col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-8 md:gap-12 pb-12 ${
            whatsappVisible ? "justify-end" : "justify-center"
          }`}
        >
          {whatsappVisible && (
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-[#000000] py-7 md:py-8 hover:bg-[#e8e8e8] md:hover:bg-transparent transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
                <h3 className="font-['Montserrat'] text-[32px] md:text-[40px] font-black flex items-center gap-4 uppercase tracking-tight leading-none">WHATSAPP</h3>
                <svg className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="5 5 19 5 19 19"></polyline></svg>
              </div>
              <p className="font-['Inter'] text-[14px] font-bold uppercase tracking-widest text-[#5c5f60] md:opacity-60 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">Message Directly</p>
            </a>
          )}

          <button
            type="button"
            onClick={handleCopyEmail}
            className="group block w-full text-left border-t border-b border-[#000000] py-7 md:py-8 hover:bg-[#e8e8e8] md:hover:bg-transparent transition-colors duration-300 cursor-pointer"
            aria-label="Copy email address"
          >
            <div className="flex items-center justify-between mb-3 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
              <h3 className="font-['Montserrat'] text-[32px] md:text-[40px] font-black flex items-center gap-4 uppercase tracking-tight leading-none">EMAIL</h3>
              <svg className={`w-8 h-8 transition-transform duration-300 shrink-0 ${copied ? "translate-x-0 translate-y-0" : "group-hover:-translate-y-1 group-hover:translate-x-1"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {copied ? (
                  <polyline points="20 6 9 17 4 12" />
                ) : (
                  <>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </>
                )}
              </svg>
            </div>
            <p className="font-['Inter'] text-[14px] font-bold uppercase tracking-widest text-[#5c5f60] md:opacity-60 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
              {copied ? "COPIED TO CLIPBOARD" : "COPY ADDRESS · " + contactEmail}
            </p>
          </button>
        </div>

      </div>
    </section>
  );
}