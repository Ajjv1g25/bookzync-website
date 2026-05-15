"use client";

import Link from "next/link";
import { ArrowUpRight, Stethoscope, Scissors, Dumbbell, Smile } from "lucide-react";
import { FadeIn, Stagger, StaggerItem, RevealHeading } from "@/components/motion/fade-in";
import { industryList, type IndustryKey } from "@/lib/industry-config";

const industryIcons: Record<IndustryKey, React.ComponentType<{ className?: string }>> = {
  dental: Smile,
  medical: Stethoscope,
  salon: Scissors,
  gym: Dumbbell,
};

const industryDescriptions: Record<IndustryKey, string> = {
  dental:
    "AI that knows insurance plans, handles emergencies, and books cleanings while you're with patients.",
  medical:
    "Triage routine chats, route urgent symptoms, book providers — without touching PHI.",
  salon:
    "Match clients to stylists, remember color formulas, and capture 11pm impulse bookings.",
  gym: "Book tours, fill classes, schedule PT consults — every member inquiry captured.",
};

export function IndustrySelector() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            By industry
          </div>
        </FadeIn>
        <RevealHeading className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Select your industry
          </h2>
        </RevealHeading>
        <FadeIn delay={0.15} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-balance text-base text-text-muted sm:text-lg">
            Same product, four sharply different experiences. Each industry gets
            its own terminology, prompts, and demo websites — out of the box.
          </p>
        </FadeIn>

        <Stagger
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2"
          stagger={0.1}
        >
          {industryList.map((ind) => {
            const Icon = industryIcons[ind.key];
            return (
              <StaggerItem key={ind.key}>
                <Link
                  href={`/industry/${ind.key}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
                  style={
                    {
                      "--accent": ind.accentHex,
                      "--accent-glow": ind.accentGlow,
                    } as React.CSSProperties
                  }
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${ind.accentGlow}, transparent 60%)`,
                      filter: "blur(40px)",
                    }}
                  />

                  {/* Accent border on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${ind.accentHex}40`,
                    }}
                  />

                  {/* Decorative big icon (background) */}
                  <Icon
                    className="absolute -right-6 -bottom-6 h-40 w-40 opacity-[0.03] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.06] dark:opacity-[0.04] dark:group-hover:opacity-[0.08]"
                    aria-hidden
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-subtle transition-all duration-300 group-hover:border-transparent"
                        style={{
                          color: ind.accentHex,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-subtle text-text-muted transition-all duration-300 group-hover:border-transparent group-hover:bg-text group-hover:text-bg group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-text">
                        {ind.displayName}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {industryDescriptions[ind.key]}
                      </p>
                    </div>

                    {/* Bottom strip with key terms */}
                    <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 font-mono text-[11px] text-text-subtle">
                      <span>{ind.terms.customerPlural}</span>
                      <span className="text-text-subtle/40">·</span>
                      <span>{ind.terms.bookingPlural}</span>
                      <span className="text-text-subtle/40">·</span>
                      <span>{ind.terms.professional}s</span>
                    </div>

                    {/* Explore CTA */}
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors">
                      Explore {ind.shortName}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: ind.accentHex }}
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
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
