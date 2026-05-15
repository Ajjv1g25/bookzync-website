import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Hide wordmark, show only the mark */
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoMark className="h-8 w-8" />
      {!iconOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-text">
          BookZync
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-label="BookZync logo">
      <Image
        src="/logo-transparent.png"
        alt="BookZync"
        fill
        sizes="40px"
        className="object-contain"
        priority
      />
    </div>
  );
}
