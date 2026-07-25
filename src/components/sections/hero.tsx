export function HeroSection() {
  return (
    <section id="home" className="relative w-full px-[5vw] mb-24 lg:mb-48">
      {/* Chapter Indicator (Right side fixed) */}
      <div className="hidden lg:flex fixed right-[5vw] top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6">
        <div className="h-24 w-[1px] bg-[#000000]"></div>
        <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] vertical-text tracking-widest uppercase">
          CHAPTER 00: ENTRY
        </span>
        <div className="h-24 w-[1px] bg-[#000000]"></div>
      </div>

      <div className="grid grid-cols-12 gap-[2rem] items-end w-full">
        {/* Main Visual Typographic Block */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <h1 className="font-['Montserrat'] text-[48px] md:text-[80px] lg:text-[120px] font-black leading-[0.9] tracking-[-0.04em] text-[#000000] uppercase break-words">
            ZAIDAAN<br />ZALFAA
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a 
              href="#work"
              className="bg-[#000000] text-[#ffffff] font-['Inter'] text-[14px] font-semibold uppercase px-8 py-4 hover:bg-[#1b1b1b] transition-colors flex items-center justify-center gap-2"
            >
              View Selected Work
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a 
              href="/documents/zaidaan-zalfaa-cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent text-[#000000] font-['Inter'] text-[14px] font-semibold uppercase px-8 py-4 border border-[#000000] hover:bg-[#000000] hover:text-[#ffffff] transition-colors flex items-center justify-center gap-2"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>

        {/* Right Side Metadata */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-end pt-12 lg:pt-0 lg:pb-4 lg:pl-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">Context</span>
              <div className="h-[1px] w-full bg-[#000000]"></div>
              <span className="font-['Inter'] text-[18px] text-[#000000] mt-2">PERSONAL PORTFOLIO</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">Focus</span>
              <div className="h-[1px] w-full bg-[#000000]"></div>
              <p className="font-['Inter'] text-[18px] text-[#000000] mt-2 max-w-sm">
                Building practical digital products, community systems, and automation.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest">Location</span>
              <div className="h-[1px] w-full bg-[#000000]"></div>
              <p className="font-['Inter'] text-[18px] text-[#000000] mt-2 max-w-sm">
                Based in Cianjur, West Java, Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hidden lg:flex absolute -bottom-16 left-1/2 -translate-x-1/2 flex-col items-center gap-4 animate-bounce z-40">
        <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] uppercase tracking-widest text-center">SCROLL TO BEGIN THE JOURNEY</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
      </div>
    </section>
  );
}