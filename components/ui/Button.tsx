import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-dark)] active:bg-[#721515] focus-visible:ring-[var(--brand-primary)] shadow-sm",
      secondary:
        "bg-[#1B1B1B] text-white hover:bg-[#333333] active:bg-[#000000] focus-visible:ring-[#1B1B1B] shadow-sm",
      outline:
        "border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] bg-transparent hover:bg-[var(--brand-primary)] hover:text-white focus-visible:ring-[var(--brand-primary)]",
      ghost:
        "text-[var(--brand-ink)] bg-transparent hover:bg-black/5 active:bg-black/10 focus-visible:ring-[var(--brand-ink)]",
    };

    const sizeStyles = {
      sm: "text-sm px-3 py-1.5 min-h-[36px]",
      md: "text-base px-5 py-2.5 min-h-[44px] md:min-h-[40px]",
      lg: "text-base md:text-lg px-6 py-3 min-h-[48px]",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
