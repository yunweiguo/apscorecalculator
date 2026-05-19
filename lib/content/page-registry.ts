import homepage from "@/content/pages/homepage.json";
import curve from "@/content/pages/ap-psych-curve.json";
import frqCalculator from "@/content/pages/ap-psych-frq-score-calculator.json";
import mcqCalculator from "@/content/pages/ap-psych-mcq-score-calculator.json";
import targetFive from "@/content/pages/what-score-do-you-need-to-get-a-5.json";
import missed from "@/content/pages/how-many-questions-can-you-miss.json";
import distribution from "@/content/pages/ap-psych-score-distribution.json";
import didIPass from "@/content/pages/did-i-pass-ap-psych.json";
import type { PageConfig } from "@/types/content";

const pages = [homepage, curve, frqCalculator, mcqCalculator, targetFive, missed, distribution, didIPass] as PageConfig[];

export function getAllPages(): PageConfig[] {
  return pages;
}

export function getIndexablePages(): PageConfig[] {
  return pages.filter((page) => page.seo.indexing === "index");
}

export function getPageBySlug(slug: string): PageConfig | undefined {
  if (slug === "" || slug === "homepage") return pages.find((page) => page.url === "/");
  return pages.find((page) => page.slug === slug || page.url === `/${slug}`);
}

export function getDynamicPageSlugs(): string[] {
  return pages.filter((page) => page.url !== "/").map((page) => page.url.replace(/^\//, ""));
}
