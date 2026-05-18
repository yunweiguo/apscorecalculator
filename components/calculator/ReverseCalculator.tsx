"use client";

import { useMemo, useState } from "react";
import { calculateReverseScore } from "@/lib/calculator/reverse-score";
import { trackEvent } from "@/lib/analytics/events";
import type { AnalyticsContext } from "@/types/analytics";

export function ReverseCalculator({ analyticsContext = {} }: { analyticsContext?: AnalyticsContext }) {
  const [target, setTarget] = useState<3 | 4 | 5>(5);
  const result = useMemo(() => calculateReverseScore({ targetScore: target }), [target]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">Reverse score planner</h3>
      <label className="mt-4 block text-sm font-medium text-slate-700">Target AP score</label>
      <select
        value={target}
        onChange={(e) => {
          const next = Number(e.target.value) as 3 | 4 | 5;
          setTarget(next);
          trackEvent("reverse_calculator_used", { pagePath: window.location.pathname, ...analyticsContext, targetScore: next });
        }}
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3"
      >
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
      </select>
      <p className="mt-4 text-sm text-slate-700">{result.explanation}</p>
    </div>
  );
}
