import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] lg:min-h-screen px-[5vw] pt-32 pb-24 lg:pt-40 lg:pb-40 flex items-center overflow-hidden">
      <div data-hero-content className="grid min-w-0 max-w-full grid-cols-12 gap-[2rem] items-end w-full">
        <div data-hero-name className="col-span-12 min-w-0 w-full max-w-[90vw] lg:max-w-none lg:col-span-8 flex flex-col gap-6">
          <h1 className="font-['Montserrat'] text-[48px] md:text-[80px] lg:text-[120px] font-black leading-[0.9] tracking-[-0.04em] text-black uppercase break-words [transform-style:preserve-3d]">
            <span data-hero-line="1">ZAIDAAN</span><span data-hero-line="2">ZALFAA</span>
          </h1>
          <div data-hero-actions className="flex flex-col sm:flex-row gap-6 mt-4">
            <a href="#selected-work" className="group bg-black text-white font-['Inter'] text-[14px] font-semibold uppercase px-8 py-4 hover:bg-[#1b1b1b] transition-colors flex items-center justify-center gap-2">
              View Selected Work
              <svg className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            {siteConfig.cvUrl ? (
              <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" className="group bg-transparent text-black font-['Inter'] text-[14px] font-semibold uppercase px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                Download CV
                <svg className="w-[18px] h-[18px] group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </a>
            ) : null}
          </div>
        </div>

        <div data-hero-context className="col-span-12 min-w-0 w-full max-w-[90vw] lg:max-w-none lg:col-span-4 flex flex-col justify-end pt-12 lg:pt-0 lg:pb-4 lg:pl-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">Context</span>
              <div className="h-px w-full bg-black" />
              <span className="font-['Inter'] text-[18px] text-black mt-2">{siteConfig.applicationName.toUpperCase()}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">Focus</span>
              <div className="h-px w-full bg-black" />
              <p className="max-w-full break-words font-['Inter'] text-[18px] text-black mt-2">{profile.headline}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">Location</span>
              <div className="h-px w-full bg-black" />
              <p className="max-w-full break-words font-['Inter'] text-[18px] text-black mt-2">{siteConfig.location.label}</p>
            </div>
          </div>
        </div>
      </div>


      <div data-scroll-cue className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4 z-10">
        <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest text-center">SCROLL TO BEGIN</span>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
      </div>

      <style>{`
        @media (min-width: 1152px) and (max-width: 1399px) {
          [data-hero-content] {
            padding-right: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
