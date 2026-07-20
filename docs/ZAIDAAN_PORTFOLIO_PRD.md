# ZAIDAAN PERSONAL PORTFOLIO — PRODUCT REQUIREMENTS DOCUMENT

**Document type:** Product Requirements Document (PRD)  
**Product:** Zaidaan Zalfaa Personal Portfolio  
**Primary domain:** `zaidaan.my.id`  
**Language:** English  
**Target release:** Version 1.0  
**Status:** Approved concept, ready for implementation  
**Primary owner:** Zaidaan Zalfaa  

---

## 1. Product Summary

Build a completely new personal portfolio website for **Zaidaan Zalfaa** using **Next.js** and a monochrome **Apple-inspired Liquid Glass** visual system.

The new website must not visually copy the previous portfolio. The old website, uploaded CV, reference screenshots, and prior project discussions are used only to understand Zaidaan’s background, professional experience, skills, projects, and preferred content structure.

The portfolio must present Zaidaan as a multi-skilled candidate with practical experience in:

- Customer service
- Administrative support
- Transaction handling
- Community operations
- Communication and record keeping
- Order and website management
- Event facilitation
- Basic IT troubleshooting
- Computer networking and MikroTik
- Python scripting and Telegram automation
- Video and photo editing
- Digital product and website development

The website must support on-site, remote, part-time, full-time, and project-based opportunities. It must not position Zaidaan as remote-only or developer-only.

---

## 2. Product Vision

Create a professional, credible, and visually memorable portfolio that feels like a polished Apple interface rather than a generic developer template.

The experience should communicate:

> Zaidaan can work with people, support day-to-day operations, manage digital transactions, assist customers, work on-site, troubleshoot basic technical problems, and build practical digital solutions.

The site must balance professional experience and technical projects without exaggerating abilities or inventing facts that are not supported by Zaidaan’s CV, certificates, or direct approval.

---

## 3. Core Product Principles

### 3.1 CV is the source of truth

The latest approved CV is the primary source for:

- Profile
- Work experience
- Organization experience
- Education
- Certifications already listed in the CV
- Core skills
- Technical skills
- Contact details
- Dates, titles, and achievement claims

Do not freely rewrite, embellish, or expand CV facts.

Permitted implementation changes:

- Layout changes
- Typography changes
- Converting paragraphs into cards or bullet lists
- Translating approved Indonesian additions into English
- Fixing obvious punctuation or duplicate-word errors only after explicit approval

Not permitted:

- Adding unverified job titles
- Changing employment dates
- Changing company or project names
- Claiming expert, fluent, senior, or professional-level mastery without evidence
- Adding percentages to skills
- Presenting training scores as general skill percentages
- Presenting Zaidaan as remote-only
- Replacing “Event Facilitator” with “Tour Guide”
- Shortening “Way 2 Eternal” to “W2E” in primary public-facing titles

### 3.2 Evidence over self-rating

Skills must be shown using evidence-based cards.

Do not use:

- Skill percentage bars
- Star ratings
- “90% Customer Service”
- “80% Python”
- Arbitrary proficiency numbers

Each major skill should be supported by a short evidence statement from work experience, training, or a completed project.

### 3.3 Liquid Glass is the visual system, not decoration

The design must use monochrome Liquid Glass surfaces with:

- Glass refraction
- Frosted transparency
- Silver and white highlights
- Soft edge lighting
- Subtle chromatic refraction caused by the glass effect
- Natural depth and layered backgrounds

Do not use a separate brand accent such as blue, purple, or pink.

The only non-monochrome color allowed by default is semantic color, for example:

- Green availability indicator
- Error red
- Warning amber
- Success green

### 3.4 No “AI template” look

Avoid:

- Random futuristic shapes
- Decorative planets
- Heavy neon glow
- Excessive gradients
- Floating particles
- Meaningless 3D ornaments
- Generic bento layouts with no content hierarchy
- Over-animation
- Glass applied to every paragraph
- Multicolored tool logos dominating the page

The result must feel deliberately designed by a human product designer.



### 3.5 Impeccable anti-slop gate

Before visual work is accepted, run Impeccable critique, polish, and detector passes. Reject generic SaaS composition, purple-to-blue gradients, gradient text, nested cards, excessive pills, rounded-square icon tiles, arbitrary three-column grids, decorative blobs, and over-rounding. Design quality must come from typography, hierarchy, spacing, contrast, and purposeful material effects.

---

## 4. Goals

### Primary goals

1. Present Zaidaan’s professional background accurately.
2. Make CV download immediately accessible.
3. Let recruiters or clients reach Zaidaan through WhatsApp or email.
4. Showcase current and completed projects.
5. Demonstrate skills through real evidence.
6. Support simple content management for projects and certificates.
7. Run entirely on free-tier services where practical.
8. Deliver excellent desktop and mobile usability.
9. Make the site fast, accessible, and SEO-ready.

### Secondary goals

- Track CV downloads and primary contact clicks anonymously.
- Allow project and certificate updates without editing the source code.
- Provide individual project detail pages.
- Provide direct certificate links and one “View All Certificates” link.

---

## 5. Non-Goals

Version 1.0 will not include:

