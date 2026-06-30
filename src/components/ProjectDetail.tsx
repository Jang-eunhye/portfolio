import Link from "next/link";
import type { Project } from "@/types/project";
import { PlatformStatusList } from "./PlatformStatusList";
import { SectionHeading } from "./SectionHeading";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { ServiceLink } from "./ServiceLink";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="page-container py-10 pb-16 md:py-12 md:pb-20">
      <Link
        href="/"
        className="mb-8 inline-block text-[0.9375rem] text-muted underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-foreground hover:decoration-neutral-500"
      >
        ← 목록
      </Link>

      <header className="mb-12 border-b border-border pb-10">
        <h1 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">
          {project.name}
        </h1>

        <div className="mt-4">
          <PlatformStatusList items={project.platformStatuses} />
        </div>

        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-muted md:text-base">
          {project.intro}
        </p>

        {project.serviceLinks.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.serviceLinks.map((link) => (
              <ServiceLink key={link.label} label={link.label} url={link.url} />
            ))}
          </div>
        )}
      </header>

      <section className="mb-12">
        <SectionHeading>해결하고자 한 문제</SectionHeading>
        <div className="max-w-2xl space-y-3 rounded-xl bg-subtle p-6 text-[0.9375rem] leading-relaxed text-muted md:text-base">
          {project.whyBuilt.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeading>주요 기능</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-border p-4"
            >
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
              <MediaPlaceholder
                label={`${feature.title} 스크린샷`}
                hint={feature.image}
                aspectRatio="phone"
                className="rounded-lg overflow-hidden"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionHeading>개선 과정 또는 해결 방법</SectionHeading>
        <div className="space-y-5">
          {project.decisions.map((decision, i) => (
            <div key={i} className="max-w-2xl">
              <h3 className="font-medium text-foreground">
                {decision.question}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                {decision.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>기술</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-3 py-1.5 text-[0.875rem] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
