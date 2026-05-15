"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Activity,
  Stethoscope,
  Microscope,
  Award,
  ShieldCheck,
  Sparkle,
  TrendingUp,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/specialty-clinic";
const easeOut = [0.16, 1, 0.3, 1] as const;

const NAVY = "#0B1F3A";
const CYAN = "#00B8D4";
const CYAN_DARK = "#006FA8";
const ICE = "#E8F0F4";
const MUTED = "#8FA8C2";
const SUBTLE = "#5E7894";

const conditions = [
  {
    icon: HeartPulse,
    name: "Coronary Artery Disease",
    blurb: "Diagnostic workup, medical management, and interventional cardiology.",
  },
  {
    icon: Activity,
    name: "Arrhythmias",
    blurb: "Comprehensive electrophysiology, ablation, and device implants.",
  },
  {
    icon: TrendingUp,
    name: "Heart Failure",
    blurb: "Advanced HF management with structured outpatient pathways.",
  },
  {
    icon: Microscope,
    name: "Valvular Disease",
    blurb: "TAVR planning, structural heart consultations, and follow-up care.",
  },
  {
    icon: Stethoscope,
    name: "Hypertension",
    blurb: "Resistant hypertension workup with ambulatory monitoring.",
  },
  {
    icon: Activity,
    name: "Peripheral Vascular",
    blurb: "PAD diagnosis, vascular ultrasound, and minimally invasive treatment.",
  },
];

const stats = [
  { value: "9,400+", label: "Procedures performed" },
  { value: "4", label: "Board-certified MDs" },
  { value: "<24h", label: "Urgent consults" },
  { value: "1,200+", label: "Annual referrals" },
];

const credentials = [
  "Joint Commission Accredited",
  "American College of Cardiology",
  "Heart Rhythm Society",
  "SCAI Accredited Lab",
];

