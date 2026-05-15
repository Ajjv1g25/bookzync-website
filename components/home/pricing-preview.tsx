"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { useChatbot, type ChatbotIntent } from "@/lib/chatbot-context";
import { cn } from "@/lib/utils";

type Cadence = "monthly" | "annual";

interface Tier {
  /** Slug used to open chatbot with the right intent */
  key: ChatbotIntent;
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  setup: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    key: "starter",
    name: "Starter",
    tagline: "Your AI front desk, on duty.",
    monthly: 149,
    annual: 1490,
    setup: 99,
    features: [
      "AI chat assistant (24/7)",
      "Leads CRM",
      "Email notifications",
      "Workforce management",
      "Basic AI training",
    ],
    cta: "Start with Starter",
  },
  {
    key: "growth",
    name: "Growth",
    tagline: "When booking is your bottleneck.",
    monthly: 349,
    annual: 3490,
    setup: 199,
    features: [
      "Everything in Starter",
      "Calendar bookings (AI fills slots)",
      "Analytics & reports",
      "Live status board",
      "SMS notifications",
      "Full custom AI training",
      "Priority support",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    key: "growth-plus",
    name: "Growth+",
    tagline: "Website included. Done for you.",
    monthly: 599,
    annual: 5990,
    setup: 499,
    features: [
      "Everything in Growth",
      "Custom website built by us",
      "AI chat widget pre-installed",
      "Hosting included",
      "Custom domain support",
      "Dedicated onboarding",
    ],
    cta: "Go Growth+",
  },
];

export function PricingPreview() {
  const [cadence, setCadence] = useState<Cadence>("monthly");

  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Pricing
          </div>
          <h2 className="mt-6 text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Simple plans. Real ROI.
          </h2>
          <p className="mt-5 text-balance text-base text-text-muted sm:text-lg">
            One missed booking can pay for a month. Most clinics break even in
            their first week.
          </p>

          {/* Cadence toggle */}
          <div className="mt-10 inline-flex items-center rounded-full border border-border bg-surface p-1">
            {(["monthly", "annual"] as Cadence[]).map((c) => (
              <button
                key={c}
                onClick={() => setCadence(c)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  cadence === c
                    ? "text-white"
                    : "text-text-muted hover:text-text"
                )}
              >
                {cadence === c && (
                  <motion.div
                    layoutId="cadence-pill"
                    className="absolute inset-0 rounded-full bg-brand shadow-[0_4px_16px_-4px_hsl(var(--brand)/0.5)]"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {c === "monthly" ? "Monthly" : "Annual"}
                  {c === "annual" && (
                    <span
                      className={cn(
                        "rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium",
                        cadence !== "annual" && "bg-brand/10 text-brand"
                      )}
                    >
                      2 months free
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tier cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.08}>
              <TierCard tier={tier} cadence={cadence} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <Link href="/pricing">
            <Button variant="ghost" size="md" arrow>
              See full pricing details
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function TierCard({ tier, cadence }: { tier: Tier; cadence: Cadence }) {
  const price = cadence === "monthly" ? tier.monthly : Math.round(tier.annual / 12);
  const totalAnnual = tier.annual;
  const { open: openChatbot } = useChatbot();

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-8 transition-all duration-300",
        tier.popular
          ? "border-brand/40 shadow-glow"
          : "border-border hover:border-border-strong hover:shadow-card"
      )}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute right-6 top-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Most popular
          </span>
        </div>
      )}

      {/* Glow for popular */}
      {tier.popular && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-50 dark:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at top, rgba(6,182,212,0.12), transparent 50%)",
          }}
        />
      )}

      <div className="relative">
        <h3 className="text-lg font-semibold text-text">{tier.name}</h3>
        <p className="mt-1 text-sm text-text-muted">{tier.tagline}</p>

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-mono text-5xl font-semibold tracking-tight text-text">
            ${price}
          </span>
          <span className="text-sm text-text-muted">/mo</span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-text-subtle">
          {cadence === "annual"
            ? `Billed annually · $${totalAnnual.toLocaleString("en-US")}/yr`
            : "Billed monthly"}
          {" · "}
          ${tier.setup} setup
        </p>

        {/* CTA — opens chatbot with the right plan intent */}
        <div className="mt-7">
          <Button
            variant={tier.popular ? "primary" : "secondary"}
            size="md"
            arrow
            className="w-full"
            onClick={() => openChatbot(tier.key)}
          >
            {tier.cta}
          </Button>
        </div>

        {/* Features */}
        <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 flex-shrink-0",
                  tier.popular ? "text-brand" : "text-text-muted"
                )}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
