import Link from "next/link";

interface ProjectPageLayoutProps {
  children: React.ReactNode;
}

export function ProjectPageLayout({ children }: ProjectPageLayoutProps) {
  return (
    <article className="page-container py-10 pb-16 md:py-12 md:pb-20">
      <Link
        href="/"
        className="mb-8 inline-block text-[0.9375rem] text-muted underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-foreground hover:decoration-neutral-500"
      >
        ← 목록
      </Link>
      {children}
    </article>
  );
}
