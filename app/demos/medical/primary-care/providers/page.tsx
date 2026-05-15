"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Award, Heart, Star } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/primary-care";
const easeOut = [0.16, 1, 0.3, 1] as const;

const SAGE = "#6E8B6F";
const SAGE_DARK = "#516B53";
const WARM = "#C8956D";
const INK = "#1A2421";
const MUTED = "#5C6A65";

const doctors = [
  {
    name: "Dr. Anita Desai, MD",
    role: "Family Medicine · Founder",
    cred: "MD, Oregon Health & Science University",
    years: 15,
    bio: "Dr. Desai founded Cedarwood in 2011 after a decade in larger systems where she felt unable to spend real time with patients. She lives in NW Portland with her partner and two dogs, runs along the Willamette every morning, and is the practice's go-to provider for adult primary care and women's health.",
    specialties: ["Adult primary care", "Women's health", "Diabetes & metabolic"],
    accent: SAGE,
    bg: "linear-gradient(135deg, #B7CCB7, #6E8B6F)",
  },
  {
    name: "Dr. Ben Anderson, MD",
    role: "Internal Medicine",
    cred: "MD, University of Washington",
    years: 9,
    bio: "Dr. Anderson joined Cedarwood in 2018 after completing residency at UW. He focuses on chronic disease management and preventive medicine, and is one of the rare internists who actually likes house-call follow-ups. Outside the clinic, he plays cello in a Portland chamber group.",
    specialties: ["Internal medicine", "Cardiometabolic care", "Preventive medicine"],
    accent: WARM,
    bg: "linear-gradient(135deg, #D7C5A5, #C8956D)",
  },
  {
    name: "Dr. Sarah Kim, MD",
    role: "Pediatrics",
    cred: "MD, Stanford School of Medicine",
    years: 11,
    bio: "Dr. Kim leads pediatric care at Cedarwood. She trained in pediatrics at Lucile Packard Children's Hospital and joined us in 2020. She's the parent of two herself, which patients say comes through in her thoughtful, unhurried approach to every well-child visit.",
    specialties: ["Pediatric primary care", "Newborn care", "Adolescent medicine"],
    accent: SAGE,
    bg: "linear-gradient(135deg, #CFD9C2, #8FA890)",
  },
];

const nurses = [
  { name: "Rachel Torres, NP", role: "Nurse Practitioner", years: 7 },
  { name: "David Park, PA-C", role: "Physician Assistant", years: 5 },
  { name: "Mia Chen, RN", role: "Lead Clinical Nurse", years: 12 },
];

export default function CedarwoodProviders() {
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
              Providers
            </p>
            <h1
              className="mt-3 text-balance text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight"
              style={{ color: INK }}
            >
              Three physicians.{" "}
              <span style={{ color: SAGE }}>One philosophy.</span>
            </h1>
            <p
              className="mt-5 max-w-2xl text-[15px] leading-relaxed sm:mt-6 sm:text-base"
              style={{ color: MUTED }}
            >
              Every patient at Cedarwood is paired with one primary provider —
              the same provider, every visit. Here&apos;s who you might be
              seeing.
            </p>
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {doctors.map((doc, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={doc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: easeOut }}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  {/* Portrait */}
                  <div
                    className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                  >
                    <div
                      className="relative aspect-[4/5] overflow-hidden rounded-2xl border"
                      style={{
                        background: doc.bg,
                        borderColor: "rgba(45,58,46,0.08)",
                      }}
                    >
                      <div
                        className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold"
                        style={{
                          color: doc.accent,
                          boxShadow: "0 4px 12px -2px rgba(45,58,46,0.15)",
                        }}
                      >
                        {doc.years} years
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div
                    className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: doc.accent }}
                    >
                      {doc.role}
                    </p>
                    <h2
                      className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                      style={{ color: INK }}
                    >
                      {doc.name}
                    </h2>
                    <div
                      className="mt-3 flex items-center gap-2 text-sm"
                      style={{ color: MUTED }}
                    >
                      <GraduationCap
                        className="h-4 w-4"
                        style={{ color: doc.accent }}
                      />
                      <span>{doc.cred}</span>
                    </div>

                    <p
                      className="mt-5 text-[15px] leading-relaxed sm:mt-6 sm:text-base"
                      style={{ color: INK }}
                    >
                      {doc.bio}
                    </p>

                    <div className="mt-6">
                      <p
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: MUTED }}
                      >
                        Focus areas
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {doc.specialties.map((sp) => (
                          <span
                            key={sp}
                            className="rounded-full px-3 py-1.5 text-xs font-semibold"
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
                      className="group mt-7 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: doc.accent,
                        boxShadow: `0 8px 24px -8px ${doc.accent}88`,
                      }}
                    >
                      Book with {doc.name.split(" ").slice(0, 2).join(" ")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINICAL TEAM */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${SAGE}1F`,
                  color: SAGE_DARK,
                }}
              >
                <Heart className="h-5 w-5" />
              </div>
              <h2
                className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                style={{ color: INK }}
              >
                Clinical team
              </h2>
              <p
                className="mt-4 text-[15px] leading-relaxed sm:text-base"
                style={{ color: MUTED }}
              >
                Our nurse practitioners and clinical staff handle same-day
                visits, vaccinations, and care coordination — keeping the
                practice running like clockwork.
              </p>
            </div>

            <div className="space-y-3 lg:col-span-8">
              {nurses.map((n) => (
                <div
                  key={n.name}
                  className="flex items-center justify-between gap-3 rounded-xl border bg-white px-5 py-4"
                  style={{
                    borderColor: "rgba(45,58,46,0.08)",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-semibold sm:text-base"
                      style={{ color: INK }}
                    >
                      {n.name}
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: MUTED }}>
                      {n.role}
                    </p>
                  </div>
                  <span
                    className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `${SAGE}15`,
                      color: SAGE_DARK,
                    }}
                  >
                    {n.years}y
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 text-center sm:p-10 lg:p-14"
            style={{
              background: `linear-gradient(135deg, #2D3A2E, ${SAGE_DARK})`,
            }}
          >
            <div className="flex justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 text-white" fill="white" />
              ))}
            </div>
            <p className="mt-4 text-xl font-semibold leading-tight text-white sm:text-2xl">
              &ldquo;The most caring, attentive doctors my family has ever
              seen. We feel lucky to be patients.&rdquo;
            </p>
            <p className="mt-3 text-xs text-white/70 sm:text-sm">
              — The Patel Family · Patients since 2019
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{ color: SAGE_DARK }}
              >
                Become a patient
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href={`${BASE}/services`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/70"
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
