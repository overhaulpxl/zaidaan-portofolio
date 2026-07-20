"use client";

import React, { useSyncExternalStore } from "react";
import LiquidGlass from "liquid-glass-react";
import { cn } from "@/lib/utils";

interface LiquidGlassSurfaceProps extends React.ComponentPropsWithoutRef<"div"> {
  cornerRadius?: number;
  fallbackClassName?: string;
  intensity?: number;
}

interface EnhancementBoundaryState {
  failed: boolean;
}

class EnhancementBoundary extends React.Component<
  React.PropsWithChildren,
  EnhancementBoundaryState
> {
  state: EnhancementBoundaryState = { failed: false };

  static getDerivedStateFromError(): EnhancementBoundaryState {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function subscribeToMount() {
  return () => {};
}

function getMountSnapshot() {
  return true;
}

function getServerMountSnapshot() {
  return false;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function LiquidGlassSurface({
  children,
  className,
  cornerRadius = 16,
  fallbackClassName,
  intensity = 0.5,
  ...props
}: LiquidGlassSurfaceProps) {
  const mounted = useSyncExternalStore(
    subscribeToMount,
    getMountSnapshot,
    getServerMountSnapshot
  );
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const normalizedIntensity = Math.max(0, Math.min(1, intensity));

  return (
    <div
      className={cn(
        "liquid-glass-surface bg-glass-base border border-glass-border backdrop-blur-md",
        fallbackClassName,
        className
      )}
      {...props}
    >
      {mounted && !prefersReducedMotion && normalizedIntensity > 0 && (
        <EnhancementBoundary>
          <div className="liquid-glass-enhancement" aria-hidden="true">
            <LiquidGlass
              className="liquid-glass-effect"
              displacementScale={Math.max(1, normalizedIntensity * 24)}
              aberrationIntensity={normalizedIntensity * 0.5}
              blurAmount={0.08}
              elasticity={0}
              cornerRadius={cornerRadius}
              padding="0px"
            >
              <span className="block h-full w-full" />
            </LiquidGlass>
          </div>
        </EnhancementBoundary>
      )}
      <div className="liquid-glass-content">{children}</div>
    </div>
  );
}
