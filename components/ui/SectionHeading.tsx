import React from "react";

export function SectionHeading({
  tag,
  title,
  description,
  centered = false,
  className = "",
}: {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-10 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`.trim()}
    >
      {tag && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[var(--brand-primary)]/10 px-3 py-1 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-ink)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[var(--brand-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
