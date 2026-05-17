# Development Guide

## 1. Technical Goal

This project should remain:

```txt
Static-first
Low-cost
SEO-first
Easy to maintain without a database
Friendly to AI coding agents
```

Do not introduce backend complexity unless there is a strong reason.

## 2. Tech Stack

```txt
Next.js App Router
TypeScript
Tailwind CSS
Static generation / ISR
Vercel deployment
JSON-driven content
```

## 3. Development Principles

### Prefer simple static pages

Most SEO pages should be static pages or JSON-driven pages.

### Prefer config over hardcoding

When adding new SEO pages, prefer structured data/configuration so the system can scale later.

### Keep calculator logic deterministic

Calculator logic should be transparent and easy to audit.

### Do not add unnecessary services

Avoid:

```txt
Database
Authentication
User accounts
CMS
Server-side AI generation
Payment system
```

until traffic validation is complete.

## 4. Local Development

```bash
pnpm install
pnpm dev
```

Open:

```txt
http://localhost:3000
```

## 5. Build Check

Before deployment:

```bash
pnpm build
```

If available:

```bash
pnpm validate:seo
pnpm check:links
```

## 6. SEO Requirements for Every Index Page

Every indexable page must have:

- Unique URL
- Unique title
- Unique meta description
- One H1
- Canonical URL
- At least one internal link to homepage
- FAQ section if page is SEO-focused
- Disclaimer if page discusses AP scores
- No official affiliation claim

## 7. Homepage Requirements

Homepage must remain focused on:

```txt
ap psych score calculator
```

Homepage must include:

- Calculator above the fold
- MCQ input
- FRQ input
- Estimated AP score result
- Reverse score planner
- Internal links to support pages
- FAQ
- Disclaimer

Do not convert homepage into a generic brand homepage during MVP.

## 8. Adding a New SEO Page

When adding a new page:

1. Choose one primary keyword
2. Choose one search intent
3. Create the page URL
4. Add title / description / H1
5. Add direct answer near top
6. Add calculator CTA back to `/`
7. Add at least 4 FAQ items
8. Add internal links
9. Add the URL to sitemap if not automatic
10. Run build

## 9. Suggested Page Structure

```txt
Direct answer
Calculator CTA
Main explanation
Scenario table or examples
Related AP Psych tools
FAQ
Disclaimer
```

## 10. Component Guidelines

Use reusable components for:

- Calculator
- FAQ
- Related links
- Disclaimer
- Scenario tables
- JSON-LD

Avoid copy-pasting large UI blocks across pages.

## 11. Styling Guidelines

Keep UI:

- Clean
- Mobile-first
- Fast
- Academic but not boring
- Card-based where useful
- No heavy animations
- No unnecessary external UI libraries

## 12. Performance Guidelines

Avoid:

- Large images
- Client-side heavy libraries
- Runtime AI calls
- Unnecessary API routes

Prefer:

- Static HTML
- Lightweight React components
- CSS via Tailwind
- Minimal JavaScript

## 13. Deployment

Use Vercel.

After deployment:

- Check homepage
- Check support pages
- Check `/sitemap.xml`
- Check `/robots.txt`
- Submit sitemap to Google Search Console

## 14. Definition of Done

A development task is complete only when:

```txt
pnpm build passes
page renders on mobile
metadata is correct
canonical is correct
internal links work
no official AP/College Board claim is made
```
