import type { ToolGroup } from "@/types/portfolio";

export const toolGroups: readonly ToolGroup[] = [
  {
    title: "Operations",
    sortOrder: 1,
    tools: [
      { name: "Discord", iconKey: "discord", sortOrder: 1 },
      { name: "Telegram", iconKey: "telegram", sortOrder: 2 },
      { name: "WhatsApp", iconKey: "whatsapp", sortOrder: 3 },
      { name: "Microsoft Office", iconKey: "microsoft-office", sortOrder: 4 },
    ]
  },
  {
    title: "Development",
    sortOrder: 2,
    tools: [
      { name: "VS Code", iconKey: "visual-studio-code", sortOrder: 1 },
      { name: "GitHub", iconKey: "github", sortOrder: 2 },
      { name: "Python", iconKey: "python", sortOrder: 3 },
      { name: "Next.js", iconKey: "nextjs", sortOrder: 4 },
      { name: "Supabase", iconKey: "supabase", sortOrder: 5 },
      { name: "Cloudinary", iconKey: "cloudinary", sortOrder: 6 },
    ]
  },
  {
    title: "Networking",
    sortOrder: 3,
    tools: [
      { name: "MikroTik", iconKey: "mikrotik", sortOrder: 1 },
      { name: "Winbox", iconKey: "winbox", sortOrder: 2 },
    ]
  },
  {
    title: "Creative",
    sortOrder: 4,
    tools: [
      { name: "Adobe After Effects", iconKey: "after-effects", sortOrder: 1 },
      { name: "Adobe Photoshop", iconKey: "photoshop", sortOrder: 2 },
      { name: "Affinity by Canva", iconKey: "affinity", sortOrder: 3 },
      { name: "Canva", iconKey: "canva", sortOrder: 4 },
      { name: "CapCut", iconKey: "capcut", sortOrder: 5 },
    ]
  },
  {
    title: "AI & Automation",
    sortOrder: 5,
    tools: [
      { name: "ChatGPT", iconKey: "chatgpt", sortOrder: 1 },
      { name: "Codex", iconKey: "codex", sortOrder: 2 },
      { name: "Claude", iconKey: "claude", sortOrder: 3 },
      { name: "Gemini", iconKey: "gemini", sortOrder: 4 },
      { name: "Antigravity", iconKey: "antigravity", sortOrder: 5 },
    ]
  }
];