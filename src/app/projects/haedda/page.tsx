import type { Metadata } from "next";
import { ProjectPageLayout } from "@/components/project/ProjectPageLayout";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";

export const metadata: Metadata = {
  title: "해따 | 장은혜",
  description: "나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱",
};

export default function HaeddaPage() {
  return (
    <main className="flex-1">
      <ProjectPageLayout>
        <ProjectHeader
          name="해따"
          logo="/projects/haedda/icon.png"
          intro="나만의 보상으로 미루는 습관 개선을 돕는 할 일 앱"
          platformStatuses={[
            { platform: "Web", status: "released" },
            { platform: "Android", status: "in-development" },
            { platform: "iOS", status: "in-development" },
          ]}
          serviceLinks={[
            { label: "Web", url: "https://haedda.vercel.app" },
          ]}
        />

        <ProjectSection>
          <div className="space-y-3 rounded-xl bg-subtle p-6 text-[0.9375rem] leading-relaxed text-muted md:text-base">
            <p className="font-semibold text-foreground">
              할 일을 완료하면 스티커를 모으고, 나만의 보상을 만들어 교환할 수 있는
              미션 앱입니다.
            </p>
            <p>
              단순히 할 일을 작성하는 것이 아니라, 스스로 정한 보상을 통해 미루지 않을 수 있도록 기획했습니다.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection title="주요 타겟" divided>
          <ul className="space-y-3 rounded-xl border border-border bg-white p-6">
            {[
              "할 일을 자주 미루는 사람",
              "해야 할 일을 자주 잊어버리는 사람",
              "보상을 통해 동기부여를 받고 싶은 사람",
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
              현재는 핵심 기능을 중심으로 웹 버전을 개발했습니다.
            </p>
            <p>
              이후 모바일 앱으로 확장하여 알림, 로그인, 데이터 동기화 등
              실사용에 필요한 기능을 추가하고, 더 편리하게 사용할 수 있도록
              지속적으로 개선할 예정입니다.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection title="추가된 기능" divided>
          <div className="space-y-6 rounded-xl border border-border bg-white p-6 text-[0.9375rem] leading-relaxed">
            <div>
              <p className="font-medium text-foreground">반복 설정</p>
              <p className="mt-2 text-muted">
                할 일을 매일, 매주(요일 설정), 매월(말일 또는 일자 설정)
                반복 주기로 설정할 수 있습니다.
              </p>
              <ul className="mt-3 space-y-2 rounded-lg bg-subtle px-4 py-3 text-[0.875rem] text-muted">
                <li>미완료·연속 완료 횟수 표시</li>
                <li>완료·기한 만료 시 다음 주기로 자동 갱신 (기한 만료 시 미완료 횟수 카운트)</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">카테고리 설정</p>
              <p className="mt-2 text-muted">
                카테고리별로 할 일 목록을 필터링해 볼 수 있습니다.
              </p>
              <ul className="mt-3 space-y-2 rounded-lg bg-subtle px-4 py-3 text-[0.875rem] text-muted">
                <li>카테고리 추가·수정·삭제 가능</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">놓친 할일 배너</p>
              <p className="mt-2 text-muted">
                기한이 지났거나, 반복 할 일 중 미완료 횟수가 있는 할 일을 모아서 보여줍니다.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="스크린샷" divided className="mb-0">
          <div className="space-y-8">
            <div>
              <h3 className="text-[0.9375rem] font-semibold text-foreground">
                할 일
              </h3>
              <p className="mt-1.5 whitespace-pre-line text-[0.875rem] leading-relaxed text-muted">
                기간별·카테고리별로 할 일을 확인하고, 새로운 할 일을 추가할 수
                있습니다.
              </p>
              <div className="mt-4">
                <ProjectScreenshots
                  items={[
                    {
                      title: "할 일 페이지",
                      image: "/projects/haedda/todo-page.jpg",
                    },
                    {
                      title: "할 일 추가",
                      image: "/projects/haedda/todo-add.jpg",
                    },
                    {
                      title: "할 일 상세",
                      image: "/projects/haedda/todo-detail.jpg",
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-[0.9375rem] font-semibold text-foreground">
                보상
              </h3>
              <p className="mt-1.5 whitespace-pre-line text-[0.875rem] leading-relaxed text-muted">
                미션 완료 시 받을 보상을 직접 추가하고, 스티커로 교환할 수 있습니다.
              </p>
              <div className="mt-4">
                <ProjectScreenshots
                  items={[
                    {
                      title: "보상 페이지",
                      image: "/projects/haedda/reward-page.jpg",
                    },
                    {
                      title: "보상 추가",
                      image: "/projects/haedda/reward-add.jpg",
                    },
                    {
                      title: "보상 받기",
                      image: "/projects/haedda/reward-claim.jpg",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </ProjectSection>
      </ProjectPageLayout>
    </main>
  );
}
