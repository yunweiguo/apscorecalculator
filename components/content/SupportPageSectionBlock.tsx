import type { ContentSection, PageConfig } from "@/types/content";

type ScenarioCard = {
  title: string;
  description: string;
};

const scenarioCards: Record<string, ScenarioCard[]> = {
  "ap-psych-curve:curve-examples": [
    {
      title: "High MCQ, average FRQ",
      description: "A student with a strong MCQ base can stay in a better score band even with only average FRQs because the multiple-choice section carries more weight."
    },
    {
      title: "Middle MCQ, strong FRQ",
      description: "A student with a middle MCQ result can still move up if both FRQs are strong, especially near the 3 or 4 boundary."
    },
    {
      title: "Borderline composite",
      description: "When your estimate is near a score cutoff, a few FRQ points or a small MCQ change can matter more than students expect."
    }
  ],
  "what-score-do-you-need-to-get-a-5:example-scenarios": [
    {
      title: "Strong MCQ, average FRQ",
      description: "This is one of the more stable routes to a 5 estimate because the MCQ section gives you the cushion."
    },
    {
      title: "Average MCQ, strong FRQ",
      description: "This can still reach a 5 estimate, but the outcome is usually less comfortable and more sensitive to FRQ grading."
    },
    {
      title: "Weak FRQ, still chasing 5",
      description: "A 5 may still be possible, but you usually need a clearly stronger MCQ performance and less reliance on borderline assumptions."
    }
  ],
  "how-many-questions-can-you-miss:scenarios": [
    {
      title: "Miss 10",
      description: "Entering 65 correct usually keeps more room for a 4 or 5 estimate, even if your FRQs are only decent."
    },
    {
      title: "Miss 15",
      description: "Entering 60 correct is still workable, but your FRQ performance starts to matter more if you are aiming high."
    },
    {
      title: "Miss 20",
      description: "Entering 55 correct often puts more pressure on the FRQs, especially if you want a 5 instead of a 3 or 4."
    },
    {
      title: "Miss 25",
      description: "Entering 50 correct can still be enough for a passing estimate, but it usually leaves much less room for error."
    }
  ],
  "did-i-pass-ap-psych:borderline-scenarios": [
    {
      title: "Average MCQ, weak FRQ",
      description: "This is often the classic borderline passing case. A few FRQ points can decide whether the estimate stays at 2 or moves to 3."
    },
    {
      title: "Strong MCQ, shaky FRQ",
      description: "A stronger MCQ result can still keep you in passing range even if one FRQ felt rough."
    },
    {
      title: "Uneven sections",
      description: "If one section felt clearly better than the other, test low and high scenarios instead of assuming the weaker section ruined the whole score."
    }
  ]
};

function getParagraphs(body: string): string[] {
  return body.split("\n\n").map((part) => part.trim()).filter(Boolean);
}

export function SupportPageSectionBlock({ page, section }: { page: PageConfig; section: ContentSection }) {
  const paragraphs = getParagraphs(section.body);
  const cards = scenarioCards[`${page.slug}:${section.id}`];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
      <div className="mt-3 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-7 text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>
      {cards ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
