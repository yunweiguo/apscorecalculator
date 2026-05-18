import { getAllPages } from "../lib/content/page-registry";

const pages = getAllPages();
const urls = new Set(pages.map((page) => page.url));
const allowSelfRelatedLinks = new Set<string>();

for (const page of pages) {
  for (const link of page.internalLinks.required) {
    if (!urls.has(link.href)) throw new Error(`${page.url} required link points to missing page: ${link.href}`);
  }

  for (const url of page.internalLinks.related) {
    if (!urls.has(url)) throw new Error(`${page.url} related link points to missing page: ${url}`);
    if (url === page.url && !allowSelfRelatedLinks.has(page.url)) {
      throw new Error(`${page.url} should not link to itself in related links`);
    }
  }
}

console.log("Internal link validation passed.");
