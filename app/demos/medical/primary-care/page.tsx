"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarCheck,
  Video,
  Stethoscope,
  Baby,
  HeartPulse,
  Pill,
  ShieldCheck,
  Activity,
  Sparkle,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/primary-care";
const easeOut = [0.16, 1, 0.3, 1] as const;

const SAGE = "#6E8B6F";
const SAGE_DARK = "#516B53";
const FOREST = "#2D3A2E";
const CREAM = "#FFFFFF";
const INK = "#1A2421";
const MUTED = "#5C6A65";
const WARM = "#C8956D"; // soft terra-cotta accent

const services = [
  {
    icon: Stethoscope,
    name: "Adult Primary Care",
    blurb: "Annual physicals, chronic care, preventive medicine.",
  },
  {
    icon: Baby,
    name: "Pediatric Care",
    blurb: "Well-child visits, immunizations, school physicals.",
  },
  {
    icon: HeartPulse,
    name: "Women's Health",
    blurb: "Pap smears, contraception, menopause care.",
  },
  {
    icon: Activity,
    name: "Chronic Disease",
    blurb: "Diabetes, hypertension, asthma management.",
  },
  {
    icon: Video,
    name: "Telehealth",
    blurb: "Virtual visits 7 days a week from anywhere.",
  },
  {
    icon: Pill,
    name: "Lab & Imaging",
    blurb: "On-site labs, X-ray, and connected referrals.",
  },
];

const stats = [
  { value: "12,000+", label: "Patients" },
  { value: "Same-day", label: "Sick visits" },
  { value: "7 days", label: "Telehealth" },
  { value: "4.9", label: "Avg rating" },
];

const testimonials = [
  {
    quote:
      "Dr. Desai actually has time for me. We've worked together for four years and she remembers everything — my labs, my kids, my last vacation. It's a different kind of medicine.",
    name: "Margaret K.",
    detail: "Patient since 2021",
  },
  {
    quote:
      "Got sick on a Sunday morning, did a telehealth visit at 9 AM, prescription was at my pharmacy by 11. This is what healthcare should be.",
    name: "James R.",
    detail: "Patient since 2023",
  },
];

