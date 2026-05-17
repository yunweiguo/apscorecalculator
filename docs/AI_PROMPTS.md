# AI Coding Prompts

Use these prompts with Claude Code, Codex, or another coding agent.

## 1. General Project Context Prompt

```txt
You are working on an SEO-first Next.js App Router project called AP Psych Score Calculator.

Product goal:
Build a fast, mobile-first AP Psychology score calculator website targeting the keyword "ap psych score calculator".

Current strategy:
The homepage is the main money page. It should remain focused on AP Psych Score Calculator. Do not turn it into a generic academic calculator homepage yet.

Tech stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-first / ISR-friendly
- Vercel deployment
- No database
- No login
- No CMS

SEO rules:
- Every indexable page needs unique title, description, H1, canonical, FAQ, and internal links.
- Every support page should link back to `/` using anchor "AP Psych Score Calculator".
- Do not claim this is official or affiliated with College Board.
- Keep calculator above the fold on homepage.

Before making changes:
- Read docs/PROJECT_CONTEXT.md
- Read docs/SEO_ROADMAP.md
- Read docs/DEVELOPMENT_GUIDE.md
```

## 2. Prompt: Add a New SEO Page

```txt
You are a senior Programmatic SEO engineer.

Task:
Add a new SEO page to this AP Psych Score Calculator site.

Page details:
- URL: [PASTE URL]
- Primary keyword: [PASTE KEYWORD]
- Search intent: [calculate / anxiety / curve / distribution / guide]

Requirements:
1. Create the page using the existing project style.
2. Add a direct answer near the top.
3. Add a clear CTA linking back to `/` with anchor "AP Psych Score Calculator".
4. Add at least 4 FAQ items.
5. Add internal links to related existing pages.
6. Add metadata: title, description, canonical.
7. Add FAQPage JSON-LD if the page has FAQ.
8. Include disclaimer: this is an estimate and not affiliated with College Board.
9. Keep the page mobile-first and lightweight.
10. Run build or explain any build issues.

Do not:
- Add database
- Add login
- Add AI API calls
- Add thin placeholder content
```

## 3. Prompt: Improve Homepage SEO

```txt
You are a senior SEO-focused Next.js product engineer.

Task:
Improve the homepage for the keyword "ap psych score calculator".

Requirements:
1. Keep the calculator above the fold.
2. Strengthen the title, H1, intro copy, and first-screen keyword relevance.
3. Add or improve explanation sections:
   - How to use the AP Psych Score Calculator
   - How AP Psychology scoring works
   - What score do you need to get a 5 on AP Psych?
   - AP Psych curve explained
4. Keep page fast and mobile-first.
5. Preserve existing calculator functionality.
6. Improve internal links to support pages.
7. Ensure disclaimer is visible.
8. Ensure FAQ schema remains valid.

Do not change the product into a generic academic calculator homepage.
```

## 4. Prompt: Add Analytics Events

```txt
You are a senior frontend analytics engineer.

Task:
Add lightweight analytics events for AP Psych Score Calculator.

Events to track:
- calculator_input_changed
- score_estimated
- reverse_calculator_used
- internal_link_clicked
- faq_expanded

Requirements:
1. Support GA4 if window.gtag exists.
2. Support Plausible if window.plausible exists.
3. Do not break rendering if analytics scripts are missing.
4. Keep event payload minimal.
5. Do not send personally identifiable information.
6. Add TypeScript types for event names and payload.
```

## 5. Prompt: Add Programmatic SEO Content System

```txt
You are a senior Next.js + Programmatic SEO architect.

Task:
Refactor the current static SEO pages into a JSON-driven content system.

Requirements:
1. Create content/site.json.
2. Create content/subjects/ap-psychology.json.
3. Create content/pages/*.json for current SEO pages.
4. Add TypeScript interfaces for page config, subject config, FAQ, internal links, and schema types.
5. Implement page registry to load all page configs.
6. Use /[slug] dynamic route for support pages.
7. Generate metadata from page config.
8. Generate sitemap from page registry.
9. Generate related links from page config.
10. Preserve current URLs and SEO metadata.

Do not introduce a database or CMS.
```

## 6. Prompt: Add AP Psych FRQ Score Calculator Page

```txt
You are a senior SEO product engineer.

Task:
Add page `/ap-psych-frq-score-calculator`.

Primary keyword:
ap psych frq score calculator

Search intent:
User wants to estimate how FRQ points affect their AP Psych score.

Requirements:
1. Title: AP Psych FRQ Score Calculator | Estimate Your FRQ Impact
2. H1: AP Psych FRQ Score Calculator
3. Direct answer near top.
4. Add FRQ input-focused calculator or CTA to homepage calculator.
5. Explain FRQ 1 and FRQ 2 scoring.
6. Explain how FRQ impacts the composite estimate.
7. Add scenario table:
   - 4/14 FRQ
   - 7/14 FRQ
   - 10/14 FRQ
   - 12/14 FRQ
8. Add 4-6 FAQ items.
9. Link to:
   - /
   - /ap-psych-curve
   - /what-score-do-you-need-to-get-a-5
10. Include disclaimer.
```

## 7. Prompt: Add AP Psych MCQ Score Calculator Page

```txt
You are a senior SEO product engineer.

Task:
Add page `/ap-psych-mcq-score-calculator`.

Primary keyword:
ap psych mcq score calculator

Search intent:
User wants to estimate how MCQ correct answers affect their AP Psych score.

Requirements:
1. Title: AP Psych MCQ Score Calculator | Estimate Your Multiple-Choice Score
2. H1: AP Psych MCQ Score Calculator
3. Direct answer near top.
4. Add MCQ-focused explanation and calculator CTA.
5. Add scenario table:
   - 45/75
   - 55/75
   - 60/75
   - 65/75
6. Add 4-6 FAQ items.
7. Link to:
   - /
   - /how-many-questions-can-you-miss
   - /what-score-do-you-need-to-get-a-5
8. Include disclaimer.
```

## 8. Prompt: Weekly GSC Review

```txt
You are a Programmatic SEO strategist.

I will paste Google Search Console query data for this AP Psych Score Calculator site.

Please analyze:
1. Which queries have high impressions but low CTR.
2. Which queries deserve title/description changes.
3. Which queries should become new FAQ items.
4. Which queries should become standalone SEO pages.
5. Which existing pages need stronger internal links.
6. What to do this week.

Output:
- Priority table
- Recommended page updates
- New long-tail page candidates
- Today’s execution checklist
```
