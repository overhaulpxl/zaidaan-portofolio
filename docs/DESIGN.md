# ZAIDAAN ZALFAA — Portfolio Redesign Implementation Specification

**Status:** Final visual handoff / implementation contract  
**Target repository:** `E:\zaidaan-portofolio`  
**Stable implementation baseline:** `d0837f1` — `feat: expand project archive and navigation`  
**Target branch:** `master`  
**Design source:** approved Stitch desktop/mobile screens + exported per-screen HTML  
**Purpose:** translate the approved Stitch visual system into the existing production Next.js portfolio without inheriting Stitch's fictional content.

---

## 1. Authority Order

When sources disagree, use this order:

1. **Existing verified portfolio source/data** — factual authority.
2. **This `DESIGN.md`** — design-system, component, content-mapping, responsive, accessibility, and interaction authority.
3. **Approved Stitch screenshots** — visual composition authority.
4. **Approved Stitch HTML exports** — implementation reference for proportions, spacing, grid, and typography only.
5. **Stitch-generated placeholder copy/data** — **never authoritative**.

Do not copy fictional dates, occupations, technologies, statuses, education details, biographies, project descriptions, skills, tools, or generated portraits from Stitch.

---

## 2. Approved Reference Set

The Stitch export contains the following approved screen pairs:

| Chapter | Desktop | Mobile |
|---|---|---|
| 00 Entry | `00_entry_desktop` | `00_entry_mobile` |
| 01 Identity | `01_identity_desktop` | `01_identity_mobile` |
| 02 Experience | `02_experience_desktop` | `02_experience_mobile` |
| 03 Selected Work | `03_selected_work_desktop` | `03_selected_work_mobile` |
| 04 Skills | `04_skills_desktop` | `04_skills_mobile` |
| 05 Tools & Programs | `05_tools_desktop` | `05_tools_mobile` |
| 06–07 Education & Credentials | `06_07_education_credentials_desktop` | `06_07_education_credentials_mobile` |
| 08 Contact | `08_contact_desktop` | `08_contact_mobile` |
| Project Archive | `work_archive_desktop` | `work_archive_mobile` |

The export also includes an extra `portfolio_project_archive/code.html`; it is not the canonical archive reference when it conflicts with `work_archive_*`.

Screenshot pixel dimensions are reference artifacts, **not production breakpoints**. Recreate the composition responsively rather than hard-coding those exact viewport sizes.

---

## 3. Visual Intent

The portfolio is a **monochrome Swiss/editorial personal portfolio** with an architectural publication feel.

It should feel:

- precise;
- restrained;
- professional;
- premium;
- typography-led;
- asymmetrical where useful;
- spacious without wasting vertical space;
- flat and structurally clear.

It should **not** feel like:

- a SaaS landing page;
- a dashboard;
- an AI-generated design template;
- cyberpunk/futuristic UI;
- a Behance case study with fake imagery;
- a 3D/WebGL experience;
- a rounded-card startup website.

Primary visual moments may be expressive:

- Entry / Hero;
- Identity;
- Selected Work;
- Contact.

Supporting information chapters must stay quieter:

- Experience;
- Skills;
- Tools & Programs;
- Education;
- Credentials & Involvement.

---

## 4. Color System

Primary production palette:

```css
--color-black: #000000;
--color-bg: #F8F9FA;
--color-rule: #E2E8F0;
--color-white: #FFFFFF;
```

Useful neutral text values may be derived from black using opacity or neutral grays from the Stitch export, but do not introduce chromatic accents.

Recommended semantic tokens:

```css
--page-bg: #F8F9FA;
--surface: #FFFFFF;
--text-primary: #000000;
--text-secondary: rgba(0, 0, 0, 0.62);
--text-muted: rgba(0, 0, 0, 0.48);
--rule: #E2E8F0;
--rule-strong: rgba(0, 0, 0, 0.42);
--inverse-bg: #000000;
--inverse-text: #FFFFFF;
```

Rules:

- no gradients;
- no neon;
- no colorful accents;
- no glassmorphism;
- no drop-shadow-based depth;
- hover/active states use black/white inversion, opacity, underline, or small positional motion.

---

## 5. Typography