export default function CedarwoodHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO — mobile first
          ==================================================================== */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        {/* Soft sage glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full opacity-30 sm:h-[560px] sm:w-[560px]"
          style={{
            background: `radial-gradient(circle, ${SAGE}66, transparent 70%)`,
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
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
                  style={{
                    backgroundColor: `${SAGE}1F`,
                    color: SAGE_DARK,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: SAGE }}
                  />
                  Welcoming new patients
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="mt-5 text-balance text-[clamp(2rem,6.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight"
                style={{ color: INK }}
              >
                Modern primary care, with a{" "}
                <span style={{ color: SAGE }}>doctor who knows your name.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
                className="mt-5 max-w-xl text-balance text-base leading-relaxed sm:mt-7 sm:text-[17px]"
                style={{ color: MUTED }}
              >
                Cedarwood is a small primary care practice in Northwest
                Portland. Same-day visits when you&apos;re sick. Real
                conversations when you&apos;re not. And a provider who actually
                has time for you.
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
                  className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: SAGE,
                    boxShadow:
                      "0 1px 0 0 rgba(255,255,255,0.2) inset, 0 12px 32px -8px rgba(110,139,111,0.55)",
                  }}
                >
                  Book a visit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
                  style={{ borderColor: INK, color: INK }}
                >
                  Our services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium sm:mt-10"
                style={{ color: MUTED }}
              >
                <div className="flex items-center gap-1.5">
                  <CalendarCheck className="h-4 w-4" style={{ color: SAGE }} />
                  <span>Most insurance accepted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4" style={{ color: WARM }} fill={WARM} />
                  <span>4.9 / 5 · 840 reviews</span>
                </div>
              </motion.div>
            </div>

            {/* Right — calm credibility card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="relative lg:col-span-5"
            >
              <HeroCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STATS STRIP
          ==================================================================== */}
      <section className="relative py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 gap-y-6 rounded-2xl border px-6 py-7 sm:grid-cols-4 sm:px-10 sm:py-8"
            style={{
              backgroundColor: CREAM,
              borderColor: "rgba(45,58,46,0.08)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                  style={{ color: INK }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 text-[11px] font-medium uppercase tracking-wider sm:text-xs"
                  style={{ color: MUTED }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          PHILOSOPHY — "How we're different"
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: SAGE_DARK }}
              >
                Our approach
              </p>
              <h2
                className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]"
                style={{ color: INK }}
              >
                The opposite of{" "}
                <span style={{ color: SAGE }}>15-minute medicine.</span>
              </h2>
              <p
                className="mt-5 text-[15px] leading-relaxed sm:text-base"
                style={{ color: MUTED }}
              >
                We see fewer patients per day so we can actually listen.
                You&apos;ll see the same provider every visit. Your test
                results come from a person, not a portal notification. And
                when something feels off, we have time to dig in.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 lg:col-span-7">
              {[
                {
                  title: "30-minute visits, every time",
                  body: "Standard visit length here is double the industry average. Less rushed for us, more useful for you.",
                },
                {
                  title: "Same provider every time",
                  body: "You don't get bounced between rotating doctors. You build a relationship with one provider who knows your history.",
                },
                {
                  title: "Direct access by message",
                  body: "Send your provider a question through our portal or chat. Most are answered the same day, by a real human.",
                },
                {
                  title: "Modern tools, old-fashioned care",
                  body: "Telehealth, on-site labs, and AI-assisted booking — paired with the kind of attention medicine used to have.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                  className="flex gap-4 border-t pt-5 sm:gap-5 sm:pt-6"
                  style={{ borderColor: "rgba(45,58,46,0.1)" }}
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${SAGE}1F`,
                      color: SAGE_DARK,
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight" style={{ color: INK }}>
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
          SERVICES GRID
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: SAGE_DARK }}
            >
              Services
            </p>
            <h2
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              style={{ color: INK }}
            >
              Comprehensive care, in one place.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                className="group rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 sm:p-7"
                style={{
                  borderColor: "rgba(45,58,46,0.08)",
                  boxShadow: "0 1px 2px 0 rgba(45,58,46,0.04)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${SAGE}1F`,
                    color: SAGE_DARK,
                  }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold" style={{ color: INK }}>
                  {s.name}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {s.blurb}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: SAGE_DARK }}
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROVIDERS PREVIEW
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: SAGE_DARK }}
              >
                Our providers
              </p>
              <h2
                className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                style={{ color: INK }}
              >
                Doctors you&apos;ll{" "}
                <span style={{ color: SAGE }}>actually get to know.</span>
              </h2>
              <p
                className="mt-5 text-[15px] leading-relaxed sm:text-base"
                style={{ color: MUTED }}
              >
                Each of our providers is board-certified, trained at top
                programs, and committed to long-term patient relationships.
              </p>
              <Link
                href={`${BASE}/providers`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: SAGE_DARK }}
              >
                Meet our providers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-7">
              {[
                {
                  name: "Dr. Anita Desai",
                  role: "Family Medicine · Founder",
                  bg: `linear-gradient(135deg, #B7CCB7, ${SAGE})`,
                },
                {
                  name: "Dr. Ben Anderson",
                  role: "Internal Medicine",
                  bg: `linear-gradient(135deg, #D7C5A5, ${WARM})`,
                },
              ].map((doc) => (
                <article
                  key={doc.name}
                  className="overflow-hidden rounded-2xl border"
                  style={{
                    backgroundColor: CREAM,
                    borderColor: "rgba(45,58,46,0.08)",
                  }}
                >
                  <div
                    className="aspect-square"
                    style={{ background: doc.bg }}
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-semibold leading-tight sm:text-lg" style={{ color: INK }}>
                      {doc.name}
                    </h3>
                    <p
                      className="mt-1 text-xs font-medium sm:text-sm"
                      style={{ color: MUTED }}
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
          PATIENT PORTAL SECTION
          ==================================================================== */}
      <section id="portal" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-2xl p-8 sm:p-10 lg:p-14"
            style={{
              background: `linear-gradient(135deg, ${FOREST}, ${SAGE_DARK})`,
            }}
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Patient portal
                </p>
                <h2 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Your records, your prescriptions, your provider — all in one place.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Message your provider, view labs, request refills, and see
                  upcoming appointments — from your phone or laptop, anytime.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                    style={{ color: FOREST }}
                  >
                    Become a patient
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    href={`${BASE}/services`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/70"
                  >
                    What we treat
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Video, label: "Telehealth" },
                    { icon: ShieldCheck, label: "Secure messaging" },
                    { icon: Pill, label: "Refill requests" },
                    { icon: CalendarCheck, label: "Online booking" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="rounded-xl bg-white/10 p-4 backdrop-blur-sm"
                    >
                      <f.icon className="h-5 w-5 text-white" />
                      <p className="mt-3 text-sm font-semibold text-white">
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
          TESTIMONIALS
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-xs font-bold uppercase tracking-wider"
            style={{ color: SAGE_DARK }}
          >
            From our patients
          </p>
          <h2
            className="mt-3 text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            style={{ color: INK }}
          >
            Care that earns long relationships.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border bg-white p-6 sm:p-8"
                style={{ borderColor: "rgba(45,58,46,0.08)" }}
              >
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={WARM}
                      style={{ color: WARM }}
                    />
                  ))}
                </div>
                <p
                  className="mt-4 text-[15px] leading-relaxed sm:text-base"
                  style={{ color: INK }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="mt-5 border-t pt-4"
                  style={{ borderColor: "rgba(45,58,46,0.08)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: INK }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: MUTED }}>
                    {t.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL CTA
          ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: INK }}
          >
            Becoming a patient takes{" "}
            <span style={{ color: SAGE }}>10 minutes.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed sm:text-base"
            style={{ color: MUTED }}
          >
            Most new patients are seen for their welcome visit within two
            weeks. Same-day sick visits are usually available the day you call.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: SAGE,
                boxShadow: "0 12px 32px -8px rgba(110,139,111,0.55)",
              }}
            >
              Book your first visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="tel:5035550149"
              className="inline-flex items-center gap-2 rounded-lg border-2 px-7 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
              style={{ borderColor: INK, color: INK }}
            >
              Or call (503) 555-0149
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   Hero card — compact, calm, mobile-friendly
   ============================================================ */
