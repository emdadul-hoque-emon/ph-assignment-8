"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  matchType?: "exact" | "last" | "startsWith" | "endsWith" | "includes";
  matchStyle?: string;
  className?: string;
  children: React.ReactNode;
};

const CustomLink = ({
  href,
  matchType = "exact",
  matchStyle,
  className,
  children,
}: Props) => {
  const pathname = usePathname();

  const isRouteMatches = (pathname: string, href: string): boolean => {
    const cleanPath = pathname.split("?")[0];

    if (matchType === "exact") {
      return cleanPath === href;
    }
    if (matchType === "last") {
      return cleanPath.endsWith(href);
    }
    if (matchType === "startsWith") {
      return cleanPath.startsWith(href);
    }
    if (matchType === "endsWith") {
      return cleanPath.endsWith(href);
    }
    if (matchType === "includes") {
      return cleanPath.includes(href);
    }
    return false;
  };
  return (
    <Link
      href={href}
      className={cn(
        className,
        isRouteMatches(pathname, href)
          ? matchStyle ||
              "text-primary font-semibold underline underline-offset-6"
          : "",
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
