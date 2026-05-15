"use client";

import Link from "next/link";
import { getFooterRelatedLinks } from "@/lib/seo/internal-links";
import type { PageConfig } from "@/types/content";
import { trackEvent } from "@/lib/analytics/events";

type Props = { page: PageConfig };

export function RelatedLinks({ page }: Props) {
  const links = getFooterRelatedLinks(page);
  if (!links.length) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 pb-14">
      <h2 className="text-xl font-semibold">Related AP Psych tools</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-slate-200 bg-white p-4 font-medium text-blue-700 shadow-sm hover:border-blue-300"
            onClick={() => trackEvent("internal_link_clicked", { pagePath: window.location.pathname, linkHref: link.href })}
          >
            {link.anchor} →
          </Link>
        ))}
      </div>
    </section>
  );
}
