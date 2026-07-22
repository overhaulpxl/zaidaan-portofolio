"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
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

    const email = siteConfig.contact.email;
    let success = false;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        success = true;
      } catch {
        // Native fallback triggers below
      }
    }

    if (!success) {
      const activeElement = document.activeElement as HTMLElement | null;
      const textArea = document.createElement("textarea");
      textArea.value = email;

      // Keep off-screen to avoid layout shifts or scrolling
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "-9999px";
      textArea.style.width = "2em";
      textArea.style.height = "2em";
      textArea.style.padding = "0";
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";

      document.body.appendChild(textArea);
      const selection = document.getSelection();
      const previousRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

      textArea.focus();
      textArea.select();
      try {
        success = document.execCommand("copy");
      } catch {
        success = false;
      } finally {
        document.body.removeChild(textArea);
        if (previousRange && selection) {
          selection.removeAllRanges();
          selection.addRange(previousRange);
        }
        if (activeElement && typeof activeElement.focus === "function") {
          activeElement.focus({ preventScroll: true });
        }
      }
    }

    setFeedback(success ? "Copied" : "Copy failed");
    timeoutRef.current = setTimeout(() => setFeedback(""), 2000);
  }

  const copied = feedback === "Copied";

  return (
    <div className="grid gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start">
      <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:gap-5">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-85 sm:flex-1"
        >
          Message on WhatsApp
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-glass-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:bg-glass-highlight sm:flex-1"
        >
          Send an Email
        </a>
      </div>

      <div className="flex flex-col gap-4 border-t border-glass-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${siteConfig.contact.email}`} className="text-link text-base font-medium break-all">
              {siteConfig.contact.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="focus-ring inline-flex min-h-8 items-center justify-center gap-1.5 rounded-md border border-glass-border bg-surface px-3 text-xs font-semibold text-foreground transition-colors hover:bg-glass-highlight"
            >
              {copied ? <Check aria-hidden="true" className="size-3" /> : <Copy aria-hidden="true" className="size-3" />}
              {copied ? "Copied" : "Copy"}
            </button>
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
              {feedback}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Location</p>
          <p className="text-base font-medium text-foreground">{siteConfig.location.label}</p>
        </div>
      </div>
    </div>
  );
}
