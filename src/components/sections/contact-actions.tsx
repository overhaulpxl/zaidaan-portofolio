"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/content/site";

export function ContactActions() {
  const [feedback, setFeedback] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function copyEmail() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setFeedback("Email copied");
    } catch {
      setFeedback("Unable to copy. The email address remains visible.");
    }

    timeoutRef.current = setTimeout(() => setFeedback(""), 4000);
  }

  const copied = feedback === "Email copied";

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard className="contact-card" intensity={0.1}>
          <div className="flex h-full flex-col p-6 sm:p-7">
            <MessageCircle aria-hidden="true" className="mb-8 size-6 text-semantic-success" />
            <p className="mb-2 text-sm font-semibold text-muted">WhatsApp</p>
            <p className="text-xl font-semibold">{siteConfig.contact.phoneDisplay}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Start a conversation using the approved introductory message.
            </p>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-semantic-success px-5 text-sm font-semibold text-white transition-colors hover:bg-semantic-success/90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </GlassCard>

        <GlassCard className="contact-card" intensity={0.1}>
          <div className="flex h-full flex-col p-6 sm:p-7">
            <Mail aria-hidden="true" className="mb-8 size-6" />
            <p className="mb-2 text-sm font-semibold text-muted">Email</p>
            <p className="break-all text-xl font-semibold">{siteConfig.contact.email}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Send a message directly or copy the address for later.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                Send an Email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-glass-border px-5 text-sm font-semibold transition-colors hover:bg-glass-highlight"
              >
                {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
                {copied ? "Email copied" : "Copy Email"}
              </button>
            </div>
          </div>
        </GlassCard>
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {feedback}
      </p>

      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold" aria-label="Professional profiles">
        <a className="text-link" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="text-link" href={siteConfig.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="text-link" href={siteConfig.socials.linktree} target="_blank" rel="noreferrer">Linktree</a>
      </nav>
    </div>
  );
}
