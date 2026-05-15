"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Activity,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/boutique-fitness";
const easeOut = [0.16, 1, 0.3, 1] as const;

const ORANGE = "#F97316";
const CARBON = "#0A0A0A";
const CREAM = "#F5F2EC";
const STEEL = "#2A2A2A";
const MUTED = "rgba(245,242,236,0.6)";

const classes = [
  { num: "01", name: "BARBELL 101", duration: "60 min", level: "All levels", desc: "Squat, bench, deadlift. Coached technique on every rep." },
  { num: "02", name: "STRENGTH BLOCKS", duration: "75 min", level: "Intermediate+", desc: "Periodized 12-week programs. Track your numbers." },
  { num: "03", name: "POWERLIFTING", duration: "90 min", level: "Advanced", desc: "Comp-prep programming with USAPL-certified coaches." },
  { num: "04", name: "KETTLEBELL FLOW", duration: "45 min", level: "All levels", desc: "Hardstyle kettlebell. Conditioning that doesn't ruin you." },
];

const stats = [
  { value: "4,200", label: "SQ FT" },
  { value: "12", label: "BARBELLS" },
  { value: "8", label: "COACHES" },
  { value: "1,800+", label: "MEMBERS TO DATE" },
];

const principles = [
  {
    num: "I",
    title: "Coached, not crowded",
    body: "Class cap is 8. Every rep is observed. We learned this from years of watching people get hurt in big-box gyms.",
  },
  {
    num: "II",
    title: "Progressive, not random",
    body: "You follow a 12-week block. We track your numbers, deload when you need it, and you get measurably stronger.",
  },
  {
    num: "III",
    title: "Barbells, not bullshit",
    body: "No spin class, no booty bands, no shame circles. Just heavy compound work and the discipline to do it correctly.",
  },
];

