interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-4 text-[1.0625rem] font-semibold text-foreground">
      {children}
    </h2>
  );
}
