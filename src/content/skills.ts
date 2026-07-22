import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Core Operations",
    sortOrder: 1,
    skills: [
      { name: "Customer Service" },
      { name: "Administrative Support" },
      { name: "Transaction Handling" },
      { name: "Community Operations" },
      { name: "Communication" },
      { name: "Record Keeping" }
    ]
  },
  {
    title: "Technical",
    sortOrder: 2,
    skills: [
      { name: "Website & Order Management" },
      { name: "Basic Python Scripting" },
      { name: "Telegram Bot/Automation" },
      { name: "PC & Printer Troubleshooting" },
      { name: "Software Installation" },
      { name: "Video Editing" },
      { name: "MikroTik & Computer Networking" }
    ]
  },
  {
    title: "AI & Workflow",
    sortOrder: 3,
    skills: [
      { name: "Prompt Engineering" },
      { name: "LLM Integration" },
      { name: "AI Workflow Design" },
      { name: "AI-Assisted Development" },
      { name: "Technical Specification Design" },
      { name: "Evaluation & QA" }
    ]
  }
];