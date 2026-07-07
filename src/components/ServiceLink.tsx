import Image from "next/image";
import type { ProjectPlatform } from "@/types/project";

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

const platformLinkConfig: Record<
  ProjectPlatform,
  { text: string; icon?: string }
> = {
  Web: { text: "웹사이트 방문" },
  Android: { text: "Google Play Store", icon: "/icons/google-play.png" },
  iOS: { text: "App Store" },
};

function getWebLinkText(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return platformLinkConfig.Web.text;
  }
}

interface ServiceLinkProps {
  label: ProjectPlatform;
  url: string;
}

export function ServiceLink({ label, url }: ServiceLinkProps) {
  const config = platformLinkConfig[label];
  const text = label === "Web" ? getWebLinkText(url) : config.text;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 text-[0.875rem] font-medium text-foreground transition-colors duration-200 hover:border-neutral-400 hover:bg-subtle"
    >
      {config.icon ? (
        <Image
          src={config.icon}
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 shrink-0"
        />
      ) : (
        <ExternalLinkIcon />
      )}
      <span>{text}</span>
    </a>
  );
}
