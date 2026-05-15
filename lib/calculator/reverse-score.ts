import subject from "@/content/subjects/ap-psychology.json";
import type { SubjectConfig } from "@/types/content";
import type { ReverseScoreInput, ReverseScoreResult } from "@/types/calculator";

const subjectConfig = subject as SubjectConfig;

export function calculateReverseScore(input: ReverseScoreInput, config: SubjectConfig = subjectConfig): ReverseScoreResult {
  const targetBand = config.scoring.estimatedScoreBands.find((band) => band.score === input.targetScore);
  if (!targetBand) throw new Error(`Unsupported target score: ${input.targetScore}`);

  const requiredCompositePercent = targetBand.minPercent;
  const assumedFrqPercent = typeof input.assumedFrqScore === "number" ? input.assumedFrqScore / config.scoring.frqMax : 0.75;
  const requiredMcqPercent = (requiredCompositePercent / 100 - assumedFrqPercent * config.scoring.weights.frq) / config.scoring.weights.mcq;
  const suggestedMcqCorrect = Math.ceil(Math.max(0, Math.min(1, requiredMcqPercent)) * config.scoring.mcqMax);
  const suggestedFrqTotal = typeof input.assumedFrqScore === "number" ? input.assumedFrqScore : Math.ceil(config.scoring.frqMax * assumedFrqPercent);

  return {
    targetScore: input.targetScore,
    requiredCompositePercent,
    suggestedMcqCorrect,
    suggestedFrqTotal,
    explanation: `To estimate a ${input.targetScore}, aim for about ${requiredCompositePercent}% or higher on the composite estimate. One possible combination is around ${suggestedMcqCorrect} MCQ correct and ${suggestedFrqTotal} FRQ points.`
  };
}