- Blog
- Newsletter
- Public account registration
- Visitor accounts
- Contact form inbox
- Comments
- Testimonials section
- Multi-admin roles
- Multi-language switcher
- CMS editing for CV-backed work experience
- CMS editing for CV-backed skills
- Skill percentage bars
- Advanced visitor fingerprinting
- Paid services
- Separate Express or Node backend
- Complex activity logs
- Complex backup dashboard
- Public analytics dashboard
- Chat widget
- E-commerce features

---

## 6. Target Audience

### 6.1 Recruiters and hiring managers

Possible roles include:

- Customer Service
- Administrative Support
- Operations Support
- Community Operations
- Transaction and Order Management
- Event Facilitator
- Entry-Level IT Support
- Website and Digital Operations
- Digital Project Support

### 6.2 Potential clients and collaborators

Users who may need:

- Website development
- Community systems
- Discord automation
- Transaction workflow support
- Middleman services
- Basic digital operations support

### 6.3 Professional contacts

People viewing Zaidaan’s:

- Work history
- Projects
- Skills
- Certificates
- Contact information
- GitHub and LinkedIn

---

## 7. Information Architecture

The final one-page homepage order is:

1. Floating Liquid Glass Navbar
2. Hero
3. Who Is Zaidaan Zalfaa?
4. Projects & Ongoing Work
5. Work Experience
6. Skills & Capabilities
7. Tools & Platforms
8. Education, Certifications & Organization
9. Contact
10. Footer

Optional project routes:

- `/projects/norden`
- `/projects/way-2-eternal-bot`
- `/projects/middleman`
- `/projects/mandalawangi-outbound`

Admin routes:

- `/admin/login`
- `/admin`
- `/admin/projects`
- `/admin/projects/new`
- `/admin/projects/[id]`
- `/admin/certificates`
- `/admin/certificates/new`
- `/admin/certificates/[id]`
- `/admin/settings`

---

# 8. Public Website Requirements

## 8.1 Floating Liquid Glass Navbar

### Content

Left:

- `Zaidaan`

Center or desktop navigation:

- About
- Projects
- Experience
- Skills
- Certifications
- Contact

Right:

- Download CV
- Hire Me
- Optional theme control only if a light theme is later approved

### Behavior

- Fixed or sticky floating capsule
- Uses Liquid Glass refraction
- Shrinks slightly after scrolling
- Active section indicator updates while scrolling
- Smooth scroll to page sections
- Keyboard accessible
- Mobile navigation opens in a glass overlay or compact sheet
- Escape key closes mobile navigation
- Focus is trapped correctly when mobile menu is open

### Hire Me behavior

`Hire Me` must not directly open WhatsApp.

It must:

1. Smooth scroll to `#contact`
2. Move keyboard focus to the Contact heading when appropriate
3. Preserve browser history without adding unnecessary hash entries

---

## 8.2 Hero

### Required content

Availability badge:

> OPEN TO OPPORTUNITIES

Professional category:

> CUSTOMER SERVICE · OPERATIONS · DIGITAL SUPPORT

Recommended headline:

> Helping people. Supporting operations. Building practical digital solutions.

Recommended introduction:

> I’m Zaidaan Zalfaa, a Computer and Network Engineering graduate with hands-on experience in customer service, online transaction handling, order and website management, community operations, event facilitation, automation, and basic IT support.

Opportunity note:

> Open to on-site, remote, and project-based opportunities.

### Primary actions

- View Projects
- Download CV

### Secondary actions

- GitHub
- LinkedIn

### Optional evidence highlights

Display compact highlights within or directly below the hero:

- `500+` Buyer–Seller Transactions
- `3.80 / 4.00` Academic GPA
- `B1` Goethe-Zertifikat
- `88` MikroTik Training Activity Score

The `88` value must always be labeled as a training activity score, not as Zaidaan’s overall networking proficiency.

### Visual requirements

- Large, calm typography
- Strong whitespace
- Layered monochrome background
- Subtle moving light behind glass surfaces
- No decorative plus signs from the old site
- No neon social icon glow
- No oversized random shapes
- Motion must remain subtle and optional

---

## 8.3 Who Is Zaidaan Zalfaa?

This section is mandatory and appears directly after the Hero.

### Layout

Desktop:

- Portrait or professional photo on the left
- Introduction and actions on the right

Mobile:

- Photo first
- Content below

### Heading

> Who Is Zaidaan Zalfaa?

### Content requirements

The final copy must faithfully reflect the approved CV.

Approved draft:

> Zaidaan Zalfaa is a Computer and Network Engineering graduate based in Cianjur, West Java, Indonesia. He has hands-on experience in customer service, online transaction handling, community operations, administrative support, and order and website management for small digital businesses.
>
> He has completed more than 500 buyer–seller transactions as a trading middleman for an online community, responded to customer and member inquiries, and assisted in resolving order, payment, and transaction-related issues.
>
> Zaidaan also has experience in event facilitation, basic IT troubleshooting, website development, computer networking, and Python-based automation. He is comfortable working independently, communicating directly with customers and partners, and supporting day-to-day operations in digital and on-site environments.

This draft must be reviewed before publication. Any change must preserve the CV’s meaning and claims.

### Capability tags

- Customer Service
- Community Operations
- Transaction Handling
- Event Facilitation
- Website Management
- IT Support

### Actions

- Download CV
- Let’s Work Together

`Let’s Work Together` smooth scrolls to `#contact`.

---

