import { ArrowDownRight } from "lucide-react";
import { CvAction } from "@/components/ui/cv-action";
import { GlassButton } from "@/components/ui/glass-button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(52rem,100svh)] flex-col justify-center pb-16 pt-32 [@media(max-height:40rem)]:pb-10 [@media(max-height:40rem)]:pt-20 sm:pb-24 sm:pt-40"
    >
      <p className="type-metadata text-muted">Personal Portfolio</p>

      <h1 className="type-display mt-5 max-w-5xl" aria-label="Zaidaan Zalfaa">
        <span className="block">ZAIDAAN</span>
        {" "}
        <span className="block">ZALFAA</span>
      </h1>

      <div className="mt-10 grid gap-8 border-t border-line-subtle pt-7 [@media(max-height:40rem)]:mt-7 [@media(max-height:40rem)]:gap-6 [@media(max-height:40rem)]:pt-5 sm:mt-12 sm:pt-9 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.72fr)] lg:items-end lg:gap-16">
        <p className="max-w-[36ch] text-[clamp(1.25rem,1.05rem+0.8vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.02em]">
          Building practical digital products, community systems, and
          automation.
        </p>

        <div>
          <p className="max-w-[44ch] text-base leading-relaxed text-muted sm:text-[1.0625rem]">
            Based in Cianjur <span aria-hidden="true">·</span> Open to on-site,
            remote, and project-based opportunities
          </p>

          <div className="mt-6 flex flex-col gap-3 [@media(max-height:40rem)]:mt-4 sm:flex-row sm:flex-wrap">
            <GlassButton href="/#work" variant="primary">
              View Selected Work
              <ArrowDownRight aria-hidden="true" className="size-4" />
            </GlassButton>
            <CvAction />
          </div>
        </div>
      </div>
    </section>
  );
}