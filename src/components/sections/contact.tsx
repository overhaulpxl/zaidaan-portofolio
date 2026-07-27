import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-[5vw] pt-24 pb-32 lg:pt-44 lg:pb-44">
      <div className="grid grid-cols-12 gap-[2rem] text-[#000000]">
        
        {/* Mobile Chapter Indicator */}
        <div className="col-span-12 md:hidden mb-8">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 08 — CONTACT</span>
        </div>

        {/* Left Side: Massive Typography */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-end pb-12">
          <p className="hidden md:block font-['Montserrat'] text-[24px] font-bold mb-4 uppercase">CHAPTER 08</p>
          <h2 className="font-['Montserrat'] text-[48px] md:text-[clamp(96px,8vw,120px)] font-black leading-[0.85] tracking-tighter uppercase w-full">
            LET&apos;S<br />WORK<br /><span className="whitespace-nowrap">TOGETHER</span>
          </h2>
          <p className="font-['Inter'] text-[18px] mt-8 md:mt-12 max-w-md text-[#5c5f60]">
            {profile.opportunityNote}
          </p>
        </div>

        {/* Right Side: Contact Actions */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end pb-12 gap-8 md:gap-12">
          <a 
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="group block border-t border-[#000000] md:border-[#000000] py-6 hover:bg-[#e8e8e8] md:hover:bg-transparent transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-2 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
              <h3 className="font-['Montserrat'] text-[32px] md:text-[40px] font-black flex items-center gap-4 uppercase tracking-tight">WHATSAPP</h3>
              <svg className="w-10 h-10 md:w-12 md:h-12 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="5 5 19 5 19 19"></polyline></svg>
            </div>
            <p className="font-['Inter'] text-[14px] font-bold uppercase tracking-widest text-[#5c5f60] md:opacity-60 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">Message Directly</p>
          </a>
          
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group block border-t border-b border-[#000000] md:border-[#000000] py-6 hover:bg-[#e8e8e8] md:hover:bg-transparent transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-2 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
              <h3 className="font-['Montserrat'] text-[32px] md:text-[40px] font-black flex items-center gap-4 uppercase tracking-tight">EMAIL</h3>
              <svg className="w-10 h-10 md:w-12 md:h-12 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="5 5 19 5 19 19"></polyline></svg>
            </div>
            <p className="font-['Inter'] text-[14px] font-bold uppercase tracking-widest text-[#5c5f60] md:opacity-60 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">{siteConfig.contact.email}</p>
          </a>
        </div>

      </div>
    </section>
  );
}