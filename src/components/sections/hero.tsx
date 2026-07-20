import React from "react";
import { profile } from "@/content/profile";
import { GlassButton } from "@/components/ui/glass-button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-24 pb-12">
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-semantic-success/30 bg-semantic-success/10 text-semantic-success text-xs font-semibold mb-6 w-max">
        <span className="w-2 h-2 rounded-full bg-semantic-success mr-2"></span>
        {profile.availability}
      </div>

      <div className="text-xs font-bold tracking-widest uppercase text-foreground/50 mb-4">
        {profile.roles}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
        {profile.headline}
      </h1>

      <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-12 leading-relaxed">
        {profile.introduction}
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-16">
        <GlassButton href="#projects" variant="primary">
          View Projects
        </GlassButton>
        <GlassButton href="/documents/Zaidaan_Zalfaa_CV.pdf" variant="secondary">
          Download CV
        </GlassButton>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-glass-border">
        {profile.stats.map(stat => (
          <div key={stat.label}>
            <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-foreground/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
