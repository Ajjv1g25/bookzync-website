"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Heart,
  Smile,
  Shield,
  Sparkles,
  Star,
  Clock,
  Users,
  CheckCircle2,
  Baby,
  Activity,
  CalendarHeart,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/family-smiles";
const easeOut = [0.16, 1, 0.3, 1] as const;

const SUN = "#FFA94D";
const SKY = "#4DA8DA";
const MINT = "#5BCB9F";
const INK = "#1B2A3D";
const MUTED = "#5B6B82";

const services = [
  {
    icon: Smile,
    name: "General Dentistry",
    blurb: "Cleanings, fillings, crowns, and check-ups for the whole family.",
    color: SKY,
  },
  {
    icon: Baby,
    name: "Kids' Dentistry",
    blurb: "Gentle, patient care designed for little ones (12 months and up).",
    color: SUN,
  },
  {
    icon: Sparkles,
    name: "Cosmetic Care",
    blurb: "Whitening, bonding, and minor smile makeovers, done in-house.",
    color: MINT,
  },
  {
    icon: Shield,
    name: "Preventive Care",
    blurb: "Sealants, fluoride, and a personalized plan to keep cavities away.",
    color: SKY,
  },
  {
    icon: Activity,
    name: "Emergency Visits",
    blurb: "Same-day appointments for pain, knocked-out teeth, or accidents.",
    color: SUN,
  },
  {
    icon: CalendarHeart,
    name: "Orthodontics",
    blurb: "Clear aligners and gentle braces for kids, teens, and adults.",
    color: MINT,
  },
];

const insurancePlans = [
  "Delta Dental",
  "MetLife",
  "Cigna",
  "Aetna",
  "Anthem",
  "Blue Shield",
  "United Healthcare",
  "Guardian",
];

const testimonials = [
  {
    quote:
      "My kids actually ask when their next dentist visit is. Dr. Lopez has a magic touch — and the office feels more like a kids' museum than a clinic.",
    name: "Jenna R.",
    detail: "Mom of three · Patient since 2019",
  },
  {
    quote:
      "I had avoided dentists for years out of anxiety. After my first cleaning here I cried — but in a good way. They made it so easy.",
    name: "Marcus T.",
    detail: "Patient since 2023",
  },
  {
    quote:
      "Our whole family of five comes here. Dr. Park did my dad's emergency crown on a Saturday morning. They genuinely care.",
    name: "The Sandhu Family",
    detail: "Patients since 2020",
  },
];

