import type { ProjectDecision } from "@/types/project";

interface ProjectDecisionsProps {
  items: ProjectDecision[];
}

export function ProjectDecisions({ items }: ProjectDecisionsProps) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.question} className="max-w-2xl">
          <h3 className="font-medium text-foreground">{item.question}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