## 8.4 Projects & Ongoing Work

### Section title

> Projects & Ongoing Work

### Subtitle

> A selection of platforms, services, and digital projects I develop, operate, and have completed.

### Project order

1. NORDEN
2. Way 2 Eternal Bot
3. Middleman
4. Mandalawangi Outbound

Ordering must be configurable from the admin panel.

### Project card requirements

Each card includes:

- Cover image
- Project title
- Status
- Short description
- Zaidaan’s role
- Selected technologies or tools
- Optional project link
- Optional GitHub link
- Optional View Details action
- Last updated date only when useful

### Status values

- In Development
- Active Development
- Active Service
- Completed · Live
- Private Project
- Paused
- Archived

### Initial project definitions

#### NORDEN

**Slug:** `norden`

**Status:** In Development

**Category:** Discord Bot

**Role:** Product Development & Full-Stack Engineering

Approved description:

> A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.

Primary technologies:

- Python
- discord.py
- PostgreSQL
- Redis

Homepage card technologies:

- Python
- discord.py
- PostgreSQL

Do not associate Supabase with NORDEN. Supabase is reserved for the portfolio backend.

Only explicitly approved features may be published. The project page must not reveal private architecture, credentials, customer data, secret endpoints, or security-sensitive details.

#### Way 2 Eternal Bot

**Status:** Active Development  
**Type:** Discord community system  
**Role:** Bot development and system maintenance

Public-facing scope may include:

- Community operations support
- Transaction workflows
- Interaction recovery
- Moderation utilities
- Community features
- Automation

Use the complete title `Way 2 Eternal Bot` in public headings. Do not shorten it to `W2E Bot` as the primary title.

Sensitive internal implementation details must remain private.

#### Middleman

**Status:** Active Service  
**Type:** Buyer–seller transaction assistance  
**Role:** Middleman / transaction handling

Public-facing scope:

- More than 500 buyer–seller transactions handled
- Buyer and seller coordination
- Transaction record keeping
- Payment coordination
- Member inquiries
- Dispute assistance

The title must be exactly:

> Middleman

Do not use `ZAIDAAN Middleman` as the project title.

All screenshots must remove or obscure:

- Customer names
- Account numbers
- Bank details
- Discord IDs
- Phone numbers
- Transaction references
- Private chat content
- Personal identifiers

#### Mandalawangi Outbound

**Status:** Completed · Live  
**Type:** Company information website  
**Role:** Website Development  
**Live URL:** `https://mandalawangioutbound.com`

Approved short description:

> Developed the Mandalawangi Outbound website to serve as the company’s information platform.

The public project title must be:

> Mandalawangi Outbound

Do not use `MAP OBM` as the primary project title.

### Project detail pages

Recommended for:

- NORDEN
- Way 2 Eternal Bot

Optional for:

- Middleman
- Mandalawangi Outbound

Project detail fields:

- Overview
- Status
- Role
- Responsibilities
- Features
- Tools and technologies
- Gallery
- Live link
- GitHub link
- Privacy note when necessary

---

## 8.5 Work Experience

This section must be based on the approved CV and displayed in reverse chronological order.

### Presentation

Recommended design:

- Selectable Liquid Glass timeline
- Compact company and role cards
- Details expand or appear in a side panel
- Avoid repeating large identical cards
- Maintain clear date hierarchy
- Do not hide essential information behind hover-only interactions

### Source content

#### Way 2 Eternal Community

**Role:** Community Operations & Transactions  
**Employment:** Part-time, Remote / Self-managed  
**Period:** Nov 2025 – Present  
**Context:** Discord-based online trading and community platform

Responsibilities:

- Acted as a transaction middleman for a Discord-based online trading community, completing 500+ buyer-seller transactions.
- Responded to member inquiries and helped resolve disputes between buyers and sellers.
- Coordinated a partnership with Bloxistry and worked with a Shopee affiliate marketing analyst to distribute promotional vouchers.
- Recorded transaction details and tracked basic finance-related activity for the community.

The public title must use `Way 2 Eternal Community`, not an abbreviation.

#### NXRDEN Store

**Role:** Website & Order Management  
**Employment:** Part-time, Remote / Self-managed  
**Period:** Nov 2025 – May 2026  
**Context:** Online Robux top-up store

Responsibilities from the CV:

- Managed daily operations of an online Robux top-up store, from order intake to delivery.
- Processed customer orders and payments, and confirmed accurate, on-time delivery.
- Responded to customer questions and responded to customer questions and resolved order or payment issues.

The duplicate wording in the third bullet is part of the provided CV source. It must not be silently rewritten in production. A corrected display version requires Zaidaan’s approval.

#### Seraphim Robux Store

**Role:** Customer Service & Order Processing  
**Employment:** Part-time, Remote  
**Period:** Feb 2026 – Mar 2026  
**Context:** Online Robux top-up store

Responsibilities:

- Answered customer questions and processed daily orders for an online Robux store.
- Checked transaction details before fulfilling orders to avoid mistakes.
- Built a Python-based Telegram bot to automate order tracking, cutting down on manual reporting.

#### Mandalawangi Outbound

**Role:** Event Facilitator  
**Period:** Sep 2022 – Oct 2023  
**Context:** Outbound training and corporate team-building events

Responsibilities:

