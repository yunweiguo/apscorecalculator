# AGENTS.md

Repository-level instructions for OpenAI Codex.

## Project

This repository is an SEO-first AP Psych Score Calculator built with Next.js App Router, TypeScript, and Tailwind CSS.

The homepage `/` is the main money page targeting:

```txt
ap psych score calculator
```

Do not convert the homepage into a generic Academic Calculator Network homepage during MVP.

## Business Goal

The current goal is fast SEO validation:

```txt
1. Get indexed by Google
2. Get impressions for AP Psych score calculator queries
3. Validate calculator usage
4. Use Google Search Console data to choose the next pages
```

## Development Commands

Use pnpm.

```bash
pnpm install
pnpm dev
pnpm build
```

If scripts exist, run before finishing SEO-related changes:

```bash
pnpm validate:seo
pnpm check:links
```

## Technical Constraints

Keep the project:

- Static-first
- Low-cost
- Fast
- Mobile-first
- Easy to maintain without a database
- Friendly to Vercel deployment

Do not add these unless explicitly requested:

- Database
- Login
- User accounts
- Payment system
- CMS
- Server-side AI generation
- Heavy UI libraries

## SEO Rules

Every indexable SEO page must have:

- Unique URL
- Unique title
- Unique meta description
- One H1
- Canonical URL
- Direct answer near the top
- Internal link back to `/` using anchor `AP Psych Score Calculator`
- Related internal links
- FAQ section
- Disclaimer

Use this disclaimer or equivalent:

```txt
This calculator provides an estimate only and is not affiliated with or endorsed by College Board.
```

Never claim:

```txt
Official AP Psych Score Calculator
College Board AP Psych Calculator
Guaranteed AP score
```

## Homepage Requirements

The homepage must keep:

- Calculator above the fold
- MCQ input
- FRQ input
- Estimated AP score result
- Reverse score planner
- Internal links to support pages
- FAQ
- Disclaimer

## Existing Pages

```txt
/
/ap-psych-curve
/what-score-do-you-need-to-get-a-5
/how-many-questions-can-you-miss
/ap-psych-score-distribution
/did-i-pass-ap-psych
```

## Recommended Next Tasks

Priority order:

1. Add analytics events
2. Improve support page depth
3. Add `/ap-psych-frq-score-calculator`
4. Add `/ap-psych-mcq-score-calculator`
5. Add `/can-i-get-a-5-with-bad-frq`
6. Refactor static content into JSON-driven page registry

Do not add AP Biology or GPA pages before AP Psych indexing is validated.

## Definition of Done

A task is done when:

```txt
pnpm build passes
page renders on mobile
metadata is correct
canonical is correct
internal links work
FAQ/schema remains valid
no official College Board affiliation claim is introduced
```

## Context Files

Read these files for more project context:

```txt
docs/PROJECT_CONTEXT.md
docs/SEO_ROADMAP.md
docs/DEVELOPMENT_GUIDE.md
docs/AI_PROMPTS.md
docs/CODEX_WORKFLOW.md
```
