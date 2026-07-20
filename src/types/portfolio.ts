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
  context: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  name: string;
  evidence: string;
  badge?: string;
}

export interface Tool {
  category: string;
  name: string;
}
