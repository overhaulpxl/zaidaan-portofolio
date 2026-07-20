import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export function ToolsSection() {
  return (
    <section className="py-24 border-t border-glass-border">
      <SectionHeading>Tools & Platforms</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-foreground/50 italic">[Tools grid from tools.ts]</div>
      </div>
    </section>
  );
}
