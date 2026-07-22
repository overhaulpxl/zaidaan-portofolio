import { ArrowUp } from "lucide-react";
import { SiGithub, SiLinktree } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border bg-surface py-10 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-base font-semibold tracking-[-0.01em] text-foreground">{siteConfig.name}</p>
            <p className="text-sm font-medium text-muted">{siteConfig.applicationName}</p>
            <p className="mt-2 text-sm text-muted">{siteConfig.location.label}</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
            <nav className="flex items-center gap-4" aria-label="Social profiles">
              <a
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-glass-highlight hover:text-foreground"
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin aria-hidden="true" className="size-5" />
              </a>
              <a
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-glass-highlight hover:text-foreground"
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <SiGithub aria-hidden="true" className="size-5" />
              </a>
              <a
                className="focus-ring inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-glass-highlight hover:text-foreground"
                href={siteConfig.socials.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree"
                title="Linktree"
              >
                <SiLinktree aria-hidden="true" className="size-5" />
              </a>
            </nav>

            <a className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-foreground" href="#top">
              Back to top <ArrowUp aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-glass-border pt-6 text-sm text-muted">
          <p>© {year} {siteConfig.name}</p>
        </div>
      </Container>
    </footer>
  );
}
