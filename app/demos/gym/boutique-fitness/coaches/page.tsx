"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Award, Instagram } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/boutique-fitness";
const easeOut = [0.16, 1, 0.3, 1] as const;

const ORANGE = "#F97316";
const CARBON = "#0A0A0A";
const CREAM = "#F5F2EC";
const STEEL = "#2A2A2A";
const MUTED = "rgba(245,242,236,0.6)";

const coaches = [
  {
    num: "01",
    name: "Iris Vega",
    role: "Head Coach",
    cred: "USAPL CERTIFIED · CSCS · BS EXERCISE SCIENCE",
    handle: "@iris.lifts",
    bests: { sq: "385", bn: "215", dl: "440" },
    bio: "Iris came to PROOF from a decade running collegiate strength programs. She's a competitive powerlifter with a 1,040 lb total at 75kg, and she coaches with the kind of patience that comes from drilling the same squat cue 800 times a season.",
    focus: ["Powerlifting", "Squat technique", "Female lifters"],
    bg: `linear-gradient(135deg, ${ORANGE}, ${CARBON})`,
  },
  {
    num: "02",
    name: "Marcus Holloway",
    role: "Founder · Coach",
    cred: "USPA · NSCA-CPT · 14 YEARS COACHING",
    handle: "@marcus.proof",
    bests: { sq: "525", bn: "385", dl: "650" },
    bio: "Marcus opened PROOF in 2019 after coaching at three different commercial gyms and getting frustrated by 90-second class sessions for $40. He competes USPA, runs the 12-week programming, and refuses to let a single lifter use mirrors in the studio.",
    focus: ["Programming", "Bench press", "Deadlift mechanics"],
    bg: `linear-gradient(135deg, ${STEEL}, ${ORANGE}80)`,
  },
  {
    num: "03",
    name: "Tomas Reyes",
    role: "Coach · Kettlebell Specialist",
    cred: "RKC · SFG · 9 YEARS HARDSTYLE",
    handle: "@tomas.kettlebell",
    bests: { sq: "365", bn: "285", dl: "475" },
    bio: "Tomas runs PROOF's kettlebell programming. He's an RKC and SFG-certified hardstyle instructor and has been competing in kettlebell sport since 2017. Don't let the conditioning focus fool you — he hits a 475 deadlift at 81kg.",
    focus: ["Kettlebell sport", "Conditioning", "Mobility"],
    bg: `linear-gradient(135deg, ${ORANGE}80, ${STEEL})`,
  },
];

export default function ProofCoaches() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: MUTED }}
          >
            ← PROOF Strength
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p
              className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              — Coaches
            </p>
            <h1
              className="mt-3 font-black leading-[0.9] tracking-tight"
              style={{
                color: CREAM,
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              }}
            >
              Coaches who<br />
              <span style={{ color: ORANGE, fontStyle: "italic" }}>compete.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {coaches.map((c, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: easeOut }}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
                >
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    <div
                      className="relative aspect-[3/4] border-2"
                      style={{ background: c.bg, borderColor: ORANGE }}
                    >
                      <p
                        className="absolute left-5 top-5 font-mono text-2xl font-black sm:text-3xl"
                        style={{ color: CREAM }}
                      >
                        {c.num}
                      </p>
                      <div className="absolute right-5 bottom-5 left-5 grid grid-cols-3 gap-2 sm:right-6 sm:bottom-6 sm:left-6">
                        {[
                          { label: "SQ", v: c.bests.sq },
                          { label: "BN", v: c.bests.bn },
                          { label: "DL", v: c.bests.dl },
                        ].map((b) => (
                          <div
                            key={b.label}
                            className="border p-2"
                            style={{
                              backgroundColor: "rgba(10,10,10,0.7)",
                              borderColor: "rgba(249,115,22,0.4)",
                              backdropFilter: "blur(8px)",
                            }}
                          >
                            <p
                              className="font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
                              style={{ color: ORANGE }}
                            >
                              {b.label}
                            </p>
                            <p
                              className="font-mono text-sm font-black tabular-nums sm:text-base"
                              style={{ color: CREAM }}
                            >
                              {b.v}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                    <p
                      className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: ORANGE }}
                    >
                      {c.role}
                    </p>
                    <h2
                      className="mt-3 font-black leading-[0.95] tracking-tight"
                      style={{
                        color: CREAM,
                        fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
                      }}
                    >
                      {c.name}
                    </h2>
                    <div
                      className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: MUTED }}
                    >
                      <span>{c.cred}</span>
                      <span>·</span>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors"
                        style={{ color: ORANGE }}
                      >
                        <Instagram className="h-3 w-3" />
                        {c.handle}
                      </a>
                    </div>

                    <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: CREAM }}>
                      {c.bio}
                    </p>

                    <div className="mt-6">
                      <p
                        className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: MUTED }}
                      >
                        Coaching focus
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.focus.map((f) => (
                          <span
                            key={f}
                            className="border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                            style={{
                              borderColor: ORANGE,
                              color: ORANGE,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openChatbot("general")}
                      className="group mt-7 inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: ORANGE,
                        color: CARBON,
                        boxShadow: "0 12px 32px -8px rgba(249,115,22,0.5)",
                      }}
                    >
                      Book with {c.name.split(" ")[0]}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 text-center sm:p-12 lg:p-16" style={{ backgroundColor: ORANGE }}>
            <h2
              className="font-black leading-[0.9] tracking-tight"
              style={{
                color: CARBON,
                fontSize: "clamp(2rem, 7vw, 4.5rem)",
              }}
            >
              Or book with{" "}
              <span style={{ fontStyle: "italic" }}>anyone.</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed"
              style={{ color: CARBON }}
            >
              Our chat books with any coach on the team. Tell us who, when,
              what — we&apos;ll lock it in.
            </p>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: CARBON, color: ORANGE }}
            >
              Book a coach
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
