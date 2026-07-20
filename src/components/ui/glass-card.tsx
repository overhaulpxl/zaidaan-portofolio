import React from "react";
import { cn } from "@/lib/utils";
import { LiquidGlassSurface } from "@/components/glass/liquid-glass-surface";

interface GlassCardProps extends React.ComponentPropsWithoutRef<"div"> {
  intensity?: number;
}

export function GlassCard({ children, className, intensity = 0.05, ...props }: GlassCardProps) {
  return (
    <LiquidGlassSurface
      intensity={intensity}
      className={cn("rounded-2xl border border-glass-border shadow-sm", className)}
      {...props}
    >
      {children}
    </LiquidGlassSurface>
  );
}
