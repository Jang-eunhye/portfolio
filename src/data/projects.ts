import type { ProjectSummary } from "@/types/project";
import { haeddaSummary } from "./projects/haedda";
import { walkaholicSummary } from "./projects/walkaholic";

export const projects: ProjectSummary[] = [haeddaSummary, walkaholicSummary];

export function getFeaturedProjects(): ProjectSummary[] {
  return projects.filter((project) => project.featured);
}
