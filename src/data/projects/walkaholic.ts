import type {
  ProjectDecision,
  ProjectScreenshot,
  ProjectSummary,
  ServiceLink,
} from "@/types/project";

export const walkaholicSummary: ProjectSummary = {
  slug: "walkaholic",
  name: "워커홀릭",
  tagline:
    "걸음 수 기반 레벨을 통해 산책 습관을 재밌게 이어가도록 돕는 산책 앱",
  thumbnail: "/projects/walkaholic/thumbnail.png",
  platformStatuses: [{ platform: "Android", status: "released" }],
  featured: true,
};

export const walkaholic = {
  ...walkaholicSummary,
  logo: "/projects/walkaholic/icon.png",
  intro:
    "걸음 수를 레벨로 쌓으며 산책 습관을 재밌게 이어가도록 돕는 Android 앱",
  serviceLinks: [
    {
      label: "Android",
      url: "https://play.google.com/store/apps/details?id=com.eunhye99.walkaholic",
    },
  ] satisfies ServiceLink[],
  whyBuilt: [
    "산책 앱은 기록만 남기고 동기가 금방 사라지는 경우가 많았습니다.",
    "걸음 수가 쌓일수록 성장하는 경험을 통해, 산책을 습관으로 이어가고 싶었습니다.",
  ],
  screenshots: [
    {
      title: "걸음 수",
      description: "하루 걸음 수를 자동으로 집계",
      image: "/projects/walkaholic/feature-steps.png",
    },
    {
      title: "레벨",
      description: "걸음 수에 따라 레벨이 올라가는 성장 시스템",
      image: "/projects/walkaholic/feature-level.png",
    },
    {
      title: "기록",
      description: "주간·월간 산책 패턴 확인",
      image: "/projects/walkaholic/feature-stats.png",
    },
  ] satisfies ProjectScreenshot[],
  decisions: [
    {
      question: "왜 걸음 수를 레벨 시스템과 연결했는가",
      answer:
        "숫자만 쌓이는 것보다 성장하는 느낌이 습관 유지에 더 효과적이라고 판단했습니다. 레벨업 경험이 다음 산책으로 이어지는 동기가 되도록 설계했습니다.",
    },
    {
      question: "왜 Android로만 출시했는가",
      answer:
        "걸음 수 연동과 백그라운드 동작을 우선 검증하기 위해 네이티브 앱부터 만들었습니다. 웹 버전은 현재 범위에 포함하지 않았습니다.",
    },
  ] satisfies ProjectDecision[],
  tech: ["React Native", "TypeScript", "Expo"],
};
