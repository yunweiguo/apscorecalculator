import type { LandingProblemSolutionConfig } from "@/types/content";

export function ProblemSolution({ section }: { section: LandingProblemSolutionConfig }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid gap-4 lg:grid-cols-2">
        {section.items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-700">{item.title}</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
