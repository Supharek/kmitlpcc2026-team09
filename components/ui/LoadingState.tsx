import React from "react";

export function LoadingState({
  message = "กำลังโหลดข้อมูล...",
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <div className="w-8 h-8 border-3 border-[var(--brand-primary)] border-t-transparent rounded-full animate-spin mb-3"></div>
      <p className="text-sm text-[var(--brand-muted)]">{message}</p>
    </div>
  );
}
