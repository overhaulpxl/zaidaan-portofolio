import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--layout-max-width)] px-[var(--layout-gutter)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
