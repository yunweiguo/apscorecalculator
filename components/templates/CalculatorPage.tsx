import type { PageConfig } from "@/types/content";
import { ApPsychCalculator } from "@/components/calculator/ApPsychCalculator";
import { Disclaimer } from "@/components/content/Disclaimer";
import { HomepageSectionBlock } from "@/components/content/HomepageSectionBlock";
import { BuiltFor } from "@/components/landing/BuiltFor";
import { CalculatorGuides } from "@/components/landing/CalculatorGuides";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { UseCases } from "@/components/landing/UseCases";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { buildSchemas } from "@/lib/seo/schema";

export function CalculatorPage({ page }: { page: PageConfig }) {
  const analyticsContext = { pageType: page.pageType, primaryKeyword: page.seo.primaryKeyword };
  const landing = page.content.landing;

  if (!landing) {
    throw new Error(`Landing content is missing for page: ${page.slug}`);
  }

  return (
    <>
      <JsonLd data={buildSchemas(page)} />
      <main>
        <Hero
          hero={landing.hero}
          title={page.seo.h1}
          directAnswer={page.content.directAnswer}
          lastUpdated={page.freshness.lastUpdated}
          analyticsContext={analyticsContext}
        >
          <div>
            <ApPsychCalculator analyticsContext={analyticsContext} />
          </div>
          <div className="mt-6">
            <Disclaimer />
          </div>
        </Hero>
        <BuiltFor section={landing.builtFor} />
        <ProductPreview section={landing.productPreview} />
        <ProblemSolution section={landing.problemSolution} />
        <HowItWorks section={landing.howItWorks} />
        <FeatureGrid section={landing.featureGrid} />
        <UseCases section={landing.useCases} />
        <CalculatorGuides section={landing.guides} analyticsContext={analyticsContext} />
        {page.content.sections.map((section) => (
          <HomepageSectionBlock key={section.id} section={section} />
        ))}
        <FAQSection faqs={page.content.faqs} analyticsContext={analyticsContext} />
        <RelatedLinks page={page} />
        <FinalCTA section={landing.finalCta} analyticsContext={analyticsContext} />
      </main>
    </>
  );
}
