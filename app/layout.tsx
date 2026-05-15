import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import site from "@/content/site.json";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: { default: site.siteName, template: `%s | ${site.siteName}` },
  description: "Free AP Psych score calculator and scoring guides for AP Psychology students."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-bold tracking-tight text-slate-900">AP Psych Score Calculator</Link>
            <nav className="hidden gap-5 text-sm font-medium text-slate-600 sm:flex">
              <Link href="/ap-psych-curve">Curve</Link>
              <Link href="/how-many-questions-can-you-miss">Missed Questions</Link>
              <Link href="/what-score-do-you-need-to-get-a-5">Get a 5</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
            <p>{site.disclaimer}</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