- Guided participants through outbound and team-building activities, briefing groups and keeping sessions on schedule.
- Monitored participant safety during activities and kept event documentation and on-site logistics organized.
- Developed the MAP OBM website to serve as the company’s information platform.

The role must remain `Event Facilitator`.

Do not replace it with:

- Tour Guide
- Participant Guide
- Guest Guide

The website can mention Zaidaan is open to related opportunities elsewhere, but the historical role must remain accurate.

#### JP.Computindo

**Role:** IT Intern (IT Team & Archive)  
**Period:** Mar 2022 – Jun 2023  
**Context:** A private company engaged in computer services, sales, and maintenance

Responsibilities:

- Diagnosed and fixed hardware issues on office PCs, printers, and other equipment.
- Installed software and set up systems for daily office use, and provided basic technical support to staff.

---

## 8.6 Skills & Capabilities

### Design decision

Use evidence-based skill cards.

Do not use progress bars or percentages.

### Section structure

Two main groups:

- Core & Operations
- Technical Skills

### Core & Operations

#### Customer Service

Evidence:

> Experience responding to customer and community member inquiries and resolving order or payment-related issues.

#### Administrative Support

Evidence:

> Supported transaction records, order details, event documentation, and day-to-day operational tasks.

#### Transaction Handling

Evidence:

> Completed more than 500 buyer–seller transactions and maintained transaction records.

#### Community Operations

Evidence:

> Supported members, assisted with buyer–seller disputes, coordinated partnerships, and tracked community activity.

#### Communication

Evidence:

> Communicated directly with customers, buyers, sellers, community members, partners, and event participants.

#### Record Keeping

Evidence:

> Maintained transaction details, order information, event documentation, and basic finance-related records.

### Technical Skills

#### Website & Order Management

Evidence:

> Managed online store operations and developed the Mandalawangi Outbound website.

#### MikroTik & Computer Networking

Evidence:

> Completed certified training in computer network development with MikroTik, including LAN design, TCP/IP configuration, gateway setup, network administration, troubleshooting, and security monitoring.

#### Basic Python Scripting

Evidence:

> Used Python to build a Telegram bot for automated order tracking.

#### Telegram Bot / Automation

Evidence:

> Built an automation tool that reduced manual order reporting.

#### PC & Printer Troubleshooting

Evidence:

> Diagnosed hardware issues and provided basic technical support during an IT internship.

#### Software Installation

Evidence:

> Installed software and set up systems for daily office use.

#### Video Editing

Evidence:

> Edited video and photo content for school multimedia projects as part of Ripple Studio.

### Card behavior

Each skill card may include:

- Monochrome icon
- Skill name
- One evidence sentence
- Evidence badge such as:
  - `500+ Transactions`
  - `Hands-on Experience`
  - `Certified Training`
  - `Built with Python`
  - `Internship Experience`

### Interaction

- Subtle glass refraction on hover
- Slight elevation
- Keyboard focus style
- No hover-only essential content
- No skill percentages

---

## 8.7 Tools & Platforms

### Design decision

Use:

> Logo + text label

Do not use logo-only or text-only presentation.

### Visual treatment

- Official or licensed brand icons
- Monochrome white or silver by default
- Tool name always visible
- Original brand color may appear very subtly on hover only
- No ratings or percentages
- Small Liquid Glass chips or compact cards
- Desktop grid
- Mobile two-column or three-column grid depending on width

### Categories and approved ordering

#### Operations & Communication

1. Discord
2. Telegram
3. WhatsApp
4. Microsoft Office

#### Development & Automation

1. Visual Studio Code
2. GitHub
3. Python
4. Next.js
5. Supabase
6. Cloudinary

#### Networking & IT

1. MikroTik
2. Winbox

#### Creative

Use this exact order:

1. Adobe After Effects
2. Adobe Photoshop
3. Affinity by Canva
4. Canva
5. CapCut

CapCut must remain last in the Creative category.

---

## 8.8 Education, Certifications & Organization

This can be one grouped section with clear subsections to avoid making the page unnecessarily long.

### Education

#### SMKN 1 Pacet

- Location: Cianjur, Indonesia
- Period: 2020 – 2023
- Qualification: High School Diploma
- Major: Computer and Network Engineering
- GPA: 3.80 / 4.00

### Certifications

#### Goethe-Zertifikat (B1)

- Issuer: Goethe-Institut
- Issued: Jul 2025
- Action: View Certificate

#### Computer Network Development with MikroTik

- Issuer: Karier.mu / LKP Bina Karya Mandiri
- Issued: Sep 2023
- Result: Excellent
- Learning duration: 14 hours 56 minutes
- Activity score: 88
- Action: View Certificate

Approved competency summary:

- LAN design
- UTP cabling
- Wireless networking
- Static TCP/IP configuration
- Internet gateway installation and configuration
- Network device administration
- Network system administration
- Testing and troubleshooting
- Network maintenance
- Network security monitoring and administration

#### TOEIC

- Issuer: Educational Testing Service (ETS)
- Issued: Aug 2022
- Action: View Certificate

Do not display an English proficiency label that is not present in the source document.

### Certificate storage and links

- PDF certificate files remain in Google Drive.
- Each certificate card opens its individual Google Drive file in a new tab.
- A button below the cards opens the main certificate folder:

> View All Certificates

### Certificate previews

