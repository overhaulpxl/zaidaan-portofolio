export function Footer() {
  return (
    <footer className="w-full px-[5vw] py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-[#000000] bg-[#f8f9fa] text-[#000000] mt-auto">
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">
        
        {/* Mobile-only Branding */}
        <div className="md:hidden font-['Inter'] text-[14px] font-black uppercase mb-8">
          ZAIDAAN ZALFAA
        </div>

        {/* Links */}
        <div className="w-full md:w-auto grid grid-cols-2 md:flex gap-4 md:gap-8 mb-8 md:mb-0">
          <a 
            href="https://github.com/overhaulpxl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Inter'] text-[14px] font-semibold text-[#5c5f60] hover:text-[#000000] hover:underline transition-colors uppercase border-b border-[#dadada] md:border-none pb-2 md:pb-0"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/zaidaanzalfaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Inter'] text-[14px] font-semibold text-[#5c5f60] hover:text-[#000000] hover:underline transition-colors uppercase border-b border-[#dadada] md:border-none pb-2 md:pb-0"
          >
            LinkedIn
          </a>
          <a 
            href="https://linktr.ee/zaidaanzalfaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Inter'] text-[14px] font-semibold text-[#5c5f60] hover:text-[#000000] hover:underline transition-colors uppercase border-b border-[#dadada] md:border-none pb-2 md:pb-0"
          >
            Linktree
          </a>
          <a 
            href="/documents/zaidaan-zalfaa-cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Inter'] text-[14px] font-semibold text-[#5c5f60] hover:text-[#000000] hover:underline transition-colors uppercase border-b border-[#dadada] md:border-none pb-2 md:pb-0"
          >
            CV
          </a>
        </div>

        {/* Desktop Branding / Copyright */}
        <div className="w-full md:w-auto flex justify-between items-center md:gap-8">
          <span className="hidden md:inline font-['Inter'] text-[14px] font-black uppercase">ZAIDAAN ZALFAA</span>
          <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-widest text-[#5c5f60]">© 2024</span>
        </div>
        
      </div>
    </footer>
  );
}