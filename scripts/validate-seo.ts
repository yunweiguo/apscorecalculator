import { getAllPages, getIndexablePages } from "../lib/content/page-registry";
import site from "../content/site.json";

const TITLE_WARNING_MAX = 65;
const DESCRIPTION_WARNING_MIN = 100;
const DESCRIPTION_WARNING_MAX = 170;

function validateSeo() {
  const pages = getAllPages();
  const urls = new Set<string>();
  const warnings: string[] = [];

  assert(site.baseUrl, "site.baseUrl is missing");
  assert(!isLocalOrPlaceholderUrl(site.baseUrl), `site.baseUrl must be production-ready, got: ${site.baseUrl}`);

  for (const page of pages) {
    assert(page.url, "Page missing url");
    assert(page.seo.title, `${page.url} missing title`);
    assert(page.seo.description, `${page.url} missing description`);
    assert(page.seo.h1, `${page.url} missing h1`);
    assert(page.seo.primaryKeyword, `${page.url} missing primaryKeyword`);
    assert(page.seo.canonicalPath, `${page.url} missing canonical`);
    assert(page.seo.canonicalPath === page.url, `${page.url} canonicalPath must match page.url`);
    assert(page.content.directAnswer, `${page.url} missing directAnswer`);
    assert(page.schema.length > 0, `${page.url} missing schema config`);
    if (urls.has(page.url)) throw new Error(`Duplicate URL: ${page.url}`);
    urls.add(page.url);
    if (page.seo.indexing === "index" && page.content.faqs.length < 4) throw new Error(`${page.url} should have at least 4 FAQs`);
    if (page.seo.indexing === "index" && page.url !== "/") {
      const hasHomepageLink = page.internalLinks.required.some((link) => link.href === "/");
      if (!hasHomepageLink) throw new Error(`${page.url} should link back to / in required links`);
    }
    const linkCount = page.internalLinks.required.length + page.internalLinks.related.length;
    if (linkCount < 3) throw new Error(`${page.url} should have at least 3 internal links`);

    if (page.seo.title.length > TITLE_WARNING_MAX) {
      warnings.push(`${page.url} title is ${page.seo.title.length} chars; recommended max is ${TITLE_WARNING_MAX}`);
    }
    if (page.seo.description.length < DESCRIPTION_WARNING_MIN || page.seo.description.length > DESCRIPTION_WARNING_MAX) {
      warnings.push(
        `${page.url} description is ${page.seo.description.length} chars; recommended range is ${DESCRIPTION_WARNING_MIN}-${DESCRIPTION_WARNING_MAX}`
      );
    }
  }

  for (const warning of warnings) {
    console.warn(`SEO warning: ${warning}`);
  }

  console.log(`SEO validation passed. Indexable pages: ${getIndexablePages().length}. Warnings: ${warnings.length}`);
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function isLocalOrPlaceholderUrl(value: string): boolean {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    return (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0" ||
      hostname.endsWith(".local") ||
      hostname.includes("example.") ||
      hostname.includes("yourdomain") ||
      hostname.includes("placeholder")
    );
  } catch {
    throw new Error(`site.baseUrl must be a valid URL, got: ${value}`);
  }
}

validateSeo();
