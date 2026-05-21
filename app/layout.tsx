import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import site from "@/content/site.json";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: { default: site.siteName, template: `%s | ${site.siteName}` },
  description: "Free AP Psych score calculator and scoring guides for AP Psychology students."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <Link href="/" className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              AP Psych Score Calculator
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
              <Link className="transition hover:text-blue-700" href="/#calculator">
                Calculator
              </Link>
              <Link className="transition hover:text-blue-700" href="/ap-psych-curve">
                Curve
              </Link>
              <Link className="transition hover:text-blue-700" href="/what-score-do-you-need-to-get-a-5">
                Get a 5
              </Link>
              <Link className="transition hover:text-blue-700" href="/how-many-questions-can-you-miss">
                Missed Questions
              </Link>
            </nav>
            <Link
              href="/#calculator"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Calculate
            </Link>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
            <p>{site.disclaimer}</p>
          </div>
        </footer>
        <Analytics />
        <GoogleAnalytics measurementId={site.analytics.ga4MeasurementId} />
      </body>
    </html>
  );
}