- Optional thumbnail hosted on Cloudinary
- Thumbnail must not reveal sensitive identity details unnecessarily
- Do not embed the full Google Drive folder interface into the website

### Organization Experience

#### E-Sport SMKN 1 Pacet

**Role:** Chairman

Responsibilities:

- Started the school’s e-sports club and organized training sessions and internal tournaments.
- Coordinated team logistics for club events.

#### Ripple Studio

**Role:** Creative Team, Editor

Responsibilities:

- Edited video and photo content for school multimedia projects and suggested content ideas.

---

## 8.9 Contact

### Section ID

`contact`

### Heading

> Let’s work together.

### Suggested description

> Whether you are looking for customer service support, operational assistance, community operations, an event facilitator, entry-level IT support, or help with a digital project, feel free to reach out.

### Primary contact cards

#### WhatsApp

Number:

`+62 857-9371-9676`

Button:

> Chat on WhatsApp

Default message:

> Hello Zaidaan, I found your portfolio and would like to discuss an opportunity.

#### Email

Address:

`zaidaan1337@gmail.com`

Actions:

- Send an Email
- Copy Email Address

After copying:

> Email copied

### Secondary links

- LinkedIn
- GitHub
- Linktree

### Behavior

- `Hire Me` scrolls here
- `Let’s Work Together` scrolls here
- Contact actions open in the appropriate application
- No contact form in version 1.0
- No database storage of visitor messages
- No CAPTCHA needed

---

## 8.10 Footer

Include:

- Zaidaan Zalfaa
- Copyright year
- GitHub
- LinkedIn
- Linktree
- Back to top
- Optional small line: `Built with Next.js`

---

# 9. Visual Design System

## 9.1 Color system

### Base colors

- Black
- Graphite
- White
- Silver
- Transparent white
- Transparent black

### Semantic colors

- Availability green
- Success green
- Warning amber
- Error red

### Forbidden brand accents

Do not use a persistent:

- Blue accent
- Purple accent
- Pink accent
- Orange accent
- Multicolor gradient brand theme

Chromatic edges created naturally by refraction are permitted.

## 9.2 Liquid Glass surfaces

Use Liquid Glass on:

- Floating navbar
- Primary and secondary buttons
- Project cards
- Selected skill cards
- Tool chips
- Certificate cards
- Contact cards
- Dialogs and mobile navigation
- Compact evidence highlights

Do not apply strong refraction to:

- Long paragraphs
- Dense work-experience text
- Every section background
- Full-page body content

## 9.3 Typography

Recommended approach:

- Modern system or neo-grotesk sans-serif
- Strong hierarchy
- Large hero display type
- Compact uppercase labels
- Comfortable paragraph line length

Possible implementation:

- Geist
- Inter
- System font stack

Use one primary family in version 1.0 unless a second display face clearly improves the design.

## 9.4 Motion

Allowed:

- Soft section reveal
- Small card elevation
- Refraction response
- Navbar shrink
- Button press elasticity
- Smooth project transitions
- Number count-up for verified highlights

Avoid:

- Constant floating objects
- Excessive parallax
- Long intro animation
- Mandatory preloader
- Cursor replacement
- Motion that delays access to content

## 9.5 Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Disable large movement
- Disable count-up animation
- Disable elastic distortion
- Use instant or short opacity transitions
- Keep all content immediately accessible

## 9.6 Browser fallback

When full Liquid Glass displacement is not supported:

- Use `backdrop-filter`
- Use transparent border
- Use inner highlight
- Use subtle shadow
- Preserve layout, contrast, and interaction
- Do not show broken shaders or missing surfaces

---

# 10. Responsive Design

## Desktop

- Maximum content width around 1200–1400 px
- Two-column About section
- Two-column skills layout
- Tool grid of four to six columns
- Project cards may use an asymmetric but structured layout
- Floating navbar centered with generous margins

## Tablet

- Two-column layout where comfortable
- Reduced glass distortion
- Larger touch targets
- Project grid reduced to one or two columns

## Mobile

- Single-column content
- Compact floating navbar
- Mobile glass menu
- Tool grid two columns
- Full-width project cards
- No hover-dependent content
- Minimum tap target around 44 px
- Hero text must not overflow
- Contact buttons full-width when necessary

---

# 11. Accessibility Requirements

- Semantic HTML
- Logical heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible mobile menu
- Sufficient contrast
- Descriptive alternative text
- No icon-only controls without accessible labels
- Reduced-motion support
- Copy-email feedback through an accessible live region

Target:

- WCAG 2.1 AA where practical

---

# 12. SEO and Social Sharing

## Recommended title

> Zaidaan Zalfaa — Customer Service, Operations & Digital Support

## Recommended description

> Portfolio of Zaidaan Zalfaa, featuring experience in customer service, community operations, transaction handling, event facilitation, IT support, networking, automation, and digital projects.

## Requirements

- Canonical URL
- Open Graph metadata
- Social card metadata
- Favicon
- Apple touch icon
- Structured data for `Person`
- Sitemap
- Robots file
- Project-specific metadata
- Dynamic Open Graph image where practical

## Open Graph image

Include:

- Zaidaan Zalfaa
- Professional headline
- Monochrome Liquid Glass visual
- `zaidaan.my.id`

---

# 13. Design Workflow with Impeccable

Impeccable is required for design planning, critique, refinement, and deterministic anti-slop checks.

