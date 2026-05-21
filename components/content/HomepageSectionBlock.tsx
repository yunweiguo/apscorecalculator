import subject from "@/content/subjects/ap-psychology.json";
import { TrackedInternalLink } from "@/components/analytics/TrackedInternalLink";
import type { ContentSection } from "@/types/content";

const apPsychSubject = subject;
const estimatedBands = apPsychSubject.scoring.estimatedScoreBands;

const scenarioCards = [
  {
    title: "Strong MCQ, average FRQ",
    description:
      "If your multiple-choice score is doing most of the work, average FRQs can still leave you in a solid range. This is the most common path to a 4 or 5 estimate because the MCQ section carries about two-thirds of the weighted composite."
  },
  {
    title: "Average MCQ, strong FRQ",
    description:
      "Strong FRQs can lift an otherwise middle-of-the-pack MCQ result. This matters most when you are near the 3 or 4 cutoff, because a few extra FRQ points can change the estimate more than students expect."
  },
  {
    title: "Weak FRQ, still aiming for 5",
    description:
      "A weak FRQ set does not automatically eliminate a 5, but it usually means you need a clear MCQ cushion. Use the reverse planner to test whether your multiple-choice score is strong enough to absorb a conservative FRQ outcome."
  },
  {
    title: "Trying to reach a 3",
    description:
      "For students targeting a passing score, the question is usually whether the combined result clears the 3 range. Balanced performance on both sections often matters more than being exceptional in only one section."
  }
];

const calculatorGuideLinks = [
  {
    href: "/",
    title: "Full AP Psych Score Calculator",
    description: "Use the main calculator when you want a complete MCQ + FRQ estimate from 1 to 5."
  },
  {
    href: "/ap-psych-frq-score-calculator",
    title: "FRQ impact tool",
    description: "Use this when you want to see how free-response points change a borderline score."
  },
  {
    href: "/ap-psych-mcq-score-calculator",
    title: "MCQ impact tool",
    description: "Use this when you want to know how your multiple-choice accuracy drives the estimate."
  },
  {
    href: "/what-score-do-you-need-to-get-a-5",
    title: "Target 5 planning",
    description: "Use this when your main question is what score range usually puts you in 5 territory."
  },
  {
    href: "/how-many-questions-can-you-miss",
    title: "Missed-question planning",
    description: "Use this when you want to translate missed MCQs into likely score pressure."
  },
  {
    href: "/ap-psych-curve",
    title: "Curve explanation",
    description: "Use this when you want context on estimated raw-to-score conversion instead of one prediction."
  },
  {
    href: "/ap-psych-score-distribution",
    title: "Score distribution context",
    description: "Use this when you want to compare your estimate with broader pass-rate and 5-rate context."
  },
  {
    href: "/did-i-pass-ap-psych",
    title: "Passing-score check",
    description: "Use this when your main question is whether your current range is likely above a 3."
  }
];

export function HomepageSectionBlock({ section }: { section: ContentSection }) {
  if (section.id === "scoring-quick-reference") {
    const mcqWeight = (apPsychSubject.scoring.weights.mcq * 100).toFixed(1);
    const frqWeight = (apPsychSubject.scoring.weights.frq * 100).toFixed(1);
    const score5 = estimatedBands.find((band) => band.score === 5);
    const score4 = estimatedBands.find((band) => band.score === 4);
    const score3 = estimatedBands.find((band) => band.score === 3);

    return (
      <section className="mx-auto max-w-3xl px-4 py-7">
        <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
        <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
            <div>Reference point</div>
            <div>Estimate</div>
          </div>
          <div className="divide-y divide-slate-200 text-sm leading-6 text-slate-700">
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>MCQ questions</div>
              <div>{apPsychSubject.scoring.mcqMax}</div>
            </div>
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>FRQ points</div>
              <div>{apPsychSubject.scoring.frqMax}</div>
            </div>
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>Estimated MCQ weight</div>
              <div>about {mcqWeight}%</div>
            </div>
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>Estimated FRQ weight</div>
              <div>about {frqWeight}%</div>
            </div>
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>Estimated 5 range</div>
              <div>around {score5?.minPercent}%+ composite</div>
            </div>
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>Estimated 4 range</div>
              <div>around {score4?.minPercent}% to {Math.floor(score4?.maxPercent ?? 0)}%</div>
            </div>
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] px-4 py-3">
              <div>Estimated 3 range</div>
              <div>around {score3?.minPercent}% to {Math.floor(score3?.maxPercent ?? 0)}%</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.id === "scoring-works") {
    const mcqWeight = Math.round(apPsychSubject.scoring.weights.mcq * 100);
    const frqWeight = Math.round(apPsychSubject.scoring.weights.frq * 100);

    return (
      <section className="mx-auto max-w-3xl px-4 py-7">
        <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
        <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">MCQ weight</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{mcqWeight}%</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Your multiple-choice score is based on correct answers out of {apPsychSubject.scoring.mcqMax}. It carries the larger share of the estimate, so a strong MCQ result creates the biggest cushion.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">FRQ weight</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{frqWeight}%</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              The two FRQs combine for {apPsychSubject.scoring.frqMax} total points. They make up the remaining share of the estimate and often decide whether a borderline score stays put or moves up.
            </p>
          </div>
        </div>
        <div className="mt-5 rounded-2xl bg-slate-50 p-5">
          <p className="text-sm leading-6 text-slate-700">
            In practice, this means MCQ strength usually sets your ceiling, while FRQ quality often determines how safe that estimate feels. If you are near a cutoff, small FRQ changes can still matter.
          </p>
        </div>
      </section>
    );
  }

  if (section.id === "common-scenarios") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-7">
        <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
        <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {scenarioCards.map((scenario) => (
            <article key={scenario.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{scenario.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.description}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section.id === "which-calculator-should-you-use") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-7">
        <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
        <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {calculatorGuideLinks.map((link) => (
            <TrackedInternalLink
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300"
              analyticsContext={{ pageType: "calculator", primaryKeyword: apPsychSubject.keywords.primary }}
            >
              <span className="block text-lg font-semibold text-slate-900">{link.title}</span>
              <span className="mt-3 block text-sm leading-6 text-slate-600">{link.description}</span>
            </TrackedInternalLink>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-7">
      <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
      <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
    </section>
  );
}
