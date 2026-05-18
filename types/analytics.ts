export type AnalyticsEventName = keyof AnalyticsEventPayloads;

export type AnalyticsPageType =
  | "calculator"
  | "curve"
  | "distribution"
  | "anxiety"
  | "sub_calculator"
  | "guide"
  | "comparison";

export type AnalyticsBasePayload = {
  pagePath: string;
  pageType?: AnalyticsPageType;
  primaryKeyword?: string;
};

export type AnalyticsEventPayloads = {
  calculator_input_changed: AnalyticsBasePayload;
  score_estimated: AnalyticsBasePayload & {
    estimatedScore: number;
  };
  reverse_calculator_used: AnalyticsBasePayload & {
    targetScore: 3 | 4 | 5;
  };
  internal_link_clicked: AnalyticsBasePayload & {
    linkHref: string;
  };
  faq_expanded: AnalyticsBasePayload & {
    faqQuestion: string;
  };
};

export type AnalyticsEventPayload = AnalyticsEventPayloads[AnalyticsEventName];

export type AnalyticsContext = {
  pageType?: AnalyticsPageType;
  primaryKeyword?: string;
};

export type AnalyticsLinkPayload = AnalyticsBasePayload & {
  linkHref?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}