Official project:

- Website: `https://impeccable.style/`
- Repository: `https://github.com/pbakaus/impeccable`
- Install from the project root: `npx impeccable install`

The repository includes `PRODUCT.md` and `DESIGN.md`. They define the audience, brand voice, references, anti-references, and visual system. Impeccable must read them but must not override this PRD or invent factual content.

Recommended design sequence:

1. `/impeccable shape the Zaidaan portfolio homepage`
2. Review the design brief before implementation.
3. `/impeccable craft the approved homepage direction`
4. `/impeccable critique the homepage`
5. `/impeccable polish the homepage`
6. Use `/impeccable live` for browser-based selection and variants when useful.
7. Run `npx impeccable detect app/` before accepting visual work.

Impeccable is a design-quality tool, not a factual source of truth.

---

# 14. Technical Architecture

## Core stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- `liquid-glass-react`
- Framer Motion
- Lucide React or another approved icon system
- Zod
- Supabase
- Cloudinary
- Google Drive
- Vercel

## Hosting

Use Vercel’s free personal tier where available.

Requirements:

- GitHub-connected deployments
- Preview deployments
- Production deployment from the approved main branch
- Custom domain: `zaidaan.my.id`
- Automatic HTTPS
- Environment variables stored in Vercel

Do not create a separate backend deployment.

## Full-stack approach

Next.js handles:

- Public frontend
- Admin frontend
- Server Components
- Server Actions
- Route Handlers
- Authentication checks
- Cloudinary upload signing
- Analytics event ingestion
- CV download redirect and tracking
- Cache revalidation

---

# 15. Content Storage Strategy

## Static, CV-backed content

Keep these in version-controlled TypeScript files:

- Profile source content
- Work experience
- Organization experience
- Education
- Skills and evidence copy
- Tools and platform list
- Primary navigation structure

Suggested files:

```text
src/content/profile.ts
src/content/experience.ts
src/content/skills.ts
src/content/tools.ts
src/content/education.ts
src/content/organizations.ts
```

## Dynamic content

Store these in Supabase:

- Projects
- Project status
- Project descriptions
- Project roles
- Project technologies
- Project images
- Project links
- Project visibility and ordering
- Certificates
- Certificate links
- Certificate thumbnails
- Site contact settings
- Availability text
- View All Certificates folder URL
- Optional event analytics

---

# 16. Backend Requirements

## Authentication

Use Supabase Auth.

Requirements:

- Single approved admin account
- Email and password login
- No public registration
- Protected `/admin` routes
- Server-side session validation
- Admin authorization on every write action
- Logout action

## Project management

Admin can:

- Create project
- Edit project
- Upload cover
- Upload gallery images
- Change status
- Set role
- Set technologies
- Set live URL
- Set GitHub URL
- Set sort order
- Mark as featured
- Save as draft
- Publish
- Hide
- Delete

## Certificate management

Admin can:

- Create certificate entry
- Edit title
- Edit issuer
- Edit issue date
- Add result or score
- Add description
- Add Google Drive URL
- Upload thumbnail
- Set sort order
- Publish
- Hide
- Delete

## Site settings

Admin can edit:

- Availability status
- Availability text
- Contact email
- WhatsApp number
- WhatsApp default message
- GitHub URL
- LinkedIn URL
- Linktree URL
- View All Certificates URL

The name, CV-backed profile, experience, education, and skill claims remain source-controlled.

## Media upload

Use Cloudinary for:

- Project covers
- Project gallery
- Certificate thumbnails
- About photo
- Open Graph image

Upload requirements:

- Signed uploads
- Signature generated on the server
- API secret never exposed to the client
- JPG, PNG, WebP, and AVIF where supported
- File-size validation
- Store Cloudinary `public_id`
- Delete replaced media when safe
- Generate optimized responsive URLs
- Store alternative text and optional caption

Suggested folders:

```text
zaidaan-portfolio/
├── projects/
│   ├── norden/
│   ├── way-2-eternal-bot/
│   ├── middleman/
│   └── mandalawangi-outbound/
├── certificates/
├── profile/
└── open-graph/
```

---

# 17. Suggested Database Schema

## `projects`

```text
id
slug
title
status
short_description
full_description
role
responsibilities
technologies
cover_image_url
cover_image_public_id
live_url
github_url
sort_order
is_featured
publication_status
created_at
updated_at
```

`publication_status`:

- draft
- published
- hidden

## `project_images`

```text
id
project_id
image_url
public_id
alt_text
caption
sort_order
created_at
```

## `certificates`

```text
id
title
issuer
issued_date
result
score
description
certificate_url
preview_image_url
preview_image_public_id
sort_order
publication_status
created_at
updated_at
```

## `site_settings`

```text
id
availability_status
availability_text
contact_email
whatsapp_number
whatsapp_default_message
github_url
linkedin_url
linktree_url
certificates_folder_url
updated_at
```

## `analytics_events`

Optional anonymous events:

```text
id
event_name
target_slug
created_at
```

Allowed events:

- cv_download
- whatsapp_click
- email_click
- project_open
- project_live_link_click
- certificate_open
- github_click
- linkedin_click

Do not store:

- IP address
- Precise location
- Device fingerprint
- Visitor name
- Visitor email
- Private user data

---

# 18. CV Download

Recommended file:

