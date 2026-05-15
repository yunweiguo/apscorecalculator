# AP Psych Score Calculator

SEO-first AP Psych Score Calculator built with Next.js App Router, TypeScript, Tailwind CSS, and JSON-driven Programmatic SEO.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## SEO checks

```bash
pnpm validate:seo
pnpm check:links
pnpm build
```

## Content maintenance

Edit JSON files under:

```txt
content/site.json
content/subjects/ap-psychology.json
content/pages/*.json
```

No database or CMS is required for MVP.

## Pages

- `/`
- `/ap-psych-curve`
- `/what-score-do-you-need-to-get-a-5`
- `/how-many-questions-can-you-miss`
- `/ap-psych-score-distribution`
- `/did-i-pass-ap-psych`

## Deployment

Deploy to Vercel. Update `content/site.json` with your real domain before submitting sitemap to Google Search Console.
