import type { LandingProductPreviewConfig } from "@/types/content";

export function ProductPreview({ section }: { section: LandingProductPreviewConfig }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 sm:pb-14">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-blue-700">{section.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{section.title}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{section.body}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {section.highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">{highlight.title}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 p-5 shadow-sm">
          <div className="rounded-[1.6rem] border border-white/10 bg-white p-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-medium text-slate-500">{section.previewLabel}</p>
                <p className="mt-1 text-xl font-semibold text-slate-950">{section.previewTitle}</p>
              </div>
              <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{section.previewBadge}</div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {section.stats.map((stat) => (
                <PreviewStat key={stat.label} label={stat.label} value={stat.value} highlight={stat.highlight} />
              ))}
            </div>
            <div className="mt-5 rounded-3xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-500">{section.compositeLabel}</span>
                <span className="font-semibold text-slate-900">{section.compositeValue}</span>
              </div>
              <div className="mt-3 h-3 rounded-full bg-slate-200">
                <div className="h-3 w-3/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{section.compositeBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewStat({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${highlight ? "text-blue-700" : "text-slate-950"}`}>{value}</p>
    </div>
  );
}
