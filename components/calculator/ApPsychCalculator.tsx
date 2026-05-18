"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { calculateScore } from "@/lib/calculator/score";
import { trackEvent } from "@/lib/analytics/events";
import { ResultCard } from "@/components/calculator/ResultCard";
import { ReverseCalculator } from "@/components/calculator/ReverseCalculator";
import { ScoreBandTable } from "@/components/calculator/ScoreBandTable";
import type { AnalyticsContext } from "@/types/analytics";

export function ApPsychCalculator({ analyticsContext = {} }: { analyticsContext?: AnalyticsContext }) {
  const [mcqCorrect, setMcqCorrect] = useState(55);
  const [frq1, setFrq1] = useState(5);
  const [frq2, setFrq2] = useState(5);
  const previousEstimatedScore = useRef<number | null>(null);

  const result = useMemo(() => calculateScore({ mcqCorrect, frqScores: [frq1, frq2] }), [mcqCorrect, frq1, frq2]);

  useEffect(() => {
    if (previousEstimatedScore.current === null) {
      previousEstimatedScore.current = result.estimatedScore;
      return;
    }

    if (previousEstimatedScore.current === result.estimatedScore) return;

    const timeout = window.setTimeout(() => {
      previousEstimatedScore.current = result.estimatedScore;
      trackEvent("score_estimated", {
        pagePath: window.location.pathname,
        ...analyticsContext,
        estimatedScore: result.estimatedScore
      });
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [analyticsContext, result.estimatedScore]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          <NumberInput label="MCQ correct" value={mcqCorrect} min={0} max={75} analyticsContext={analyticsContext} onChange={setMcqCorrect} />
          <NumberInput label="FRQ 1 score" value={frq1} min={0} max={7} analyticsContext={analyticsContext} onChange={setFrq1} />
          <NumberInput label="FRQ 2 score" value={frq2} min={0} max={7} analyticsContext={analyticsContext} onChange={setFrq2} />
        </div>
        <div className="mt-6">
          <ScoreBandTable />
        </div>
      </div>
      <div className="space-y-6">
        <ResultCard result={result} />
        <ReverseCalculator analyticsContext={analyticsContext} />
      </div>
    </div>
  );
}

function NumberInput({
  label,
  value,
  min,
  max,
  analyticsContext,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  analyticsContext: AnalyticsContext;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const next = Math.min(max, Math.max(min, Number(e.target.value)));
          onChange(next);
          trackEvent("calculator_input_changed", { pagePath: window.location.pathname, ...analyticsContext });
        }}
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-lg font-semibold outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}
