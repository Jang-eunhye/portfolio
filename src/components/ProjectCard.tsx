import Link from "next/link";
import type { Project } from "@/types/project";
import { PlatformStatusList } from "./PlatformStatusList";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-300 bg-white transition-[transform,border-color] duration-200 ease-out hover:scale-[1.04] hover:border-neutral-500"
    >
      <MediaPlaceholder
        label={`${project.name} 스크린샷`}
        hint={project.thumbnail}
        aspectRatio="wide"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-[1.0625rem] font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
            {project.tagline}
          </p>
        </div>
        <PlatformStatusList items={project.platformStatuses} />
      </div>
    </Link>
  );
}
