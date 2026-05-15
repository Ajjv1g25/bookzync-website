"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Clock, Users } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/boutique-fitness";
const easeOut = [0.16, 1, 0.3, 1] as const;

const ORANGE = "#F97316";
const CARBON = "#0A0A0A";
const CREAM = "#F5F2EC";
const STEEL = "#2A2A2A";
const MUTED = "rgba(245,242,236,0.6)";

const categories = [
  {
    title: "Foundational",
    classes: [
      {
        name: "BARBELL 101",
        duration: "60 MIN",
        level: "All levels",
        days: "Mon · Wed · Fri · Sat",
        desc: "Squat, bench, deadlift technique. Where every new member starts.",
      },
      {
        name: "KETTLEBELL FLOW",
        duration: "45 MIN",
        level: "All levels",
        days: "Tue · Thu",
        desc: "Hardstyle kettlebell. Strength + conditioning, no leaving exhausted.",
      },
    ],
  },
  {
    title: "Programmed",
    classes: [
      {
        name: "STRENGTH BLOCK A",
        duration: "75 MIN",
        level: "Intermediate+",
        days: "Mon · Wed · Fri",
        desc: "Heavy day. Squat or deadlift main lift, accessory work, posterior chain.",
      },
      {
        name: "STRENGTH BLOCK B",
        duration: "75 MIN",
        level: "Intermediate+",
        days: "Tue · Thu",
        desc: "Press day. Bench or overhead press main lift, accessory pulls.",
      },
      {
        name: "ACCESSORY",
        duration: "45 MIN",
        level: "Intermediate+",
        days: "Saturday",
        desc: "Hypertrophy and unilateral work. Bodybuilding for lifters.",
      },
    ],
  },
  {
    title: "Competitive",
    classes: [
      {
        name: "POWERLIFTING",
        duration: "90 MIN",
        level: "Advanced",
        days: "Sun (open gym)",
        desc: "Comp-prep programming with USAPL-certified head coach. 12-week meets.",
      },
      {
        name: "STRONGMAN PRIMER",
        duration: "75 MIN",
        level: "Intermediate+",
        days: "Saturday PM",
        desc: "Atlas stones, log press, yoke walk. Running through summer.",
      },
    ],
  },
];

export default function ProofClasses() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            style={{ color: MUTED }}
          >
            ← PROOF Strength
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              — Classes
            </p>
            <h1
              className="mt-3 font-black leading-[0.9] tracking-tight"
              style={{
                color: CREAM,
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              }}
            >
              The full<br />
              <span style={{ color: ORANGE, fontStyle: "italic" }}>schedule.</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: MUTED }}
            >
              Every class is coached. Every class is capped at 8. Programming
              follows 12-week blocks — your numbers are tracked, deloads are
              built in, and progressions are personalized.
            </p>
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.title} className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-baseline gap-4 sm:mb-12">
              <h2
                className="text-3xl font-black leading-none tracking-tight sm:text-4xl"
                style={{ color: ORANGE }}
              >
                {cat.title}
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: ORANGE, opacity: 0.2 }} />
            </div>

            <div className="space-y-4 sm:space-y-5">
              {cat.classes.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                  className="border p-6 transition-colors hover:border-[#F97316] sm:p-8"
                  style={{ borderColor: "rgba(249,115,22,0.2)" }}
                >
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-4">
                      <h3
                        className="text-2xl font-black leading-tight tracking-tight sm:text-3xl"
                        style={{ color: CREAM }}
                      >
                        {c.name}
                      </h3>
                      <div
                        className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: ORANGE }}
                      >
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {c.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {c.level}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-sm leading-relaxed sm:text-[15px]" style={{ color: MUTED }}>
                        {c.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-3 lg:text-right">
                      <p
                        className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: MUTED }}
                      >
                        Days
                      </p>
                      <p
                        className="mt-1.5 text-sm font-bold sm:text-base"
                        style={{ color: CREAM }}
                      >
                        {c.days}
                      </p>
                      <button
                        type="button"
                        onClick={() => openChatbot("general")}
                        className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
                        style={{ color: ORANGE }}
                      >
                        Reserve a spot
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="border-2 p-8 text-center sm:p-12 lg:p-16"
            style={{ borderColor: ORANGE }}
          >
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              — First time?
            </p>
            <h2
              className="mt-4 font-black leading-[0.95] tracking-tight"
              style={{
                color: CREAM,
                fontSize: "clamp(2rem, 6vw, 4rem)",
              }}
            >
              Start with{" "}
              <span style={{ color: ORANGE }}>Barbell 101.</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed sm:text-lg"
              style={{ color: MUTED }}
            >
              No experience required. Coached technique on the three main lifts.
              Where every PROOF member started.
            </p>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: ORANGE,
                color: CARBON,
                boxShadow: "0 12px 32px -8px rgba(249,115,22,0.5)",
              }}
            >
              Book your first class
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
