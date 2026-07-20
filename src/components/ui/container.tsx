import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}
