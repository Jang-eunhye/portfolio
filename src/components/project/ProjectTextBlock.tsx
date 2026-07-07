interface ProjectTextBlockProps {
  paragraphs: string[];
}

export function ProjectTextBlock({ paragraphs }: ProjectTextBlockProps) {
  return (
    <div className="max-w-2xl space-y-3 rounded-xl bg-subtle p-6 text-[0.9375rem] leading-relaxed text-muted md:text-base">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