### Families

**Display / major headings:** Montserrat 900  
**Secondary display:** Montserrat 600  
**Body / labels / metadata / controls:** Inter 400 / 600

### Source token baseline

```text
Display XL       Montserrat 900   120px / 110px   tracking -0.04em
Headline Large   Montserrat 900    80px / 84px    tracking -0.02em
Mobile Headline  Montserrat 900    48px / 52px    tracking -0.02em
Editorial Sub    Montserrat 600    24px / 32px
Body             Inter 400         18px / 28px
Navigation       Inter 600         14px / 20px    tracking 0.10em
Metadata         Inter 600         12px / 16px    tracking 0.05em
```

Use fluid `clamp()` values in production rather than literal fixed sizes everywhere.

Recommended production mapping:

```css
--display-hero: clamp(4.6rem, 8.5vw, 7.5rem);
--display-section: clamp(3rem, 6vw, 5rem);
--display-mobile: clamp(2.65rem, 12vw, 3.25rem);
--title-project: clamp(1.65rem, 3vw, 2.5rem);
--body: clamp(1rem, 1.2vw, 1.125rem);
--meta: 0.75rem;
```

Body copy should usually remain around **60–70 characters per line** on desktop.

Do not artificially fragment words such as `CAP / ABI / LI / TIES`.

---

## 6. Grid, Spacing, Rules, Shape Language

### Page margins

Desktop baseline: approximately `5vw`.  
Mobile: approximately `16–20px`, increasing slightly on wider mobile.

### Desktop grid

Use a 12-column conceptual grid with `2rem` baseline gutters where helpful. Not every section must literally instantiate twelve CSS grid tracks.

### Vertical rhythm

The Stitch token `section-gap: 12rem` is an upper bound for chapter transitions, not a requirement for every section.

Do **not** force all information chapters to `100vh`.

- Hero: may use `min-height: 100svh`.
- Identity: may be large/viewport-oriented.
- Experience, Skills, Tools, Education: content-driven height with generous padding.
- Selected Work: compact enough that four featured projects do not consume four full screens.

### Rules

Use **1px hairlines** as the principal separator.

### Shape language

- square / 90-degree geometry;
- no large border radii;
- no floating shadow cards;
- circles only for tiny chapter indicators or utility markers.

---

## 7. Global Header & Navigation

### Visible header

All viewport sizes use the same visible pattern:

```text
ZAIDAAN ZALFAA                                      ☰
```

Do not permanently show all navigation links across desktop.

### Menu destinations

The hamburger menu must preserve:

1. About
2. Work
3. Experience
4. Skills
5. Tools
6. Education
7. Contact

Use existing real anchors/IDs from the application.

### Menu behavior

Preserve:

- keyboard accessibility;
- Escape to close;
- focus trap;
- focus restoration;
- body scroll lock with cleanup;
- hash navigation;
- active-section awareness where applicable.

The overlay should use the same flat editorial language: black text, thin rules, no glass capsule.

---

## 8. Chapter Model

Homepage sequence:

```text
CHAPTER 00 — ENTRY
CHAPTER 01 — IDENTITY
CHAPTER 02 — EXPERIENCE
CHAPTER 03 — SELECTED WORK
CHAPTER 04 — SKILLS
CHAPTER 05 — TOOLS & PROGRAMS
CHAPTER 06 — EDUCATION
CHAPTER 07 — CREDENTIALS & INVOLVEMENT
CHAPTER 08 — CONTACT
```

Desktop may use restrained edge/vertical chapter indicators in expressive sections if they match the approved screenshots.

On mobile, major chapter labels should remain horizontal/readable unless a tiny edge label is clearly nonessential. Do not clip or rotate primary headings.

---

# HOMEPAGE SECTIONS

## 9. Chapter 00 — Entry / Hero

### Visual authority

Reference:

- `00_entry_desktop`
- `00_entry_mobile`

### Desktop composition

- fixed/minimal wordmark top-left;
- hamburger top-right;
- large negative space in upper viewport;
- giant `ZAIDAAN / ZALFAA` anchored lower-left;
- right-side editorial metadata rail containing Context, Focus, Location;
- primary and secondary actions under the name;
- restrained chapter marker at right edge;
- scroll cue toward bottom center.

