interface MediaPlaceholderProps {
  label?: string;
  hint?: string;
  aspectRatio?: "wide" | "phone";
  className?: string;
  labelClassName?: string;
}

const aspectClasses = {
  wide: "aspect-[16/10]",
  phone: "aspect-[9/16]",
};

export function MediaPlaceholder({
  label = "미디어",
  hint,
  aspectRatio = "wide",
  className = "",
  labelClassName = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-subtle ${aspectClasses[aspectRatio]} ${className}`}
    >
      <div className="px-4 text-center">
        <p className={`text-sm text-muted ${labelClassName}`}>{label}</p>
        {hint && (
          <p className="mt-1 font-mono text-xs text-muted/40 break-all">{hint}</p>
        )}
      </div>
    </div>
  );
}
