import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "norden",
    title: "NORDEN",
    category: "Discord Bot",
    filters: ["Bots", "Automation", "Community Systems"],
    status: "In Development",
    description:
      "A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.",
    role: "Product Development & Full-Stack Engineering",
    technologies: ["Python", "discord.py", "PostgreSQL", "Redis"],
    featuredTechnologies: ["Python", "discord.py", "PostgreSQL"],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/overhaulpxl/norden",
      }
    ],
    featured: true,
    published: true,
    sortOrder: 1,
  },
  {
    slug: "way-2-eternal-bot",
    title: "Way 2 Eternal Bot",
    category: "Discord Bot",
    filters: ["Bots", "Automation", "Community Systems"],
    status: "Active Development",
    description:
      "A Discord community bot combining AI-powered interactions, RPG and economy systems, community utilities, and structured transaction workflows.",
    role: "Bot Development & System Maintenance",
    technologies: ["Python", "discord.py", "aiosqlite", "Gemini API"],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/overhaulpxl/w2ebot",
      }
    ],
    featured: true,
    published: true,
    sortOrder: 2,
  },
  {
    slug: "middleman",
    title: "Middleman",
    category: "Services",
    filters: ["Services", "Community Systems"],
    status: "Active Service",
    description:
      "Structured buyer–seller transaction coordination with clear records, responsive communication, and dispute support. Completed 1,000+ transactions.",
    role: "Middleman / transaction handling",
    technologies: ["Discord", "Spreadsheets"],
    links: [
      {
        label: "VIEW 1,000+ MILESTONE",
        href: "https://www.facebook.com/share/p/183hRYRgcU/",
      }
    ],
    featured: true,
    published: true,
    sortOrder: 3,
  },
  {
    slug: "mandalawangi-outbound",
    title: "Mandalawangi Outbound",
    category: "Websites",
    filters: ["Websites"],
    status: "Completed · Live",
    description:
      "Developed the Mandalawangi Outbound website to serve as the company’s information platform.",
    role: "Website Development",
    technologies: ["Next.js", "Tailwind CSS"],
    links: [
      {
        label: "Visit Website",
        href: "https://mandalawangioutbound.com",
      }
    ],
    featured: true,
    published: true,
    sortOrder: 4,
  },
  {
    slug: "norden-finance",
    title: "NORDEN Finance",
    category: "Websites",
    filters: ["Websites"],
    status: "Archived · No Longer Maintained",
    description:
      "A full-stack personal finance platform with wallet management, budgeting, analytics, automation, and Gemini-powered transaction capture and receipt extraction.",
    role: "Product Development, Full-Stack Engineering & AI Integration",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini API"],
    links: [
      {
        label: "Visit Website",
        href: "https://nordenfinance.vercel.app/",
      }
    ],
    featured: false,
    published: true,
    sortOrder: 5,
  },
  {
    slug: "b1-prufung-training",
    title: "B1 Prüfung Training",
    category: "Websites",
    filters: ["Websites"],
    status: "Completed · Live",
    description:
      "A web-based training platform for B1 German exam preparation.",
    role: "Website Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "Visit Website",
        href: "https://b1-prufung-web.vercel.app/",
      }
    ],
    featured: false,
    published: true,
    sortOrder: 6,
  },
  {
    slug: "mandalawangi-legacy",
    title: "Mandalawangi Outbound — Legacy Website",
    category: "Websites",
    filters: ["Websites"],
    status: "Archived",
    description:
      "Earlier legacy website for Mandalawangi Outbound.",
    role: "Website Development",
    technologies: ["Next.js", "Tailwind CSS"],
    links: [
      {
        label: "Visit Website",
        href: "https://mapobm.vercel.app/",
      }
    ],
    featured: false,
    published: true,
    sortOrder: 7,
  }
];