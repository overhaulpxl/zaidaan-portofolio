import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { siteConfig } from "@/content/site";

const iconLinkClass =
  "inline-flex size-11 shrink-0 items-center justify-center bg-transparent text-black outline-none transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-60 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-black";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-black bg-[#f1f2f3] px-[5vw] text-black">
      <div className="py-8 md:py-12">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex min-w-0 flex-col">
            <a href="#top" className="group flex items-center gap-3 hover:opacity-70 transition-opacity active:scale-95 cursor-pointer w-max" aria-label="Back to top">
              <svg className="size-5 shrink-0" viewBox="0 0 64 64" aria-hidden="true">
                <rect width="64" height="64" rx="14" fill="#000000" />
                <polygon points="13,13 29,13 13,43.4" fill="#ffffff" />
                <polygon points="33.5,13 38.5,13 18.5,51 13.5,51" fill="#ffffff" />
                <polygon points="41.5,13 46.5,13 26.5,51 21.5,51" fill="#ffffff" />
                <polygon points="51,20.6 51,51 35,51" fill="#ffffff" />
              </svg>
              <span className="whitespace-nowrap font-['Montserrat'] text-[24px] font-black uppercase tracking-wide">ZAIDAAN</span>
            </a>
            <span className="mt-2 font-['Inter'] text-[14px] text-[#5c5f60]">{siteConfig.location.label}</span>
          </div>

          <nav aria-label="Footer links" className="flex max-w-full items-center gap-3">
            <a href={siteConfig.socials.github} target="_blank" rel="me noopener noreferrer" aria-label="GitHub" title="GitHub" className={iconLinkClass}>
              <FaGithub className="size-5" aria-hidden="true" />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className={iconLinkClass}>
              <FaLinkedinIn className="size-[19px]" aria-hidden="true" />
            </a>
            <a href={siteConfig.socials.linktree} target="_blank" rel="me noopener noreferrer" aria-label="Linktree" title="Linktree" className={iconLinkClass}>
              <SiLinktree className="size-[19px]" aria-hidden="true" />
            </a>
            {siteConfig.cvUrl ? (
              <a href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer" aria-label="Download CV" title="Download CV" className={iconLinkClass}>
                <FaFileDownload className="size-[19px]" aria-hidden="true" />
              </a>
            ) : null}
          </nav>
        </div>

        <p className="mt-8 font-['Inter'] text-[12px] font-semibold uppercase tracking-widest text-[#5c5f60] md:mt-10">© {currentYear} Zaidaan Zalfaa</p>
      </div>
    </footer>
  );
}
