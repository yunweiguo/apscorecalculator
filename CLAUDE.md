# CLAUDE.md

This file provides guidance to AI coding agents working in this repository.

## Project Summary

This is an SEO-first AP Psych Score Calculator website built with Next.js App Router, TypeScript, and Tailwind CSS.

The homepage `/` is the main money page targeting:

```txt
ap psych score calculator
```

Do not convert the homepage into a generic academic calculator homepage during MVP.

## Business Goal

The business goal is fast SEO validation:

```txt
Get indexed
Get impressions
Validate calculator usage
Use GSC data to decide next pages
```

## Current Product Boundary

Allowed:

- Improve homepage SEO
- Improve calculator UX
- Add high-intent AP Psych SEO pages
- Add analytics events
- Add FAQ/schema/internal links
- Add JSON-driven content system

Avoid unless explicitly requested:

- Database
- Login
- User accounts
- Payments
- CMS
- AI API calls
- Generic academic calculator homepage
- AP Biology or other subjects before AP Psych validation

## Required Reading

Before major changes, read:

```txt
docs/PROJECT_CONTEXT.md
docs/SEO_ROADMAP.md
docs/DEVELOPMENT_GUIDE.md
docs/AI_PROMPTS.md
```

## Development Commands

```bash
pnpm install
pnpm dev
pnpm build
```

If available:

```bash
pnpm validate:seo
pnpm check:links
```

## SEO Rules

Every indexable SEO page must have:

- Unique title
- Unique meta description
- One H1
- Canonical URL
- Direct answer near top
- Internal link to `/` using anchor `AP Psych Score Calculator`
- Related internal links
- FAQ section
- Disclaimer

## Disclaimer

Use this language or equivalent:

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

Homepage must include:

- Calculator above the fold
- MCQ input
- FRQ input
- Estimated AP score
- Reverse score planner
- Internal links to support pages
- FAQ
- Disclaimer

## Next Recommended Tasks

Priority order:

1. Confirm GSC indexing setup
2. Add analytics events
3. Improve support page depth
4. Add `/ap-psych-frq-score-calculator`
5. Add `/ap-psych-mcq-score-calculator`
6. Add `/can-i-get-a-5-with-bad-frq`
7. Refactor static content into JSON-driven page registry

## Definition of Done

A change is done when:

```txt
pnpm build passes
page works on mobile
metadata is correct
canonical is correct
internal links work
FAQ/schema remains valid
no official College Board affiliation claim is introduced
```
