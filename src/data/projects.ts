import type { ProjectSummary } from "@/types/project";

export const projects: ProjectSummary[] = [
  {
    slug: "haedda",
    name: "해따",
    tagline: "나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱",
    thumbnail: "/projects/haedda/thumbnail.png",
    platformStatuses: [
      { platform: "Web", status: "released" },
      { platform: "Android", status: "in-development" },
      { platform: "iOS", status: "in-development" },
    ],
    featured: true,
  },
  {
    slug: "walkaholic",
    name: "Walkaholic",
    tagline:
      "걸음 수 기반 레벨을 통해 산책 습관을 재밌게 이어가도록 돕는 산책 앱",
    thumbnail: "/projects/walkaholic/thumbnail.png",
    platformStatuses: [{ platform: "Android", status: "released" }],
    featured: true,
  },
];

export function getFeaturedProjects(): ProjectSummary[] {
  return projects.filter((project) => project.featured);
}
