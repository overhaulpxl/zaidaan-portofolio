export type ProjectStatus =
  | "In Development"
  | "Active Development"
  | "Active Service"
  | "Completed · Live"
  | "Private Project"
  | "Paused"
  | "Archived";

export interface Project {
  slug: string;
  title: string;
  category?: string;
  status: ProjectStatus;
  shortDescription: string;
  role: string;
  technologies: string[];
  cardTechnologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  employment?: string;
  context: string;
  responsibilities: string[];
}

export interface Skill {
  category: "Core & Operations" | "Technical Skills";
  name: string;
  evidence: string;
  badge?: string;
}

export type ToolCategory =
  | "Operations & Communication"
  | "Development & Automation"
  | "Networking & IT"
  | "Creative";

export type ToolIconKey =
  | "discord"
  | "telegram"
  | "whatsapp"
  | "microsoft-office"
  | "visual-studio-code"
  | "github"
  | "python"
  | "nextjs"
  | "supabase"
  | "cloudinary"
  | "mikrotik"
  | "winbox"
  | "after-effects"
  | "photoshop"
  | "affinity"
  | "canva"
  | "capcut";

export interface Tool {
  category: ToolCategory;
  name: string;
  icon: ToolIconKey;
}

export interface Certificate {
  title: string;
  issuer: string;
  issued: string;
  result?: string;
  duration?: string;
  activityScore?: string;
  competencies?: string[];
  certificateUrl?: string;
}
