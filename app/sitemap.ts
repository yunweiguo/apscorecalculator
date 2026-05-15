import type { MetadataRoute } from "next";
import site from "@/content/site.json";
import { getIndexablePages } from "@/lib/content/page-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexablePages().map((page) => ({
    url: `${site.baseUrl}${page.url}`,
    lastModified: page.freshness.lastUpdated,
    changeFrequency: page.freshness.changeFrequency,
    priority: page.freshness.priority
  }));
}
