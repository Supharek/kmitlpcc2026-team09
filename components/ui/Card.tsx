import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  children,
  hoverable = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm ${
        hoverable
          ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-gray-200"
          : ""
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-4 ${className}`.trim()}>
      <h3 className="text-xl font-bold text-[var(--brand-ink)]">{title}</h3>
      {subtitle && <p className="text-sm text-[var(--brand-muted)] mt-1">{subtitle}</p>}
    </div>
  );
}
