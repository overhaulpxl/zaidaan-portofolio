import { SectionHeading } from "@/components/ui/section-heading";
import { ContactActions } from "@/components/sections/contact-actions";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-glass-border py-20 sm:py-28">
      <div className="mb-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_27rem] lg:items-end">
        <SectionHeading className="mb-0" tabIndex={-1} data-section-heading>
          LET’S WORK TOGETHER
        </SectionHeading>
        <p className="max-w-2xl text-base leading-relaxed text-muted lg:pb-1">
          Have a role, project, or collaboration in mind? I’m open to on-site, remote, and project-based opportunities.
        </p>
      </div>
      <ContactActions />
    </section>
  );
}
