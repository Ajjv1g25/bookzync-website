"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock, Users, Flame } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/full-gym";
const easeOut = [0.16, 1, 0.3, 1] as const;

const ORANGE = "#F97316";
const ORANGE_DARK = "#EA580C";
const SLATE = "#1E293B";
const SLATE_LIGHT = "#475569";
const CREAM = "#F8F7F4";
const MUTED = "#64748B";

const categories = [
  {
    title: "Cardio & Conditioning",
    classes: [
      { name: "Spin", duration: "45 min", intensity: "High", desc: "Studio cycle. Power-meter bikes. Heart-rate display." },
      { name: "HIIT 45", duration: "45 min", intensity: "High", desc: "Interval training: bodyweight, kettlebells, sled work." },
      { name: "Cycle 30", duration: "30 min", intensity: "Med-High", desc: "Express spin. Lunch-break friendly." },
      { name: "Cardio Kickbox", duration: "45 min", intensity: "High", desc: "Heavy bag and partner work. Choreographed combinations." },
    ],
  },
  {
    title: "Strength & Sculpt",
    classes: [
      { name: "Total Body", duration: "55 min", intensity: "Medium", desc: "Dumbbells, kettlebells, bodyweight. Strength + conditioning blend." },
      { name: "Barre Sculpt", duration: "55 min", intensity: "Medium", desc: "Ballet-inspired isometric work. Small weights, big burn." },
      { name: "Pilates Reformer", duration: "55 min", intensity: "Med-Low", desc: "Classical reformer Pilates. Limited to 8 per class." },
      { name: "Hardstyle KB", duration: "45 min", intensity: "Med-High", desc: "Hardstyle kettlebell. Coached technique, then flow." },
    ],
  },
  {
    title: "Mind & Movement",
    classes: [
      { name: "Vinyasa Yoga", duration: "60 min", intensity: "Medium", desc: "Flowing sequences. Built for breath and movement." },
      { name: "Power Vinyasa", duration: "75 min", intensity: "Med-High", desc: "Heated yoga. 95°F. Strong and sweaty." },
      { name: "Restorative Yoga", duration: "60 min", intensity: "Low", desc: "Bolsters and blocks. Held poses. Sunday evenings." },
      { name: "Mobility & Stretch", duration: "30 min", intensity: "Low", desc: "Active recovery for athletes. Foam roller heavy." },
    ],
  },
  {
    title: "Aquatic",
    classes: [
      { name: "Aqua Cardio", duration: "45 min", intensity: "Med", desc: "Shallow-water cardio. Low-impact, high-effort." },
      { name: "Lap Swim Coached", duration: "60 min", intensity: "Med-High", desc: "Stroke technique + intervals. Tuesdays + Thursdays." },
    ],
  },
];

export default function NorthpointClasses() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="text-xs font-semibold transition-colors"
            style={{ color: MUTED }}
          >
            ← Northpoint Athletic Club
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
              Group fitness
            </p>
            <h1
              className="mt-3 font-bold leading-[1.05] tracking-tight"
              style={{
                color: SLATE,
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
              }}
            >
              60+ classes a week.{" "}
              <span style={{ color: ORANGE }}>All levels.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
              Every class is included with All-Access membership. Reserve up to 7
              days in advance. Drop-ins welcome on a space-available basis.
            </p>
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.title} className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-4 sm:mb-10">
              <h2
                className="text-xl font-bold tracking-tight sm:text-2xl"
                style={{ color: SLATE }}
              >
                {cat.title}
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: ORANGE, opacity: 0.2 }} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {cat.classes.map((c, i) => (
                <motion.article
                  key={c.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                  className="group flex flex-col rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 sm:p-7"
                  style={{
                    borderColor: "rgba(30,41,59,0.08)",
                    boxShadow: "0 1px 2px 0 rgba(30,41,59,0.04)",
                  }}
                >
                  <Flame className="h-4 w-4" style={{ color: ORANGE }} />
                  <h3 className="mt-4 text-lg font-bold leading-tight" style={{ color: SLATE }}>
                    {c.name}
                  </h3>
                  <div
                    className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: ORANGE_DARK }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {c.intensity}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {c.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: ORANGE_DARK }}
                  >
                    Reserve a spot
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border bg-white p-8 sm:p-12 lg:p-16"
            style={{ borderColor: "rgba(30,41,59,0.08)" }}
          >
            <h2
              className="font-bold leading-tight tracking-tight"
              style={{
                color: SLATE,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Not sure where to{" "}
              <span style={{ color: ORANGE }}>start?</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed sm:text-lg"
              style={{ color: MUTED }}
            >
              Send our chat your fitness goals. We&apos;ll match you to the
              right two or three classes — and confirm available times.
            </p>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group mt-7 inline-flex items-center gap-2 rounded-lg px-7 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                boxShadow: "0 12px 32px -8px rgba(249,115,22,0.55)",
              }}
            >
              Get class recommendations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
