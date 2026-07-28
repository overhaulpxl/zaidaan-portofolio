"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useRouteTransition } from "./route-transition-provider";

type TransitionLinkProps = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

function shouldUseNative(event: MouseEvent<HTMLAnchorElement>, href: string, target?: string) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return true;
  if (target === "_blank") return true;
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return true;
  if (url.hash || url.pathname === window.location.pathname) return true;
  return false;
}

export function TransitionLink({ href, onClick, target, children, ...props }: TransitionLinkProps) {
  const { start } = useRouteTransition();
  const hrefString = typeof href === "string" ? href : href.pathname?.toString() ?? "/";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || shouldUseNative(event, hrefString, target)) return;
    event.preventDefault();
    start(hrefString);
  };

  return <Link href={href} target={target} onClick={handleClick} {...props}>{children}</Link>;
}