```text
/public/documents/Zaidaan_Zalfaa_CV.pdf
```

Route:

```text
GET /api/download/cv
```

Behavior:

1. Record an anonymous `cv_download` event.
2. Redirect to the CV file.
3. If analytics recording fails, the CV must still download.
4. Use a stable filename.
5. Make it accessible from Hero, About, and Navbar.

---

# 19. Performance Requirements

- Fast first render
- Optimized images
- Minimal client-side JavaScript
- Server Components by default
- Lazy-load below-the-fold media
- Avoid large background video
- Avoid uncompressed screenshots
- Do not initialize expensive glass effects off-screen
- Limit simultaneous refractive surfaces
- Cache project and certificate data
- Revalidate after admin updates
- Keep CV-backed content available if the database is unavailable

---

# 20. Security Requirements

- Supabase Row Level Security enabled
- Public read only for published projects and certificates
- Admin-only create, update, and delete
- Service-role key server-only
- Cloudinary API secret server-only
- Validate input with Zod
- Validate external URLs
- Restrict image MIME types and size
- Unique project slugs
- Protect admin routes server-side
- Do not expose private project data
- Use secure cookies and HTTPS
- Avoid storing customer or transaction-sensitive information

---

# 21. Suggested Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── admin/
│   │   ├── login/
│   │   ├── projects/
│   │   ├── certificates/
│   │   └── settings/
│   └── api/
│       ├── analytics/
│       ├── download/
│       │   └── cv/
│       └── media/
│           └── sign/
├── components/
│   ├── glass/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   ├── admin/
│   └── ui/
├── content/
│   ├── profile.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── tools.ts
│   ├── education.ts
│   └── organizations.ts
├── lib/
│   ├── supabase/
│   ├── cloudinary/
│   ├── validation/
│   ├── analytics/
│   └── utils/
└── types/
```

---

# 22. Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://zaidaan.my.id

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

ADMIN_EMAIL=zaidaan1337@gmail.com
```

Rules:

- Never expose `SUPABASE_SERVICE_ROLE_KEY`
- Never expose `CLOUDINARY_API_SECRET`
- Use Vercel environment settings
- Do not commit `.env` files

---

# 23. Free-Tier Constraints

Use:

- Vercel for hosting and Next.js server functions
- Supabase for PostgreSQL and admin authentication
- Cloudinary for image hosting and transformations
- Google Drive for certificate PDFs
- GitHub for source control
- Existing custom domain `zaidaan.my.id`

To remain within free usage:

- Store only text and metadata in Supabase
- Store images in Cloudinary
- Store certificate PDFs in Google Drive
- Keep CV in public application assets
- Compress project images
- Avoid large self-hosted video
- Cache database content
- Avoid excessive analytics events
- Avoid unnecessary server requests

---

# 24. Content Administration Rules

## Admin-editable

- Projects
- Project images
- Project status
- Project ordering
- Project links
- Certificates
- Certificate thumbnails
- Certificate links
- Availability text
- Contact links

## Source-controlled and locked

- Zaidaan’s name
- Approved CV profile
- Work experience
- Work titles
- Work dates
- Organization experience
- Education
- CV-backed skills
- CV-backed claims
- Tool list unless manually updated in code

---

# 25. Quality Assurance Checklist

## Content accuracy

- [ ] Name is `Zaidaan Zalfaa`
- [ ] Contact details match the approved CV
- [ ] Work dates match the approved CV
- [ ] Work titles match the approved CV
- [ ] Way 2 Eternal is not shortened in primary headings
- [ ] Middleman project is titled only `Middleman`
- [ ] Mandalawangi project is titled `Mandalawangi Outbound`
- [ ] Event Facilitator is not changed to Tour Guide
- [ ] No unsupported English proficiency claim
- [ ] No skill percentages
- [ ] MikroTik score 88 is labeled as training activity score
- [ ] No invented project features
- [ ] No sensitive transaction data is visible

## Design

- [ ] Monochrome Liquid Glass system
- [ ] No persistent blue, purple, or pink accent
- [ ] Semantic availability green only where needed
- [ ] No generic futuristic ornaments
- [ ] No heavy neon
- [ ] Glass is selective, not everywhere
- [ ] Tool logos are monochrome by default
- [ ] CapCut appears last in Creative tools
- [ ] Typography is readable
- [ ] Mobile layout is polished

## Interaction

- [ ] Hire Me scrolls to Contact
- [ ] Let’s Work Together scrolls to Contact
- [ ] Download CV works
- [ ] WhatsApp opens the approved message
- [ ] Email link works
- [ ] Copy email gives accessible feedback
- [ ] Navbar active state follows scroll
- [ ] Mobile navigation works with keyboard
- [ ] Reduced-motion mode works

## Backend

- [ ] Admin login protected
- [ ] Public registration disabled
- [ ] Project CRUD works
- [ ] Certificate CRUD works
- [ ] Draft and publish states work
- [ ] Image upload is signed
- [ ] Secrets remain server-only
- [ ] RLS policies are enabled
- [ ] Revalidation occurs after updates
- [ ] Analytics failure never blocks actions

## Performance and SEO

