import { Download } from "lucide-react";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface CvActionProps {
  appearance?: "glass" | "text";
  className?: string;
}

export function CvAction({ appearance = "glass", className }: CvActionProps) {
  const content = (
    <span className="inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold">
      <Download aria-hidden="true" className="size-4" />
      Download CV
      {!siteConfig.cvUrl && (
        <span className="text-[0.625rem] font-bold tracking-[0.08em] text-current uppercase">
          COMING SOON
        </span>
      )}
    </span>
  );

  if (siteConfig.cvUrl) {
    const link = (
      <a
        href={siteConfig.cvUrl}
        download
        className={cn(
          "focus-ring inline-flex rounded-full",
          appearance === "text" && "hover:text-foreground/70",
          className
        )}
      >
        {content}
      </a>
    );

    return appearance === "glass" ? (
      <LiquidGlassSurface className="inline-flex rounded-full" intensity={0.08} cornerRadius={999}>
        {link}
      </LiquidGlassSurface>
    ) : (
      link
    );
  }

  const disabled = (
    <span
      role="link"
      aria-disabled="true"
      aria-label="Download CV — currently unavailable"
      tabIndex={0}
      className={cn(
        "focus-ring inline-flex cursor-not-allowed rounded-full text-foreground/50",
        className
      )}
      title="CV currently unavailable"
    >
      {content}
    </span>
  );

  return appearance === "glass" ? (
    <LiquidGlassSurface
      className="inline-flex rounded-full opacity-80"
      intensity={0.04}
      cornerRadius={999}
    >
      {disabled}
    </LiquidGlassSurface>
  ) : (
    disabled
  );
}
