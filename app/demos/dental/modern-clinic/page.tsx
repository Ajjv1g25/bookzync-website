"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Quote, Sparkle, Star } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/modern-clinic";

const easeOut = [0.16, 1, 0.3, 1] as const;

const featuredServices = [
  {
    name: "Porcelain Veneers",
    blurb:
      "Bespoke laminates, hand-crafted by master ceramists. Designed around the architecture of your face.",
    duration: "2 visits",
    image: "linear-gradient(135deg, #2A241B, #4D3F28 50%, #1A1612)",
  },
  {
    name: "Professional Whitening",
    blurb:
      "In-office treatment that lifts your shade up to eight levels. Done over a single afternoon.",
    duration: "90 minutes",
    image: "linear-gradient(135deg, #F4ECD8, #E8DDB8 50%, #C9B884)",
  },
  {
    name: "Invisalign Clear Aligners",
    blurb:
      "Discreet, removable, and engineered around your lifestyle. Treatment paths planned in 3D.",
    duration: "6 — 18 months",
    image: "linear-gradient(135deg, #3A3328, #5C4E37 50%, #2B2620)",
  },
  {
    name: "Smile Makeover",
    blurb:
      "A complete reimagining. Veneers, contouring, alignment, whitening — sequenced for a single transformation.",
    duration: "Custom plan",
    image: "linear-gradient(135deg, #2D2419, #4F3F26 50%, #1F1A12)",
  },
];

const principles = [
  {
    n: "01",
    title: "Master clinicians, only",
    body: "Every patient is treated by a board-certified cosmetic dentist. No associates. No hand-offs.",
  },
  {
    n: "02",
    title: "Bespoke, never templated",
    body: "Every smile is digitally previewed, hand-sculpted in wax, and refined until it's yours.",
  },
  {
    n: "03",
    title: "Concierge throughout",
    body: "Late hours, valet parking, private suites. The kind of attention you expect from a five-star hotel.",
  },
];

