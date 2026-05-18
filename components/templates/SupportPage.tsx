import type { PageConfig } from "@/types/content";
import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import { Disclaimer } from "@/components/content/Disclaimer";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { buildSchemas } from "@/lib/seo/schema";

export function SupportPage({ page }: { page: PageConfig }) {
  const analyticsContext = { pageType: page.pageType, primaryKeyword: page.seo.primaryKeyword };

  return (
    <>
      <JsonLd data={buildSchemas(page)} />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
          <p className="text-sm font-medium text-blue-700">Updated {page.freshness.lastUpdated}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{page.seo.h1}</h1>
          <p className="mt-6 rounded-3xl bg-white p-6 text-lg leading-8 text-slate-700 shadow-sm">{page.content.directAnswer}</p>
          <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-5">
            <TrackedInternalLink href="/" className="font-semibold text-blue-700" analyticsContext={analyticsContext}>
              Use the AP Psych Score Calculator →
            </TrackedInternalLink>
          </div>
          {page.content.sections.map((section) => (
            <section key={section.id} className="py-8">
              <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
              <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
            </section>
          ))}
          <Disclaimer />
        </article>
        <FAQSection faqs={page.content.faqs} analyticsContext={analyticsContext} />
        <RelatedLinks page={page} />
      </main>
    </>
  );
}
