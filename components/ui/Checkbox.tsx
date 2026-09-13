import React, { useId } from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, name, className = "", ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || name || generatedId;

    return (
      <div className="w-full">
        <div className="flex items-start space-x-3">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            name={name}
            aria-invalid={!!error}
            aria-describedby={error ? `${checkboxId}-error` : undefined}
            className={`mt-1 h-5 w-5 rounded border-gray-300 text-[var(--brand-primary)] focus:ring-[var(--brand-primary)] focus:ring-offset-0 cursor-pointer ${
              error ? "border-red-500" : ""
            } ${className}`.trim()}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className="text-sm text-[var(--brand-ink)] leading-relaxed cursor-pointer select-none"
          >
            {label}
          </label>
        </div>
        {error && (
          <p id={`${checkboxId}-error`} className="mt-1.5 ml-8 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
