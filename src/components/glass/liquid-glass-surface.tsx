"use client";

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type GlassContext = "auto" | "light" | "dark";
type GlassStrength = "subtle" | "standard" | "prominent";

interface LiquidGlassSurfaceProps extends React.ComponentPropsWithoutRef<"div"> {
  context?: GlassContext;
  cornerRadius?: number;
  fallbackClassName?: string;
  intensity?: number;
  pointerReactive?: boolean;
  strength?: GlassStrength;
}

interface EnhancementBoundaryState {
  failed: boolean;
}

interface EnhancementEnvironment {
  canEnhance: boolean;
  isDark: boolean;
  mounted: boolean;
}

type LiquidGlassComponent = (typeof import("liquid-glass-react"))["default"];

let cachedLiquidGlassComponent: LiquidGlassComponent | null | undefined;
let liquidGlassImportPromise: Promise<LiquidGlassComponent | null> | null = null;

function isLiquidGlassComponent(value: unknown): value is LiquidGlassComponent {
  return (
    typeof value === "function" ||
    (typeof value === "object" && value !== null)
  );
}

function loadLiquidGlassEnhancement(): Promise<LiquidGlassComponent | null> {
  if (cachedLiquidGlassComponent !== undefined) {
    return Promise.resolve(cachedLiquidGlassComponent);
  }

  if (liquidGlassImportPromise === null) {
    liquidGlassImportPromise = import("liquid-glass-react")
      .then((module) => {
        const component = isLiquidGlassComponent(module.default)
          ? module.default
          : null;

        cachedLiquidGlassComponent = component;
        return component;
      })
      .catch(() => {
        cachedLiquidGlassComponent = null;
        return null;
      });
  }

  return liquidGlassImportPromise;
}

const STATIC_MOUSE_POSITION = { x: 0, y: 0 } as const;
const STATIC_MOUSE_OFFSET = { x: 0, y: 0 } as const;

const MATERIAL_PRESETS: Record<
  GlassStrength,
  {
    aberrationIntensity: number;
    blurAmount: number;
    displacementScale: number;
    elasticity: number;
    saturation: number;
  }
> = {
  subtle: {
    aberrationIntensity: 0.08,
    blurAmount: 0.06,
    displacementScale: 6,
    elasticity: 0,
    saturation: 104,
  },
  standard: {
    aberrationIntensity: 0.15,
    blurAmount: 0.07,
    displacementScale: 10,
    elasticity: 0.02,
    saturation: 106,
  },
  prominent: {
    aberrationIntensity: 0.25,
    blurAmount: 0.08,
    displacementScale: 16,
    elasticity: 0.04,
    saturation: 108,
  },
};

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

export function LiquidGlassSurface({
  children,
  className,
  context = "auto",
  cornerRadius = 16,
  fallbackClassName,
  intensity,
  pointerReactive = false,
  strength = "subtle",
  ...props
}: LiquidGlassSurfaceProps) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const enhancementRef = useRef<HTMLDivElement>(null);
  const enhancementImageId = `liquid-glass-map-${useId().replace(/:/g, "")}`;
  const [environment, setEnvironment] = useState<EnhancementEnvironment>({
    canEnhance: false,
    isDark: false,
    mounted: false,
  });
  const [LiquidGlassEnhancement, setLiquidGlassEnhancement] =
    useState<LiquidGlassComponent | null>(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedTransparencyQuery = window.matchMedia(
      "(prefers-reduced-transparency: reduce)"
    );
    const increasedContrastQuery = window.matchMedia("(prefers-contrast: more)");
    const forcedColorsQuery = window.matchMedia("(forced-colors: active)");
    const mediaQueries = [
      darkQuery,
      reducedMotionQuery,
      reducedTransparencyQuery,
      increasedContrastQuery,
      forcedColorsQuery,
    ];
    let isIntersecting = typeof IntersectionObserver === "undefined";

    const updateEnvironment = () => {
      const supportsBackdropFilter =
        typeof CSS !== "undefined" &&
        (CSS.supports("backdrop-filter", "blur(1px)") ||
          CSS.supports("-webkit-backdrop-filter", "blur(1px)"));

      setEnvironment({
        canEnhance:
          isIntersecting &&
          document.visibilityState === "visible" &&
          supportsBackdropFilter &&
          !reducedMotionQuery.matches &&
          !reducedTransparencyQuery.matches &&
          !increasedContrastQuery.matches &&
          !forcedColorsQuery.matches,
        isDark: darkQuery.matches,
        mounted: true,
      });
    };

    const intersectionObserver =
      surface && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => {
              isIntersecting = entry.isIntersecting;
              updateEnvironment();
            },
            { rootMargin: "96px" }
          )
        : null;

    intersectionObserver?.observe(surface as Element);
    mediaQueries.forEach((query) => query.addEventListener("change", updateEnvironment));
    document.addEventListener("visibilitychange", updateEnvironment);
    updateEnvironment();

    return () => {
      intersectionObserver?.disconnect();
      mediaQueries.forEach((query) => query.removeEventListener("change", updateEnvironment));
      document.removeEventListener("visibilitychange", updateEnvironment);
    };
  }, []);

  const resolvedContext = environment.mounted
    ? context === "auto"
      ? environment.isDark
        ? "dark"
        : "light"
      : context
    : null;
  const enhancementEnabled = intensity === undefined || intensity > 0;
  const material = MATERIAL_PRESETS[strength];
  const renderEnhancement =
    enhancementEnabled && environment.canEnhance && resolvedContext !== null;

  useEffect(() => {
    let isCurrent = true;

    if (!renderEnhancement || LiquidGlassEnhancement !== null) {
      return () => {
        isCurrent = false;
      };
    }

    void loadLiquidGlassEnhancement().then((component) => {
      if (!isCurrent || component === null) {
        return;
      }

      setLiquidGlassEnhancement(() => component);
    });

    return () => {
      isCurrent = false;
    };
  }, [LiquidGlassEnhancement, renderEnhancement]);

  useLayoutEffect(() => {
    const image = enhancementRef.current?.querySelector("feImage#feimage");
    image?.setAttribute("id", enhancementImageId);
  }, [LiquidGlassEnhancement, enhancementImageId, renderEnhancement]);

  return (
    <div
      ref={surfaceRef}
      className={cn("liquid-glass-surface", fallbackClassName, className)}
      data-glass-context={context}
      data-glass-strength={strength}
      data-pointer-reactive={pointerReactive ? "true" : "false"}
      {...props}
    >
      {renderEnhancement && LiquidGlassEnhancement !== null && (
        <EnhancementBoundary>
          <div
            ref={enhancementRef}
            className="liquid-glass-enhancement"
            aria-hidden="true"
          >
            <LiquidGlassEnhancement
              className="liquid-glass-effect"
              displacementScale={material.displacementScale}
              aberrationIntensity={material.aberrationIntensity}
              blurAmount={material.blurAmount}
              saturation={material.saturation}
              elasticity={pointerReactive ? material.elasticity : 0}
              cornerRadius={cornerRadius}
              padding="0px"
              mode="standard"
              overLight={resolvedContext === "light"}
              mouseContainer={pointerReactive ? surfaceRef : undefined}
              globalMousePos={pointerReactive ? undefined : STATIC_MOUSE_POSITION}
              mouseOffset={pointerReactive ? undefined : STATIC_MOUSE_OFFSET}
            >
              <span className="block h-full w-full" aria-hidden="true" />
            </LiquidGlassEnhancement>
          </div>
        </EnhancementBoundary>
      )}
      <div className="liquid-glass-content">{children}</div>
    </div>
  );
}
