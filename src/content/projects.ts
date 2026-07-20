import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "norden",
    title: "NORDEN",
    category: "Discord Bot",
    status: "In Development",
    shortDescription: "A Discord bot designed to support structured digital transactions, identity verification, payment coordination, and reputation workflows.",
    role: "Product Development & Full-Stack Engineering",
    technologies: ["Python", "discord.py", "PostgreSQL", "Redis"],
    cardTechnologies: ["Python", "discord.py", "PostgreSQL"]
  },
  {
    slug: "way-2-eternal-bot",
    title: "Way 2 Eternal Bot",
    status: "Active Development",
    shortDescription: "Discord community system for operations support, transaction workflows, and moderation utilities.",
    role: "Bot development and system maintenance",
    technologies: ["Python", "Discord API"]
  },
  {
    slug: "middleman",
    title: "Middleman",
    status: "Active Service",
    shortDescription: "Buyer–seller transaction assistance, coordinating payments and resolving disputes.",
    role: "Middleman / transaction handling",
    technologies: ["Discord", "Spreadsheets"]
  },
  {
    slug: "mandalawangi-outbound",
    title: "Mandalawangi Outbound",
    status: "Completed · Live",
    shortDescription: "Developed the Mandalawangi Outbound website to serve as the company’s information platform.",
    role: "Website Development",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://mandalawangioutbound.com"
  }
];
