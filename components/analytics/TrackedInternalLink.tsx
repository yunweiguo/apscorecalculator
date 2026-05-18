"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics/events";
import type { AnalyticsContext } from "@/types/analytics";

type Props = {
  href: string;
  className?: string;
  analyticsContext?: AnalyticsContext;
  children: ReactNode;
};

export function TrackedInternalLink({ href, className, analyticsContext = {}, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("internal_link_clicked", { pagePath: window.location.pathname, ...analyticsContext, linkHref: href })}
    >
      {children}
    </Link>
  );
}
