import { getAllPages, getIndexablePages } from "../lib/content/page-registry";

function validateSeo() {
  const pages = getAllPages();
  const urls = new Set<string>();

  for (const page of pages) {
    assert(page.seo.title, `${page.url} missing title`);
    assert(page.seo.description, `${page.url} missing description`);
    assert(page.seo.h1, `${page.url} missing h1`);
    assert(page.seo.canonicalPath, `${page.url} missing canonical`);
    if (urls.has(page.url)) throw new Error(`Duplicate URL: ${page.url}`);
    urls.add(page.url);
    if (page.seo.indexing === "index" && page.content.faqs.length < 4) throw new Error(`${page.url} should have at least 4 FAQs`);
    const linkCount = page.internalLinks.required.length + page.internalLinks.related.length;
    if (linkCount < 3) throw new Error(`${page.url} should have at least 3 internal links`);
  }

  console.log(`SEO validation passed. Indexable pages: ${getIndexablePages().length}`);
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

validateSeo();
