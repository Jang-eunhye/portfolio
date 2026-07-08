export type ProjectStatus =
  | "released"
  | "in-development"
  | "beta"
  | "planning"
  | "upcoming";

export type ProjectPlatform = "Web" | "Android" | "iOS";

export interface PlatformStatus {
  platform: ProjectPlatform;
  status: ProjectStatus;
}

export interface ServiceLink {
  label: ProjectPlatform;
  url: string;
}

export interface ProjectSummary {
  slug: string;
  name: string;
  tagline: string;
  thumbnail?: string;
  platformStatuses: PlatformStatus[];
  featured: boolean;
}

export type Project = ProjectSummary;

export interface ProjectScreenshot {
  title: string;
  description?: string;
  image?: string;
}

export interface ProjectDecision {
  question: string;
  answer: string;
}
