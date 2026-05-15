"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Smile,
  Baby,
  Sparkles,
  Shield,
  Activity,
  CalendarHeart,
  Crown,
  Wand2,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/family-smiles";
const easeOut = [0.16, 1, 0.3, 1] as const;

const SUN = "#FFA94D";
const SKY = "#4DA8DA";
const MINT = "#5BCB9F";
const INK = "#1B2A3D";
const MUTED = "#5B6B82";

const categories = [
  {
    title: "Everyday care",
    color: SKY,
    services: [
      {
        icon: Smile,
        name: "Cleanings & Exams",
        time: "45 min",
        blurb:
          "Professional cleaning, X-rays, and a thorough exam. We recommend every 6 months.",
        bullets: ["Hygienist-led cleaning", "Digital X-rays", "Oral cancer screening"],
      },
      {
        icon: Shield,
        name: "Fillings",
        time: "30 — 60 min",
        blurb:
          "Tooth-colored composite fillings that blend in. Most done in a single visit.",
        bullets: ["No metal fillings", "Painless laser option", "Same-day completion"],
      },
      {
        icon: Sparkles,
        name: "Preventive Care",
        time: "20 — 30 min",
        blurb:
          "Sealants, fluoride, and a custom prevention plan. Especially valuable for kids.",
        bullets: ["Sealants for molars", "Fluoride varnish", "Mouthguards"],
      },
    ],
  },
  {
    title: "For kids",
    color: SUN,
    services: [
      {
        icon: Baby,
        name: "First Visits",
        time: "30 min",
        blurb:
          "We see kids as young as 12 months. The first visit is a gentle introduction — no scary chairs, no stress.",
        bullets: ["Toddler-friendly room", "Parent stays with child", "Treasure chest after!"],
      },
      {
        icon: HeartHandshake,
        name: "Pediatric Dentistry",
        time: "30 — 45 min",
        blurb:
          "Dr. Park is board-certified in pediatric dentistry. He&apos;s a wizard with anxious kids.",
        bullets: ["Behavioral techniques", "Nitrous oxide option", "Special needs friendly"],
      },
      {
        icon: CalendarHeart,
        name: "Sealants & Fluoride",
        time: "15 — 30 min",
        blurb:
          "Tiny protective coatings that block cavities for years. Quick, painless, kid-approved.",
        bullets: ["No drilling required", "Lasts 5-10 years", "Insurance usually covers"],
      },
    ],
  },
  {
    title: "Repair & restore",
    color: MINT,
    services: [
      {
        icon: Crown,
        name: "Crowns & Bridges",
        time: "2 visits",
        blurb:
          "Strong, natural-looking restoration for damaged or missing teeth. Lifetime guarantee on craftsmanship.",
        bullets: ["Porcelain materials", "Same-day crowns available", "Color-matched perfectly"],
      },
      {
        icon: Activity,
        name: "Root Canal Therapy",
        time: "60 — 90 min",
        blurb:
          "Modern root canals are nothing like the horror stories. We save teeth gently and comfortably.",
        bullets: ["Painless with sedation", "Tooth-saving", "1-2 visits maximum"],
      },
      {
        icon: Wand2,
        name: "Emergency Visits",
        time: "Same day",
        blurb:
          "Pain, knocked-out tooth, or accident? Call us — we always reserve same-day slots for emergencies.",
        bullets: ["7-day a week phone line", "Same-day appointment", "Saturday hours available"],
      },
    ],
  },
];

export default function SunnyServices() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${SUN}66, transparent 70%)`,
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
              Our services
            </p>
            <h1
              className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
              style={{ color: INK }}
            >
              Care for every age,{" "}
              <span style={{ color: SUN }}>every stage,</span>{" "}
              <span style={{ color: SKY }}>every smile.</span>
            </h1>
            <p
              className="mt-7 max-w-2xl text-[17px] leading-relaxed"
              style={{ color: MUTED }}
            >
              Whether you&apos;re bringing your toddler for their first visit
              or you finally got around to that crown — we&apos;ve got you. Our
              services are organized so you can find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SERVICE CATEGORIES
          ==================================================================== */}
      {categories.map((cat, ci) => (
        <section key={cat.title} className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex items-center gap-4">
              <div
                className="h-px flex-1"
                style={{ backgroundColor: `${cat.color}33` }}
              />
              <h2
                className="text-2xl font-bold tracking-tight lg:text-3xl"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h2>
              <div
                className="h-px flex-1"
                style={{ backgroundColor: `${cat.color}33` }}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {cat.services.map((s, i) => (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                  className="group flex flex-col rounded-3xl p-7 transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 4px 20px -8px rgba(27,42,61,0.08)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${cat.color}1F`, color: cat.color }}
                    >
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${cat.color}15`,
                        color: cat.color,
                      }}
                    >
                      {s.time}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold" style={{ color: INK }}>
                    {s.name}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {s.blurb}
                  </p>

                  <ul className="mt-5 flex-1 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: INK }}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          style={{ color: cat.color }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="group/btn mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-all"
                    style={{ color: cat.color }}
                  >
                    Schedule this
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====================================================================
          FAQ STRIP
          ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div
            className="rounded-3xl p-8 lg:p-12"
            style={{
              backgroundColor: "white",
              boxShadow: "0 8px 32px -8px rgba(27,42,61,0.08)",
            }}
          >
            <p
              className="text-sm font-bold uppercase tracking-wider"
              style={{ color: SKY }}
            >
              Common questions
            </p>
            <h2
              className="mt-3 text-3xl font-bold leading-tight tracking-tight"
              style={{ color: INK }}
            >
              Still have questions?
            </h2>
            <p className="mt-4" style={{ color: MUTED }}>
              Chat with us — our team responds to questions about insurance,
              wait times, kid-friendliness, and anything else in under a minute.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${SKY}, #2E8FCF)`,
                  boxShadow: "0 8px 24px -8px rgba(77,168,218,0.55)",
                }}
              >
                Chat with us
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href={`${BASE}/team`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-base font-bold transition-all"
                style={{ borderColor: INK, color: INK }}
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
