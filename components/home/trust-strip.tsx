"use client";

import { Clock, UserX, CalendarCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { industryList } from "@/lib/industry-config";

const stats = [
  { icon: Clock, value: "24/7", label: "Always chatting" },
  { icon: UserX, value: "0", label: "Missed leads" },
  { icon: CalendarCheck, value: "∞", label: "Bookings handled" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-bg-subtle/60 py-12">
      {/* Subtle gradient line at top and bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-center gap-3 md:justify-start"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-brand">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="font-mono text-2xl font-semibold leading-none tracking-tight text-text">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-text-muted">{s.label}</div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Industry strip */}
        <FadeIn
          delay={0.15}
          className="mt-12 flex flex-col items-center gap-5 border-t border-border pt-8 sm:flex-row sm:justify-between"
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-text-subtle">
            Built for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {industryList.map((ind) => (
              <div
                key={ind.key}
                className="group flex items-center gap-2 text-text-muted transition-colors hover:text-text"
              >
                <span
                  className="h-2 w-2 rounded-full transition-shadow"
                  style={{
                    backgroundColor: ind.accentHex,
                    boxShadow: `0 0 0 0 ${ind.accentGlow}`,
                  }}
                />
                <span className="text-sm font-medium">{ind.displayName}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-text-subtle">
            — and growing
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
