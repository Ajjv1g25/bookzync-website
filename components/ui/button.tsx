"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Show arrow icon on the right that translates on hover */
  arrow?: boolean;
  /** Render as an anchor-like span (for use inside <a>) */
  asChild?: boolean;
  children: ReactNode;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap " +
  "transition-all duration-200 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-brand " +
    "shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_8px_24px_-8px_hsl(var(--brand-glow)/0.6)] " +
    "hover:bg-brand-hover hover:shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_12px_32px_-8px_hsl(var(--brand-glow)/0.8)] " +
    "hover:-translate-y-0.5",
  secondary:
    "bg-surface text-text border border-border " +
    "hover:bg-surface-elevated hover:border-border-strong hover:-translate-y-0.5 " +
    "shadow-soft",
  outline:
    "bg-transparent text-text border border-border-strong " +
    "hover:bg-surface hover:border-text",
  ghost: "bg-transparent text-text hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "text-sm h-9 px-4 rounded-md",
  md: "text-sm h-11 px-5 rounded-lg",
  lg: "text-base h-13 px-7 rounded-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", arrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {arrow && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              aria-hidden
            >
              <path
                d="M5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";
