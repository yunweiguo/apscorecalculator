import site from "@/content/site.json";
import type { PageConfig } from "@/types/content";

export function buildSchemas(page: PageConfig): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [];
  if (page.schema.includes("WebPage")) schemas.push(buildWebPageSchema(page));
  if (page.schema.includes("SoftwareApplication")) schemas.push(buildSoftwareApplicationSchema(page));
  if (page.schema.includes("FAQPage")) schemas.push(buildFAQPageSchema(page));
  if (page.schema.includes("BreadcrumbList")) schemas.push(buildBreadcrumbSchema(page));
  if (page.schema.includes("Article")) schemas.push(buildArticleSchema(page));
  return schemas;
}

function buildWebPageSchema(page: PageConfig) {
  return { "@context": "https://schema.org", "@type": "WebPage", name: page.seo.h1, url: `${site.baseUrl}${page.url}`, description: page.seo.description };
}

function buildSoftwareApplicationSchema(page: PageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: page.seo.h1,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: `${site.baseUrl}${page.url}`,
    description: page.seo.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };
}

function buildFAQPageSchema(page: PageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

function buildBreadcrumbSchema(page: PageConfig) {
  const items: Record<string, unknown>[] = [{ "@type": "ListItem", position: 1, name: "Home", item: site.baseUrl }];
  if (page.url !== "/") items.push({ "@type": "ListItem", position: 2, name: page.seo.h1, item: `${site.baseUrl}${page.url}` });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

function buildArticleSchema(page: PageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.seo.h1,
    description: page.seo.description,
    dateModified: page.freshness.lastUpdated,
    datePublished: page.freshness.lastUpdated,
    author: { "@type": "Organization", name: site.author },
    mainEntityOfPage: `${site.baseUrl}${page.url}`
  };
}
