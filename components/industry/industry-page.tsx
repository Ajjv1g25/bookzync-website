"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Check,
  Plus,
  Smile,
  Stethoscope,
  Scissors,
  Dumbbell,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem, RevealHeading } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import {
  industries,
  type IndustryKey,
  type IndustryConfig,
} from "@/lib/industry-config";
import { useChatbot, type ChatbotIntent } from "@/lib/chatbot-context";
import { IndustryCalculator } from "@/components/industry/calculator";

const easeOut = [0.16, 1, 0.3, 1] as const;

const industryIcons: Record<IndustryKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  dental: Smile,
  medical: Stethoscope,
  salon: Scissors,
  gym: Dumbbell,
};

export function IndustryPage({ industry }: { industry: IndustryKey }) {
  const cfg = industries[industry];

  return (
    <>
      <Navbar />
      <main>
        <IndustryHero cfg={cfg} />
        <IndustryProblems cfg={cfg} />
        <IndustryFeatures cfg={cfg} />
        <IndustryCalculator cfg={cfg} />
        <IndustryPricing cfg={cfg} />
        <IndustryDemos cfg={cfg} />
        <IndustryFAQ cfg={cfg} />
        <IndustryCTA cfg={cfg} />
      </main>
      <Footer />
    </>
  );
}

/* =================================================================
   Hero — uses industry accent color throughout
   ================================================================= */
