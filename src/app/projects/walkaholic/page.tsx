import type { Metadata } from "next";
import { ProjectPageLayout } from "@/components/project/ProjectPageLayout";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";
import { ProjectDecisions } from "@/components/project/ProjectDecisions";

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

        <ProjectSection>
          <div className="space-y-3 rounded-xl bg-subtle p-6 text-[0.9375rem] leading-relaxed text-muted md:text-base">
            <p className="font-semibold text-foreground">
              하루 만 보 걷기를 조금 더 재미있게 이어갈 수 있도록 만든 산책
              앱입니다.
            </p>
            <p>
              단순히 걸음 수를 보여주는 데서 끝나는 것이 아니라, 걸을수록
              레벨이 오르고 기록이 쌓이는 경험을 통해 꾸준히 걷는 습관을
              만드는 것을 목표로 했습니다.
            </p>
            <p>
              사용하면서 느낀 불편한 점들을 하나씩 개선하며 현재의 형태로
              발전시켰습니다.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection title="주요 타겟" divided>
          <ul className="space-y-3 rounded-xl border border-border bg-white p-6">
            {[
              "산책은 좋아하지만 자주 나가지 않는 사람",
              "운동을 습관으로 만들고 싶은 사람",
              "산책 기록을 남기며 동기부여를 얻고 싶은 사람",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-muted"
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="업데이트 방향" divided>
          <div className="space-y-3 rounded-xl border border-border bg-white p-6 text-[0.9375rem] leading-relaxed text-muted md:text-base">
            <p>
              워커홀릭은 부담 없이 꾸준히 사용할 수 있는 산책 앱을 목표로
              합니다.
            </p>
            <p>
              꾸준함을 강요하기보다, 산책에 흥미를 느끼고 적절한 동기부여를 주는것을 중요하게 생각하기 때문에,
              친구 기능·산책 기록·공유 기능 등 산책이 더 즐거워질 수 있는
              기능을 계속 추가해 나갈 예정입니다.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection title="스크린샷(ver2)" divided>
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

        <ProjectSection title="변경 사항" divided>
          <ProjectDecisions
            items={[
              {
                question: "산책 시작·종료 버튼 → 걸음 수 자동 집계",
                answer:
                  "기존에는 산책을 기록할 때마다 시작과 종료 버튼을 직접 눌러야 했습니다.\n사용 과정이 번거롭다고 느껴 버튼 없이 걸음 수를 자동으로 집계하는 방식으로 변경했습니다.\n 앱을 실행하지 않아도 산책이 기록되어 편리하게 사용할 수 있습니다.",
              },
              {
                question: "Health Connect 연동",
                answer:
                  "앱에서 걸음 수를 직접 관리하는 대신 Health Connect에 저장된 걸음 데이터를 활용하도록 변경했습니다.\n기기에 기록된 데이터를 기반으로 레벨과 산책 기록이 반영되어 보다 안정적으로 기록을 관리할 수 있습니다.",
              },
              {
                question: "새싹 키우기 → 레벨 시스템",
                answer:
                  "초기 버전은 새싹을 키우는 컨셉이었지만, 전체적인 분위기가 다소 어리고 감성적인 느낌이라 아쉬움이 있었습니다.\n걸음 수에 따라 레벨이 오르는 방식으로 변경해 누구나 부담 없이 사용할 수 있는 방향으로 개선했습니다.",
              },
              {
                question: "발자국 도장 추가",
                answer:
                  "목표인 10,000보를 달성한 날에는 캘린더에 발자국 도장이 표시되도록 했습니다.\n목표를 달성한 날을 한눈에 확인할 수 있어 기록을 돌아보고 성취감을 느낄 수 있도록 개선했습니다.",
              },
            ]}
          />
        </ProjectSection>

        <ProjectSection title="스크린샷(ver1)" divided className="mb-0">
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
      </ProjectPageLayout>
    </main>
  );
}
