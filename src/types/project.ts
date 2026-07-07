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

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface ProjectDecision {
  question: string;
  answer: string;
}

export interface ServiceLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platformStatuses: PlatformStatus[];
  thumbnail?: string;
  logo?: string;
  intro: string;
  whyBuilt: string[];
  features: ProjectFeature[];
  decisions: ProjectDecision[];
  tech: string[];
  serviceLinks: ServiceLink[];
  featured: boolean;
}
