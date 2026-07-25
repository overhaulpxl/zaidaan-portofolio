export function ToolsSection() {
  return (
    <section id="tools" className="w-full px-[5vw] py-24 lg:py-32 relative grid grid-cols-12 gap-[2rem]">
      {/* Chapter Indicator */}
      <div className="hidden lg:block col-span-1 relative">
        <div className="sticky top-32 vertical-text font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">
          CHAPTER 05 / TOOLS & PROGRAMS
        </div>
      </div>

      {/* Content Area */}
      <div className="col-span-12 lg:col-span-10 flex flex-col">
        <div className="mb-16 lg:mb-24">
          <p className="lg:hidden font-['Inter'] text-[12px] font-semibold text-[#5c5f60] mb-4 uppercase tracking-widest">
            CHAPTER 05
          </p>
          <h2 className="font-['Montserrat'] text-[48px] lg:text-[80px] font-black text-[#000000] tracking-[-0.02em] mb-8 uppercase leading-[1] break-words">
            TOOLS &<br className="hidden lg:block" /> PROGRAMS
          </h2>
          <p className="font-['Inter'] text-[18px] text-[#5c5f60] max-w-2xl leading-relaxed">
            An objective index of operational software, development frameworks, and creative applications utilized in active workflows. Structured for rapid reference.
          </p>
        </div>

        {/* Typographic Matrix */}
        <div className="w-full border-t border-[#000000]">
          
          {/* Category: OPERATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-12 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">OPERATIONS</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-8">
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Discord</li>
                <li>Telegram</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>WhatsApp</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
          </div>

          {/* Category: DEVELOPMENT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-12 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">DEVELOPMENT</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-8">
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>VS Code</li>
                <li>GitHub</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Python</li>
                <li>Next.js</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Supabase</li>
                <li>Cloudinary</li>
              </ul>
            </div>
          </div>

          {/* Category: NETWORKING */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-12 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">NETWORKING</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-8">
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>MikroTik</li>
                <li>Winbox</li>
              </ul>
            </div>
          </div>

          {/* Category: CREATIVE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-12 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">CREATIVE</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-8">
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Adobe After Effects</li>
                <li>Adobe Photoshop</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Affinity by Canva</li>
                <li>Canva</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>CapCut</li>
              </ul>
            </div>
          </div>

          {/* Category: AI & AUTOMATION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-12 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">AI & AUTOMATION</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-8">
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>ChatGPT</li>
                <li>Codex</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Claude</li>
                <li>Gemini</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[16px] text-[#1a1c1c]">
                <li>Antigravity</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      <div className="hidden lg:block col-span-1"></div>
    </section>
  );
}