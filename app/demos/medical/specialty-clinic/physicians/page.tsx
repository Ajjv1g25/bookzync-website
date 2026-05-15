"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Award,
  Microscope,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/specialty-clinic";
const easeOut = [0.16, 1, 0.3, 1] as const;

const NAVY = "#0B1F3A";
const CYAN = "#00B8D4";
const ICE = "#E8F0F4";
const MUTED = "#8FA8C2";
const SUBTLE = "#5E7894";

const physicians = [
  {
    name: "Dr. Marcus Hayes, MD, FACC",
    role: "Interventional Cardiology · Founder",
    cred: "MD, Northwestern · Fellowship, Cleveland Clinic",
    years: 18,
    bio: "Dr. Hayes founded Meridian in 2015 after a decade at academic medical centers, where he led the cath lab at a major Chicago teaching hospital. He specializes in complex coronary interventions, including chronic total occlusion (CTO) PCI and high-risk multivessel disease. He has published over 40 peer-reviewed papers on optimal procedural strategies.",
    specialties: ["Complex PCI", "CTO interventions", "Acute MI"],
    bg: `linear-gradient(135deg, ${CYAN}50, ${NAVY})`,
  },
  {
    name: "Dr. Elena Sokolova, MD, PhD",
    role: "Electrophysiology",
    cred: "MD/PhD, Johns Hopkins · Fellowship, Mayo Clinic",
    years: 14,
    bio: "Dr. Sokolova leads Meridian's electrophysiology program. She trained at Mayo Clinic's EP service and has performed over 1,800 catheter ablations, including complex atrial fibrillation and ventricular tachycardia cases. She maintains active research interests in mapping technology and AI-assisted arrhythmia detection.",
    specialties: ["Atrial fibrillation ablation", "VT ablation", "Device implants"],
    bg: `linear-gradient(135deg, #4A6FA5, ${NAVY})`,
  },
  {
    name: "Dr. Raj Patel, MD, FACC",
    role: "Heart Failure & Transplant Cardiology",
    cred: "MD, University of Chicago · Fellowship, Stanford",
    years: 12,
    bio: "Dr. Patel joined Meridian in 2019 from Stanford's advanced heart failure program. He manages patients with HFrEF, HFpEF, cardiogenic shock, and advanced therapies including LVAD evaluation and post-transplant care. He chairs Meridian's weekly heart team conference for complex multidisciplinary cases.",
    specialties: ["Advanced heart failure", "LVAD evaluation", "Pulmonary hypertension"],
    bg: `linear-gradient(135deg, ${CYAN}40, #1A4A6E)`,
  },
  {
    name: "Dr. Jennifer Wu, MD",
    role: "Preventive Cardiology · Lipidology",
    cred: "MD, Harvard Medical School · Fellowship, Brigham & Women's",
    years: 10,
    bio: "Dr. Wu directs Meridian's preventive cardiology service. She's a certified clinical lipidologist and treats patients with familial hypercholesterolemia, statin intolerance, elevated Lp(a), and post-MI secondary prevention. She runs a structured outpatient lipid clinic with same-day pharmacotherapy decisions.",
    specialties: ["Lipid disorders", "Lp(a) management", "Cardiovascular risk"],
    bg: `linear-gradient(135deg, #6FAF9F, ${NAVY})`,
  },
];

