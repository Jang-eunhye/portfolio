import Image from "next/image";
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
      {project.logo ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
          <Image
            src={project.logo}
            alt=""
            width={512}
            height={512}
            className="absolute top-1/2 left-0 h-auto w-full -translate-y-1/2"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ) : (
        <MediaPlaceholder
          label={`${project.name} 스크린샷`}
          hint={project.thumbnail}
          aspectRatio="wide"
        />
      )}

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
