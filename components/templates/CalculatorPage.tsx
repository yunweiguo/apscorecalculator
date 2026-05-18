import type { PageConfig } from "@/types/content";
import { ApPsychCalculator } from "@/components/calculator/ApPsychCalculator";
import { Disclaimer } from "@/components/content/Disclaimer";
import { HomepageSectionBlock } from "@/components/content/HomepageSectionBlock";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { buildSchemas } from "@/lib/seo/schema";

export function CalculatorPage({ page }: { page: PageConfig }) {
  const analyticsContext = { pageType: page.pageType, primaryKeyword: page.seo.primaryKeyword };

  return (
    <>
      <JsonLd data={buildSchemas(page)} />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <p className="text-sm font-medium text-blue-700">Updated {page.freshness.lastUpdated}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{page.seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{page.content.directAnswer}</p>
          <div className="mt-8"><ApPsychCalculator analyticsContext={analyticsContext} /></div>
          <div className="mt-6"><Disclaimer /></div>
        </section>
        {page.content.sections.map((section) => (
          <HomepageSectionBlock key={section.id} section={section} />
        ))}
        <FAQSection faqs={page.content.faqs} analyticsContext={analyticsContext} />
        <RelatedLinks page={page} />
      </main>
    </>
  );
}
