import Image from "next/image";
import type { PlatformStatus, ServiceLink } from "@/types/project";
import { PlatformLinks } from "@/components/PlatformLinks";

interface ProjectHeaderProps {
  name: string;
  logo?: string;
  intro: string;
  platformStatuses: PlatformStatus[];
  serviceLinks: ServiceLink[];
}

export function ProjectHeader({
  name,
  logo,
  intro,
  platformStatuses,
  serviceLinks,
}: ProjectHeaderProps) {
  return (
    <header className="mb-12 border-b border-border pb-10">
      <div className="flex items-center gap-5">
        {logo && (
          <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2">
            <Image
              src={logo}
              alt=""
              width={52}
              height={52}
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <h1 className="text-2xl font-semibold tracking-tight md:text-[1.75rem]">
          {name}
        </h1>
      </div>

      <div className="mt-6">
        <PlatformLinks
          platformStatuses={platformStatuses}
          serviceLinks={serviceLinks}
        />
      </div>

      <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-muted md:text-base">
        {intro}
      </p>
    </header>
  );
}
