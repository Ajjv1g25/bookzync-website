"use client";

import { Hourglass, Inbox, MoonStar } from "lucide-react";
import { FadeIn, Stagger, StaggerItem, RevealHeading } from "@/components/motion/fade-in";

const problems = [
  {
    icon: Hourglass,
    title: "Slow replies kill leads",
    stat: "5 min",
    statLabel: "is when leads go cold. Most replies take hours.",
    body: "A prospect messages three businesses. They book the one that replies first. If your front desk takes more than five minutes, the booking goes somewhere else — usually permanently.",
  },
  {
    icon: Inbox,
    title: "Inbox chaos across channels",
    stat: "4+",
    statLabel: "channels your team has to monitor",
    body: "Website chat, Instagram DMs, Facebook messages, SMS. Your staff jumps between tabs, misses half the messages, and forgets to follow up on the rest.",
  },
  {
    icon: MoonStar,
    title: "After-hours blackout",
    stat: "70%",
    statLabel: "of chat inquiries happen outside business hours",
    body: "Your customers decide to book at 9pm, on weekends, during lunch. If your chat isn't there to answer, the booking goes to whoever was — and they don't come back.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            The problem
          </div>
        </FadeIn>
        <RevealHeading className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-text">
            The old way is{" "}
            <span className="text-gradient-brand">costing you money</span>
          </h2>
        </RevealHeading>
        <FadeIn delay={0.15} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-balance text-base text-text-muted sm:text-lg">
            Every business that captures leads through chat loses revenue the
            same three ways. We've seen it across dental clinics, salons, gyms,
            and medical practices.
          </p>
        </FadeIn>

        {/* Cards */}
        <Stagger className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:shadow-lifted">
                {/* Accent corner glow on hover */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(239,68,68,0.15), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-subtle text-text-muted">
                  <p.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-text">
                  {p.title}
                </h3>

                <div className="mt-4 flex items-baseline gap-3 border-y border-border py-4">
                  <span className="flex-shrink-0 whitespace-nowrap font-mono text-[1.75rem] font-semibold leading-none tracking-tight text-text sm:text-3xl">
                    {p.stat}
                  </span>
                  <span className="min-w-0 text-xs leading-snug text-text-muted">
                    {p.statLabel}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {p.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
