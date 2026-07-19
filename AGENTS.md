# ZAIDAAN PORTFOLIO — AGENT RULES

Read these files before making any changes:

1. `AGENTS.md`
2. `docs/ZAIDAAN_PORTFOLIO_PRD.md`
3. Files related to the current task

The PRD is the product source of truth.

## Repository

- This repository is already initialized with Next.js App Router.
- Do not run `create-next-app`.
- Do not create a nested Next.js project.
- Preserve the existing root-level `app/` structure.
- Do not modify or delete the PRD.
- Do not delete Git history or user-provided files.

## Content Accuracy

- All public website content must be in English.
- Do not invent or exaggerate experience, dates, titles, metrics, certificates, skills, or project features.
- CV-backed content must not be rewritten in a way that changes its meaning.
- Report apparent mistakes instead of silently correcting them.

Locked names:

- Zaidaan Zalfaa
- Norden Secure Commerce
- Way 2 Eternal Community
- Way 2 Eternal Bot
- Middleman
- Mandalawangi Outbound
- Event Facilitator

Do not:

- Shorten Way 2 Eternal to W2E in primary headings.
- Rename Middleman to ZAIDAAN Middleman.
- Rename Event Facilitator to Tour Guide.
- List the portfolio itself as a project.
- Add Game Developer or Writing as skills.

## Design

Use a monochrome Apple-inspired Liquid Glass direction.

Approved colors:

- Black
- Graphite
- White
- Silver
- Transparent glass
- Semantic green for availability or success

Do not use persistent blue, purple, pink, or orange accents.

Avoid:

- Generic AI-style layouts
- Random futuristic shapes
- Planets or particles
- Heavy neon
- Excessive gradients
- Meaningless 3D decorations
- Excessive animation
- Glass on every paragraph

Liquid Glass should be used selectively on navigation, buttons, cards, tool chips, certificates, and contact elements.

## Homepage Structure

Use this order:

1. Navbar
2. Hero
3. Who Is Zaidaan Zalfaa?
4. Projects & Ongoing Work
5. Work Experience
6. Skills & Capabilities
7. Tools & Platforms
8. Education, Certifications & Organization
9. Contact
10. Footer

Required section IDs:

- `home`
- `about`
- `projects`
- `experience`
- `skills`
- `certifications`
- `contact`

`Hire Me` and `Let’s Work Together` must scroll to `#contact`.

## Skills and Tools

- Skills must use evidence-based cards.
- Never use percentages, progress bars, star ratings, or invented proficiency levels.
- Tools must use logo plus visible text.

Creative tools must appear in this order:

1. Adobe After Effects
2. Adobe Photoshop
3. Affinity by Canva
4. Canva
5. CapCut

## Engineering

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- liquid-glass-react
- Framer Motion
- Supabase
- Cloudinary
- Google Drive
- Vercel

Rules:

- Prefer Server Components.
- Use Client Components only when required.
- Do not create a separate Express backend.
- Do not add Firebase.
- Do not expose secret environment variables.
- Do not commit `.env`, `.env.local`, `.next`, or `node_modules`.
- Support keyboard navigation, reduced motion, responsive layouts, and glass fallbacks.

Do not implement Supabase, Cloudinary, analytics, or the admin dashboard before their approved phase.

## Workflow

Before coding:

- Read the relevant files.
- State the scope.
- List the files expected to change.

After coding:

1. Run `npm run lint`.
2. Run `npx tsc --noEmit`.
3. Run `npm run build`.
4. Inspect the relevant page on desktop and mobile.
5. Report modified files and command results.
6. Stop after the approved phase.

Do not claim tests passed unless they were actually run successfully.
Do not silently ignore failed or incomplete requirements.