export default function ProofHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        {/* Background plate texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 80px,
                rgba(249,115,22,0.06) 80px,
                rgba(249,115,22,0.06) 81px
              )
            `,
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: ORANGE }}
          >
            BROOKLYN · EST. 2019
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="mt-4 font-black leading-[0.9] tracking-tight sm:mt-6"
            style={{
              color: CREAM,
              fontSize: "clamp(2.75rem, 11vw, 8.5rem)",
            }}
          >
            Get<br />
            <span style={{ color: ORANGE }}>measurably</span><br />
            stronger.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <p
              className="max-w-md text-base leading-relaxed lg:col-span-5 lg:text-lg"
              style={{ color: MUTED }}
            >
              PROOF is a coached strength training studio in Industry City.
              Eight people per class. Twelve-week blocks. Every lift tracked.
              No mirrors.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-7 lg:items-end lg:justify-end">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: ORANGE,
                  color: CARBON,
                  boxShadow: "0 12px 32px -8px rgba(249,115,22,0.5)",
                }}
              >
                Start 3-week trial
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <Link
                href={`${BASE}/classes`}
                className="inline-flex items-center justify-center gap-2 border-2 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                style={{ borderColor: CREAM, color: CREAM }}
              >
                See classes
              </Link>
            </div>
          </motion.div>

          {/* Big orange/black block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="mt-12 grid grid-cols-12 gap-3 sm:mt-16"
          >
            <div
              className="col-span-12 aspect-[16/9] p-6 sm:col-span-8 sm:aspect-[16/8] sm:p-10"
              style={{ backgroundColor: ORANGE }}
            >
              <div className="flex h-full flex-col justify-between">
                <p
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: CARBON }}
                >
                  The studio
                </p>
                <div>
                  <p
                    className="font-black leading-[0.9] tracking-tight"
                    style={{
                      color: CARBON,
                      fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    }}
                  >
                    Eight lifters.<br />
                    One coach.<br />
                    Every rep.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-4 sm:grid-cols-1">
              <div
                className="aspect-square p-4 sm:aspect-auto sm:h-1/2 sm:p-6"
                style={{ backgroundColor: STEEL }}
              >
                <div className="flex h-full flex-col justify-between">
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ORANGE }}
                  >
                    Avg PR / cohort
                  </p>
                  <div>
                    <p className="text-3xl font-black leading-none tabular-nums sm:text-5xl" style={{ color: CREAM }}>
                      +38%
                    </p>
                    <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                      DEADLIFT, 12 WK
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="aspect-square border-2 p-4 sm:aspect-auto sm:h-1/2 sm:p-6"
                style={{ borderColor: CREAM, backgroundColor: "transparent" }}
              >
                <div className="flex h-full flex-col justify-between">
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ORANGE }}
                  >
                    Class cap
                  </p>
                  <div>
                    <p className="text-3xl font-black leading-none tabular-nums sm:text-5xl" style={{ color: CREAM }}>
                      8
                    </p>
                    <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                      LIFTERS / CLASS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        className="border-y py-10 sm:py-14"
        style={{ borderColor: "rgba(249,115,22,0.15)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`${i > 0 ? "sm:border-l sm:pl-8" : ""}`}
                style={{ borderColor: "rgba(249,115,22,0.15)" }}
              >
                <p
                  className="text-3xl font-black tracking-tight tabular-nums sm:text-4xl lg:text-5xl"
                  style={{ color: CREAM }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: ORANGE }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                — Method
              </p>
              <h2
                className="mt-4 font-black leading-[0.95] tracking-tight"
                style={{
                  color: CREAM,
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                }}
              >
                Three rules.
              </h2>
            </div>

            <div className="space-y-8 sm:space-y-10 lg:col-span-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                  className="grid grid-cols-12 gap-4 border-t pt-7 sm:gap-6 sm:pt-8"
                  style={{ borderColor: "rgba(249,115,22,0.15)" }}
                >
                  <div className="col-span-2 sm:col-span-1">
                    <p
                      className="font-mono text-2xl font-bold tabular-nums sm:text-3xl"
                      style={{ color: ORANGE }}
                    >
                      {p.num}
                    </p>
                  </div>
                  <div className="col-span-10 sm:col-span-11">
                    <h3
                      className="font-black leading-tight tracking-tight"
                      style={{
                        color: CREAM,
                        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed sm:text-base"
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

      {/* CLASSES LIST */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                — Programs
              </p>
              <h2
                className="mt-3 font-black leading-[0.95] tracking-tight"
                style={{
                  color: CREAM,
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                }}
              >
                Pick a class.
              </h2>
            </div>
            <Link
              href={`${BASE}/classes`}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: CREAM }}
            >
              Full schedule
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 sm:mt-14">
            {classes.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: easeOut }}
                className="group grid grid-cols-12 items-center gap-4 border-t py-6 transition-colors sm:gap-6 sm:py-8"
                style={{ borderColor: "rgba(249,115,22,0.15)" }}
              >
                <div className="col-span-2 sm:col-span-1">
                  <p
                    className="font-mono text-base font-bold tabular-nums sm:text-lg"
                    style={{ color: ORANGE }}
                  >
                    {c.num}
                  </p>
                </div>
                <div className="col-span-10 sm:col-span-4">
                  <h3
                    className="font-black leading-tight tracking-tight"
                    style={{
                      color: CREAM,
                      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                    }}
                  >
                    {c.name}
                  </h3>
                  <p
                    className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ORANGE }}
                  >
                    {c.duration} · {c.level}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-5">
                  <p className="text-sm leading-relaxed sm:text-[15px]" style={{ color: MUTED }}>
                    {c.desc}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-2 sm:text-right">
                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors"
                    style={{ color: ORANGE }}
                  >
                    Book ↗
                  </button>
                </div>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(249,115,22,0.15)" }} />
          </div>
        </div>
      </section>

      {/* COACHES PREVIEW */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: STEEL }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                — Coaches
              </p>
              <h2
                className="mt-3 font-black leading-[0.95] tracking-tight"
                style={{
                  color: CREAM,
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                }}
              >
                People who<br />actually<br />
                <span style={{ color: ORANGE, fontStyle: "italic" }}>compete.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
                USAPL-certified. CSCS-certified. Competing meet athletes.
                The kind of people you want behind your bar.
              </p>
              <Link
                href={`${BASE}/coaches`}
                className="mt-7 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: CREAM }}
              >
                Meet the coaches
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4">
              {[
                { name: "Iris Vega", role: "Head Coach", cred: "USAPL · CSCS" },
                { name: "Marcus Holloway", role: "Founder · Coach", cred: "USPA · NSCA" },
              ].map((c, i) => (
                <article
                  key={c.name}
                  className="border-2"
                  style={{ borderColor: ORANGE }}
                >
                  <div
                    className="aspect-[3/4]"
                    style={{
                      background: i === 0
                        ? `linear-gradient(135deg, ${ORANGE}, ${CARBON})`
                        : `linear-gradient(135deg, ${STEEL}, ${ORANGE}80)`,
                    }}
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-black leading-tight sm:text-xl" style={{ color: CREAM }}>
                      {c.name}
                    </h3>
                    <p
                      className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: ORANGE }}
                    >
                      {c.role}
                    </p>
                    <p
                      className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: MUTED }}
                    >
                      {c.cred}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="p-8 sm:p-12 lg:p-16"
            style={{ backgroundColor: ORANGE }}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em]" style={{ color: CARBON }}>
              — 3-week intro
            </p>
            <h2
              className="mt-4 font-black leading-[0.9] tracking-tight"
              style={{
                color: CARBON,
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
              }}
            >
              $99 for<br />three weeks.<br />
              <span style={{ fontStyle: "italic" }}>No catch.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: CARBON }}>
              Unlimited classes. A 1-on-1 onboarding. A barbell skills assessment.
              You decide if it&apos;s for you. We think it will be.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: CARBON,
                  color: ORANGE,
                  boxShadow: "0 12px 32px -8px rgba(0,0,0,0.5)",
                }}
              >
                Start trial ↗
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <a
                href="tel:7185550214"
                className="inline-flex items-center justify-center gap-2 border-2 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                style={{ borderColor: CARBON, color: CARBON }}
              >
                (718) 555-0214
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