Ghost/echo typography from Stitch is optional and should be extremely subtle. If it reduces legibility or feels noisy, omit it.

### Required real content

```text
ZAIDAAN
ZALFAA

PERSONAL PORTFOLIO

Building practical digital products, community systems, and automation.

Based in Cianjur, West Java, Indonesia.
```

Actions:

- `VIEW SELECTED WORK` → `#work`
- `DOWNLOAD CV` → existing downloadable CV asset

Scroll cue:

`SCROLL TO BEGIN THE JOURNEY`

### Mobile

Follow the approved stacked composition:

- wordmark + menu;
- horizontal rule;
- `CHAPTER 00: ENTRY` / `PERSONAL PORTFOLIO` metadata row;
- giant name;
- short statement;
- location;
- stacked full-width CTA treatment;
- bottom scroll cue.

---

## 10. Chapter 01 — Identity / About

### Visual authority

- `01_identity_desktop`
- `01_identity_mobile`

### Desktop

Approved composition is a major portrait/media zone on the left and identity content on the right.

**Never use Stitch's generated fictional person.**

Use a real approved Zaidaan portrait if available in the repository. If the production asset is not yet available, use a neutral structural placeholder during development rather than stock or generated people.

Heading:

```text
CHAPTER 01 / IDENTITY

WHO IS
ZAIDAAN
ZALFAA?
```

### Factual copy direction

Keep the biography concise and factual. It may state that Zaidaan:

- has a Computer and Network Engineering background;
- builds practical digital products;
- works with community systems and automation;
- is officially enrolled to begin Information Systems undergraduate study in 2026.

Do **not** call him a creative director, multidisciplinary designer, active undergraduate, or anything not present in verified portfolio data.

### Actions

- `CONTACT ME` → `#contact`
- `VIEW EXPERIENCE` → `#experience`
- `CERTIFICATES` → `https://drive.google.com/drive/folders/1F6XRRyOsgl5-kmycSjma-6JlX7TionkH?usp=drive_link`
- `DOWNLOAD CV` → existing downloadable CV

External certificate link opens safely in a new tab.

### Mobile

Stack:

1. wordmark + menu;
2. chapter label;
3. portrait;
4. large identity heading;
5. biography;
6. primary actions;
7. certificate/CV actions.

---

## 11. Chapter 02 — Experience

### Visual authority

- `02_experience_desktop`
- `02_experience_mobile`

### Design behavior

This is a quiet editorial chronology, not a card grid and not a startup timeline.

Each record:

```text
ROLE                                            PERIOD
ORGANIZATION

Description
────────────────────────────────────────────────────
```

Desktop uses a wide content column with restrained chapter heading and rules. Mobile becomes one readable column.

### Real records and order

1. **Way 2 Eternal Community** — Community Operations & Transactions — Part-time remote/self-managed — Nov 2025–Present
2. **NXRDEN Store** — Website & Order Management — Part-time remote/self-managed — Nov 2025–May 2026
3. **Seraphim Robux Store** — Customer Service & Order Processing — Feb–Mar 2026
4. **Mandalawangi Outbound** — Event Facilitator — Sep 2022–Oct 2023
5. **JP.Computindo** — IT Intern — Mar 2022–Jun 2023

Use verified existing descriptions from repository content. Do not import Stitch's fictional architecture/design roles.

---

## 12. Chapter 03 — Selected Work

### Visual authority

- `03_selected_work_desktop`
- `03_selected_work_mobile`

### Critical no-image rule

**Selected Work contains no project imagery, mockups, generated art, or thumbnails.**

This overrides the original Stitch `DESIGN.md` project-card image guidance.

### Desktop

Use the approved compact **2 × 2** bordered editorial grid.

Header:

```text
CHAPTER 03 /
SELECTED WORK
```

Each module contains:

- index / category;
- large project title;
- concise description;
- thin internal rule;
- status;
- role;
- technologies;
- project action.

Do not turn each project into a near-full-screen case-study spread.

### Featured project order

1. NORDEN
2. Way 2 Eternal Bot
3. Middleman
4. Mandalawangi Outbound

