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
            <p className="mt-1 text-[0.875rem] leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
          <MediaPlaceholder
            label={`${item.title} 스크린샷`}
            hint={item.image}
            aspectRatio="phone"
            className="overflow-hidden rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
