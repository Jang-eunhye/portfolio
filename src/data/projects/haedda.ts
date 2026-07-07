import type {
  ProjectDecision,
  ProjectScreenshot,
  ProjectSummary,
  ServiceLink,
} from "@/types/project";

export const haeddaSummary: ProjectSummary = {
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
};

export const haedda = {
  ...haeddaSummary,
  logo: "/projects/haedda/icon.png",
  intro: "나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱",
  serviceLinks: [{ label: "Web", url: "https://haedda.vercel.app" }] satisfies ServiceLink[],
  whyBuilt: [
    "기존 할 일 앱은 등록만 하고 끝나는 경우가 많았습니다.",
    "완료할 때마다 나만의 보상을 받는 경험으로, 미루는 습관을 줄이고 싶었습니다.",
  ],
  screenshots: [
    {
      title: "홈",
      description: "오늘 해야 할 미션 확인",
      image: "/projects/haedda/feature-home.png",
    },
    {
      title: "보상",
      description: "미션 완료 시 나만의 보상 획득",
      image: "/projects/haedda/feature-reward.png",
    },
    {
      title: "기록",
      description: "달력으로 완료 현황 확인",
      image: "/projects/haedda/feature-calendar.png",
    },
  ] satisfies ProjectScreenshot[],
  decisions: [
    {
      question: "왜 보상을 사용자가 직접 설정하게 했는가",
      answer:
        "남이 정한 보상보다 '나에게 의미 있는 보상'이 동기부여에 더 효과적이라고 판단했습니다. 스티커·간식·휴식 등 자유롭게 설정할 수 있게 했습니다.",
    },
    {
      question: "왜 하루 단위로 초기화했는가",
      answer:
        "하루 단위로 미션을 정리하면 '오늘 할 일'에 집중하기 쉽습니다. 쌓이지 않은 할 일 목록이 사용자에게 덜 부담스럽다는 피드백을 반영했습니다.",
    },
    {
      question: "왜 웹을 먼저 출시했는가",
      answer:
        "빠르게 배포하고 피드백을 받기 위해 웹을 먼저 출시했습니다. Android·iOS 앱은 출시를 준비 중입니다.",
    },
  ] satisfies ProjectDecision[],
  tech: ["React", "TypeScript", "Supabase", "Vercel"],
};