### Real content

#### NORDEN

Category: `Discord Bot`  
Status: `In Development`  
Role: `Product Development & Full-Stack Engineering`  
Technologies: `Python`, `discord.py`, `PostgreSQL`

Description:

> A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.

Action:

`VIEW REPOSITORY` → `https://github.com/overhaulpxl/norden`

The repository is intentionally private. Public visitors may receive GitHub 404. This is accepted and must not be treated as a broken implementation.

#### Way 2 Eternal Bot

Category: `Discord Bot`  
Status: `Active Development`  
Role: `Bot Development & System Maintenance`  
Technologies: `Python`, `discord.py`, `aiosqlite`, `Gemini API`

Description:

> A Discord community bot combining AI-powered interactions, RPG and economy systems, community utilities, and structured transaction workflows.

Action:

`VIEW REPOSITORY` → `https://github.com/overhaulpxl/w2ebot`

#### Middleman

Category: `Services`  
Status: `Active Service`  
Role: `Middleman / transaction handling`  
Technologies: `Discord`, `Spreadsheets`

Description:

> Structured buyer-seller transaction coordination, providing reliable record handling, dispute support, and customer communication. Completed 500+ buyer-seller transactions.

Action:

`OPEN INSTAGRAM` → `https://instagram.com/zaidaan.middleman`

#### Mandalawangi Outbound

Category: `Websites`  
Status: `Completed · Live`  
Role: `Website Development`  
Technologies: `Next.js`, `Tailwind CSS`

Description:

> Developed the Mandalawangi Outbound website to serve as the company's information platform.

Action:

`VISIT WEBSITE` → `https://mandalawangioutbound.com`

### Mobile

- one project after another;
- no cards with big filled backgrounds;
- thin rules between projects;
- compact metadata;
- CTA is a light editorial text/action row with outward arrow;
- no oversized black CTA block repeated for every project;
- no images.

---

## 13. Chapter 04 — Skills

### Visual authority

- `04_skills_desktop`
- `04_skills_mobile`

### Desktop

Heading:

```text
CHAPTER 04 / SKILLS
SKILLS
```

Three clean groups/columns:

1. Core Operations
2. Technical
3. AI & Workflow

No proficiency labels, percentages, progress bars, decorative icons, or fragmented typography.

### Exact real skill content

#### Core Operations

- Customer Service
- Administrative Support
- Transaction Handling
- Community Operations
- Communication
- Record Keeping

#### Technical

- Website & Order Management
- Basic Python Scripting
- Telegram Bot/Automation
- PC & Printer Troubleshooting
- Software Installation
- Video Editing
- MikroTik & Computer Networking

#### AI & Workflow

- Prompt Engineering
- LLM Integration
- AI Workflow Design
- AI-Assisted Development
- Technical Specification Design
- Evaluation & QA

### Mobile

Stack the same three groups vertically with thin rules and clean list rows.

---

## 14. Chapter 05 — Tools & Programs

### Visual authority

- `05_tools_desktop`
- `05_tools_mobile`

### No-special-background rule

No graph paper, grid background, engineering diagram, logo cloud, colorful brand icons, or pill tag cloud.

### Desktop

Heading:

```text
CHAPTER 05 / TOOLS & PROGRAMS
TOOLS & PROGRAMS
```

Use an editorial index with group names at left and tool names in restrained columns to the right. Groups separated by hairlines.

### Exact groups/order/content

#### Operations

- Discord
- Telegram
- WhatsApp
- Microsoft Office

#### Development

- VS Code
- GitHub
- Python
- Next.js
- Supabase
- Cloudinary

#### Networking

- MikroTik
- Winbox

#### Creative

- Adobe After Effects
- Adobe Photoshop
- Affinity by Canva
- Canva
- CapCut

#### AI & Automation

- ChatGPT
- Codex
- Claude
- Gemini
- Antigravity

### Mobile

Stack groups vertically. Keep the same order. No random Stitch tools such as Jira, Kubernetes, TensorFlow, etc.

---

## 15. Chapter 06 — Education

### Visual authority

- `06_07_education_credentials_desktop`
- `06_07_education_credentials_mobile`

### Desktop

