import { SectionHeading } from "@/components/SectionHeading";

interface ProjectSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  divided?: boolean;
}

export function ProjectSection({
  title,
  children,
  className = "mb-12",
  divided = false,
}: ProjectSectionProps) {
  return (
    <section
      className={`${divided ? "border-t border-border pt-10" : ""} ${className}`}
    >
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </section>
  );
}
