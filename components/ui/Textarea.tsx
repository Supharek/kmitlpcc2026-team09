import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, required, id, name, rows = 4, className = "", ...props }, ref) => {
    const textareaId = id || name || `textarea-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-[var(--brand-ink)] mb-1.5"
        >
          {label} {required && <span className="text-[var(--brand-primary)]">*</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          required={required}
          className={`w-full px-4 py-2.5 rounded-lg border text-base text-[var(--brand-ink)] bg-white transition-colors duration-150 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] ${
            error
              ? "border-red-500 bg-red-50/20 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 hover:border-gray-400"
          } ${className}`.trim()}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
