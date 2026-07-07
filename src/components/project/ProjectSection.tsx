import { SectionHeading } from "@/components/SectionHeading";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectSection({
  title,
  children,
  className = "mb-12",
}: ProjectSectionProps) {
  return (
    <section className={className}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
}
