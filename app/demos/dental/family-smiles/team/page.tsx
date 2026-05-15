"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Award, GraduationCap, Heart, Star } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/family-smiles";
const easeOut = [0.16, 1, 0.3, 1] as const;

const SUN = "#FFA94D";
const SKY = "#4DA8DA";
const MINT = "#5BCB9F";
const INK = "#1B2A3D";
const MUTED = "#5B6B82";

const doctors = [
  {
    name: "Dr. Maria Lopez",
    role: "General Dentist · Founder",
    cred: "DDS, UCLA School of Dentistry",
    years: 18,
    bio: "Dr. Lopez founded Sunny Smiles in 2009 with a single mission: make dental care a place families actually look forward to. Born in San Diego and raised in a family of educators, she brings warmth and patience to every appointment. Outside the office, she's a runner, a mom of two, and the loudest Padres fan you'll meet.",
    specialties: ["Cosmetic dentistry", "Crowns & bridges", "Full smile makeovers"],
    accent: SUN,
    image: `linear-gradient(135deg, #FFD08A, ${SUN})`,
  },
  {
    name: "Dr. James Park",
    role: "Pediatric Dentist",
    cred: "DDS, MS Pediatric Dentistry, USC",
    years: 12,
    bio: "Dr. Park is board-certified in pediatric dentistry and has a magical way with anxious kids. He completed his residency at Children's Hospital Los Angeles and joined Sunny Smiles in 2015. He has three kids of his own, so he gets it. His secret weapon: a vast collection of tooth-shaped stickers and bad dad jokes.",
    specialties: ["Pediatric dentistry", "Sedation dentistry", "Special needs care"],
    accent: SKY,
    image: `linear-gradient(135deg, #A8D8F0, ${SKY})`,
  },
];

const hygienists = [
  { name: "Sarah Mitchell", role: "Lead Hygienist", years: 11 },
  { name: "Priya Patel", role: "Dental Hygienist", years: 7 },
  { name: "Marcus Johnson", role: "Dental Hygienist", years: 4 },
];

const support = [
  { name: "Linda Chen", role: "Office Manager", years: 14 },
  { name: "Carlos Rivera", role: "Dental Assistant", years: 6 },
  { name: "Aiyana Torres", role: "Patient Coordinator", years: 3 },
];

export default function SunnyTeam() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${SKY}55, transparent 70%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href={BASE}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: MUTED }}
          >
            ← Back home
          </Link>

          <div className="mt-12 max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: SKY }}
            >
              Our team
            </p>
            <h1
              className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
              style={{ color: INK }}
            >
              The people behind the{" "}
              <span style={{ color: SUN }}>sunny smiles.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed" style={{ color: MUTED }}>
              We&apos;re a small team of dentists, hygienists, and coordinators
              who genuinely like each other — and our patients tend to feel it.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          DOCTORS — full feature
          ==================================================================== */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {doctors.map((doc, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={doc.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: easeOut }}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
                >
                  {/* Portrait */}
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    <div
                      className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
                      style={{
                        background: doc.image,
                        boxShadow: "0 16px 48px -12px rgba(27,42,61,0.16)",
                      }}
                    >
                      {/* Decorative chip */}
                      <div
                        className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow-md"
                        style={{ color: doc.accent }}
                      >
                        {doc.years}+ years
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                    <p
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ color: doc.accent }}
                    >
                      {doc.role}
                    </p>
                    <h2
                      className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl"
                      style={{ color: INK }}
                    >
                      {doc.name}
                    </h2>
                    <div
                      className="mt-4 flex items-center gap-2 text-sm"
                      style={{ color: MUTED }}
                    >
                      <GraduationCap className="h-4 w-4" style={{ color: doc.accent }} />
                      <span>{doc.cred}</span>
                    </div>

                    <p
                      className="mt-7 text-[16px] leading-relaxed"
                      style={{ color: INK }}
                    >
                      {doc.bio}
                    </p>

                    <div className="mt-7">
                      <p
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: MUTED }}
                      >
                        Specialties
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {doc.specialties.map((sp) => (
                          <span
                            key={sp}
                            className="rounded-full px-3 py-1.5 text-sm font-semibold"
                            style={{
                              backgroundColor: `${doc.accent}15`,
                              color: doc.accent,
                            }}
                          >
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openChatbot("general")}
                      className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${doc.accent}, ${doc.accent}DD)`,
                        boxShadow: `0 8px 24px -8px ${doc.accent}88`,
                      }}
                    >
                      Book with {doc.name.split(" ").slice(-1)[0]}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          REST OF TEAM
          ==================================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hygienists */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${MINT}1F`, color: MINT }}
                >
                  <Heart className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: INK }}>
                  Hygienists
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {hygienists.map((h) => (
                  <div
                    key={h.name}
                    className="flex items-center justify-between rounded-2xl px-5 py-4 transition-colors"
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0 4px 12px -4px rgba(27,42,61,0.06)",
                    }}
                  >
                    <div>
                      <p className="font-bold" style={{ color: INK }}>
                        {h.name}
                      </p>
                      <p className="text-sm" style={{ color: MUTED }}>
                        {h.role}
                      </p>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: `${MINT}15`, color: MINT }}
                    >
                      {h.years}y
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${SUN}1F`, color: SUN }}
                >
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: INK }}>
                  Support team
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {support.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between rounded-2xl px-5 py-4 transition-colors"
                    style={{
                      backgroundColor: "white",
                      boxShadow: "0 4px 12px -4px rgba(27,42,61,0.06)",
                    }}
                  >
                    <div>
                      <p className="font-bold" style={{ color: INK }}>
                        {s.name}
                      </p>
                      <p className="text-sm" style={{ color: MUTED }}>
                        {s.role}
                      </p>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: `${SUN}15`, color: "#B86F1F" }}
                    >
                      {s.years}y
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REVIEW STRIP + CTA
          ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div
            className="rounded-[2rem] p-10 text-center lg:p-14"
            style={{
              background: `linear-gradient(135deg, ${SKY}, #2E8FCF)`,
            }}
          >
            <div className="flex justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 text-white" fill="white" />
              ))}
            </div>
            <p className="mt-5 text-2xl font-bold leading-tight text-white lg:text-3xl">
              &ldquo;The whole team here is incredible. They remember my kids&apos;
              names, ask about our trip last summer, and somehow always make
              dentistry feel like visiting friends.&rdquo;
            </p>
            <p className="mt-5 text-sm font-medium text-white/80">
              — The Sandhu Family · Patients since 2020
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold transition-all hover:-translate-y-0.5"
                style={{ color: SKY }}
              >
                Book your first visit
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href={`${BASE}/services`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5"
              >
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
