import { getAllPages } from "@/lib/content/page-registry";
import type { InternalLinkRule, PageConfig } from "@/types/content";

export function getRelatedLinks(page: PageConfig): InternalLinkRule[] {
  const allPages = getAllPages();
  return page.internalLinks.related
    .map((url) => {
      const target = allPages.find((candidate) => candidate.url === url);
      if (!target) return null;
      return { href: target.url, anchor: target.seo.h1, placement: "footer" as const };
    })
    .filter(Boolean) as InternalLinkRule[];
}

export function getFooterRelatedLinks(page: PageConfig): InternalLinkRule[] {
  const related = getRelatedLinks(page);
  if (page.url !== "/") {
    return [{ href: "/", anchor: "AP Psych Score Calculator", placement: "hero" }, ...related].slice(0, 6);
  }
  return related.slice(0, 8);
}
