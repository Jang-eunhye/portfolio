import type { Metadata } from "next";
import { walkaholic } from "@/data/projects/walkaholic";
import { ProjectPageLayout } from "@/components/project/ProjectPageLayout";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectTextBlock } from "@/components/project/ProjectTextBlock";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";
import { ProjectDecisions } from "@/components/project/ProjectDecisions";
import { ProjectTech } from "@/components/project/ProjectTech";

export const metadata: Metadata = {
  title: `${walkaholic.name} | 장은혜`,
  description: walkaholic.intro,
};

export default function WalkaholicPage() {
  return (
    <main className="flex-1">
      <ProjectPageLayout>
        <ProjectHeader
          name={walkaholic.name}
          logo={walkaholic.logo}
          intro={walkaholic.intro}
          platformStatuses={walkaholic.platformStatuses}
          serviceLinks={walkaholic.serviceLinks}
        />

        <ProjectSection title="해결하고자 한 문제">
          <ProjectTextBlock paragraphs={walkaholic.whyBuilt} />
        </ProjectSection>

        <ProjectSection title="주요 기능">
          <ProjectScreenshots items={walkaholic.screenshots} />
        </ProjectSection>

        <ProjectSection title="개선 과정 또는 해결 방법">
          <ProjectDecisions items={walkaholic.decisions} />
        </ProjectSection>

        <ProjectSection title="기술" className="mb-0">
          <ProjectTech items={walkaholic.tech} />
        </ProjectSection>
      </ProjectPageLayout>
    </main>
  );
}
