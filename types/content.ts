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
