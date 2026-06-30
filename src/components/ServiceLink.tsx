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

function getServiceLinkText(label: string, url: string): string {
  if (label === "Web") {
    try {
      return new URL(url).hostname;
    } catch {
      return "웹사이트 방문";
    }
  }
  if (label === "Android") return "Google Play에서 보기";
  if (label === "iOS") return "App Store에서 보기";
  return url;
}

interface ServiceLinkProps {
  label: string;
  url: string;
}

export function ServiceLink({ label, url }: ServiceLinkProps) {
  const text = getServiceLinkText(label, url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-[0.9375rem] font-medium text-foreground transition-[border-color,background-color] duration-200 hover:border-neutral-500 hover:bg-neutral-50"
    >
      <ExternalLinkIcon />
      <span>{text}</span>
    </a>
  );
}