export default function SunnyHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Sun decoration */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle at center, ${SUN}66, transparent 70%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle at center, ${SKY}55, transparent 70%)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold"
                  style={{
                    backgroundColor: `${SUN}25`,
                    color: "#B86F1F",
                  }}
                >
                  <Heart className="h-3.5 w-3.5" fill="currentColor" />
                  Welcoming new patients & families
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight"
                style={{ color: INK }}
              >
                Gentle care{" "}
                <span style={{ color: SKY }}>
                  for every smile,
                </span>{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${SUN}, #F38A1A)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  every age.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
                className="mt-7 max-w-xl text-[17px] leading-relaxed"
                style={{ color: MUTED }}
              >
                We&apos;ve been the favorite family dentist in Sunset Cliffs
                for over fifteen years. From your toddler&apos;s first cleaning
                to grandpa&apos;s checkup — we love what we do, and you&apos;ll
                feel it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${SKY}, #2E8FCF)`,
                    boxShadow:
                      "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 12px 32px -8px rgba(77,168,218,0.55)",
                  }}
                >
                  Book your visit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-base font-bold transition-all hover:-translate-y-0.5"
                  style={{ borderColor: INK, color: INK }}
                >
                  See what we do
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium"
                style={{ color: MUTED }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5" fill={SUN} style={{ color: SUN }} />
                    ))}
                  </div>
                  <span>4.9 / 5 · 612 Google reviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" style={{ color: SKY }} />
                  <span>3,400+ happy patients</span>
                </div>
              </motion.div>
            </div>

            {/* Right: illustration / decorative card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
              className="relative lg:col-span-5"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROMISE STRIP
          ==================================================================== */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className="grid grid-cols-2 gap-y-6 rounded-3xl p-8 md:grid-cols-4"
            style={{
              backgroundColor: "white",
              boxShadow: "0 8px 32px -8px rgba(27,42,61,0.08)",
            }}
          >
            {[
              { icon: Clock, label: "Same-day emergencies", color: SUN },
              { icon: Shield, label: "Most insurance accepted", color: SKY },
              { icon: Smile, label: "Kids welcome from age 1", color: MINT },
              { icon: Heart, label: "0% financing available", color: SUN },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${color}1F`, color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold" style={{ color: INK }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SERVICES
          ==================================================================== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: SKY }}
            >
              What we do
            </p>
            <h2
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lg:text-5xl"
              style={{ color: INK }}
            >
              Everything your family&apos;s smile needs,{" "}
              <span style={{ color: SUN }}>under one sunny roof.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                className="group rounded-3xl p-7 transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 20px -8px rgba(27,42,61,0.08)",
                }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${s.color}1F`, color: s.color }}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold" style={{ color: INK }}>
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {s.blurb}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-base font-bold transition-colors"
              style={{ color: SKY }}
            >
              See all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MEET THE TEAM
          ==================================================================== */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: SKY }}
              >
                Our team
              </p>
              <h2
                className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lg:text-5xl"
                style={{ color: INK }}
              >
                Real people who{" "}
                <span style={{ color: SUN }}>love what they do.</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed" style={{ color: MUTED }}>
                Dr. Maria Lopez and Dr. James Park have led Sunny Smiles
                together since 2015. Their secret? They treat every patient
                like family — and they hire team members who do the same.
              </p>
              <Link
                href={`${BASE}/team`}
                className="mt-8 inline-flex items-center gap-2 text-base font-bold transition-colors"
                style={{ color: SKY }}
              >
                Meet everyone
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5 lg:col-span-7">
              {[
                {
                  name: "Dr. Maria Lopez",
                  role: "General Dentist · Founder",
                  bg: `linear-gradient(135deg, #FFD08A, ${SUN})`,
                },
                {
                  name: "Dr. James Park",
                  role: "Pediatric Dentist",
                  bg: `linear-gradient(135deg, #A8D8F0, ${SKY})`,
                },
              ].map((doc) => (
                <article
                  key={doc.name}
                  className="overflow-hidden rounded-3xl"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 8px 32px -8px rgba(27,42,61,0.1)",
                  }}
                >
                  <div
                    className="aspect-square"
                    style={{ background: doc.bg }}
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold" style={{ color: INK }}>
                      {doc.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium" style={{ color: MUTED }}>
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
          INSURANCE STRIP
          ==================================================================== */}
      <section id="insurance" className="scroll-mt-24 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className="overflow-hidden rounded-3xl p-10 lg:p-14"
            style={{
              background: `linear-gradient(135deg, ${SKY}, #2E8FCF)`,
            }}
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-sm font-bold uppercase tracking-wider text-white/70">
                  Insurance
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-white lg:text-4xl">
                  We accept most major plans.
                </h2>
                <p className="mt-5 text-white/80">
                  Don&apos;t see yours below? Our team will check coverage at no
                  cost, before your first visit. We also offer 0% interest
                  financing for treatments not covered.
                </p>
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{ color: SKY }}
                >
                  Check my coverage
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {insurancePlans.map((plan) => (
                    <div
                      key={plan}
                      className="rounded-2xl bg-white/10 px-4 py-3 text-center text-sm font-bold text-white backdrop-blur-sm"
                    >
                      {plan}
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
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: SKY }}
            >
              Patient stories
            </p>
            <h2
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight lg:text-5xl"
              style={{ color: INK }}
            >
              Families that{" "}
              <span style={{ color: SUN }}>stay with us, for years.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                className="rounded-3xl p-7"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 4px 20px -8px rgba(27,42,61,0.08)",
                }}
              >
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4" fill={SUN} style={{ color: SUN }} />
                  ))}
                </div>
                <p
                  className="mt-5 text-[15px] leading-relaxed"
                  style={{ color: INK }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t pt-4" style={{ borderColor: "rgba(27,42,61,0.08)" }}>
                  <p className="font-bold text-sm" style={{ color: INK }}>
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
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 text-center lg:p-16"
            style={{
              background: `linear-gradient(135deg, ${SUN}, #F38A1A)`,
            }}
          >
            {/* Decorative sun */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, white 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl">
                Ready for a checkup that actually feels good?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-white/90">
                Book online in under 60 seconds. Most new patients are seen
                within a week.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold transition-all hover:-translate-y-0.5"
                  style={{ color: SUN }}
                >
                  Book an appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="tel:8585550193"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5"
                >
                  Or call (858) 555-0193
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   Hero illustration — playful tooth + sun + leaves arrangement
   ============================================================ */
function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Big sunny circle behind */}
      <div
        className="absolute inset-8 rounded-full"
        style={{
          background: `linear-gradient(135deg, ${SUN}, #FFD08A)`,
          boxShadow: "0 24px 60px -16px rgba(255,169,77,0.4)",
        }}
      />

      {/* Floating tooth card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] p-8"
        style={{
          backgroundColor: "white",
          boxShadow: "0 24px 60px -8px rgba(27,42,61,0.2)",
          width: "65%",
          aspectRatio: "1",
        }}
      >
        {/* Tooth icon */}
        <svg viewBox="0 0 80 100" className="h-full w-full">
          <defs>
            <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E8F4FA" />
            </linearGradient>
          </defs>
          <path
            d="M 40 8 C 20 8, 12 22, 12 40 C 12 55, 18 70, 22 82 C 25 92, 32 96, 36 92 C 38 88, 38 78, 40 70 C 42 78, 42 88, 44 92 C 48 96, 55 92, 58 82 C 62 70, 68 55, 68 40 C 68 22, 60 8, 40 8 Z"
            fill="url(#toothGrad)"
            stroke="#4DA8DA"
            strokeWidth="2"
          />
          {/* Smile */}
          <path
            d="M 30 50 Q 40 58, 50 50"
            fill="none"
            stroke="#4DA8DA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Sparkle */}
          <circle cx="30" cy="32" r="2" fill="#4DA8DA" />
        </svg>
      </motion.div>

      {/* Floating mini chips */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-12 rounded-2xl bg-white px-4 py-2.5 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" style={{ color: MINT }} />
          <span className="text-xs font-bold" style={{ color: INK }}>
            Same-day visit
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-12 left-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4" style={{ color: SUN }} fill={SUN} />
          <span className="text-xs font-bold" style={{ color: INK }}>
            Kid friendly
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0], rotate: [-1, 3, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 right-8 rounded-2xl bg-white px-4 py-2.5 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4" style={{ color: SUN }} fill={SUN} />
          <span className="text-xs font-bold" style={{ color: INK }}>
            4.9 ★
          </span>
        </div>
      </motion.div>
    </div>
  );
}