export default function AurumHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO — large editorial type, single image-like gradient backdrop
          ==================================================================== */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
        {/* Atmospheric backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 30%, rgba(212,175,55,0.12), transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 70%, rgba(212,175,55,0.06), transparent 60%)
            `,
          }}
        />
        {/* Top decoration line */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-32 left-1/2 hidden h-px -translate-x-1/2 lg:block"
          style={{
            width: "40%",
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center font-mono text-[11px] uppercase tracking-[0.32em]"
            style={{ color: "#D4AF37" }}
          >
            Cosmetic Dentistry · New York
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
            className="mt-8 text-center font-serif text-[clamp(2.5rem,7.5vw,6rem)] leading-[1.02] tracking-tight"
            style={{ color: "#E8E2D5" }}
          >
            Dentistry,
            <br />
            <em
              className="italic"
              style={{
                color: "#D4AF37",
                fontStyle: "italic",
              }}
            >
              refined.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="mx-auto mt-10 max-w-xl text-balance text-center text-[17px] leading-relaxed"
            style={{ color: "#B5AC9B" }}
          >
            We are a small atelier of clinicians and ceramists, designing smiles
            with the patience of couturiers and the precision of watchmakers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: easeOut }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#D4AF37",
                color: "#0A0908",
                boxShadow:
                  "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 12px 32px -8px rgba(212,175,55,0.5)",
              }}
            >
              Book Consultation
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <Link
              href={`${BASE}/services`}
              className="group inline-flex items-center gap-2 px-4 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] transition-colors"
              style={{ color: "#E8E2D5" }}
            >
              View Treatments
              <span
                className="block h-px w-6 transition-all group-hover:w-10"
                style={{ backgroundColor: "#D4AF37" }}
              />
            </Link>
          </motion.div>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-24 grid grid-cols-2 gap-y-10 border-t pt-12 lg:grid-cols-4 lg:gap-x-8"
            style={{ borderColor: "rgba(212,175,55,0.12)" }}
          >
            {[
              ["1,400+", "Smiles designed"],
              ["2,200+", "Veneers placed"],
              ["8.2", "Avg. shade lift"],
              ["100%", "5-star rated"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <div
                  className="font-serif text-3xl tracking-tight lg:text-4xl"
                  style={{ color: "#E8E2D5" }}
                >
                  {value}
                </div>
                <div
                  className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: "#9C8B6B" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          PHILOSOPHY — three principles
          ==================================================================== */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.32em]"
                style={{ color: "#D4AF37" }}
              >
                — Our practice
              </p>
              <h2
                className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight lg:text-5xl"
                style={{ color: "#E8E2D5" }}
              >
                A philosophy,
                <br />
                <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
                  not a checklist.
                </em>
              </h2>
            </div>

            <div className="space-y-8 lg:col-span-8">
              {principles.map((p) => (
                <div
                  key={p.n}
                  className="grid grid-cols-12 items-start gap-6 border-t pt-8"
                  style={{ borderColor: "rgba(212,175,55,0.1)" }}
                >
                  <div className="col-span-12 sm:col-span-2">
                    <span
                      className="font-mono text-xs"
                      style={{ color: "#D4AF37" }}
                    >
                      {p.n}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-10">
                    <h3
                      className="font-serif text-2xl leading-tight"
                      style={{ color: "#E8E2D5" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 text-[15px] leading-relaxed"
                      style={{ color: "#B5AC9B" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          TREATMENTS — 4 featured cards
          ==================================================================== */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.32em]"
                style={{ color: "#D4AF37" }}
              >
                — Treatments
              </p>
              <h2
                className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight lg:text-5xl"
                style={{ color: "#E8E2D5" }}
              >
                Where every detail
                <br />
                <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
                  is intentional.
                </em>
              </h2>
            </div>
            <Link
              href={`${BASE}/services`}
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors"
              style={{ color: "#D4AF37" }}
            >
              All treatments
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {featuredServices.map((svc, i) => (
              <motion.article
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
                className="group relative overflow-hidden rounded-sm"
              >
                {/* "Image" — gradient placeholder */}
                <div
                  className="relative aspect-[5/4] overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ background: svc.image }}
                >
                  {/* Decorative gold sparkle */}
                  <div
                    className="absolute right-6 top-6 opacity-50 transition-opacity group-hover:opacity-100"
                    style={{ color: "#D4AF37" }}
                  >
                    <Sparkle className="h-5 w-5" fill="currentColor" />
                  </div>
                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3
                      className="font-serif text-2xl leading-tight"
                      style={{ color: "#E8E2D5" }}
                    >
                      {svc.name}
                    </h3>
                    <p
                      className="mt-3 max-w-md text-[14px] leading-relaxed"
                      style={{ color: "#B5AC9B" }}
                    >
                      {svc.blurb}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: "#9C8B6B" }}
                    >
                      Treatment
                    </p>
                    <p
                      className="mt-1 font-serif text-base"
                      style={{ color: "#D4AF37" }}
                    >
                      {svc.duration}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          TESTIMONIAL — large pull quote
          ==================================================================== */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-12">
          <Quote className="mx-auto h-8 w-8" style={{ color: "#D4AF37" }} />

          <blockquote
            className="mt-10 font-serif text-3xl leading-[1.25] tracking-tight lg:text-4xl"
            style={{ color: "#E8E2D5" }}
          >
            &ldquo;Dr. Chen treated my smile the way an artist treats a canvas.
            Three months later, strangers still stop me to ask where my smile
            comes from.&rdquo;
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5"
                  fill="#D4AF37"
                  style={{ color: "#D4AF37" }}
                />
              ))}
            </div>
          </div>

          <p
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em]"
            style={{ color: "#9C8B6B" }}
          >
            — Eliana M. · Smile makeover · 2025
          </p>
        </div>
      </section>

      {/* ====================================================================
          DOCTOR — full-width feature
          ==================================================================== */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Portrait placeholder */}
            <div className="lg:col-span-5">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #1E1A12, #3A2F1F 40%, #2A2418 70%, #1A1612)",
                }}
              >
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: "#D4AF37" }}
                  >
                    Founder & Lead Clinician
                  </p>
                  <p
                    className="mt-2 font-serif text-2xl leading-tight"
                    style={{ color: "#E8E2D5" }}
                  >
                    Dr. Sarah Chen
                    <br />
                    <span className="text-base font-normal" style={{ color: "#B5AC9B" }}>
                      DDS, FAACD
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.32em]"
                style={{ color: "#D4AF37" }}
              >
                — Meet Dr. Chen
              </p>
              <h2
                className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight lg:text-5xl"
                style={{ color: "#E8E2D5" }}
              >
                Twenty years of
                <br />
                <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
                  obsessive practice.
                </em>
              </h2>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed" style={{ color: "#B5AC9B" }}>
                <p>
                  Trained at Columbia and the Las Vegas Institute, Dr. Sarah
                  Chen is one of fewer than 400 dentists in North America
                  accredited by the American Academy of Cosmetic Dentistry.
                </p>
                <p>
                  Her work has been featured in The Atlantic, Robb Report, and
                  she lectures internationally on the architecture of facial
                  aesthetics.
                </p>
                <p>
                  But what brings patients back — and brings their friends — is
                  the unhurried way she works. Most consultations run 90
                  minutes. Most patients leave feeling they were truly heard.
                </p>
              </div>
              <Link
                href={`${BASE}/about`}
                className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors"
                style={{ color: "#D4AF37" }}
              >
                More about the studio
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONSULTATION CTA
          ==================================================================== */}
      <section
        id="consultation"
        className="relative scroll-mt-24 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-12">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#D4AF37" }}
          >
            — Begin
          </p>
          <h2
            className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight lg:text-6xl"
            style={{ color: "#E8E2D5" }}
          >
            Your smile,
            <br />
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
              by appointment.
            </em>
          </h2>
          <p
            className="mx-auto mt-8 max-w-lg text-[16px] leading-relaxed"
            style={{ color: "#B5AC9B" }}
          >
            Consultations are 90 minutes and include a full smile assessment, a
            digital preview of your treatment, and a tailored plan with
            transparent investment.
          </p>
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
            Request your consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>
    </>
  );
}
