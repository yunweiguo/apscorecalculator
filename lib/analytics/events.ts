import type { AnalyticsEventName, AnalyticsEventPayloads } from "@/types/analytics";

export function trackEvent<Name extends AnalyticsEventName>(name: Name, payload: AnalyticsEventPayloads[Name]) {
  if (typeof window === "undefined") return;

  const safePayload = sanitizePayload(payload);

  try {
    window.gtag?.("event", name, safePayload);
    window.plausible?.(name, { props: safePayload });
  } catch {
    // Analytics must never break the calculator experience.
  }
}

function sanitizePayload(payload: Record<string, unknown>): Record<string, string | number | boolean> {
  return Object.fromEntries(
    Object.entries(payload).filter((entry): entry is [string, string | number | boolean] => {
      const value = entry[1];
      return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
    })
  );
}
