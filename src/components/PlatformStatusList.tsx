import type { PlatformStatus } from "@/types/project";
import { ProjectStatusBadge } from "./ProjectStatusBadge";

interface PlatformStatusListProps {
  items: PlatformStatus[];
}

export function PlatformStatusList({ items }: PlatformStatusListProps) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {items.map((item) => (
        <li key={item.platform} className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            {item.platform}
          </span>
          <ProjectStatusBadge status={item.status} />
        </li>
      ))}
    </ul>
  );
}
