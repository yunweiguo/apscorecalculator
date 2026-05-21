export type PageType =
  | "calculator"
  | "curve"
  | "distribution"
  | "anxiety"
  | "sub_calculator"
  | "guide"
  | "comparison";

export type IndexingMode = "index" | "noindex";

export type SchemaType =
  | "SoftwareApplication"
  | "FAQPage"
  | "BreadcrumbList"
  | "Article"
  | "WebPage";

export interface ScoreBand {
  score: 1 | 2 | 3 | 4 | 5;
  minPercent: number;
  maxPercent?: number;
  label?: string;
}

export interface SubjectConfig {
  subjectName: string;
  subjectShortName: string;
  subjectSlug: string;
  examYear: number;
  scoring: {
    mcqMax: number;
    frqMax: number;
    frqParts: Array<{ name: string; maxScore: number }>;
    weights: { mcq: number; frq: number };
    estimatedScoreBands: ScoreBand[];
  };
  keywords: {
    primary: string;
    secondary: string[];
    longTail: string[];
  };
  freshness: {
    lastUpdated: string;
    latestDistributionYear?: number;
  };
}

export interface ContentSection {
  id: string;
  heading: string;
  body: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LandingCard {
  title: string;
  description: string;
}

export interface LandingStat {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface LandingLink {
  href: string;
  title: string;
}

export interface LandingHeroConfig {
  eyebrow: string;
  subtitle: string;
  metaItems: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  calculatorLabel: string;
  calculatorHeading: string;
}

export interface LandingBuiltForConfig {
  eyebrow: string;
  title: string;
  cards: LandingCard[];
}

export interface LandingProductPreviewConfig {
  eyebrow: string;
  title: string;
  body: string;
  highlights: LandingCard[];
  previewLabel: string;
  previewTitle: string;
  previewBadge: string;
  stats: LandingStat[];
  compositeLabel: string;
  compositeValue: string;
  compositeBody: string;
}

export interface LandingProblemSolutionConfig {
  items: LandingCard[];
}

export interface LandingHowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface LandingHowItWorksConfig {
  eyebrow: string;
  title: string;
  steps: LandingHowItWorksStep[];
}

export interface LandingFeatureGridConfig {
  eyebrow: string;
  title: string;
  features: string[];
}

export interface LandingUseCasesConfig {
  eyebrow: string;
  title: string;
  cases: LandingCard[];
}

export interface LandingGuidesConfig {
  eyebrow: string;
  title: string;
  links: LandingLink[];
}

export interface LandingFinalCtaConfig {
  eyebrow: string;
  title: string;
  body: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface LandingContent {
  hero: LandingHeroConfig;
  builtFor: LandingBuiltForConfig;
  productPreview: LandingProductPreviewConfig;
  problemSolution: LandingProblemSolutionConfig;
  howItWorks: LandingHowItWorksConfig;
  featureGrid: LandingFeatureGridConfig;
  useCases: LandingUseCasesConfig;
  guides: LandingGuidesConfig;
  finalCta: LandingFinalCtaConfig;
}

export interface InternalLinkRule {
  href: string;
  anchor: string;
  placement?: "hero" | "body" | "footer" | "faq";
}

export interface PageConfig {
  slug: string;
  url: string;
  pageType: PageType;
  subjectSlug: string;
  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    title: string;
    description: string;
    h1: string;
    canonicalPath: string;
    indexing: IndexingMode;
  };
  content: {
    directAnswer: string;
    intro?: string;
    sections: ContentSection[];
    faqs: FAQItem[];
    calculatorEmbed?: "full" | "mini" | "cta" | "none";
    landing?: LandingContent;
  };
  internalLinks: {
    required: InternalLinkRule[];
    related: string[];
  };
  schema: SchemaType[];
  freshness: {
    lastUpdated: string;
    changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
    priority: number;
  };
}