- [ ] Images are optimized
- [ ] No large blocking video
- [ ] Glass effects are limited
- [ ] Below-the-fold media lazy-loads
- [ ] Homepage works when database is temporarily unavailable
- [ ] Correct title and description
- [ ] Canonical URL
- [ ] Open Graph image
- [ ] Favicon
- [ ] Sitemap
- [ ] Robots file
- [ ] Person structured data

---

# 26. Acceptance Criteria

Version 1.0 is complete when:

1. The site is deployed to Vercel at `zaidaan.my.id`.
2. The visual design consistently uses monochrome Liquid Glass.
3. The site does not resemble the old portfolio layout.
4. The homepage includes all approved sections.
5. “Who Is Zaidaan Zalfaa?” is present.
6. Projects include NORDEN, Way 2 Eternal Bot, Middleman, and Mandalawangi Outbound.
7. Work experience matches the approved CV.
8. Skills use evidence-based cards without percentages.
9. Tools use logo plus text.
10. Creative tools follow the approved order with CapCut last.
11. Certificates open their Google Drive files.
12. View All Certificates opens the main folder.
13. Download CV works from multiple sections.
14. Hire Me scrolls to Contact.
15. Contact offers WhatsApp and email.
16. Admin can manage projects and certificates.
17. Cloudinary image upload works securely.
18. Published content updates without a full manual redeploy.
19. The site is usable on mobile, tablet, and desktop.
20. Accessibility, privacy, and security checks pass.

---

# 27. Implementation Phases

## Phase 1 — Foundation

- Create new Next.js project
- Configure TypeScript and Tailwind
- Install Liquid Glass and motion dependencies
- Establish design tokens
- Build responsive layout shell
- Add static CV-backed content files

## Phase 2 — Public Experience

- Navbar
- Hero
- Who Is Zaidaan Zalfaa?
- Projects & Ongoing Work
- Work Experience
- Skills & Capabilities
- Tools & Platforms
- Education, Certifications & Organization
- Contact
- Footer

## Phase 3 — Backend and Admin

- Supabase setup
- Authentication
- Database schema
- RLS policies
- Admin dashboard
- Project CRUD
- Certificate CRUD
- Settings
- Revalidation

## Phase 4 — Media

- Cloudinary setup
- Signed uploads
- Cover and gallery management
- Responsive delivery
- Certificate thumbnails
- About image
- Open Graph image

## Phase 5 — Polish and Launch

- Analytics events
- CV download route
- SEO
- Accessibility
- Reduced motion
- Browser fallback
- Performance optimization
- Domain connection
- Production QA

---

# 28. Locked Decisions Summary

- Website language: English
- Framework: Next.js
- Hosting: Vercel
- Database and auth: Supabase
- Image hosting: Cloudinary
- Certificate PDFs: Google Drive
- Visual direction: monochrome Apple-inspired Liquid Glass
- No persistent accent color
- Hire Me scrolls to Contact
- Contact uses WhatsApp and email
- “Who Is Zaidaan Zalfaa?” is mandatory
- Section title: Projects & Ongoing Work
- Project title: NORDEN
- NORDEN slug: `norden`
- NORDEN category: Discord Bot
- NORDEN status: In Development
- NORDEN description: A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.
- NORDEN role: Product Development & Full-Stack Engineering
- NORDEN primary technologies: Python, discord.py, PostgreSQL, Redis
- NORDEN homepage card technologies: Python, discord.py, PostgreSQL
- Project title: Way 2 Eternal Bot
- Project title: Middleman
- Project title: Mandalawangi Outbound
- Personal Portfolio is not listed as a project
- Mandalawangi Outbound status: Completed · Live
- Skills use evidence cards, not progress bars
- Tools use logo plus text
- Creative tool order:
  1. Adobe After Effects
  2. Adobe Photoshop
  3. Affinity by Canva
  4. Canva
  5. CapCut
- CV-backed text and claims cannot be changed casually
- Event Facilitator remains Event Facilitator
- No Game Developer skill
- No Writing skill
- No unsupported language proficiency claims
- No separate backend server
- No contact form in version 1.0

---

# 29. Source-of-Truth Appendix

## Approved contact

- Name: Zaidaan Zalfaa
- Location: Cianjur, West Java, Indonesia
- Phone: +62 857-9371-9676
- Email: zaidaan1337@gmail.com
- Website: zaidaan.my.id
- Linktree: https://linktr.ee/zaidaaann
- GitHub: github.com/overhaulpxl
- LinkedIn: linkedin.com/in/zaidaan-zalfaa-a09306291

## Approved CV profile source

> Computer and Network Engineering graduate (SMK) with hands-on experience in customer service, online transaction handling, and order and website management for small digital businesses. Completed 500+ buyer-seller transactions as a trading middleman for an online community, and built a Python-based Telegram bot to automate order tracking. Additional background in basic IT troubleshooting (PCs, printers, and office software) from an internship. Comfortable working independently in remote, self-managed roles and communicating directly with customers and partners to resolve day-to-day issues.

## Approved CV skills

### Core

- Customer Service
- Administrative Support
- Transaction Handling
- Community Operations
- Communication
- Record Keeping

### Technical

- Website & Order Management
- Basic Python Scripting
- Telegram Bot / Automation
- PC & Printer Troubleshooting
- Software Installation
- Video Editing

### User-approved addition

- MikroTik & Computer Networking

This addition is supported by Zaidaan’s Computer and Network Engineering background and certified MikroTik training.

---

**End of PRD**
