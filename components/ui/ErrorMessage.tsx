import React from "react";

export function ErrorMessage({
  message,
  onRetry,
  className = "",
}: {
  message: string;
  onRetry?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`p-4 rounded-xl border border-red-200 bg-red-50/70 text-red-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${className}`.trim()}
      role="alert"
    >
      <div className="flex items-center space-x-2">
        <svg
          className="w-5 h-5 text-red-500 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm font-medium">{message}</span>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          type="button"
          className="text-xs font-semibold underline text-red-800 hover:text-red-950 cursor-pointer"
        >
          ลองใหม่อีกครั้ง
        </button>
      )}
    </div>
  );
}
