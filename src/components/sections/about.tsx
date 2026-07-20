import { MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { CvAction } from "@/components/ui/cv-action";
import { GlassButton } from "@/components/ui/glass-button";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-glass-border py-20 sm:py-28">
      <SectionHeading>Who Is Zaidaan Zalfaa?</SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
        <aside className="space-y-8">
          <div className="border-y border-glass-border py-5">
            <p className="mb-2 text-sm font-semibold">Based in</p>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-muted">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {profile.location}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold">Capabilities</p>
            <ul className="flex flex-wrap gap-2">
              {profile.capabilityTags.map((tag) => (
                <li key={tag} className="rounded-full border border-glass-border px-3 py-1.5 text-xs font-semibold text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          <div className="max-w-3xl space-y-6 text-base leading-[1.8] text-muted sm:text-lg">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <CvAction />
            <GlassButton href="#contact" variant="secondary">Let&apos;s Work Together</GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}
