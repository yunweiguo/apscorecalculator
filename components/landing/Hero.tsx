import type { ReactNode } from "react";
import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import type { AnalyticsContext } from "@/types/analytics";
import type { LandingHeroConfig } from "@/types/content";

type Props = {
  hero: LandingHeroConfig;
  title: string;
  directAnswer: string;
  lastUpdated: string;
  analyticsContext?: AnalyticsContext;
  children?: ReactNode;
};

export function Hero({ hero, title, directAnswer, lastUpdated, analyticsContext = {}, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-white">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
            <span>{hero.eyebrow}</span>
            <span className="text-blue-300">•</span>
            <span>Updated {lastUpdated}</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {hero.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{directAnswer}</p>
          <p className="mt-4 text-sm font-medium text-slate-500">{hero.metaItems.join(" • ")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedInternalLink
              href={hero.primaryCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              analyticsContext={analyticsContext}
            >
              {hero.primaryCtaLabel}
            </TrackedInternalLink>
            <TrackedInternalLink
              href={hero.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              analyticsContext={analyticsContext}
            >
              {hero.secondaryCtaLabel}
            </TrackedInternalLink>
          </div>
        </div>
          <div id="calculator" className="scroll-mt-24">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-blue-700">{hero.calculatorLabel}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{hero.calculatorHeading}</h2>
              <div className="mt-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
