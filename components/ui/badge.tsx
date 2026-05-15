import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "brand" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-surface text-text-muted border border-border",
        variant === "brand" &&
          "bg-brand/10 text-brand border border-brand/20",
        variant === "outline" &&
          "bg-transparent text-text-muted border border-border-strong",
        className
      )}
    >
      {children}
    </span>
  );
}