export default function MeridianPhysicians() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,184,212,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,184,212,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: MUTED }}
          >
            ← Meridian Heart &amp; Vascular
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p
              className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: CYAN }}
            >
              — Physicians
            </p>
            <h1
              className="mt-4 text-balance text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight"
              style={{ color: ICE }}
            >
              Four physicians.{" "}
              <span style={{ color: CYAN }}>Subspecialty depth.</span>
            </h1>
            <p
              className="mt-5 max-w-2xl text-[15px] leading-relaxed sm:mt-6 sm:text-base"
              style={{ color: MUTED }}
            >
              Each Meridian physician is fellowship-trained in a specific
              cardiology subspecialty. Together, we cover the full spectrum of
              advanced cardiovascular care.
            </p>
          </div>
        </div>
      </section>

      {/* PHYSICIANS */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {physicians.map((doc, i) => {
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
                        borderColor: "rgba(0,184,212,0.2)",
                      }}
                    >
                      {/* Years badge */}
                      <div
                        className="absolute right-4 top-4 rounded-lg border px-3 py-1.5"
                        style={{
                          backgroundColor: "rgba(11,31,58,0.8)",
                          borderColor: "rgba(0,184,212,0.3)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <p
                          className="font-mono text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: MUTED }}
                        >
                          Practicing
                        </p>
                        <p
                          className="font-mono text-base font-semibold tabular-nums"
                          style={{ color: CYAN }}
                        >
                          {doc.years}y
                        </p>
                      </div>

                      {/* EKG line decoration */}
                      <svg
                        viewBox="0 0 400 80"
                        className="absolute inset-x-0 bottom-4 h-12 w-full opacity-40"
                        fill="none"
                        stroke={CYAN}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M 0 40 L 80 40 L 90 30 L 100 50 L 110 10 L 120 70 L 130 40 L 200 40 L 210 30 L 220 50 L 230 10 L 240 70 L 250 40 L 400 40" />
                      </svg>
                    </div>
                  </div>

                  {/* Bio */}
                  <div
                    className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
                  >
                    <p
                      className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: CYAN }}
                    >
                      {doc.role}
                    </p>
                    <h2
                      className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                      style={{ color: ICE }}
                    >
                      {doc.name}
                    </h2>
                    <div
                      className="mt-3 flex items-start gap-2 text-sm"
                      style={{ color: MUTED }}
                    >
                      <GraduationCap
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        style={{ color: CYAN }}
                      />
                      <span>{doc.cred}</span>
                    </div>

                    <p
                      className="mt-5 text-[15px] leading-relaxed sm:mt-6 sm:text-base"
                      style={{ color: ICE }}
                    >
                      {doc.bio}
                    </p>

                    <div className="mt-6">
                      <p
                        className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: SUBTLE }}
                      >
                        Subspecialty focus
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {doc.specialties.map((sp) => (
                          <span
                            key={sp}
                            className="rounded-md border px-3 py-1.5 text-xs font-semibold"
                            style={{
                              backgroundColor: "rgba(0,184,212,0.08)",
                              borderColor: "rgba(0,184,212,0.25)",
                              color: CYAN,
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
                      className="group mt-7 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: CYAN,
                        color: NAVY,
                        boxShadow: "0 8px 24px -8px rgba(0,184,212,0.55)",
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

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border p-8 sm:p-10 lg:p-14"
            style={{
              backgroundColor: "rgba(0,184,212,0.04)",
              borderColor: "rgba(0,184,212,0.2)",
            }}
          >
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  icon: Award,
                  label: "Board certifications",
                  value: "100%",
                  detail: "All physicians are board-certified in cardiology",
                },
                {
                  icon: Microscope,
                  label: "Active research",
                  value: "60+",
                  detail: "Peer-reviewed publications across our team",
                },
                {
                  icon: ArrowUpRight,
                  label: "Conference reviews",
                  value: "Weekly",
                  detail: "Multidisciplinary heart team review for complex cases",
                },
              ].map((s) => (
                <div key={s.label}>
                  <s.icon className="h-5 w-5" style={{ color: CYAN }} />
                  <p
                    className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
                    style={{ color: ICE }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: CYAN }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: "rgba(0,184,212,0.15)" }}
            >
              <p
                className="text-base font-semibold sm:text-lg"
                style={{ color: ICE }}
              >
                Ready to schedule a consultation?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: CYAN,
                    color: NAVY,
                    boxShadow: "0 8px 24px -8px rgba(0,184,212,0.55)",
                  }}
                >
                  Request consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="tel:3125550241"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all"
                  style={{
                    borderColor: `${CYAN}40`,
                    color: ICE,
                  }}
                >
                  (312) 555-0241
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
