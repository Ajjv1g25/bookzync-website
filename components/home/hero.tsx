"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechNetwork } from "./tech-network";
import { useChatbot } from "@/lib/chatbot-context";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { open: openChatbot } = useChatbot();
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* ============================
          Background — gradient mesh
          ============================ */}
      <HeroBackground />

      {/* ============================
          Content
          ============================ */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-8 inline-flex"
          >
            <a
              href="#industries"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-text-muted backdrop-blur-sm transition-all hover:border-brand/40 hover:text-text hover:shadow-glow"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Live across 4 industries
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Headline */}
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
            className="text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-text"
          >
            Smarter front desk.{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-brand">Fuller calendar.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:text-lg"
          >
            BookZync gives clinics, salons, and gyms an AI chat assistant
            that talks to every visitor 24/7, books appointments instantly,
            and captures every lead.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              variant="primary"
              size="lg"
              arrow
              onClick={() => openChatbot("general")}
            >
              Get Started
            </Button>
            <Link href="#industries">
              <Button variant="secondary" size="lg">
                Explore Industries
              </Button>
            </Link>
          </motion.div>

          {/* Sub-CTA caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 font-mono text-xs text-text-subtle"
          >
            7-day onboarding · Cancel anytime · No long contracts
          </motion.p>
        </div>

        {/* ============================
            Product preview
            ============================ */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: easeOut }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <HeroProductPreview />
        </motion.div>
      </div>
    </section>
  );
}

/* =================================================================
   Background — gradient mesh with drifting glow orbs + grid overlay
   ================================================================= */
function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base color (subtle in light mode, deep in dark) */}
      <div className="absolute inset-0 bg-bg" />

      {/* Grid overlay with radial fade */}
      <div className="absolute inset-0 bg-grid opacity-70 mask-radial-faded" />

      {/* Tech network — animated neural-network overlay */}
      <TechNetwork className="absolute inset-x-0 top-0 h-[700px] w-full opacity-40 mask-radial-faded dark:opacity-60" />

      {/* Glow orbs — drift slowly */}
      <div
        className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full opacity-50 animate-drift-1 dark:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6,182,212,0.45), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full opacity-40 animate-drift-2 dark:opacity-90"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.4), transparent 60%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30 animate-drift-3 dark:opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.3), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle noise overlay (CSS-only) */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}

/* =================================================================
   Product preview — layered conversation-to-booking mockup
   ================================================================= */
