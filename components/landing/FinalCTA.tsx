import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import type { AnalyticsContext } from "@/types/analytics";
import type { LandingFinalCtaConfig } from "@/types/content";

type Props = {
  section: LandingFinalCtaConfig;
  analyticsContext?: AnalyticsContext;
};

export function FinalCTA({ section, analyticsContext = {} }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 text-white shadow-sm sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-blue-100">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{section.title}</h2>
          <p className="mt-4 text-base leading-7 text-blue-50">{section.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedInternalLink
              href={section.primaryCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/60"
              analyticsContext={analyticsContext}
            >
              {section.primaryCtaLabel}
            </TrackedInternalLink>
            <TrackedInternalLink
              href={section.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
              analyticsContext={analyticsContext}
            >
              {section.secondaryCtaLabel}
            </TrackedInternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
