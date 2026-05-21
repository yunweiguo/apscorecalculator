import type { LandingUseCasesConfig } from "@/types/content";

export function UseCases({ section }: { section: LandingUseCasesConfig }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-blue-700">{section.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{section.title}</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {section.cases.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
