"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/content/profile";

export function AboutSection() {
  const [portraitError, setPortraitError] = useState(false);

  return (
    <section id="about" className="w-full px-[5vw] py-14 lg:py-20 relative overflow-hidden">
      <div className="grid min-w-0 max-w-full grid-cols-1 gap-[2rem] items-center lg:grid-cols-[minmax(0,37fr)_minmax(0,63fr)]">
        <div className="lg:hidden mb-8">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 01</span>
          <div className="h-px w-full bg-black mt-2 mb-4" />
          <span className="font-['Montserrat'] text-[24px] font-semibold text-black uppercase tracking-wide">IDENTITY</span>
        </div>

        <div className="aspect-[3/4] min-w-0 w-full max-w-full flex justify-center lg:justify-end items-center relative mb-10 lg:mb-0">
          <div className="relative h-full w-full overflow-hidden border border-black bg-[#e8e8e8]">
            {portraitError ? (
              <div className="flex h-full w-full items-center justify-center p-8">
                <span className="font-['Inter'] text-[14px] font-semibold text-[#5c5f60] tracking-widest uppercase">PORTRAIT PENDING</span>
              </div>
            ) : (
              <Image
                src="/images/zaidaan-portrait.jpg"
                alt="Portrait of Zaidaan Zalfaa"
                fill
                sizes="(min-width: 1024px) 37vw, 90vw"
                className="object-cover"
                style={{ objectPosition: "50% 52%" }}
                onError={() => setPortraitError(true)}
              />
            )}
          </div>
        </div>

        <div className="min-w-0 w-full max-w-full lg:pl-6 flex flex-col justify-center">
          <div className="hidden lg:flex items-center gap-4 mb-6">
            <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 01</span>
            <div className="h-px w-16 bg-black" />
            <span className="font-['Inter'] text-[12px] font-semibold text-black tracking-widest uppercase">IDENTITY</span>
          </div>

          <h2 className="font-['Montserrat'] text-[48px] lg:text-[clamp(56px,4.5vw,68px)] font-black text-black uppercase leading-[1] mb-8 lg:mb-12 max-w-3xl">
            <span className="lg:block">WHO IS</span>{" "}
            <span className="lg:block lg:whitespace-nowrap">ZAIDAAN ZALFAA?</span>
          </h2>

          <div className="w-full min-w-0 max-w-2xl mb-12 lg:mb-16">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="max-w-full break-words font-['Inter'] text-[18px] text-[#4c4546] leading-relaxed mb-6 last:mb-0">{paragraph}</p>
            ))}
          </div>

          <div className="flex w-full min-w-0 max-w-full flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 items-start lg:items-center">
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-black text-white font-['Inter'] text-[14px] font-semibold uppercase tracking-widest hover:bg-[#1b1b1b] transition-colors">CONTACT ME</a>
            <a href="#experience" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-black text-black font-['Inter'] text-[14px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">VIEW EXPERIENCE</a>
            <a href="https://drive.google.com/drive/folders/1F6XRRyOsgl5-kmycSjma-6JlX7TionkH?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 py-2 font-['Inter'] text-[12px] font-bold text-black uppercase tracking-widest hover:opacity-65 transition-opacity">
              CERTIFICATES
              <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