Quiet chronological records with institution, program, period, description and hairline separation.

### Exact content/order

#### Universitas Terbuka

**Incoming Undergraduate Student — Information Systems**  
**Starting 2026**

Description:

> Officially enrolled and scheduled to begin undergraduate studies in Information Systems in 2026.

Do not display `2026–Present`, do not imply study has already started, and do not invent a semester, GPA, graduation date, or location.

#### Rudi Russel Sprachschule

**Intensive Deutschkurs**  
**Oct 2023–Apr 2024**

Description:

> Completed a six-month intensive German language program focused on building a strong foundation in German.

#### SMKN 1 Pacet

**Computer and Network Engineering**  
**2020–2023**  
**GPA 3.80/4.00**

Use verified existing description if present; do not replace the program with multimedia/software or another major.

---

## 16. Chapter 07 — Credentials & Involvement

### Desktop

Section follows Education and uses two restrained columns:

```text
CERTIFICATIONS                  ORGANIZATIONS
```

### Certifications

1. Goethe-Zertifikat B1 — Jul 2025
2. TOEIC — Aug 2022 — **no score displayed**
3. Computer Network Development with MikroTik — issued 9 Sep 2023 — Training Activity Score 88 — Duration 14h 56m

Do not call 88 a proficiency percentage.

### Organizations

- E-Sport SMKN 1 Pacet — Chairman
- Ripple Studio — Creative Team / Editor

Do not invent dates.

### Mobile

Stack:

1. Education
2. Credentials & Involvement heading
3. Certifications
4. Organizations

Do not rotate/clamp the main heading into unreadable vertical text.

---

## 17. Chapter 08 — Contact

### Visual authority

- `08_contact_desktop`
- `08_contact_mobile`

### Tone

This is a calm closing chapter, not a sales banner.

### Required content

Heading:

```text
CHAPTER 08 / CONTACT

LET'S WORK
TOGETHER
```

Supporting copy:

> Have a role, project, or collaboration in mind? I'm open to on-site, remote, and project-based opportunities.

Primary contact actions:

#### WhatsApp

Label: `WHATSAPP`  
Sub-label: `MESSAGE DIRECTLY`  
URL: `https://wa.me/6285793719676`

#### Email

Label: `EMAIL`  
Sub-label: `COPY ADDRESS`  
Address: `zaidaan1337@gmail.com`

Copy behavior must be keyboard-accessible and provide a clear success state without changing the overall visual language.

Footer/directory links:

- GitHub → `https://github.com/overhaulpxl`
- LinkedIn → `https://www.linkedin.com/in/zaidaanzalfaa/`
- Linktree → `https://linktr.ee/zaidaaann`
- Download CV → existing CV asset

Do not use Read.cv.

---

# PROJECT ARCHIVE

## 18. `/work` — Project Archive

### Visual authority

- `work_archive_desktop`
- `work_archive_mobile`

### Critical structural rule

Use the **approved catalogue-card structure**, not the earlier table/sidebar/list experiments.

### Header

```text
PROJECT
ARCHIVE.

A complete index of selected projects and ongoing work.
```

### Filters

- All
- Bots
- Websites
- Services
- Automation
- Community Systems

Active state: text + underline/hairline. No pills.

On mobile filters may horizontally scroll with `white-space: nowrap`; hide/soften the scrollbar without blocking swipe/keyboard access.

### Desktop

- two-column compact bordered catalogue grid;
- seven project modules;
- no images;
- square/near-square geometry;
- thin border;
- title, category, description, metadata, action;
- denser than homepage Selected Work.

### Mobile

Use the same card component DNA in a single column. Do not switch to a plain list/table.

### Project order

1. NORDEN
2. Way 2 Eternal Bot
3. Middleman
4. Mandalawangi Outbound
5. NORDEN Finance
6. B1 Prüfung Training
7. Mandalawangi Outbound — Legacy Website

### Primary category mapping

- NORDEN → Discord Bot
- Way 2 Eternal Bot → Discord Bot
- Middleman → Services
- Mandalawangi Outbound → Websites
- NORDEN Finance → Websites
- B1 Prüfung Training → Websites
- Mandalawangi Outbound — Legacy Website → Websites

