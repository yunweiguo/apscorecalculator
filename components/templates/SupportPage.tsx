import type { PageConfig } from "@/types/content";
import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import { Disclaimer } from "@/components/content/Disclaimer";
import { SupportPageSectionBlock } from "@/components/content/SupportPageSectionBlock";
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
            <p className="text-sm leading-6 text-slate-700">
              Run your own MCQ and FRQ scenario in{" "}
              <TrackedInternalLink href="/" className="font-semibold text-blue-700" analyticsContext={analyticsContext}>
                AP Psych Score Calculator
              </TrackedInternalLink>
              .
            </p>
          </div>
          {page.content.sections.map((section) => (
            <SupportPageSectionBlock key={section.id} page={page} section={section} />
          ))}
          <Disclaimer />
        </article>
        <FAQSection faqs={page.content.faqs} analyticsContext={analyticsContext} />
        <RelatedLinks page={page} />
      </main>
    </>
  );
}
