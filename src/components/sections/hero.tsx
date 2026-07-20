import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { CvAction } from "@/components/ui/cv-action";
import { GlassButton } from "@/components/ui/glass-button";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[min(940px,100svh)] flex-col justify-center pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-semantic-success/30 bg-semantic-success/10 px-3 py-1.5 text-xs font-bold text-semantic-success">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-semantic-success" />
        {profile.availability}
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div>
          <p className="mb-5 text-xs font-bold tracking-[0.12em] text-muted">{profile.roles}</p>
          <h1 className="max-w-5xl text-[clamp(2.75rem,7.5vw,6rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton href="#projects" variant="primary">
              View Projects <ArrowDownRight aria-hidden="true" className="size-4" />
            </GlassButton>
            <CvAction />
          </div>
        </div>

        <aside className="border-y border-glass-border py-5 lg:mt-9" aria-label="Availability and profiles">
          <p className="text-sm font-semibold">Available for</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {profile.opportunityModes.map((mode) => (
              <li key={mode} className="flex items-center justify-between gap-4">
                <span>{mode}</span>
                <span aria-hidden="true" className="size-1 rounded-full bg-semantic-success" />
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 border-t border-glass-border pt-5 text-sm font-semibold">
            <a className="text-link inline-flex items-center gap-1" href={siteConfig.socials.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
            <a className="text-link inline-flex items-center gap-1" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </aside>
      </div>

      <dl className="mt-14 grid border-y border-glass-border sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline justify-between gap-4 border-b border-glass-border py-4 sm:block sm:border-r sm:px-5 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0 lg:last:pr-0">
            <dt className="max-w-40 text-xs leading-relaxed text-muted sm:mt-1">{stat.label}</dt>
            <dd className="order-first text-lg font-semibold tabular-nums sm:text-xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
