import { ContactActions } from "@/components/sections/contact-actions";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-glass-border py-20 sm:py-28">
      <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_27rem] lg:items-end">
        <SectionHeading className="mb-0" tabIndex={-1} data-section-heading>
          Let&apos;s work together.
        </SectionHeading>
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:pb-1">
          Whether you are looking for customer service support, operational assistance, community operations, an event facilitator, entry-level IT support, or help with a digital project, feel free to reach out.
        </p>
      </div>
      <ContactActions />
    </section>
  );
}
