import type { ProjectStatus } from "@/types/project";

export const statusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; badgeClass: string }
> = {
  released: {
    label: "출시 완료",
    dotClass: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700",
  },
  "in-development": {
    label: "개발 중",
    dotClass: "bg-amber-400",
    badgeClass: "bg-amber-50 text-amber-700",
  },
  beta: {
    label: "베타 테스트",
    dotClass: "bg-sky-500",
    badgeClass: "bg-sky-50 text-sky-700",
  },
  planning: {
    label: "기획",
    dotClass: "bg-neutral-400",
    badgeClass: "bg-neutral-100 text-neutral-600",
  },
  upcoming: {
    label: "출시 예정",
    dotClass: "bg-violet-400",
    badgeClass: "bg-violet-50 text-violet-700",
  },
};

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-medium ${config.badgeClass}`}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${config.dotClass}`}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
