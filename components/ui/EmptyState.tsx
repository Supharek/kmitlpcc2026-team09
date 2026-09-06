import React from "react";

export function EmptyState({
  title = "ยังไม่มีข้อมูล",
  description = "ยังไม่มีรายการข้อมูลในขณะนี้",
  className = "",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-gray-300 bg-gray-50/50 ${className}`.trim()}
    >
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-3">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </div>
      <h4 className="text-base font-semibold text-[var(--brand-ink)]">{title}</h4>
      <p className="text-sm text-[var(--brand-muted)] mt-1 max-w-sm">
        {description}
      </p>
    </div>
  );
}
