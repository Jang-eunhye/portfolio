import type { Metadata } from "next";
import { haedda } from "@/data/projects/haedda";
import { ProjectPageLayout } from "@/components/project/ProjectPageLayout";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectTextBlock } from "@/components/project/ProjectTextBlock";
import { ProjectScreenshots } from "@/components/project/ProjectScreenshots";
import { ProjectDecisions } from "@/components/project/ProjectDecisions";
import { ProjectTech } from "@/components/project/ProjectTech";

export const metadata: Metadata = {
  title: `${haedda.name} | 장은혜`,
  description: haedda.intro,
};

export default function HaeddaPage() {
  return (
    <main className="flex-1">
      <ProjectPageLayout>
        <ProjectHeader
          name={haedda.name}
          logo={haedda.logo}
          intro={haedda.intro}
          platformStatuses={haedda.platformStatuses}
          serviceLinks={haedda.serviceLinks}
        />

        <ProjectSection title="해결하고자 한 문제">
          <ProjectTextBlock paragraphs={haedda.whyBuilt} />
        </ProjectSection>

        <ProjectSection title="주요 기능">
          <ProjectScreenshots items={haedda.screenshots} />
        </ProjectSection>

        <ProjectSection title="개선 과정 또는 해결 방법">
          <ProjectDecisions items={haedda.decisions} />
        </ProjectSection>

        <ProjectSection title="기술" className="mb-0">
          <ProjectTech items={haedda.tech} />
        </ProjectSection>
      </ProjectPageLayout>
    </main>
  );
}
