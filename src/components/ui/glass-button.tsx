import React from "react";
import { cn } from "@/lib/utils";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";

interface GlassButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "secondary";
}

export const GlassButton = React.forwardRef<HTMLAnchorElement, GlassButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    return (
      <LiquidGlassSurface
        className="inline-flex rounded-full"
        intensity={variant === "primary" ? 0.03 : 0.08}
        cornerRadius={999}
      >
        <a
          ref={ref}
          className={cn(
            "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-center text-sm font-semibold transition-opacity",
            variant === "primary" && "bg-foreground text-background hover:opacity-85",
            variant === "secondary" && "hover:bg-glass-highlight",
            className
          )}
          {...props}
        >
          {children}
        </a>
      </LiquidGlassSurface>
    );
  }
);
GlassButton.displayName = "GlassButton";
