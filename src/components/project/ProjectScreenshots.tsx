import Image from "next/image";
import type { ProjectScreenshot } from "@/types/project";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

interface ProjectScreenshotsProps {
  items: ProjectScreenshot[];
}

export function ProjectScreenshots({ items }: ProjectScreenshotsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-3 rounded-xl border border-border p-4"
        >
          <div>
            <h3 className="font-medium">{item.title}</h3>
            {item.description && (
              <p className="mt-1 whitespace-pre-line text-[0.875rem] leading-relaxed text-muted">
                {item.description}
              </p>
            )}
          </div>
          {item.image ? (
            <div className="relative aspect-1080/2170 overflow-hidden rounded-lg border border-border bg-subtle">
              <Image
                src={item.image}
                alt={`${item.title} 스크린샷`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ) : (
            <MediaPlaceholder
              label={`${item.title} 스크린샷`}
              aspectRatio="phone"
              className="overflow-hidden rounded-lg"
            />
          )}
        </div>
      ))}
    </div>
  );
}
