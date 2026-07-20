import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "secondary";
}

export const GlassButton = React.forwardRef<HTMLAnchorElement, GlassButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-full font-medium transition-colors text-center inline-flex justify-center items-center cursor-pointer",
          variant === "primary" && "bg-foreground text-background hover:bg-foreground/90",
          variant === "secondary" && "border border-glass-border bg-glass-base hover:bg-glass-highlight",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
GlassButton.displayName = "GlassButton";
