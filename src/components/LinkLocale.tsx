import Link from "next/link";
import React from "react";
import type { LinkProps } from "next/link";
import { cn } from "@/utils/lib/tailwind";

type Props = {
  children: React.ReactNode;
  pathname: `/${string}`;
  lang: string;
  className?: string;
} & Omit<LinkProps, "href"> &
  React.HTMLAttributes<HTMLAnchorElement>;

export default function LinkLocale({
  children,
  pathname,
  lang,
  className,
  ...props
}: Props) {
  return (
    <Link
      className={cn("align-middle", className)}
      href={`/${lang}${pathname}`}
      {...props}
    >
      {children}
    </Link>
  );
}
