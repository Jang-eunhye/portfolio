import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "haedda",
    name: "해따",
    tagline: "나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱",
    description: "나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱",
    platformStatuses: [
      { platform: "Web", status: "released" },
      { platform: "Android", status: "in-development" },
      { platform: "iOS", status: "in-development" },
    ],
    thumbnail: "/projects/haedda/thumbnail.png",
    featured: true,
    intro: "나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱",
    whyBuilt: [
      "기존 할 일 앱은 등록만 하고 끝나는 경우가 많았습니다.",
      "완료할 때마다 나만의 보상을 받는 경험으로, 미루는 습관을 줄이고 싶었습니다.",
    ],
    features: [
      {
        icon: "📱",
        title: "홈",
        description: "오늘 해야 할 미션 확인",
        image: "/projects/haedda/feature-home.png",
      },
      {
        icon: "🏆",
        title: "보상",
        description: "미션 완료 시 나만의 보상 획득",
        image: "/projects/haedda/feature-reward.png",
      },
      {
        icon: "📅",
        title: "기록",
        description: "달력으로 완료 현황 확인",
        image: "/projects/haedda/feature-calendar.png",
      },
    ],
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
    ],
    tech: ["React", "TypeScript", "Supabase", "Vercel"],
    serviceLinks: [{ label: "Web", url: "https://haedda.vercel.app" }],
  },
  {
    slug: "walkaholic",
    name: "워커홀릭",
    tagline:
      "걸음 수 기반 레벨을 통해 산책 습관을 재밌게 이어가도록 돕는 산책 앱",
    description:
      "걸음 수 기반 레벨을 통해 산책 습관을 재밌게 이어가도록 돕는 산책 앱",
    platformStatuses: [{ platform: "Android", status: "released" }],
    thumbnail: "/projects/walkaholic/thumbnail.png",
    featured: true,
    intro:
      "걸음 수를 레벨로 쌓으며 산책 습관을 재밌게 이어가도록 돕는 Android 앱",
    whyBuilt: [
      "산책 앱은 기록만 남기고 동기가 금방 사라지는 경우가 많았습니다.",
      "걸음 수가 쌓일수록 성장하는 경험을 통해, 산책을 습관으로 이어가고 싶었습니다.",
    ],
    features: [
      {
        icon: "🚶",
        title: "걸음 수",
        description: "하루 걸음 수를 자동으로 집계",
        image: "/projects/walkaholic/feature-steps.png",
      },
      {
        icon: "⬆️",
        title: "레벨",
        description: "걸음 수에 따라 레벨이 올라가는 성장 시스템",
        image: "/projects/walkaholic/feature-level.png",
      },
      {
        icon: "📊",
        title: "기록",
        description: "주간·월간 산책 패턴 확인",
        image: "/projects/walkaholic/feature-stats.png",
      },
    ],
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
    ],
    tech: ["React Native", "TypeScript", "Expo"],
    serviceLinks: [
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=example",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
