import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import type { AnalyticsContext } from "@/types/analytics";
import type { LandingGuidesConfig } from "@/types/content";

type Props = {
  section: LandingGuidesConfig;
  analyticsContext?: AnalyticsContext;
};

export function CalculatorGuides({ section, analyticsContext = {} }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-700">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{section.title}</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {section.links.map((link) => (
          <TrackedInternalLink
            key={link.href}
            href={link.href}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:-translate-y-0.5"
            analyticsContext={analyticsContext}
          >
            <span className="text-base font-semibold text-slate-900">{link.title}</span>
            <span className="mt-3 block text-sm text-blue-700">Read this guide →</span>
          </TrackedInternalLink>
        ))}
      </div>
    </section>
  );
}