export default function MeridianHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        {/* Background grid + glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,184,212,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,184,212,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 40%, black, transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-32 h-[400px] w-[400px] rounded-full opacity-30 sm:h-[560px] sm:w-[560px]"
          style={{
            background: `radial-gradient(circle, ${CYAN}66, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                  style={{
                    borderColor: `${CYAN}40`,
                    backgroundColor: "rgba(0,184,212,0.06)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ backgroundColor: CYAN }}
                  />
                  <span
                    className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: CYAN }}
                  >
                    Cardiology · Chicago
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="mt-6 text-balance text-[clamp(2rem,6.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight"
                style={{ color: ICE }}
              >
                Cardiovascular care{" "}
                <span style={{ color: CYAN }}>at the frontier</span> of
                medicine.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
                className="mt-5 max-w-xl text-balance text-base leading-relaxed sm:mt-7 sm:text-[17px]"
                style={{ color: MUTED }}
              >
                Meridian is a physician-led cardiology and vascular center. We
                see complex cases, second opinions, and the patients other
                practices have given up on.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
                className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: CYAN,
                    color: NAVY,
                    boxShadow:
                      "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 12px 32px -8px rgba(0,184,212,0.55)",
                  }}
                >
                  Request consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link
                  href={`${BASE}/conditions`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: `${CYAN}40`,
                    color: ICE,
                  }}
                >
                  Conditions we treat
                </Link>
              </motion.div>

              {/* Credentials strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono uppercase tracking-[0.12em] sm:mt-12"
                style={{ color: SUBTLE }}
              >
                {credentials.map((c, i) => (
                  <span
                    key={c}
                    className={`flex items-center gap-3 ${i > 0 ? "before:content-['•'] before:opacity-50" : ""}`}
                  >
                    <span>{c}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — heart monitor visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="relative lg:col-span-5"
            >
              <HeartMonitorCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STATS
          ==================================================================== */}
      <section className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 gap-y-6 rounded-2xl border px-6 py-7 sm:grid-cols-4 sm:px-10"
            style={{
              backgroundColor: "rgba(0,184,212,0.04)",
              borderColor: "rgba(0,184,212,0.15)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                  style={{ color: ICE }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]"
                  style={{ color: CYAN }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONDITIONS GRID
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p
                className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: CYAN }}
              >
                — Conditions
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
                style={{ color: ICE }}
              >
                What we treat.
              </h2>
            </div>
            <Link
              href={`${BASE}/conditions`}
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: CYAN }}
            >
              All conditions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {conditions.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                className="group rounded-xl border p-6 transition-all hover:-translate-y-1 sm:p-7"
                style={{
                  backgroundColor: "rgba(232,240,244,0.02)",
                  borderColor: "rgba(0,184,212,0.12)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: "rgba(0,184,212,0.1)",
                    color: CYAN,
                  }}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold" style={{ color: ICE }}>
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {c.blurb}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          APPROACH / TWO-COLUMN
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p
                className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: CYAN }}
              >
                — Our approach
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
                style={{ color: ICE }}
              >
                Built around the patient,{" "}
                <span style={{ color: CYAN }}>not the institution.</span>
              </h2>
              <p
                className="mt-5 text-[15px] leading-relaxed sm:text-base"
                style={{ color: MUTED }}
              >
                Meridian was founded by physicians who left academic centers to
                build something more responsive. We see complex cases
                quickly, communicate clearly with referring providers, and
                coordinate care end-to-end.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 lg:col-span-7">
              {[
                {
                  title: "Same-week consultations",
                  body: "Most patients see a cardiologist within 5 business days. Urgent cases within 24 hours.",
                },
                {
                  title: "Imaging onsite",
                  body: "Echo, vascular ultrasound, stress testing, ambulatory monitoring — read by our physicians, results same-day.",
                },
                {
                  title: "Direct referring-provider line",
                  body: "Your PCP can reach our physicians by direct phone or secure message — no front-desk gauntlet.",
                },
                {
                  title: "Multi-disciplinary review",
                  body: "Complex cases go through weekly heart conferences with cardiology, EP, and cardiac surgery.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                  className="flex gap-4 border-t pt-5 sm:gap-6 sm:pt-6"
                  style={{ borderColor: "rgba(0,184,212,0.15)" }}
                >
                  <div
                    className="font-mono text-xs font-bold sm:text-sm"
                    style={{ color: CYAN }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold leading-tight"
                      style={{ color: ICE }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed sm:text-[15px]"
                      style={{ color: MUTED }}
                    >
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PHYSICIANS PREVIEW
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p
                className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: CYAN }}
              >
                — Physicians
              </p>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                style={{ color: ICE }}
              >
                Four physicians. Decades of subspecialty training.
              </h2>
              <p
                className="mt-5 text-[15px] leading-relaxed sm:text-base"
                style={{ color: MUTED }}
              >
                Each Meridian physician is board-certified in cardiology, with
                fellowship training in interventional, electrophysiology, or
                heart failure.
              </p>
              <Link
                href={`${BASE}/physicians`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: CYAN }}
              >
                Meet our physicians
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7">
              {[
                {
                  name: "Dr. Marcus Hayes",
                  role: "Interventional Cardiology",
                  bg: `linear-gradient(135deg, ${CYAN}40, ${NAVY})`,
                },
                {
                  name: "Dr. Elena Sokolova",
                  role: "Electrophysiology",
                  bg: `linear-gradient(135deg, #4A6FA5, ${NAVY})`,
                },
              ].map((doc) => (
                <article
                  key={doc.name}
                  className="overflow-hidden rounded-xl border"
                  style={{
                    borderColor: "rgba(0,184,212,0.12)",
                  }}
                >
                  <div className="aspect-square" style={{ background: doc.bg }} />
                  <div
                    className="p-4 sm:p-5"
                    style={{ backgroundColor: "rgba(232,240,244,0.03)" }}
                  >
                    <h3
                      className="text-base font-semibold leading-tight sm:text-lg"
                      style={{ color: ICE }}
                    >
                      {doc.name}
                    </h3>
                    <p
                      className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-[11px]"
                      style={{ color: CYAN }}
                    >
                      {doc.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REFERRALS SECTION
          ==================================================================== */}
      <section id="referrals" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-2xl border p-8 sm:p-10 lg:p-14"
            style={{
              backgroundColor: "rgba(0,184,212,0.04)",
              borderColor: "rgba(0,184,212,0.2)",
            }}
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: CYAN }}
                >
                  — For referring providers
                </p>
                <h2
                  className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                  style={{ color: ICE }}
                >
                  Refer in 60 seconds. Get a callback in 24 hours.
                </h2>
                <p
                  className="mt-5 text-sm leading-relaxed sm:text-base"
                  style={{ color: MUTED }}
                >
                  Our patient concierge handles intake, insurance verification,
                  and scheduling. You send the case, we close the loop.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: CYAN,
                      color: NAVY,
                      boxShadow: "0 12px 32px -8px rgba(0,184,212,0.55)",
                    }}
                  >
                    Send a referral
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href={`${BASE}/physicians`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all"
                    style={{
                      borderColor: `${CYAN}40`,
                      color: ICE,
                    }}
                  >
                    Physician directory
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="space-y-2.5">
                  {[
                    { icon: ShieldCheck, label: "HIPAA-compliant intake" },
                    { icon: Award, label: "EHR-integrated reports" },
                    { icon: Sparkle, label: "AI-prioritized urgency tier" },
                    { icon: Activity, label: "Real-time appointment status" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 rounded-lg border px-4 py-3"
                      style={{
                        backgroundColor: "rgba(11,31,58,0.4)",
                        borderColor: "rgba(0,184,212,0.15)",
                      }}
                    >
                      <f.icon
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: CYAN }}
                      />
                      <p className="text-sm font-medium" style={{ color: ICE }}>
                        {f.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL CTA
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: CYAN }}
          >
            — Begin
          </p>
          <h2
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: ICE }}
          >
            Request a consultation.
          </h2>
          <p
            className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed sm:text-base"
            style={{ color: MUTED }}
          >
            New patients are typically seen within 5 business days. Self-pay
            and most major insurance accepted, including Medicare.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: CYAN,
                color: NAVY,
                boxShadow: "0 12px 32px -8px rgba(0,184,212,0.55)",
              }}
            >
              Request consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="tel:3125550241"
              className="inline-flex items-center gap-2 rounded-lg border px-7 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
              style={{
                borderColor: `${CYAN}40`,
                color: ICE,
              }}
            >
              (312) 555-0241
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   Hero visual — EKG / monitor inspired card
   ============================================================ */
