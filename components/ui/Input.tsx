import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, id, name, className = "", ...props }, ref) => {
    const inputId = id || name || `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--brand-ink)] mb-1.5"
        >
          {label} {required && <span className="text-[var(--brand-primary)]">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          name={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          className={`w-full px-4 py-2.5 rounded-lg border text-base text-[var(--brand-ink)] bg-white transition-colors duration-150 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] ${
            error
              ? "border-red-500 bg-red-50/20 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 hover:border-gray-400"
          } ${className}`.trim()}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
