import {
  SiClaude,
  SiCloudinary,
  SiDiscord,
  SiGooglegemini,
  SiMikrotik,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import {
  TbBrandAdobePhotoshop,
  TbBrandGithub,
  TbBrandNextjs,
  TbBrandOffice,
  TbBrandOpenai,
  TbBrandPython,
  TbBrandSupabase,
  TbBrandVscode,
} from "react-icons/tb";

export function ToolsSection() {
  return (
    <section id="tools" className="w-full px-[5vw] py-14 lg:py-20 relative grid grid-cols-12 gap-[2rem]">
      {/* Content Area */}
      <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col">
        <div className="mb-16 lg:mb-20">
          <p className="lg:hidden font-['Inter'] text-[12px] font-semibold text-[#5c5f60] mb-4 uppercase tracking-widest">
            CHAPTER 05
          </p>
          <h2 className="font-['Montserrat'] text-[48px] lg:text-[80px] font-black text-[#000000] tracking-[-0.02em] mb-8 uppercase leading-[1] break-words">
            TOOLS &<br className="hidden lg:block" /> PROGRAMS
          </h2>

        </div>

        {/* Typographic Matrix */}
        <div className="w-full border-t border-[#000000]">
          
          {/* Category: OPERATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-10 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">OPERATIONS</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2 min-[360px]:gap-8">
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiDiscord className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Discord</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiTelegram className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Telegram</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiWhatsapp className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> WhatsApp</li>
                <li className="flex min-w-0 items-center gap-1 min-[360px]:gap-3"><TbBrandOffice className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /><span className="min-w-0 max-w-[5rem] min-[360px]:max-w-none leading-tight">Microsoft Office</span></li>
              </ul>
            </div>
          </div>

          {/* Category: DEVELOPMENT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-10 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">DEVELOPMENT</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2 min-[360px]:gap-8">
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandVscode className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> VS Code</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandGithub className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> GitHub</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandPython className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Python</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandNextjs className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Next.js</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandSupabase className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Supabase</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiCloudinary className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Cloudinary</li>
              </ul>
            </div>
          </div>

          {/* Category: NETWORKING */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-10 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">NETWORKING</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2 min-[360px]:gap-8">
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiMikrotik className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> MikroTik</li>
                <li>Winbox</li>
              </ul>
            </div>
          </div>

          {/* Category: CREATIVE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-10 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">CREATIVE</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2 min-[360px]:gap-8">
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li>Adobe After Effects</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandAdobePhotoshop className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Adobe Photoshop</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li>Affinity by Canva</li>
                <li>Canva</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li>CapCut</li>
              </ul>
            </div>
          </div>

          {/* Category: AI & AUTOMATION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[2rem] py-10 border-b border-[#000000] group hover:bg-[#f3f3f4] transition-colors -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] uppercase">AI & AUTOMATION</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-2 min-[360px]:gap-8">
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandOpenai className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> ChatGPT</li>
                <li>Codex</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiClaude className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Claude</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiGooglegemini className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Gemini</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
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