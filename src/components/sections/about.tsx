export function AboutSection() {
  return (
    <section id="about" className="w-full px-[5vw] mb-24 lg:mb-48 relative overflow-hidden">
      <div className="grid grid-cols-12 gap-[2rem] items-center lg:min-h-[800px]">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="col-span-12 lg:hidden mb-8">
          <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 01</span>
          <div className="h-[1px] w-full bg-[#000000] mt-2 mb-4"></div>
          <span className="font-['Montserrat'] text-[24px] font-semibold text-[#000000] uppercase tracking-wide">IDENTITY</span>
        </div>

        {/* Left: Image Placeholder */}
        <div className="col-span-12 lg:col-span-5 h-[500px] lg:h-[700px] flex justify-center lg:justify-end items-center relative mb-12 lg:mb-0">
          <div className="w-full max-w-lg h-full bg-[#e8e8e8] border border-[#000000] flex items-center justify-center p-8">
            <span className="font-['Inter'] text-[14px] font-semibold text-[#5c5f60] tracking-widest uppercase">
              PORTRAIT PENDING
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="col-span-12 lg:col-span-7 lg:pl-12 flex flex-col justify-center">
          <div className="hidden lg:flex items-center gap-4 mb-6">
            <span className="font-['Inter'] text-[12px] font-semibold text-[#5c5f60] tracking-widest uppercase">CHAPTER 01</span>
            <div className="h-[1px] w-16 bg-[#000000]"></div>
            <span className="font-['Inter'] text-[12px] font-semibold text-[#000000] tracking-widest uppercase">IDENTITY</span>
          </div>
          
          <h2 className="font-['Montserrat'] text-[48px] lg:text-[80px] font-black text-[#000000] uppercase leading-[1] mb-12 max-w-3xl">
            WHO IS ZAIDAAN ZALFAA?
          </h2>
          
          <div className="mb-16 max-w-2xl">
            <p className="font-['Inter'] text-[18px] text-[#4c4546] leading-relaxed mb-6">
              With a foundation in Computer and Network Engineering, my focus lies in crafting practical digital products and robust community systems. I thrive at the intersection of automation, technology, and human interaction.
            </p>
            <p className="font-['Inter'] text-[18px] text-[#4c4546] leading-relaxed">
              Currently an Information Systems undergraduate, I am dedicated to bridging technical complexity with intuitive, functional design.
            </p>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 items-start lg:items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#000000] text-[#ffffff] font-['Inter'] text-[14px] font-semibold uppercase tracking-widest hover:bg-[#1b1b1b] transition-colors"
            >
              CONTACT ME
            </a>
            <a 
              href="#experience" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#000000] text-[#000000] font-['Inter'] text-[14px] font-semibold uppercase tracking-widest hover:bg-[#000000] hover:text-[#ffffff] transition-colors"
            >
              VIEW EXPERIENCE
            </a>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto mt-4 sm:mt-0">
              <a 
                href="https://drive.google.com/drive/folders/1F6XRRyOsgl5-kmycSjma-6JlX7TionkH?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:p-0 border border-[#000000] sm:border-none font-['Inter'] text-[14px] font-semibold text-[#000000] sm:text-[#5c5f60] sm:hover:text-[#000000] sm:underline transition-colors uppercase tracking-widest"
              >
                CERTIFICATES
              </a>
              <a 
                href="/documents/zaidaan-zalfaa-cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:p-0 border border-[#000000] sm:border-none font-['Inter'] text-[14px] font-semibold text-[#000000] sm:text-[#5c5f60] sm:hover:text-[#000000] sm:underline transition-colors uppercase tracking-widest"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}