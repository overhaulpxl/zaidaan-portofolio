import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = React.ComponentPropsWithoutRef<"h2">;

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-3xl font-bold mb-12", className)} {...props}>
      {children}
    </h2>
  );
}
