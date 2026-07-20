import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <section id="certifications" className="py-24 border-t border-glass-border">
      <SectionHeading>Education, Certifications & Organization</SectionHeading>
      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="text-foreground/50 italic">[Education details]</div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="text-foreground/50 italic">[Certificates grid]</div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Organization Experience</h3>
          <div className="text-foreground/50 italic">[Organizations details]</div>
        </div>
      </div>
    </section>
  );
}
