export type AnalyticsEventName =
  | "calculator_input_changed"
  | "score_estimated"
  | "reverse_calculator_used"
  | "internal_link_clicked"
  | "faq_expanded"
  | "outbound_link_clicked";

export type AnalyticsEventPayload = Record<string, unknown> & {
  pagePath: string;
  pageType?: string;
  primaryKeyword?: string;
  estimatedScore?: number;
  targetScore?: number;
  linkHref?: string;
  faqQuestion?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}