function HeroProductPreview() {
  return (
    <div className="relative">
      {/* Glow halo behind preview */}
      <div
        className="absolute -inset-12 -z-10 opacity-50 blur-3xl dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.25), transparent 70%)",
        }}
      />

      {/* Tech circuit layer — animated SVG nodes + data pulses */}
      <TechCircuit />

      {/* Browser chrome frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-lifted">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-border bg-bg-subtle px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="ml-4 flex flex-1 items-center gap-2 rounded-md border border-border bg-surface px-3 py-1 font-mono text-[11px] text-text-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            login.bookzync.com/dashboard
          </div>
        </div>

        {/* Dashboard preview content */}
        <div className="grid gap-4 p-6 md:grid-cols-5 md:gap-6 md:p-8">
          {/* Left: Conversation card */}
          <ConversationCard />

          {/* Right: Calendar + stats */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <StatStrip />
            <CalendarPreview />
          </div>
        </div>

        {/* Bottom scanlines for depth (very subtle) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
      </div>

      {/* Floating notification card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: easeOut }}
        className="absolute -left-4 top-1/3 hidden -translate-x-full lg:block"
      >
        <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-lifted">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-medium text-text">
                Booking confirmed
              </div>
              <div className="font-mono text-[10px] text-text-subtle">
                +$1,250 captured
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chat-status card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: easeOut }}
        className="absolute -right-4 bottom-1/4 hidden translate-x-full lg:block"
      >
        <div className="rounded-xl border border-border bg-surface-elevated px-4 py-3 shadow-lifted">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-medium text-text">
                24/7 chat active
              </div>
              <div className="font-mono text-[10px] text-text-subtle">
                0 missed leads today
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating intent telemetry pill (top-right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6, ease: easeOut }}
        className="absolute -right-2 top-12 hidden translate-x-1/2 lg:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-[10px] backdrop-blur-sm shadow-card">
          <span className="text-text-subtle">Intent</span>
          <span className="font-semibold text-brand">Booking</span>
          <span className="text-text-subtle">·</span>
          <span className="font-semibold text-text">98%</span>
        </div>
      </motion.div>

      {/* Floating lead score pill (bottom-left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6, ease: easeOut }}
        className="absolute -left-2 bottom-12 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-[10px] backdrop-blur-sm shadow-card">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-orange-500" />
          <span className="text-text-subtle">Lead score</span>
          <span className="font-semibold text-text">92</span>
          <span className="text-orange-500">Hot</span>
        </div>
      </motion.div>
    </div>
  );
}

function ConversationCard() {
  const messages: Array<{ role: "ai" | "user"; text: string }> = [
    { role: "user", text: "Hi, do you have time for a cleaning Friday?" },
    { role: "ai", text: "Yes! I have Friday at 2pm or 4:30pm. Which works?" },
    { role: "user", text: "4:30 please" },
    { role: "ai", text: "Booked. Confirmation sent. See you Friday at 4:30." },
  ];

  return (
    <div className="md:col-span-2 flex flex-col gap-3 rounded-xl border border-border bg-bg-subtle p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-brand">
            <MessageSquare className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-medium text-text">Live AI Chat</span>
        </div>
        <span className="font-mono text-[10px] text-text-subtle">2:14 PM</span>
      </div>

      <div className="flex flex-col gap-2">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
            className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                m.role === "user"
                  ? "rounded-bl-sm bg-surface text-text"
                  : "rounded-br-sm bg-brand text-white"
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator (always cycling for visual life) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.4 }}
          className="flex justify-start"
        >
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface px-3 py-2.5">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="h-1.5 w-1.5 rounded-full bg-text-subtle"
                style={{
                  animation: "pulse-soft 1.4s ease-in-out infinite",
                  animationDelay: `${d * 0.2}s`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer chip — channel signal */}
      <div className="mt-1 flex items-center justify-between border-t border-border pt-2 font-mono text-[10px] text-text-subtle">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Website widget
        </span>
        <span>Latency: 0.4s</span>
      </div>
    </div>
  );
}

