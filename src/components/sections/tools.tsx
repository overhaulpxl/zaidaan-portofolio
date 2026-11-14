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
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
  TbBrandGithub,
  TbBrandNextjs,
  TbBrandOffice,
  TbBrandOpenai,
  TbBrandPython,
  TbBrandSupabase,
  TbBrandVscode,
} from "react-icons/tb";

function WinboxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01M13 6.5h.01" />
      <path d="M7 19h10M9 16v3M15 16v3" />
    </svg>
  );
}

function AffinityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5L2 20.5h6.2L12 13l3.8 7.5H22L12 2.5zm0 4.8l2.4 4.7-4.8 0L12 7.3z" />
    </svg>
  );
}

function CanvaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 14.88c-2.48 0-4.28-1.56-4.28-4.16 0-3.12 2.32-5.4 5.36-5.4 1.76 0 2.92.8 3.4 1.8l-1.48 1.04c-.36-.64-1.04-1.04-1.92-1.04-1.8 0-3.08 1.48-3.08 3.56 0 1.6.96 2.48 2.52 2.48.96 0 1.84-.44 2.36-1.16l1.32 1.2c-.88 1.08-2.32 1.68-4.2 1.68z" />
    </svg>
  );
}

function CapCutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.5 5.5h7.2l3.8 6.5-3.8 6.5H3.5l3.8-6.5L3.5 5.5zm17 0h-7.2l-3.8 6.5 3.8 6.5h7.2l-3.8-6.5 3.8-6.5z" />
    </svg>
  );
}

function CodexIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="11" y1="18" x2="13" y2="6" />
    </svg>
  );
}

function AntigravityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l4.5 7.5h-9L12 7z" />
    </svg>
  );
}

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
                <li className="flex items-center gap-1 min-[360px]:gap-3"><WinboxIcon className="size-[18px] shrink-0 min-[360px]:size-5" /> Winbox</li>
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
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandAdobeAfterEffect className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Adobe After Effects</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><TbBrandAdobePhotoshop className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Adobe Photoshop</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><AffinityIcon className="size-[18px] shrink-0 min-[360px]:size-5" /> Affinity by Canva</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><CanvaIcon className="size-[18px] shrink-0 min-[360px]:size-5" /> Canva</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><CapCutIcon className="size-[18px] shrink-0 min-[360px]:size-5" /> CapCut</li>
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
                <li className="flex items-center gap-1 min-[360px]:gap-3"><CodexIcon className="size-[18px] shrink-0 min-[360px]:size-5" /> Codex</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiClaude className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Claude</li>
                <li className="flex items-center gap-1 min-[360px]:gap-3"><SiGooglegemini className="size-[18px] shrink-0 min-[360px]:size-5" aria-hidden="true" /> Gemini</li>
              </ul>
              <ul className="space-y-4 font-['Inter'] text-[14px] min-[360px]:text-[16px] text-[#1a1c1c]">
                <li className="flex items-center gap-1 min-[360px]:gap-3"><AntigravityIcon className="size-[18px] shrink-0 min-[360px]:size-5" /> Antigravity</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      <div className="hidden lg:block col-span-1"></div>
    </section>
  );
}