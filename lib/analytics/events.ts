import type { AnalyticsEventName, AnalyticsEventPayload } from "@/types/analytics";

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsEventPayload) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, payload);
  window.plausible?.(name, { props: payload });
}
