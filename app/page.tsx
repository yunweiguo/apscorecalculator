import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/content/page-registry";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { CalculatorPage } from "@/components/templates/CalculatorPage";

const page = getPageBySlug("homepage");

export const revalidate = 86400;
export const metadata: Metadata = page ? generatePageMetadata(page) : {};

export default function HomePage() {
  if (!page) throw new Error("Homepage config is missing.");
  return <CalculatorPage page={page} />;
}