function IndustryHero({ cfg }: { cfg: IndustryConfig }) {
  const Icon = industryIcons[cfg.key];
  const { open: openChatbot } = useChatbot();

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background — industry-colored mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 bg-grid opacity-70 mask-radial-faded" />

        {/* Industry-accent glow orbs */}
        <div
          className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full opacity-50 animate-drift-1 dark:opacity-100"
          style={{
            background: `radial-gradient(circle at center, ${cfg.accentGlow}, transparent 60%)`,
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full opacity-40 animate-drift-2 dark:opacity-90"
          style={{
            background: `radial-gradient(circle at center, ${cfg.accentGlow}, transparent 60%)`,
            filter: "blur(70px)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mb-6 inline-flex"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border bg-surface/60 px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
                style={{
                  borderColor: `${cfg.accentHex}40`,
                  color: cfg.accentHex,
                }}
              >
                <Icon className="h-3.5 w-3.5" />
                {cfg.hero.eyebrow}
              </div>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
                rotateX: -25,
                scale: 0.9,
                filter: "blur(16px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: easeOut,
                filter: { duration: 0.6, delay: 0.1 },
              }}
              style={{
                transformPerspective: 1200,
                transformStyle: "preserve-3d",
                transformOrigin: "center bottom",
              }}
              className="text-balance text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-text"
            >
              {cfg.hero.headlineSplit.plain}{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${cfg.accentHex} 0%, ${cfg.accentHex}AA 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {cfg.hero.headlineSplit.accent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:text-lg"
            >
              {cfg.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex h-13 items-center gap-2 rounded-lg px-7 text-base font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: cfg.accentHex,
                  boxShadow: `0 1px 0 0 rgba(255,255,255,0.2) inset, 0 8px 24px -8px ${cfg.accentGlow}`,
                }}
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <Link href="#pricing">
                <Button variant="secondary" size="lg">
                  See Pricing
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-6 font-mono text-xs text-text-subtle"
            >
              7-day onboarding · Cancel anytime · No long contracts
            </motion.p>
          </div>

          {/* Right — stat card + decorative industry icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Background industry-tinted disc */}
              <div
                className="absolute inset-8 rounded-full opacity-30 blur-3xl"
                style={{
                  background: `radial-gradient(circle at center, ${cfg.accentHex}, transparent 60%)`,
                }}
              />

              {/* Decorative icon */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: cfg.accentHex }}
              >
                <Icon className="h-48 w-48 opacity-20" strokeWidth={1} />
              </div>

              {/* Stat card front-and-center */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-lifted">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-subtle">
                      Industry signal
                    </span>
                    <TrendingUp
                      className="h-4 w-4"
                      style={{ color: cfg.accentHex }}
                    />
                  </div>
                  <div
                    className="mt-3 font-mono text-5xl font-semibold tracking-tight"
                    style={{ color: cfg.accentHex }}
                  >
                    {cfg.hero.stat.value}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">
                    {cfg.hero.stat.label}
                  </p>
                </div>
              </motion.div>

              {/* Floating chips around */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute left-0 top-8"
              >
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-[10px] backdrop-blur-sm shadow-card">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: cfg.accentHex }}
                  />
                  <span className="text-text">Chat replied · 0.4s</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute bottom-12 right-0"
              >
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-[10px] backdrop-blur-sm shadow-card">
                  <Sparkles className="h-3 w-3 text-text" />
                  <span className="text-text">{cfg.terms.booking} booked</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   Problems — 3 industry-specific cards
   ================================================================= */
function IndustryProblems({ cfg }: { cfg: IndustryConfig }) {
  return (
    <section className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Why it hurts
          </div>
          <RevealHeading><h2 className="mt-6 text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Three ways {cfg.displayName.toLowerCase()} lose{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${cfg.accentHex} 0%, ${cfg.accentHex}AA 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              real money
            </span>
          </h2></RevealHeading>
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
          {cfg.problems.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:shadow-lifted">
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background: `radial-gradient(circle, ${cfg.accentGlow}, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />
                <h3 className="text-lg font-semibold leading-snug text-text">{p.title}</h3>
                <div className="mt-4 flex items-baseline gap-3 border-y border-border py-4">
                  <span
                    className="flex-shrink-0 whitespace-nowrap font-mono text-[1.75rem] font-semibold leading-none tracking-tight sm:text-3xl"
                    style={{ color: cfg.accentHex }}
                  >
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

/* =================================================================
   Features — 3 industry-specific feature highlights
   ================================================================= */
function IndustryFeatures({ cfg }: { cfg: IndustryConfig }) {
  return (
    <section className="relative border-t border-border bg-bg-subtle/40 py-24 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-30 dark:opacity-60"
        style={{
          background: `radial-gradient(ellipse at center top, ${cfg.accentGlow}, transparent 70%)`,
          filter: "blur(50px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
            style={{
              borderColor: `${cfg.accentHex}33`,
              backgroundColor: `${cfg.accentHex}15`,
              color: cfg.accentHex,
            }}
          >
            Built for {cfg.shortName}
          </div>
          <RevealHeading><h2 className="mt-6 text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Tailored to your workflow
          </h2></RevealHeading>
          <p className="mt-5 text-balance text-base text-text-muted sm:text-lg">
            Same AI engine. Three industry-tuned capabilities that pay off the
            first week.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
          {cfg.features.map((f, i) => (
            <StaggerItem key={f.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:shadow-lifted">
                <div
                  className="font-mono text-[11px] font-semibold"
                  style={{ color: cfg.accentHex }}
                >
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {f.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}


/* =================================================================
   Pricing — 3 tiers with monthly/annual toggle
   ================================================================= */
type Cadence = "monthly" | "annual";
const tiers = [
  {
    key: "starter" as const,
    name: "Starter",
    tagline: "Your AI chat assistant, on duty.",
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
    key: "growth" as const,
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
    key: "growth-plus" as const,
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

function IndustryPricing({ cfg }: { cfg: IndustryConfig }) {
  const [cadence, setCadence] = useState<Cadence>("monthly");

  return (
    <section
      id="pricing"
      className="relative border-t border-border bg-bg-subtle/40 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Pricing for {cfg.shortName}
          </div>
          <RevealHeading><h2 className="mt-6 text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Simple plans. Real ROI.
          </h2></RevealHeading>
          <p className="mt-5 text-balance text-base text-text-muted sm:text-lg">
            Most {cfg.displayName.toLowerCase()} break even in their first
            week.
          </p>

          {/* Cadence toggle */}
          <div className="mt-10 inline-flex items-center rounded-full border border-border bg-surface p-1">
            {(["monthly", "annual"] as Cadence[]).map((c) => (
              <button
                key={c}
                onClick={() => setCadence(c)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  cadence === c ? "text-white" : "text-text-muted hover:text-text"
                )}
              >
                {cadence === c && (
                  <motion.div
                    layoutId="cadence-pill-industry"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: cfg.accentHex,
                      boxShadow: `0 4px 16px -4px ${cfg.accentGlow}`,
                    }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {c === "monthly" ? "Monthly" : "Annual"}
                  {c === "annual" && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium",
                        cadence === "annual"
                          ? "bg-white/15 text-white"
                          : "text-brand"
                      )}
                      style={
                        cadence !== "annual"
                          ? { backgroundColor: `${cfg.accentHex}15`, color: cfg.accentHex }
                          : undefined
                      }
                    >
                      2 months free
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.08}>
              <PricingTier tier={tier} cadence={cadence} accentHex={cfg.accentHex} accentGlow={cfg.accentGlow} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingTier({
  tier,
  cadence,
  accentHex,
  accentGlow,
}: {
  tier: (typeof tiers)[number];
  cadence: Cadence;
  accentHex: string;
  accentGlow: string;
}) {
  const price = cadence === "monthly" ? tier.monthly : Math.round(tier.annual / 12);
  const totalAnnual = tier.annual;
  const { open: openChatbot } = useChatbot();

  return (
    <div className="group relative h-full" style={{ perspective: "1500px" }}>
      <motion.article
        whileHover={{
          rotateX: 2,
          rotateY: -2,
          y: -8,
          transition: { duration: 0.4, ease: easeOut },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="liquid-glass relative flex h-full flex-col overflow-hidden rounded-3xl"
      >
        {/* === Layer 1: Specular top highlight (the "wet" glass look) === */}
        <div className="liquid-glass-highlight pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl" />

        {/* === Layer 2: Prismatic gradient border === */}
        <div className="liquid-glass-border rounded-3xl" />

        {/* === Layer 3: Popular tier — soft accent tint refraction === */}
        {tier.popular && (
          <>
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-90"
              style={{
                background: `radial-gradient(ellipse 100% 50% at top, ${accentHex}26, transparent 70%)`,
              }}
            />
            {/* Color-bleed bottom-right corner (gives the glass a "tinted" feel) */}
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full opacity-50 blur-3xl"
              style={{ background: accentHex }}
            />
            {/* Bottom accent line — like light catching the bottom edge */}
            <div
              className="pointer-events-none absolute inset-x-8 bottom-0 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${accentHex}, transparent)`,
                boxShadow: `0 0 12px ${accentHex}`,
              }}
            />
          </>
        )}

        {/* === Popular badge === */}
        {tier.popular && (
          <div className="absolute right-6 top-6 z-10">
            <div className="liquid-glass relative overflow-hidden rounded-full">
              <span
                className="relative inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white"
                style={{
                  background: `linear-gradient(135deg, ${accentHex}, ${accentHex}DD)`,
                  textShadow: "0 1px 1px rgba(0,0,0,0.2)",
                }}
              >
                Most popular
              </span>
            </div>
          </div>
        )}

        {/* === Content === */}
        <div className="relative flex h-full flex-col p-8">
          <h3 className="text-lg font-semibold text-text">{tier.name}</h3>
          <p className="mt-1 text-sm text-text-muted">{tier.tagline}</p>

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
            {" · "}${tier.setup} setup
          </p>

          <button
            type="button"
            onClick={() => openChatbot(tier.key as ChatbotIntent)}
            className={cn(
              "group/btn relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5",
              tier.popular ? "text-white" : "liquid-glass text-text"
            )}
            style={
              tier.popular
                ? {
                    background: `linear-gradient(135deg, ${accentHex}, ${accentHex}DD)`,
                    boxShadow: `0 1px 0 0 rgba(255,255,255,0.3) inset, 0 -1px 0 0 rgba(0,0,0,0.1) inset, 0 8px 24px -8px ${accentGlow}`,
                  }
                : undefined
            }
          >
            {/* Specular highlight on button */}
            {tier.popular && (
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />
            )}
            <span className="relative flex items-center gap-2">
              {tier.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </span>
          </button>

          <ul className="mt-8 flex flex-col gap-3 border-t border-border/40 pt-6">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                <span
                  className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                  style={
                    tier.popular
                      ? {
                          backgroundColor: `${accentHex}22`,
                          boxShadow: `0 0 0 1px ${accentHex}33 inset`,
                        }
                      : {
                          backgroundColor: "hsl(var(--bg-subtle))",
                          boxShadow: "0 0 0 1px hsl(var(--border)) inset",
                        }
                  }
                >
                  <Check
                    className="h-3 w-3"
                    style={tier.popular ? { color: accentHex } : { color: "currentColor" }}
                  />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
}

/* =================================================================
   Demo websites — 2 per industry
   ================================================================= */
function IndustryDemos({ cfg }: { cfg: IndustryConfig }) {
  return (
    <section className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Demo websites
          </div>
          <RevealHeading><h2 className="mt-6 text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
            See it on a {cfg.terms.location} that looks like yours
          </h2></RevealHeading>
          <p className="mt-5 text-balance text-base text-text-muted sm:text-lg">
            Two reference {cfg.terms.location}s with our chat widget pre-installed.
            Click through, message the AI, see how it handles real
            {" "}{cfg.terms.customer} questions.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2" stagger={0.1}>
          {cfg.demos.map((demo, i) => (
            <StaggerItem key={demo.name}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted">
                {/* Preview block — uses screenshot if available, falls back to icon card */}
                <div
                  className="relative aspect-[16/10] overflow-hidden border-b border-border"
                  style={
                    !demo.image
                      ? {
                          background: `linear-gradient(135deg, ${cfg.accentHex}15, ${cfg.accentHex}05)`,
                        }
                      : undefined
                  }
                >
                  {/* Browser bar */}
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-border/50 bg-surface/60 px-3 py-2 backdrop-blur-sm">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-400/60" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                      <span className="h-2 w-2 rounded-full bg-green-400/60" />
                    </div>
                    <span className="ml-2 font-mono text-[10px] text-text-subtle">
                      demos.bookzync.com/{cfg.key}/{demo.slug}
                    </span>
                  </div>

                  {demo.image ? (
                    /* Screenshot preview — anchored under the browser bar, scales subtly on hover */
                    <div className="absolute inset-0 pt-8">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={demo.image}
                          alt={`${demo.name} demo site preview`}
                          fill
                          sizes="(min-width: 768px) 600px, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Fallback icon card for demos without a screenshot yet */
                    <div className="absolute inset-0 flex items-center justify-center pt-8">
                      <div className="text-center">
                        <div
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-lifted"
                          style={{ backgroundColor: cfg.accentHex }}
                        >
                          {(() => {
                            const Icon = industryIcons[cfg.key];
                            return <Icon className="h-8 w-8 text-white" />;
                          })()}
                        </div>
                        <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-text-subtle">
                          Reference site
                        </div>
                        <div className="mt-1 text-base font-semibold text-text">
                          {demo.name}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Floating chat bubble suggesting AI is live */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full shadow-lifted"
                      style={{
                        backgroundColor: cfg.accentHex,
                        boxShadow: `0 0 20px ${cfg.accentGlow}`,
                      }}
                    >
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-text">
                        {demo.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {demo.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={demo.url || `/demos/${cfg.key}/${demo.slug}`}
                      target={demo.url ? "_blank" : undefined}
                      rel={demo.url ? "noopener noreferrer" : undefined}
                    >
                      <button
                        type="button"
                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                        style={{
                          backgroundColor: cfg.accentHex,
                          boxShadow: `0 1px 0 0 rgba(255,255,255,0.2) inset, 0 8px 24px -8px ${cfg.accentGlow}`,
                        }}
                      >
                        View demo site
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* =================================================================
   Industry FAQ — accordion with industry-specific questions
   ================================================================= */
function IndustryFAQ({ cfg }: { cfg: IndustryConfig }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-bg-subtle/40 py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
              {cfg.shortName} FAQ
            </div>
            <RevealHeading><h2 className="mt-6 text-balance text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-tight text-text">
              {cfg.shortName}-specific questions
            </h2></RevealHeading>
            <p className="mt-5 text-sm leading-relaxed text-text-muted">
              The questions every {cfg.terms.location} owner asks before signing
              up. General product questions are on the{" "}
              <Link
                href="/faq"
                className="font-medium text-text underline decoration-border underline-offset-4 hover:decoration-text"
              >
                main FAQ
              </Link>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              {cfg.faqs.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={i}
                    className={cn(
                      "border-b border-border last:border-b-0",
                      isOpen && "bg-bg-subtle/50"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-bg-subtle/50"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-medium text-text sm:text-base">
                        {faq.question}
                      </span>
                      <span
                        className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface transition-all duration-300"
                        style={
                          isOpen
                            ? {
                                transform: "rotate(45deg)",
                                borderColor: cfg.accentHex,
                                backgroundColor: cfg.accentHex,
                                color: "white",
                              }
                            : undefined
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pr-16 text-sm leading-relaxed text-text-muted">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   CTA — final industry-themed closing
   ================================================================= */
function IndustryCTA({ cfg }: { cfg: IndustryConfig }) {
  const { open: openChatbot } = useChatbot();
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface-inverse px-6 py-20 text-center sm:px-16">
            <div className="absolute inset-0 -z-10">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                  maskImage:
                    "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
                }}
              />
              <div
                className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-80 animate-drift-1"
                style={{
                  background: `radial-gradient(circle at center, ${cfg.accentHex}80, transparent 60%)`,
                  filter: "blur(80px)",
                }}
              />
              <div
                className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full opacity-70 animate-drift-2"
                style={{
                  background: `radial-gradient(circle at center, ${cfg.accentHex}60, transparent 60%)`,
                  filter: "blur(80px)",
                }}
              />
            </div>

            <p className="font-mono text-[11px] uppercase tracking-wider text-white/60">
              Ready for your {cfg.terms.location}?
            </p>
            <RevealHeading><h2 className="mt-5 text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
              Stop losing {cfg.terms.customerPlural} to slow replies.
            </h2></RevealHeading>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              Set up in a week. Pay for itself in a month. Cancel anytime.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-medium text-neutral-900 transition-all hover:-translate-y-0.5 hover:shadow-lifted"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <Link href="#pricing">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  See pricing
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
