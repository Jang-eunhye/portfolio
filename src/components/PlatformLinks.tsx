import type { PlatformStatus, ServiceLink } from "@/types/project";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { ServiceLink as ServiceLinkButton } from "./ServiceLink";

interface PlatformLinksProps {
  platformStatuses: PlatformStatus[];
  serviceLinks: ServiceLink[];
}

export function PlatformLinks({
  platformStatuses,
  serviceLinks,
}: PlatformLinksProps) {
  return (
    <ul className="space-y-3.5">
      {platformStatuses.map((item) => {
        const link = serviceLinks.find((l) => l.label === item.platform);

        return (
          <li
            key={item.platform}
            className="flex flex-wrap items-center gap-x-4 gap-y-2.5"
          >
            <span className="w-16 text-sm font-semibold text-foreground">
              {item.platform}
            </span>
            <ProjectStatusBadge status={item.status} />
            {link && (
              <ServiceLinkButton label={link.label} url={link.url} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