function HeartMonitorCard() {
  return (
    <div className="mx-auto max-w-sm lg:max-w-none">
      <div
        className="relative overflow-hidden rounded-2xl border p-6 sm:p-7"
        style={{
          backgroundColor: "rgba(232,240,244,0.03)",
          borderColor: "rgba(0,184,212,0.2)",
          boxShadow:
            "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -16px rgba(0,184,212,0.25)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-4 w-4" style={{ color: CYAN }} />
            <p
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: CYAN }}
            >
              Patient · Live
            </p>
          </div>
          <span
            className="font-mono text-[10px]"
            style={{ color: MUTED }}
          >
            00:42:08
          </span>
        </div>

        {/* EKG trace — animated SVG */}
        <div
          className="mt-5 overflow-hidden rounded-lg border"
          style={{
            backgroundColor: "rgba(11,31,58,0.6)",
            borderColor: "rgba(0,184,212,0.15)",
            height: "120px",
          }}
        >
          <svg
            viewBox="0 0 400 120"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            {/* Background grid */}
            {[20, 40, 60, 80, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="rgba(0,184,212,0.08)"
                strokeWidth="0.5"
              />
            ))}
            {/* EKG trace */}
            <motion.path
              d="M 0 60 L 40 60 L 50 60 L 60 60 L 65 50 L 70 70 L 75 30 L 80 90 L 85 60 L 100 60 L 130 60 L 140 60 L 145 50 L 150 70 L 155 30 L 160 90 L 165 60 L 190 60 L 220 60 L 230 60 L 235 50 L 240 70 L 245 30 L 250 90 L 255 60 L 280 60 L 310 60 L 320 60 L 325 50 L 330 70 L 335 30 L 340 90 L 345 60 L 400 60"
              stroke={CYAN}
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                filter: `drop-shadow(0 0 4px ${CYAN})`,
              }}
            />
          </svg>
        </div>

        {/* Vitals */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "HR", value: "68", unit: "bpm", color: CYAN },
            { label: "BP", value: "118/76", unit: "mmHg", color: "#7DD3C0" },
            { label: "SpO₂", value: "98", unit: "%", color: "#A78BFA" },
          ].map((v) => (
            <div
              key={v.label}
              className="rounded-lg p-3"
              style={{
                backgroundColor: "rgba(11,31,58,0.5)",
                border: "1px solid rgba(0,184,212,0.15)",
              }}
            >
              <p
                className="font-mono text-[9px] uppercase tracking-[0.18em]"
                style={{ color: MUTED }}
              >
                {v.label}
              </p>
              <p
                className="mt-1 font-mono text-lg font-semibold tabular-nums"
                style={{ color: v.color }}
              >
                {v.value}
              </p>
              <p
                className="font-mono text-[9px]"
                style={{ color: SUBTLE }}
              >
                {v.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
