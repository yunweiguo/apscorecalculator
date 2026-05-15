import { getAllPages } from "../lib/content/page-registry";

const pages = getAllPages();
const urls = new Set(pages.map((page) => page.url));

for (const page of pages) {
  for (const url of page.internalLinks.related) {
    if (!urls.has(url)) throw new Error(`${page.url} links to missing page: ${url}`);
  }
  for (const link of page.internalLinks.required) {
    if (!urls.has(link.href)) throw new Error(`${page.url} links to missing page: ${link.href}`);
  }
}

console.log("Internal link validation passed.");
