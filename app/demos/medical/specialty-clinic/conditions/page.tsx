"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Activity,
  TrendingUp,
  Microscope,
  Stethoscope,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/specialty-clinic";
const easeOut = [0.16, 1, 0.3, 1] as const;

const NAVY = "#0B1F3A";
const CYAN = "#00B8D4";
const ICE = "#E8F0F4";
const MUTED = "#8FA8C2";
const SUBTLE = "#5E7894";

const conditions = [
  {
    icon: HeartPulse,
    category: "Ischemic Heart Disease",
    name: "Coronary Artery Disease",
    summary:
      "Comprehensive workup for chest pain, shortness of breath, and known CAD. Stress testing, CT coronary angiography, and interventional procedures available on-site.",
    workup: ["Stress echocardiography", "Cardiac CT/CTA", "Cardiac catheterization"],
  },
  {
    icon: Activity,
    category: "Electrophysiology",
    name: "Arrhythmias & Atrial Fibrillation",
    summary:
      "Diagnosis and treatment for AFib, SVT, ventricular arrhythmias, and conduction disorders. Our EP lab performs ablations and device implants weekly.",
    workup: ["Ambulatory rhythm monitoring", "Electrophysiology study", "Catheter ablation"],
  },
  {
    icon: TrendingUp,
    category: "Heart Failure",
    name: "Advanced Heart Failure",
    summary:
      "Structured outpatient HF management for HFrEF and HFpEF, with optimization of guideline-directed medical therapy, biomarker tracking, and advanced therapies as needed.",
    workup: ["Echo with strain", "BNP & biomarker panel", "Cardiopulmonary exercise testing"],
  },
  {
    icon: Microscope,
    category: "Structural Heart",
    name: "Valvular Heart Disease",
    summary:
      "Evaluation and surveillance of aortic stenosis, mitral regurgitation, and other valvular conditions. Coordinated TAVR and surgical AVR workups with our heart-team partners.",
    workup: ["Transthoracic echocardiogram", "Transesophageal echo", "Heart team conference"],
  },
  {
    icon: Stethoscope,
    category: "Preventive Cardiology",
    name: "Lipid & Cardiovascular Risk",
    summary:
      "Advanced lipid testing, lipoprotein(a), and ASCVD risk stratification. We treat patients with familial hypercholesterolemia, statin intolerance, and post-MI prevention.",
    workup: ["Advanced lipid panel", "CT calcium score", "Lipoprotein(a) testing"],
  },
  {
    icon: Zap,
    category: "Devices",
    name: "Pacemaker & ICD Management",
    summary:
      "Device implantation, follow-up interrogation, and remote monitoring for pacemakers, ICDs, and CRT devices. We see device patients quarterly for in-person checks.",
    workup: ["Device interrogation", "Remote monitoring setup", "Battery & lead evaluation"],
  },
  {
    icon: Activity,
    category: "Vascular",
    name: "Peripheral Arterial Disease",
    summary:
      "Diagnosis and minimally invasive treatment of PAD with vascular ultrasound and endovascular intervention. We co-manage with vascular surgery for complex cases.",
    workup: ["Vascular ultrasound", "Ankle-brachial index", "Angiography & intervention"],
  },
  {
    icon: HeartPulse,
    category: "Hypertension",
    name: "Resistant Hypertension",
    summary:
      "Workup for patients whose blood pressure remains uncontrolled despite three or more medications. We screen for secondary causes and optimize therapy.",
    workup: ["24-hour ambulatory BP", "Renal & adrenal workup", "Sleep study referral"],
  },
];

export default function MeridianConditions() {
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
              — Conditions Treated
            </p>
            <h1
              className="mt-4 text-balance text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight"
              style={{ color: ICE }}
            >
              The cases we see, and{" "}
              <span style={{ color: CYAN }}>how we work them up.</span>
            </h1>
            <p
              className="mt-5 max-w-2xl text-[15px] leading-relaxed sm:mt-6 sm:text-base"
              style={{ color: MUTED }}
            >
              Meridian focuses on the full breadth of cardiology and vascular
              care. For each condition, we describe the typical workup and
              what to expect at your first visit.
            </p>
          </div>
        </div>
      </section>

      {/* CONDITIONS LIST */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 sm:space-y-4">
            {conditions.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                className="group rounded-2xl border p-6 transition-all hover:border-[#00B8D4] sm:p-8"
                style={{
                  backgroundColor: "rgba(232,240,244,0.02)",
                  borderColor: "rgba(0,184,212,0.12)",
                }}
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                  {/* Left: icon + category + name */}
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: "rgba(0,184,212,0.1)",
                          color: CYAN,
                        }}
                      >
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p
                          className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                          style={{ color: CYAN }}
                        >
                          {c.category}
                        </p>
                        <h2
                          className="mt-1.5 text-xl font-semibold leading-tight sm:text-2xl"
                          style={{ color: ICE }}
                        >
                          {c.name}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Middle: summary */}
                  <div className="lg:col-span-4">
                    <p
                      className="text-sm leading-relaxed sm:text-[15px]"
                      style={{ color: MUTED }}
                    >
                      {c.summary}
                    </p>
                  </div>

                  {/* Right: workup */}
                  <div className="lg:col-span-3">
                    <p
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: SUBTLE }}
                    >
                      Typical workup
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.workup.map((w) => (
                        <li
                          key={w}
                          className="flex items-start gap-2 text-xs sm:text-sm"
                          style={{ color: ICE }}
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                            style={{ color: CYAN }}
                          />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="mt-6 flex items-center justify-between border-t pt-5 sm:mt-7 sm:pt-6"
                  style={{ borderColor: "rgba(0,184,212,0.12)" }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: SUBTLE }}
                  >
                    Most patients seen within 5 days
                  </span>
                  <button
                    type="button"
                    onClick={() => openChatbot("general")}
                    className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: CYAN }}
                  >
                    Request workup
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border p-8 sm:p-10 lg:p-14"
            style={{
              backgroundColor: "rgba(0,184,212,0.04)",
              borderColor: "rgba(0,184,212,0.2)",
            }}
          >
            <p
              className="font-mono text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: CYAN }}
            >
              — Not sure where to start?
            </p>
            <h2
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              style={{ color: ICE }}
            >
              Our patient concierge will route you to the right specialist.
            </h2>
            <p
              className="mt-5 max-w-md text-[15px] leading-relaxed sm:text-base"
              style={{ color: MUTED }}
            >
              Share your symptoms or referral information. We&apos;ll get you
              scheduled with the right subspecialist, usually within 5 business
              days.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: CYAN,
                  color: NAVY,
                  boxShadow: "0 12px 32px -8px rgba(0,184,212,0.55)",
                }}
              >
                Chat with concierge
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href={`${BASE}/physicians`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-base font-semibold transition-all"
                style={{
                  borderColor: `${CYAN}40`,
                  color: ICE,
                }}
              >
                Browse physicians
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
