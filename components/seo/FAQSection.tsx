"use client";

import type { FAQItem } from "@/types/content";
import { trackEvent } from "@/lib/analytics/events";
import type { AnalyticsContext } from "@/types/analytics";

type Props = { faqs: FAQItem[]; analyticsContext?: AnalyticsContext };

export function FAQSection({ faqs, analyticsContext = {} }: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
      <div className="mt-5 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            onToggle={(event) => {
              if ((event.currentTarget as HTMLDetailsElement).open) {
                trackEvent("faq_expanded", { pagePath: window.location.pathname, ...analyticsContext, faqQuestion: faq.question });
              }
            }}
          >
            <summary className="cursor-pointer font-medium text-slate-900">{faq.question}</summary>
            <p className="mt-3 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
