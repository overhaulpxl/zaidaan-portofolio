import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border py-10 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <a href="#home" className="focus-ring inline-flex min-h-11 items-center rounded-md text-2xl font-semibold tracking-[-0.03em]">Zaidaan</a>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{profile.roles}</p>
            <p className="mt-1 text-sm text-muted">{profile.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold" aria-label="Footer navigation">
            <a className="text-link" href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-link" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href={siteConfig.socials.linktree} target="_blank" rel="noreferrer">Linktree</a>
            <a className="text-link inline-flex items-center gap-1" href="#home">Back to top <ArrowUp aria-hidden="true" className="size-3.5" /></a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-glass-border pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zaidaan Zalfaa. All rights reserved.</p>
          <a className="text-link w-fit" href={`https://${siteConfig.contact.website}`} target="_blank" rel="noreferrer">{siteConfig.contact.website}</a>
        </div>
      </Container>
    </footer>
  );
}
