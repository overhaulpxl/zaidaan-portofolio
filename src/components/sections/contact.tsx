import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-glass-border">
      <SectionHeading className="mb-6">Let&apos;s work together.</SectionHeading>
      <p className="text-xl text-foreground/70 max-w-2xl mb-12">
        Whether you are looking for customer service support, operational assistance, community operations, an event facilitator, entry-level IT support, or help with a digital project, feel free to reach out.
      </p>

      <div className="flex flex-wrap gap-6">
        <a
          href="https://wa.me/6285793719676?text=Hello Zaidaan, I found your portfolio and would like to discuss an opportunity."
          className="bg-semantic-success text-white px-8 py-4 rounded-full font-medium hover:bg-semantic-success/90 transition-colors inline-flex items-center"
        >
          Chat on WhatsApp
        </a>
        <a
          href="mailto:zaidaan1337@gmail.com"
          className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
}