function HeroCard() {
  return (
    <div className="mx-auto max-w-sm lg:max-w-none">
      <div
        className="relative overflow-hidden rounded-2xl border p-6 sm:p-7"
        style={{
          backgroundColor: CREAM,
          borderColor: "rgba(45,58,46,0.08)",
          boxShadow:
            "0 1px 2px 0 rgba(45,58,46,0.04), 0 24px 48px -16px rgba(45,58,46,0.12)",
        }}
      >
        {/* Today header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkle
              className="h-4 w-4"
              fill={SAGE}
              style={{ color: SAGE }}
            />
            <p className="text-xs font-semibold" style={{ color: INK }}>
              Today
            </p>
          </div>
          <div
            className="flex items-center gap-1.5 text-[10px] font-medium"
            style={{ color: SAGE_DARK }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: SAGE }}
            />
            Now accepting
          </div>
        </div>

        {/* Calendar rows */}
        <div className="mt-5 space-y-2">
          {[
            { time: "8:30 AM", label: "Sick visit · 30 min", taken: true },
            { time: "10:00 AM", label: "Available", taken: false },
            { time: "11:30 AM", label: "Annual physical", taken: true },
            { time: "1:00 PM", label: "Available", taken: false },
            { time: "2:30 PM", label: "Telehealth", taken: true },
            { time: "4:00 PM", label: "Available", taken: false },
          ].map((slot, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg px-3 py-2.5"
              style={{
                backgroundColor: slot.taken
                  ? "rgba(45,58,46,0.04)"
                  : `${SAGE}15`,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-mono font-semibold tabular-nums"
                  style={{ color: slot.taken ? MUTED : SAGE_DARK }}
                >
                  {slot.time}
                </span>
                <span
                  className="text-xs"
                  style={{ color: slot.taken ? MUTED : SAGE_DARK }}
                >
                  {slot.label}
                </span>
              </div>
              {!slot.taken && (
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ backgroundColor: SAGE }}
                >
                  <Clock className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
