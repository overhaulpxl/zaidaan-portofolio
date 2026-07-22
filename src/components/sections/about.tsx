import { profile } from "@/content/profile";
import { CvAction } from "@/components/ui/cv-action";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-glass-border py-20 sm:py-28">
      <p className="type-metadata mb-4 text-muted">ABOUT</p>
      <SectionHeading className="mb-10 sm:mb-12">Who Is Zaidaan Zalfaa?</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.5fr)] lg:gap-16">
        <div className="max-w-[65ch]">
          <div className="space-y-6 text-base leading-[1.8] text-foreground sm:text-[1.0625rem]">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-l border-glass-border pl-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>{profile.aboutEvidence}</p>
          </div>

          <p className="mt-6 max-w-[55ch] text-sm leading-relaxed text-muted">
            {profile.aiWorkflow}
          </p>

          <p className="mt-10 text-sm font-medium text-foreground">
            {profile.location}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
            <Link
              href="/#contact"
              className="focus-ring inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-full bg-foreground px-6 text-center text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Let&apos;s Work Together
            </Link>
            <CvAction />
          </div>
        </div>

        {/* The nullable profile photo architecture goes here.
            When null, we render absolutely nothing as requested. */}
        {profile.profilePhoto !== null && (
          <div className="hidden lg:block">
            {/* Future photo implementation goes here */}
          </div>
        )}
      </div>
    </section>
  );
}