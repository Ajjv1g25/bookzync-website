"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid SSR mismatch — render a placeholder until mounted
  if (!mounted) {
    return (
      <div
        className={cn(
          "h-9 w-9 rounded-md border border-border bg-surface",
          className
        )}
        aria-hidden
      />
    );
  }

  const current = theme === "system" ? resolvedTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-md",
        "border border-border bg-surface text-text-muted",
        "hover:text-text hover:border-border-strong hover:bg-surface-elevated",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className
      )}
    >
      <Sun
        className={cn(
          "absolute h-4 w-4 transition-all duration-300 ease-out",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300 ease-out",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  );
}
