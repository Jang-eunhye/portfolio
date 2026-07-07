interface ProjectTechProps {
  items: string[];
}

export function ProjectTech({ items }: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-border px-3 py-1.5 text-[0.875rem] text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