### Filter membership

#### Bots
- NORDEN
- Way 2 Eternal Bot

#### Websites
- Mandalawangi Outbound
- NORDEN Finance
- B1 Prüfung Training
- Mandalawangi Outbound — Legacy Website

#### Services
- Middleman

#### Automation
- NORDEN
- Way 2 Eternal Bot

#### Community Systems
- NORDEN
- Way 2 Eternal Bot
- Middleman

### Actions

- NORDEN → `View Repository` → `https://github.com/overhaulpxl/norden`
- Way 2 Eternal Bot → `View Repository` → `https://github.com/overhaulpxl/w2ebot`
- Middleman → `Open Instagram` → `https://instagram.com/zaidaan.middleman`
- Mandalawangi Outbound → `Visit Website` → `https://mandalawangioutbound.com`
- NORDEN Finance → `Visit Website` → `https://nordenfinance.vercel.app/`
- B1 Prüfung Training → `Visit Website` → `https://b1-prufung-web.vercel.app/`
- Mandalawangi Outbound — Legacy Website → `Visit Website` → `https://mapobm.vercel.app/`

Do not infer labels based on substring/domain inside the card component; keep the existing data-driven `links[]` model.

---

## 19. Buttons & Links

### Primary button

- black background;
- white Inter 600 uppercase text;
- square corners;
- thin black border;
- hover: white background / black text.

### Secondary button

- transparent/white;
- black text;
- 1px black border;
- hover inversion.

### Editorial action links

Project/contact links may be text + outward arrow with subtle underline/rule treatment.

All external links:

```html
target="_blank"
rel="noopener noreferrer"
```

where appropriate.

---

## 20. Footer

Keep extremely restrained.

Use some combination of:

- `ZAIDAAN ZALFAA`
- copyright current year
- GitHub
- LinkedIn
- Linktree
- Download CV where relevant

Do not use another giant visual footer after Contact.

Production year should be generated dynamically rather than hard-coded to Stitch's `2024` placeholder.

---

## 21. Motion

Motion is supporting, not the visual concept.

Allowed:

- short opacity/translate reveal;
- menu transitions;
- slight arrow movement;
- small hover inversion;
- restrained chapter-marker transition;
- subtle link underline movement.

Avoid:

- Three.js;
- WebGL;
- R3F;
- GSAP scroll-jacking;
- mouse followers;
- giant parallax;
- magnetic buttons;
- infinite bouncing UI;
- fake smooth-scroll engines;
- typewriter effects;
- decorative 3D perspective.

The Stitch hero uses an animated scroll cue; production should make it subtle and disable the animation under `prefers-reduced-motion`.

---

## 22. Responsive Rules

Production should intentionally support at least:

```text
1440+
1280
1024
768
430
390
375
320
```

Do not use Stitch screenshot dimensions as literal breakpoints.

### General

- no horizontal page overflow;
- headings must not clip;
- long project names wrap deliberately;
- CTA targets remain touch-friendly;
- mobile has reduced but still meaningful whitespace;
- information sections remain content-driven instead of forced `100vh`.

### Desktop to mobile transformations

- 12-column asymmetric layouts → one-column readable flow;
- Selected Work 2×2 → one project per row;
- Archive 2-column cards → one-column cards;
- Skills 3 columns → three stacked groups;
- Tools matrix → stacked groups;
- Credentials side-by-side → stacked sections;
- Contact two-zone → stacked headline/actions/directory.

---

## 23. Accessibility

Preserve/improve:

- skip-to-content;
- exactly one meaningful page H1;
- logical H2/H3 hierarchy;
- semantic `main`, `section`, `article`, `nav`, `footer`;
- visible keyboard focus;
- keyboard-accessible hamburger menu;
- focus trap and Escape handling;
- focus restoration after menu close;
- `aria-current` when appropriate;
- filter state semantics (`aria-pressed`, tabs, or equivalent valid pattern);
- meaningful external link text;
- alt text for a real portrait;
- no information conveyed solely by color;
- sufficient contrast;
- `prefers-reduced-motion`;
- forced-colors resilience where practical;
- minimum practical touch targets around 44px.

