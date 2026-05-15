"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  Video,
  Pill,
  ShieldCheck,
  Syringe,
  TestTube,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/primary-care";
const easeOut = [0.16, 1, 0.3, 1] as const;

const SAGE = "#6E8B6F";
const SAGE_DARK = "#516B53";
const INK = "#1A2421";
const MUTED = "#5C6A65";

const categories = [
  {
    title: "Adults",
    services: [
      {
        icon: Stethoscope,
        name: "Annual physicals",
        time: "45 min",
        bullets: ["Lab work included", "Blood pressure check", "Cancer screening discussion"],
      },
      {
        icon: Activity,
        name: "Chronic disease management",
        time: "30 min",
        bullets: ["Diabetes & A1C tracking", "Hypertension follow-up", "Cholesterol management"],
      },
      {
        icon: HeartPulse,
        name: "Women's health",
        time: "30 min",
        bullets: ["Annual exams & Pap", "Contraception", "Menopause care"],
      },
    ],
  },
  {
    title: "Kids & Families",
    services: [
      {
        icon: Baby,
        name: "Well-child visits",
        time: "30 min",
        bullets: ["Growth & development", "Vaccinations on schedule", "Parent Q&A time"],
      },
      {
        icon: Syringe,
        name: "Immunizations",
        time: "15 min",
        bullets: ["Standard vaccine schedule", "Travel vaccines", "Flu shots seasonally"],
      },
      {
        icon: Stethoscope,
        name: "School physicals",
        time: "30 min",
        bullets: ["Sports clearance", "Hearing & vision", "Forms completed onsite"],
      },
    ],
  },
  {
    title: "Same-day & Virtual",
    services: [
      {
        icon: Video,
        name: "Telehealth visits",
        time: "20 min",
        bullets: ["7 days a week", "From phone or laptop", "Insurance accepted"],
      },
      {
        icon: Pill,
        name: "Sick visits",
        time: "20 min",
        bullets: ["Same-day appointments", "Flu, strep, UTI care", "Walk-ins welcome"],
      },
      {
        icon: ShieldCheck,
        name: "Urgent care",
        time: "Up to 45 min",
        bullets: ["Minor injuries", "Stitches & sprains", "X-ray onsite"],
      },
    ],
  },
  {
    title: "Labs & Imaging",
    services: [
      {
        icon: TestTube,
        name: "On-site lab work",
        time: "10 min draw",
        bullets: ["Most results in 24h", "Fasting friendly", "Hemoglobin, CBC, lipids, A1C"],
      },
      {
        icon: Brain,
        name: "Mental health screening",
        time: "30 min",
        bullets: ["Depression & anxiety", "ADHD evaluation", "Referrals to therapy"],
      },
      {
        icon: Activity,
        name: "EKG & vitals",
        time: "20 min",
        bullets: ["Resting EKG", "Spirometry / lung function", "24h BP monitoring"],
      },
    ],
  },
];

export default function CedarwoodServices() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: MUTED }}
          >
            ← Back home
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: SAGE_DARK }}
            >
              Services
            </p>
            <h1
              className="mt-3 text-balance text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight"
              style={{ color: INK }}
            >
              Everything you need from a{" "}
              <span style={{ color: SAGE }}>primary care home.</span>
            </h1>
            <p
              className="mt-5 max-w-2xl text-[15px] leading-relaxed sm:mt-6 sm:text-base"
              style={{ color: MUTED }}
            >
              Cedarwood handles the full range of primary care for adults,
              kids, and families — and we keep things in-house wherever
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {categories.map((cat) => (
        <section key={cat.title} className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex items-center gap-4 sm:mb-10">
              <h2
                className="text-xl font-semibold tracking-tight sm:text-2xl"
                style={{ color: SAGE_DARK }}
              >
                {cat.title}
              </h2>
              <div
                className="h-px flex-1"
                style={{ backgroundColor: `${SAGE}33` }}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((s, i) => (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                  className="group flex flex-col rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 sm:p-7"
                  style={{
                    borderColor: "rgba(45,58,46,0.08)",
                    boxShadow: "0 1px 2px 0 rgba(45,58,46,0.04)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${SAGE}1F`,
                        color: SAGE_DARK,
                      }}
                    >
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        borderColor: `${SAGE}40`,
                        color: SAGE_DARK,
                      }}
                    >
                      {s.time}
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-lg font-semibold leading-tight"
                    style={{ color: INK }}
                  >
                    {s.name}
                  </h3>

                  <ul className="mt-4 flex-1 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: MUTED }}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                          style={{ color: SAGE }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="group/btn mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: SAGE_DARK }}
                  >
                    Book this visit
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border bg-white p-8 sm:p-10 lg:p-14"
            style={{ borderColor: "rgba(45,58,46,0.08)" }}
          >
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              style={{ color: INK }}
            >
              Not sure what you need?
            </h2>
            <p
              className="mt-4 max-w-md text-[15px] leading-relaxed sm:text-base"
              style={{ color: MUTED }}
            >
              Chat with our team — we&apos;ll help you figure out the right
              visit and confirm your insurance coverage in under a minute.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: SAGE,
                  boxShadow: "0 12px 32px -8px rgba(110,139,111,0.55)",
                }}
              >
                Chat with us
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href={`${BASE}/providers`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3.5 text-base font-semibold transition-all"
                style={{ borderColor: INK, color: INK }}
              >
                Meet our providers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