function StatStrip() {
  const stats = [
    { label: "Bookings today", value: "12", trend: "+4" },
    { label: "AI chats handled", value: "47", trend: "+8" },
    { label: "Revenue captured", value: "$3.2k", trend: "+12%" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
          className="rounded-xl border border-border bg-bg-subtle px-3 py-3"
        >
          <div className="text-[10px] uppercase tracking-wider text-text-subtle">
            {s.label}
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-mono text-lg font-semibold text-text">
              {s.value}
            </span>
            <span className="font-mono text-[10px] text-green-500">
              {s.trend}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CalendarPreview() {
  // Stylized week view — 5 days, 4 time slots, some filled
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const slots = ["9 AM", "11 AM", "2 PM", "4 PM"];
  // 1 = booked, 2 = AI-booked (highlighted), 0 = open
  const grid = [
    [1, 0, 1, 1],
    [0, 1, 2, 1],
    [1, 2, 1, 0],
    [1, 1, 0, 2],
    [2, 1, 1, 1],
  ];

  return (
    <div className="flex-1 rounded-xl border border-border bg-bg-subtle p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-text-muted" />
          <span className="text-xs font-medium text-text">This week</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-text-subtle">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-border-strong" />
            Manual
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-brand" />
            AI-booked
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {days.map((d, i) => (
          <div key={d} className="flex flex-col gap-1.5">
            <div className="text-center font-mono text-[10px] font-semibold text-text-subtle">
              {d}
            </div>
            {slots.map((s, j) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (i * 4 + j) * 0.03, duration: 0.3 }}
                className={`h-7 rounded-md text-center text-[9px] leading-7 transition-colors ${
                  grid[i][j] === 2
                    ? "bg-brand text-white shadow-[0_0_12px_-2px_hsl(var(--brand)/0.4)]"
                    : grid[i][j] === 1
                    ? "bg-border-strong/40 text-text-muted"
                    : "border border-dashed border-border text-text-subtle"
                }`}
              >
                {grid[i][j] !== 0 ? s : ""}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =================================================================
   TechCircuit — animated SVG layer behind the product preview
   Network of nodes connected by lines, with pulses traveling
   along the lines to suggest live data flow.
   ================================================================= */
function TechCircuit() {
  // Pre-positioned nodes (stable layout, no randomness for SSR)
  const nodes = [
    { cx: 40, cy: 50, r: 2 },
    { cx: 180, cy: 30, r: 1.5 },
    { cx: 320, cy: 70, r: 2 },
    { cx: 100, cy: 140, r: 1.5 },
    { cx: 260, cy: 160, r: 2 },
    { cx: 380, cy: 200, r: 1.5 },
    { cx: 60, cy: 240, r: 2 },
    { cx: 200, cy: 280, r: 1.5 },
    { cx: 340, cy: 320, r: 2 },
    { cx: 460, cy: 110, r: 1.5 },
    { cx: 520, cy: 260, r: 2 },
    { cx: 600, cy: 70, r: 1.5 },
    { cx: 660, cy: 200, r: 2 },
    { cx: 720, cy: 340, r: 1.5 },
  ];

  // Connections — pairs of node indices
  const edges: Array<[number, number]> = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [4, 5],
    [3, 6], [6, 7], [4, 7], [7, 8], [5, 8],
    [2, 9], [9, 5], [9, 10], [5, 10], [10, 8],
    [9, 11], [11, 12], [10, 12], [12, 13], [8, 13],
  ];

  return (
    <div className="pointer-events-none absolute -inset-16 -z-10 hidden lg:block">
      <svg
        viewBox="0 0 800 400"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          {/* Gradient for the connection lines — fades from cyan-bright to subtle */}
          <linearGradient id="circuit-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--brand))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0" />
          </linearGradient>

          {/* Radial mask so the circuit fades at the edges */}
          <radialGradient id="circuit-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="circuit-fade">
            <rect width="800" height="400" fill="url(#circuit-mask)" />
          </mask>
        </defs>

        <g mask="url(#circuit-fade)">
          {/* Connection lines */}
          {edges.map(([a, b], i) => {
            const n1 = nodes[a];
            const n2 = nodes[b];
            return (
              <line
                key={`edge-${i}`}
                x1={n1.cx}
                y1={n1.cy}
                x2={n2.cx}
                y2={n2.cy}
                stroke="hsl(var(--brand))"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
            );
          })}

          {/* Static nodes */}
          {nodes.map((n, i) => (
            <g key={`node-${i}`}>
              {/* Outer halo */}
              <circle
                cx={n.cx}
                cy={n.cy}
                r={n.r * 3}
                fill="hsl(var(--brand))"
                opacity="0.08"
                style={{
                  animation: `pulse-soft ${2 + (i % 4) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                  transformOrigin: `${n.cx}px ${n.cy}px`,
                }}
              />
              {/* Inner dot */}
              <circle
                cx={n.cx}
                cy={n.cy}
                r={n.r}
                fill="hsl(var(--brand))"
                opacity="0.6"
              />
            </g>
          ))}

          {/* Traveling data pulses along select edges */}
          {[
            { from: nodes[0], to: nodes[1], delay: 0 },
            { from: nodes[3], to: nodes[4], delay: 1.5 },
            { from: nodes[4], to: nodes[7], delay: 3 },
            { from: nodes[9], to: nodes[10], delay: 0.8 },
            { from: nodes[10], to: nodes[12], delay: 2.2 },
            { from: nodes[11], to: nodes[12], delay: 4 },
          ].map((p, i) => (
            <circle key={`pulse-${i}`} r="3" fill="hsl(var(--brand))">
              <animate
                attributeName="cx"
                values={`${p.from.cx};${p.to.cx}`}
                dur="3s"
                begin={`${p.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${p.from.cy};${p.to.cy}`}
                dur="3s"
                begin={`${p.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="3s"
                begin={`${p.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}

