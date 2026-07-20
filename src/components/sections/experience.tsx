import React from "react";
import { experiences } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-glass-border">
      <SectionHeading>Work Experience</SectionHeading>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="text-sm font-medium text-foreground/50 mb-1">{exp.period}</div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <div className="text-foreground/70">{exp.role}</div>
            </div>
            <div className="md:w-2/3">
              <p className="text-sm text-foreground/60 mb-4">{exp.context}</p>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
