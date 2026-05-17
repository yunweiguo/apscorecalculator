# Codex Workflow

This document is designed for OpenAI Codex development on this repository.

## 1. First Command for Codex

When starting a Codex session, use this prompt:

```txt
Read AGENTS.md first. Then read docs/PROJECT_CONTEXT.md, docs/SEO_ROADMAP.md, docs/DEVELOPMENT_GUIDE.md, and docs/AI_PROMPTS.md.

After reading, summarize:
1. Current product goal
2. Current SEO strategy
3. What should not be built yet
4. The safest next development task

Do not modify code until you understand the project constraints.
```

## 2. Recommended Codex Mode

Use Codex for one focused task at a time.

Good tasks:

```txt
Add analytics events
Add one SEO page
Improve homepage copy
Improve internal links
Add schema
Fix build errors
Refactor page content into JSON
```

Bad tasks:

```txt
Build the entire AP Score Calculator Network
Add all AP subjects
Create a CMS
Add login and user accounts
Rewrite the whole app
```

## 3. Codex Task Template

Use this structure when asking Codex to work:

```txt
Read AGENTS.md and docs/PROJECT_CONTEXT.md first.

Task:
[Describe one specific task]

Constraints:
- Keep homepage focused on "ap psych score calculator".
- Do not add database, login, CMS, or AI API calls.
- Preserve existing URLs.
- Keep page mobile-first and SEO-first.
- Run pnpm build before finishing.

Acceptance criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]
```

## 4. Example: Add Analytics Events

```txt
Read AGENTS.md first.

Task:
Add lightweight analytics event tracking for calculator usage.

Events:
- calculator_input_changed
- score_estimated
- reverse_calculator_used
- internal_link_clicked
- faq_expanded

Requirements:
1. Support GA4 if window.gtag exists.
2. Support Plausible if window.plausible exists.
3. Do not break if analytics scripts are missing.
4. Do not send personally identifiable information.
5. Add TypeScript-safe event helper.
6. Run pnpm build.

Acceptance criteria:
- Calculator input changes trigger an event.
- Score estimation triggers an event.
- Reverse calculator usage triggers an event.
- Build passes.
```

## 5. Example: Add a New SEO Page

```txt
Read AGENTS.md first.

Task:
Add `/ap-psych-frq-score-calculator`.

Primary keyword:
ap psych frq score calculator

Search intent:
The user wants to estimate how FRQ points affect their AP Psych score.

Requirements:
1. Add a new page at `/ap-psych-frq-score-calculator`.
2. Title: AP Psych FRQ Score Calculator | Estimate Your FRQ Impact
3. H1: AP Psych FRQ Score Calculator
4. Add a direct answer near the top.
5. Add FRQ scenario table.
6. Add CTA linking back to `/` with anchor "AP Psych Score Calculator".
7. Add 4-6 FAQ items.
8. Add FAQPage JSON-LD.
9. Add disclaimer.
10. Add internal links to existing related pages.
11. Run pnpm build.

Do not add other AP subjects.
```

## 6. Example: Improve Homepage SEO

```txt
Read AGENTS.md first.

Task:
Improve homepage SEO for the keyword "ap psych score calculator".

Requirements:
1. Keep calculator above the fold.
2. Strengthen intro copy around AP Psych Score Calculator.
3. Add clearer explanation of MCQ and FRQ inputs.
4. Add stronger internal links to support pages.
5. Preserve existing scoring logic.
6. Preserve metadata or improve it only if better for CTR.
7. Run pnpm build.
```

## 7. Example: Refactor to JSON-Driven Pages

```txt
Read AGENTS.md and docs/DEVELOPMENT_GUIDE.md first.

Task:
Refactor support pages into a JSON-driven page registry.

Requirements:
1. Add content/site.json.
2. Add content/pages/*.json.
3. Add TypeScript interfaces for page config.
4. Add page registry.
5. Use a dynamic `[slug]` route for support pages.
6. Preserve existing URLs exactly.
7. Preserve existing metadata.
8. Preserve existing content quality.
9. Generate sitemap from the page registry.
10. Run pnpm build.

Do not change homepage into generic academic calculator homepage.
```

## 8. Before Codex Finishes

Codex should report:

```txt
Files changed
Commands run
Build result
SEO impact
Any risks or follow-up tasks
```

## 9. When Codex Should Stop and Ask

Codex should stop before:

- Changing URL structure
- Changing homepage positioning
- Adding a new product category
- Adding AP Biology or other subjects
- Adding database/auth/CMS
- Removing SEO metadata
- Removing disclaimer

## 10. Current Best Next Task

Recommended next task:

```txt
Add lightweight analytics events for calculator usage.
```

Why:

```txt
The site is deployed. The next validation question is not only whether Google indexes the page, but whether visitors actually use the calculator.
```
