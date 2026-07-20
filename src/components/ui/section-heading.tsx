import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = React.ComponentPropsWithoutRef<"h2">;

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "mb-10 max-w-4xl text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.035em] sm:mb-12",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
