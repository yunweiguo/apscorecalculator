import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDynamicPageSlugs, getPageBySlug } from "@/lib/content/page-registry";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { SupportPage } from "@/components/templates/SupportPage";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getDynamicPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  return page ? generatePageMetadata(page) : {};
}

export const revalidate = 86400;

export default async function DynamicSeoPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();
  return <SupportPage page={page} />;
}
