export function ContactSection() {
  return (
    <section id="contact" className="w-full px-[5vw] mb-24 lg:mb-32">
      <div className="grid grid-cols-12 gap-[2rem] text-[#000000]">
        
        {/* Mobile Chapter Indicator */}
        <div className="col-span-12 md:hidden mb-8">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 08 — CONTACT</span>
        </div>

        {/* Left Side: Massive Typography */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-end pb-12">
          <p className="hidden md:block font-['Montserrat'] text-[24px] font-bold mb-4 uppercase">CHAPTER 08</p>
          <h2 className="font-['Montserrat'] text-[48px] md:text-[140px] font-black leading-[0.85] tracking-tighter uppercase break-words w-full">
            LET&apos;S<br />WORK<br />TOGETHER
          </h2>
          <p className="font-['Inter'] text-[18px] mt-8 md:mt-12 max-w-md text-[#5c5f60]">
            Available for freelance opportunities, collaborations, and project-based work.
          </p>
        </div>

        {/* Right Side: Contact Actions */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end pb-12 gap-8 md:gap-12">
          <a 
            href="https://wa.me/6285793719676"
            target="_blank"
            rel="noopener noreferrer" 
            className="group block border-b border-[#dadada] md:border-[#cfc4c5] pb-6 hover:bg-[#e8e8e8] md:hover:bg-transparent transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-2 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
              <h3 className="font-['Montserrat'] text-[24px] font-bold flex items-center gap-4 uppercase">WHATSAPP</h3>
              <svg className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            <p className="font-['Inter'] text-[12px] font-semibold uppercase tracking-widest text-[#5c5f60] md:opacity-60 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">Message Directly</p>
          </a>
          
          <a 
            href="mailto:zaidaan1337@gmail.com" 
            className="group block border-b border-[#dadada] md:border-[#cfc4c5] pb-6 hover:bg-[#e8e8e8] md:hover:bg-transparent transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-2 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">
              <h3 className="font-['Montserrat'] text-[24px] font-bold flex items-center gap-4 uppercase">EMAIL</h3>
              <svg className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            <p className="font-['Inter'] text-[12px] font-semibold uppercase tracking-widest text-[#5c5f60] md:opacity-60 group-hover:px-4 md:group-hover:px-0 transition-all duration-300">zaidaan1337@gmail.com</p>
          </a>
        </div>

      </div>
    </section>
  );
}