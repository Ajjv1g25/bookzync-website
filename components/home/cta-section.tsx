"use client";

import Link from "next/link";
import { FadeIn, RevealHeading } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { useChatbot } from "@/lib/chatbot-context";

export function CTASection() {
  const { open: openChatbot } = useChatbot();
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface-inverse px-6 py-20 text-center sm:px-16">
            {/* Background mesh */}
            <CTABackground />

            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                Ready when you are
              </p>

              <RevealHeading>
                <h2 className="mt-5 text-balance text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
                  Your front desk is{" "}
                  <span className="bg-gradient-to-br from-white via-white to-[hsl(188,100%,80%)] bg-clip-text text-transparent">
                    about to get smarter.
                  </span>
                </h2>
              </RevealHeading>

              <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
                Set up in a week. Pay for itself in a month. Cancel anytime.
                Let&apos;s find out what BookZync can do for your business.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  arrow
                  className="bg-white text-neutral-900 hover:bg-white/90 hover:text-neutral-900"
                  onClick={() => openChatbot("general")}
                >
                  Get Started
                </Button>
                <Link href="/#industries">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    Explore Industries
                  </Button>
                </Link>
              </div>

              <p className="mt-7 font-mono text-xs text-white/40">
                7-day onboarding · No long contracts · Cancel anytime
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CTABackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Grid */}
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

      {/* Glow orbs */}
      <div
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-80 animate-drift-1"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.5), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full opacity-70 animate-drift-2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.4), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle inner border */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      />
    </div>
  );
}
