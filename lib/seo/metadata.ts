import type { Metadata } from "next";
import site from "@/content/site.json";
import type { PageConfig } from "@/types/content";

export function generatePageMetadata(page: PageConfig): Metadata {
  const canonicalUrl = new URL(page.seo.canonicalPath, site.baseUrl).toString();
  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: canonicalUrl },
    robots: {
      index: page.seo.indexing === "index",
      follow: true,
      googleBot: {
        index: page.seo.indexing === "index",
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: page.seo.title,
      description: page.seo.description,
      siteName: site.siteName,
      images: [{ url: `${site.baseUrl}/og-image.png`, width: 1200, height: 630, alt: page.seo.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: [`${site.baseUrl}/og-image.png`]
    }
  };
}
