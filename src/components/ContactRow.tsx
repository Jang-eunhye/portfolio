export function ContactRow({
  label,
  children,
  href,
  external,
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  return (
    <p className="text-[0.9375rem]">
      <span className="mr-3 inline-block w-14 font-mono text-sm text-muted">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-foreground underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-500"
        >
          {children}
        </a>
      ) : (
        <span className="text-foreground">{children}</span>
      )}
    </p>
  );
}
