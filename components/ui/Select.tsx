import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder = "-- กรุณาเลือก --",
      error,
      required,
      id,
      name,
      className = "",
      ...props
    },
    ref
  ) => {
    const selectId = id || name || `select-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-[var(--brand-ink)] mb-1.5"
        >
          {label} {required && <span className="text-[var(--brand-primary)]">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            name={name}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            required={required}
            className={`w-full appearance-none px-4 py-2.5 pr-10 rounded-lg border text-base text-[var(--brand-ink)] bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] ${
              error
                ? "border-red-500 bg-red-50/20 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 hover:border-gray-400"
            } ${className}`.trim()}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
