import type { Metadata } from "next";
import { ProjectPageLayout } from "@/components/project/ProjectPageLayout";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectTextBlock } from "@/components/project/ProjectTextBlock";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";
import { ProjectDecisions } from "@/components/project/ProjectDecisions";
import { ProjectTech } from "@/components/project/ProjectTech";

export const metadata: Metadata = {
  title: "워커홀릭 | 장은혜",
  description:
    "걸음 수를 레벨로 쌓으며 산책 습관을 재밌게 이어가도록 돕는 Android 앱",
};

export default function WalkaholicPage() {
  return (
    <main className="flex-1">
      <ProjectPageLayout>
        <ProjectHeader
          name="Walkaholic"
          logo="/projects/walkaholic/icon.png"
          intro="걸음 수를 레벨로 쌓으며 산책 습관을 재밌게 이어가도록 돕는 Android 앱"
          platformStatuses={[
            { platform: "Android", status: "released" },
          ]}
          serviceLinks={[
            {
              label: "Android",
              url: "https://play.google.com/store/apps/details?id=com.eunhye99.walkaholic",
            },
          ]}
        />

        <ProjectSection title="해결하고자 한 문제">
          <ProjectTextBlock
            paragraphs={[
              "산책 앱은 기록만 남기고 동기가 금방 사라지는 경우가 많았습니다.",
              "걸음 수가 쌓일수록 성장하는 경험을 통해, 산책을 습관으로 이어가고 싶었습니다.",
            ]}
          />
        </ProjectSection>

        <ProjectSection title="스크린샷(ver2)">
          <ProjectScreenshots
            items={[
              {
                title: "홈 대시보드",
                description:
                  "오늘의 걸음 수와 현재 레벨,\n주간 현황을 한 화면에서 확인할 수 있습니다.",
                image: "/projects/walkaholic/screenshot1.jpg",
              },
              {
                title: "캘린더",
                description:
                  "달력에서 날짜별 걸음 수와 주간 레벨을 조회하고,\n통계로 걸음 패턴을 확인할 수 있습니다.",
                image: "/projects/walkaholic/screenshot2.jpg",
              },
              {
                title: "날씨",
                description:
                  "현재 위치의 날씨 정보와 함께,\n산책 시 참고할 수 있는 주의 문구를 제공합니다.",
                image: "/projects/walkaholic/screenshot3.jpg",
              },
            ]}
          />
        </ProjectSection>

        <ProjectSection title="변경 사항">
          <ProjectDecisions
            items={[
              {
                question: "산책 시작·종료 버튼 → 걸음 수 자동 집계",
                answer:
                  "매번 산책을 시작하고 종료할 때마다 버튼을 눌러야 해 번거로웠습니다.\n걸음 수를 자동으로 집계하는 방식으로 바꿔, 앱을 켜지 않아도 산책이 기록되도록 개선했습니다.",
              },
              {
                question: "Health Connect 연동",
                answer:
                  "걸음 수를 앱 내부에서 따로 계산하기보다, Health Connect와 연동해 기기에 기록된 값을 가져오도록 했습니다.\n더 정확한 걸음 수를 바탕으로 레벨과 기록이 반영되도록 개선했습니다.",
              },
              {
                question: "새싹 키우기 → 레벨 시스템",
                answer:
                  "새싹을 키우는 콘셉트는 따뜻했지만, 과하게 감성적이고 어린 느낌이 났습니다.\n걸음 수에 따라 오르는 레벨 시스템으로 바꿔, 연령대와 관계없이 누구나 부담 없이 쓸 수 있도록 다듬었습니다.",
              },
              {
                question: "발자국 도장 콘셉트 도입",
                answer:
                  "만 보를 달성한 날은 캘린더에 발자국 도장을 찍어,\n목표를 이룬 날을 한눈에 직관적으로 확인할 수 있도록 했습니다.",
              },
            ]}
          />
        </ProjectSection>

        <ProjectSection title="스크린샷(ver1)">
          <ProjectScreenshots
            items={[
              {
                title: "홈 대시보드",
                image: "/projects/walkaholic/ver1_screenshot1.jpg",
              },
              {
                title: "캘린더",
                image: "/projects/walkaholic/ver1_screenshot2.jpg",
              },
              {
                title: "날씨",
                image: "/projects/walkaholic/ver1_screenshot3.jpg",
              },
            ]}
          />
        </ProjectSection>

        <ProjectSection title="개선 과정 또는 해결 방법">
          <ProjectDecisions
            items={[
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
            ]}
          />
        </ProjectSection>

        <ProjectSection title="기술" className="mb-0">
          <ProjectTech items={["React Native", "TypeScript", "Expo"]} />
        </ProjectSection>
      </ProjectPageLayout>
    </main>
  );
}
