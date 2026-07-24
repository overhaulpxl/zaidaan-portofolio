export type ProjectStatus =
  | "In Development"
  | "Active Development"
  | "Active Service"
  | "Completed · Live"
  | "Private Project"
  | "Paused"
  | "Archived · No Longer Maintained"
  | "Archived";

export type ProjectCategory =
  | "Bots"
  | "Websites"
  | "Services"
  | "Automation"
  | "Community Systems";

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectFilterType =
  | "All"
  | "Bots"
  | "Websites"
  | "Services"
  | "Automation"
  | "Community Systems";

export type ProjectLink = {
  label: string;
  href: string;
};
export interface Project {
  slug: string;
  title: string;
  category: string;
  filters?: readonly ProjectFilterType[];
  status: ProjectStatus;
  description: string;
  role: string;
  technologies: readonly string[];
  featuredTechnologies?: readonly string[];
  year?: string;
  featured: boolean;
  published: boolean;
  sortOrder: number;
  links?: readonly ProjectLink[];
  media?: ProjectMedia | null;
}

export type Experience = {
  company: string;
  role: string;
  arrangement?: string;
  startDate: string;
  endDate: string | "Present";
  responsibilities: readonly string[];
  sortOrder: number;
};

export type SkillGroup = {
  title: string;
  skills: readonly SkillItem[];
  sortOrder: number;
};

export type SkillItem = {
  name: string;
};

export type ToolCategory =
  | "Operations"
  | "Development"
  | "Networking"
  | "Creative"
  | "AI & Automation";

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
  | "capcut"
  | "chatgpt"
  | "codex"
  | "claude"
  | "gemini"
  | "antigravity";

export type ToolGroup = {
  title: string;
  tools: readonly Tool[];
  sortOrder: number;
};

export type Tool = {
  name: string;
  iconKey?: ToolIconKey;
  sortOrder: number;
};

export type Education = {
  institution: string;
  program: string;
  startYear: string;
  endYear: string;
  gradeLabel?: string;
  gradeValue?: string;
  description?: string;
  sortOrder: number;
};

export type Certification = {
  title: string;
  issuer?: string;
  issuedLabel: string;
  issuedDate?: string;
  level?: string;
  scoreLabel?: string;
  scoreValue?: string;
  duration?: string;
  documentUrl?: string | null;
  published: boolean;
  sortOrder: number;
};

export type Organization = {
  name: string;
  role: string;
  period?: string;
  description?: string;
  sortOrder: number;
};

export type ProfilePhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: string;
};