Do not suppress hydration warnings to hide extension-injected attributes.

---

## 24. Performance & Architecture

- Keep `/` and `/work` statically prerenderable.
- Do not introduce Three.js, WebGL, background video, or unnecessary packages.
- Reuse the current Next.js/Tailwind architecture.
- Keep content-heavy sections server-rendered where possible.
- Use client components only for actual interaction: menu, section observation, project filters, copy email, lightweight progressive motion.
- Do not convert the entire homepage into a client component.

Stitch HTML loads Tailwind through CDN and Google Fonts directly; this is **reference code only**. Do not copy CDN runtime setup into the Next.js production app.

---

## 25. Asset Policy

### Portrait

Identity may use one real Zaidaan portrait.

Never substitute:

- stock corporate portrait;
- fictional AI person;
- anime art;
- random reference person from Stitch.

### Project imagery

No imagery in:

- homepage Selected Work;
- Project Archive.

This is intentional and final.

---

## 26. CV Note

Keep the current downloadable CV path/functionality during redesign.

The current static CV PDF is known to require separate synchronization for:

- Universitas Terbuka;
- the new LinkedIn URL.

Do not silently regenerate or edit the CV as part of the visual redesign implementation unless explicitly assigned as a separate task.

---

## 27. Anti-Patterns — Hard Reject

Do not implement:

- generated project imagery;
- generated people;
- dark cyberpunk theme;
- 3D;
- glass cards;
- neon/glow;
- excessive rounded rectangles;
- gradients;
- colorful tool logos;
- progress bars/skill percentages;
- giant experimental word fragmentation;
- graph-paper backgrounds;
- left archive sidebar;
- archive spreadsheet/table layout;
- one-project-per-viewport homepage;
- fake project years;
- fake work history;
- fake education;
- fake skills/tools;
- fake credentials;
- hard-coded `2024` copyright;
- visible full navigation row replacing the approved wordmark + hamburger system.

---

## 28. Implementation Acceptance Criteria

A redesign pass is acceptable only when:

1. All verified content remains factually intact.
2. Header is wordmark + hamburger on desktop and mobile.
3. Hero matches the approved editorial Entry composition.
4. Identity uses a real/approved portrait or a temporary neutral placeholder, never a generated person.
5. Experience is a quiet ruled chronology.
6. Selected Work is typography-only and compact 2×2 on desktop.
7. Skills uses exactly the three verified groups without proficiency ratings.
8. Tools uses the exact five verified groups without graph-paper or logo clutter.
9. Education preserves `Starting 2026` for Universitas Terbuka.
10. Credentials preserve real certification/organization facts only.
11. Contact uses real WhatsApp/email/social/CV destinations.
12. `/work` uses filters + 2-column catalogue cards, single-column on mobile.
13. NORDEN private repo CTA is preserved despite expected public GitHub 404.
14. No project images are added.
15. No unnecessary new dependencies are added.
16. `/` and `/work` remain static.
17. Lint, TypeScript, production build, and `git diff --check` pass.
18. Real desktop/mobile screenshots are reviewed before commit.

---

## 29. Final Visual QA Checklist

Review actual browser screenshots for:

- exact typography hierarchy;
- consistent wordmark/header placement;
- deliberate page margins;
- no clipped Montserrat headings;
- sane body line lengths;
- clean 1px rules;
- no legacy dark-theme leakage;
- no rounded SaaS cards;
- no excessive blank space in supporting chapters;
- compact Selected Work;
- consistent archive cards across desktop/mobile;
- horizontally usable archive filters on small screens;
- no horizontal overflow at 320px;
- no footer stranded by huge `min-height` blocks;
- no fictional Stitch content left in the DOM;
- no fictional Stitch portrait left in assets or markup.

---

## 30. Handoff Summary

The approved system is best summarized as:

> **Montserrat-led monochrome Swiss editorial portfolio, with expressive Entry/Identity/Selected Work/Contact chapters and quieter document-like Experience/Skills/Tools/Education chapters. Typography and 1px structural rules replace imagery and decorative UI.**

Implementation must faithfully reproduce the visual composition while preserving the real portfolio's factual content, links, project schema, static rendering, and accessibility behavior.
