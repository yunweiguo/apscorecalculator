import subject from "@/content/subjects/ap-psychology.json";
import type { ScoreBand, SubjectConfig } from "@/types/content";
import type { ScoreInput, ScoreResult } from "@/types/calculator";

const subjectConfig = subject as SubjectConfig;

export function calculateScore(input: ScoreInput, config: SubjectConfig = subjectConfig): ScoreResult {
  const mcqPercent = clamp(input.mcqCorrect / config.scoring.mcqMax, 0, 1);
  const frqTotal = input.frqScores.reduce((sum, score) => sum + score, 0);
  const frqPercent = clamp(frqTotal / config.scoring.frqMax, 0, 1);
  const compositePercent = (mcqPercent * config.scoring.weights.mcq + frqPercent * config.scoring.weights.frq) * 100;
  const band = findScoreBand(compositePercent, config.scoring.estimatedScoreBands);
  return {
    compositePercent: roundToOneDecimal(compositePercent),
    estimatedScore: band.score,
    band,
    explanation: `Based on an estimated composite percentage of ${roundToOneDecimal(compositePercent)}%, your predicted AP score is ${band.score}. Actual AP score cutoffs may vary by year.`
  };
}

function findScoreBand(percent: number, bands: ScoreBand[]): ScoreBand {
  const sortedBands = [...bands].sort((a, b) => b.minPercent - a.minPercent);
  return sortedBands.find((band) => percent >= band.minPercent) ?? sortedBands[sortedBands.length - 1];
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}
