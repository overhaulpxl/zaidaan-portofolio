import React from "react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-glass-border">
      <SectionHeading>Who Is Zaidaan Zalfaa?</SectionHeading>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-[4/5] bg-glass-highlight border border-glass-border rounded-2xl flex items-center justify-center text-foreground/30 overflow-hidden">
          <span>[Portrait Photo Area]</span>
        </div>
        <div>
          <div className="space-y-6 text-lg text-foreground/80 mb-8 leading-relaxed">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {profile.capabilityTags.map(tag => (
              <span key={tag} className="text-sm px-3 py-1 bg-glass-base border border-glass-border rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
