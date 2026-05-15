"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/modern-clinic";
const easeOut = [0.16, 1, 0.3, 1] as const;

const timeline = [
  { year: "2002", event: "Dr. Sarah Chen begins residency at NYU Langone." },
  { year: "2008", event: "Chen earns LVI fellowship in advanced cosmetic dentistry." },
  { year: "2014", event: "AACD accreditation — granted to fewer than 400 in N. America." },
  { year: "2018", event: "Aurum Dental Studio opens its doors on Madison Avenue." },
  { year: "2023", event: "Featured in The Atlantic for full-arch reconstruction work." },
  { year: "2025", event: "Studio expands to a second suite for in-house ceramics." },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder · Lead Clinician",
    cred: "DDS, FAACD",
    image: "linear-gradient(135deg, #2D2418, #4A3D26 50%, #1F1A12)",
  },
  {
    name: "Marco Bellini",
    role: "Master Ceramist",
    cred: "Bellini Dental Lab, Milan",
    image: "linear-gradient(135deg, #1F1B14, #3A3023 50%, #1A1611)",
  },
  {
    name: "Dr. James Park",
    role: "Associate · Prosthodontist",
    cred: "DDS, MS Pros",
    image: "linear-gradient(135deg, #2A241B, #443825 50%, #1F1A14)",
  },
];

export default function AurumAbout() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-12">
          <Link
            href={BASE}
            className="font-mono text-[10px] uppercase tracking-[0.22em] transition-colors hover:text-[#E8E2D5]"
            style={{ color: "#9C8B6B" }}
          >
            ← Aurum Dental Studio
          </Link>

          <p
            className="mt-12 font-mono text-[11px] uppercase tracking-[0.32em]"
            style={{ color: "#D4AF37" }}
          >
            — The Studio
          </p>
          <h1
            className="mt-6 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight"
            style={{ color: "#E8E2D5" }}
          >
            Small by{" "}
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
              design.
            </em>
          </h1>
          <p
            className="mt-8 max-w-2xl text-[16px] leading-relaxed"
            style={{ color: "#B5AC9B" }}
          >
            Aurum was founded in 2018 with a single, stubborn premise: that the
            best cosmetic dentistry requires the unhurried attention of one
            clinician working alongside one master ceramist. We&apos;ve grown,
            but only on those terms.
          </p>
        </div>
      </section>

      {/* ====================================================================
          STORY
          ==================================================================== */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-12">
          <div className="space-y-8 text-[17px] leading-relaxed" style={{ color: "#B5AC9B" }}>
            <p>
              For a decade before founding Aurum, Dr. Chen worked inside larger
              practices in Manhattan and Beverly Hills. She watched, again and
              again, as the most demanding patients — the ones whose smiles
              required the longest hours and the most nuanced judgment — were
              the patients least likely to receive them.
            </p>
            <p>
              The economics of conventional dentistry favor speed. Aurum was
              founded to invert that. We see fewer patients. We see them for
              longer. We share a building with our ceramist so that the people
              shaping your teeth can sit with you in the same room.
            </p>
            <p>
              The result is a practice that looks more like an atelier than a
              clinic. We work in close consultation. We iterate. We say no when
              we should. And occasionally, when the case demands it, we travel
              to other studios to learn what we don&apos;t yet know.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          TIMELINE
          ==================================================================== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-12">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#D4AF37" }}
          >
            — Milestones
          </p>
          <h2
            className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight lg:text-5xl"
            style={{ color: "#E8E2D5" }}
          >
            Two decades of
            <br />
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
              practiced patience.
            </em>
          </h2>

          <div className="mt-16 space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeOut }}
                className="grid grid-cols-12 items-baseline gap-6 border-t pt-6"
                style={{ borderColor: "rgba(212,175,55,0.12)" }}
              >
                <div
                  className="col-span-3 font-serif text-2xl tracking-tight md:col-span-2"
                  style={{ color: "#D4AF37" }}
                >
                  {t.year}
                </div>
                <div
                  className="col-span-9 text-[16px] leading-relaxed md:col-span-10"
                  style={{ color: "#B5AC9B" }}
                >
                  {t.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          TEAM
          ==================================================================== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-12">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#D4AF37" }}
          >
            — The atelier
          </p>
          <h2
            className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight lg:text-5xl"
            style={{ color: "#E8E2D5" }}
          >
            Three people. <br />
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
              One craft.
            </em>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              >
                <div
                  className="aspect-[4/5] overflow-hidden rounded-sm"
                  style={{ background: m.image }}
                />
                <h3
                  className="mt-5 font-serif text-2xl leading-tight"
                  style={{ color: "#E8E2D5" }}
                >
                  {m.name}
                </h3>
                <p
                  className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: "#D4AF37" }}
                >
                  {m.role}
                </p>
                <p
                  className="mt-1 text-sm italic"
                  style={{ color: "#9C8B6B" }}
                >
                  {m.cred}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA
          ==================================================================== */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-12">
          <h2
            className="font-serif text-5xl leading-[1.05] tracking-tight lg:text-6xl"
            style={{ color: "#E8E2D5" }}
          >
            We&apos;d love
            <br />
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
              to meet you.
            </em>
          </h2>
          <button
            type="button"
            onClick={() => openChatbot("general")}
            className="group mt-12 inline-flex items-center gap-2 rounded-full px-10 py-4 text-[12px] font-medium uppercase tracking-[0.22em] transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: "#D4AF37",
              color: "#0A0908",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 12px 32px -8px rgba(212,175,55,0.5)",
            }}
          >
            Begin a consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>
    </>
  );
}
