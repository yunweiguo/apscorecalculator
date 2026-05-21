import type { LandingFeatureGridConfig } from "@/types/content";

export function FeatureGrid({ section }: { section: LandingFeatureGridConfig }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm sm:p-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-700">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{section.title}</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {section.features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-base font-medium leading-7 text-slate-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
