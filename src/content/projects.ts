import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "norden",
    title: "NORDEN",
    category: "Bots",
    displayCategory: "Discord Bot",
    status: "In Development",
    description:
      "A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.",
    role: "Product Development & Full-Stack Engineering",
    technologies: ["Python", "discord.py", "PostgreSQL", "Redis"],
    featuredTechnologies: ["Python", "discord.py", "PostgreSQL"],
    featured: true,
    published: true,
    sortOrder: 1,
  },
  {
    slug: "way-2-eternal-bot",
    title: "Way 2 Eternal Bot",
    category: "Bots",
    displayCategory: "Discord Bot",
    status: "Active Development",
    description:
      "A Discord community bot combining AI-powered interactions, RPG and economy systems, community utilities, and structured transaction workflows.",
    role: "Bot Development & System Maintenance",
    technologies: ["Python", "discord.py", "aiosqlite", "Gemini API"],
    featured: true,
    published: true,
    sortOrder: 2,
  },
  {
    slug: "middleman",
    title: "Middleman",
    category: "Services",
    status: "Active Service",
    description:
      "Structured buyer-seller transaction coordination, providing reliable record handling, dispute support, and customer communication. Completed 500+ buyer-seller transactions.",
    role: "Middleman / transaction handling",
    technologies: ["Discord", "Spreadsheets"],
    featured: true,
    published: true,
    sortOrder: 3,
  },
  {
    slug: "mandalawangi-outbound",
    title: "Mandalawangi Outbound",
    category: "Websites",
    status: "Completed · Live",
    description:
      "Developed the Mandalawangi Outbound website to serve as the company’s information platform.",
    role: "Website Development",
    technologies: ["Next.js", "Tailwind CSS"],
    projectUrl: "https://mandalawangioutbound.com",
    featured: true,
    published: true,
    sortOrder: 4,
  },
  {
    slug: "norden-finance",
    title: "Norden Finance",
    category: "Websites",
    displayCategory: "AI-Powered Personal Finance Platform",
    status: "Archived · No Longer Maintained",
    description:
      "A full-stack personal finance platform with wallet management, budgeting, analytics, automation, and Gemini-powered transaction capture and receipt extraction.",
    role: "Product Development, Full-Stack Engineering & AI Integration",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini API"],
    featured: false,
    published: true,
    sortOrder: 5,
  },
];