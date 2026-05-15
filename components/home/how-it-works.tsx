"use client";

import { motion } from "motion/react";
import { Plug, Brain, Zap } from "lucide-react";
import { FadeIn, RevealHeading, Stagger, StaggerItem } from "@/components/motion/fade-in";

const steps = [
  {
    num: "01",
    icon: Plug,
    title: "Connect your channels",
    body: "Drop our chat widget on your site, link Instagram and Facebook DMs, point an SMS number our way. Takes 20 minutes.",
    detail: "Website widget · Instagram DMs · Facebook · SMS · WhatsApp (soon)",
  },
  {
    num: "02",
    icon: Brain,
    title: "Train your AI in 48 hours",
    body: "Tell us your services, hours, pricing, common questions, and how you like to sound. We turn it into a model fluent in your business.",
    detail: "Brand voice · Service menu · Insurance plans · FAQs · Local slang",
  },
  {
    num: "03",
    icon: Zap,
    title: "Go live in 7 days",
    body: "By day seven the AI is answering chats, qualifying leads, and (on Growth and up) booking appointments straight into your calendar.",
    detail: "24/7 coverage · Real-time dashboard · Hot lead alerts to your team",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 lg:py-32">
      {/* Background mesh */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] opacity-20 animate-drift-2 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.3), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            How it works
          </div>
        </FadeIn>
        <RevealHeading className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-text">
            From signup to{" "}
            <span className="text-gradient-brand">first booking, in a week</span>
          </h2>
        </RevealHeading>
        <FadeIn delay={0.15} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-balance text-base text-text-muted sm:text-lg">
            Three steps. Most of the work is on us. You stay focused on the
            customers who walk through your door.
          </p>
        </FadeIn>

        {/* Steps with connecting line */}
        <div className="relative mt-16">
          {/* Connecting line (desktop only) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent 5%, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent 95%)",
            }}
          />

          <Stagger className="relative grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8" stagger={0.15}>
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <StepCard step={step} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="group relative">
      {/* Number circle (sits on the connecting line) */}
      <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center lg:mx-0">
        {/* Outer ring with brand glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--brand)) 0%, hsl(var(--brand)/0.2) 50%, hsl(var(--brand)) 100%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner circle (with backdrop blur) */}
        <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border border-border bg-surface backdrop-blur-xl">
          {/* Number */}
          <span className="font-mono text-2xl font-semibold text-text">
            {step.num}
          </span>
          {/* Icon badge top-right */}
          <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg shadow-card">
            <step.icon className="h-4 w-4 text-brand" />
          </div>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <h3 className="text-xl font-semibold text-text">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.body}</p>
        <p className="mt-4 font-mono text-[11px] text-text-subtle">{step.detail}</p>
      </div>
    </div>
  );
}
