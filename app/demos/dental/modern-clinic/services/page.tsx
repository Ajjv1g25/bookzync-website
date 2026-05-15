"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/modern-clinic";
const easeOut = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    name: "Porcelain Veneers",
    category: "Smile design",
    summary:
      "Hand-crafted laminates layered in feldspathic porcelain. Each set is sculpted in wax, previewed digitally, and refined over multiple try-ins.",
    detail:
      "Veneers range from a single tooth correction to a full upper-and-lower transformation. We work with three master ceramists across New York and London.",
    duration: "2 visits, ~3 weeks apart",
    investment: "From $2,400 / tooth",
    image: "linear-gradient(135deg, #2A241B, #4D3F28 50%, #1A1612)",
  },
  {
    name: "Professional Whitening",
    category: "Brightening",
    summary:
      "In-office whitening using Zoom!® Advanced Power. Lifts the shade up to eight levels in a single 90-minute appointment.",
    detail:
      "Take-home trays are included for life. Re-touch sessions are available at concierge rates for patients on retainer.",
    duration: "90 minutes",
    investment: "From $650",
    image: "linear-gradient(135deg, #F4ECD8, #E8DDB8 50%, #C9B884)",
  },
  {
    name: "Invisalign Clear Aligners",
    category: "Alignment",
    summary:
      "Treatment plans engineered in 3D, with biweekly tracking. We supervise every transition so the result matches the preview, exactly.",
    detail:
      "Most adult cases complete within 12 months. We use ClinCheck® Pro and i7 simulators for unusually complex movements.",
    duration: "6 — 18 months",
    investment: "From $5,800",
    image: "linear-gradient(135deg, #3A3328, #5C4E37 50%, #2B2620)",
  },
  {
    name: "Smile Makeover",
    category: "Transformation",
    summary:
      "A complete reimagining of your smile. Sequenced across alignment, whitening, contouring, and veneers — planned as a single composition.",
    detail:
      "Begins with a 90-minute discovery consultation, a digital preview, and a written treatment plan. Most makeovers complete in 6 — 9 months.",
    duration: "Custom plan",
    investment: "By plan",
    image: "linear-gradient(135deg, #2D2419, #4F3F26 50%, #1F1A12)",
  },
  {
    name: "Dental Bonding",
    category: "Refinement",
    summary:
      "Composite artistry for chips, gaps, and small asymmetries. Sculpted free-hand by Dr. Chen in a single visit.",
    detail:
      "Often used as a no-prep alternative to veneers for younger patients or minor corrections. Lasts 8 — 12 years with care.",
    duration: "1 visit",
    investment: "From $480 / tooth",
    image: "linear-gradient(135deg, #2A241B, #3F3424 50%, #221E16)",
  },
  {
    name: "Gum Contouring",
    category: "Architecture",
    summary:
      "Laser reshaping of the gum line to expose more of the natural tooth — used to correct asymmetric or excessive gummy smiles.",
    detail:
      "Performed under local anesthesia, recovery is typically 2 — 4 days. Frequently combined with veneers or whitening.",
    duration: "60 minutes",
    investment: "From $850",
    image: "linear-gradient(135deg, #1F1B14, #322A1E 50%, #1A1611)",
  },
  {
    name: "All-on-4® Restoration",
    category: "Restoration",
    summary:
      "Permanent, full-arch tooth replacement on four titanium implants. Planned and placed in collaboration with our prosthodontic partner.",
    detail:
      "We coordinate the surgical placement, the immediate-load temporaries, and the final zirconia prosthesis. Restores function and aesthetics in 6 — 12 months.",
    duration: "Multi-phase",
    investment: "Consultation required",
    image: "linear-gradient(135deg, #2A241B, #45382A 50%, #1F1A14)",
  },
  {
    name: "Dental Crowns",
    category: "Strength",
    summary:
      "Pressed lithium disilicate crowns — single-visit when possible, two-visit when artistry demands it.",
    detail:
      "Used for structural restoration after large fillings, root canals, or fracture. Indistinguishable from natural tooth in both color and translucency.",
    duration: "1 — 2 visits",
    investment: "From $1,800",
    image: "linear-gradient(135deg, #2D2519, #483B27 50%, #1E1A13)",
  },
];

export default function AurumServices() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20">
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
            — Treatments
          </p>
          <h1
            className="mt-6 max-w-3xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight"
            style={{ color: "#E8E2D5" }}
          >
            A small,
            <em
              style={{ color: "#D4AF37", fontStyle: "italic" }}
              className="ml-3"
            >
              considered
            </em>
            <br />
            menu of services.
          </h1>
          <p
            className="mt-8 max-w-xl text-[16px] leading-relaxed"
            style={{ color: "#B5AC9B" }}
          >
            We focus on cosmetic and reconstructive work — the procedures that
            most reward an obsession with detail. Every plan begins with a
            90-minute consultation.
          </p>
        </div>
      </section>

      {/* ====================================================================
          SERVICE LIST — alternating layout
          ==================================================================== */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-12">
          <div className="space-y-20 lg:space-y-28">
            {services.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: easeOut }}
                  className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
                  >
                    <div
                      className="relative aspect-[4/3] overflow-hidden rounded-sm"
                      style={{ background: s.image }}
                    >
                      <div
                        className="absolute right-6 top-6"
                        style={{ color: "#D4AF37" }}
                      >
                        <Sparkle className="h-5 w-5" fill="currentColor" />
                      </div>
                      <div
                        className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: "rgba(232,226,213,0.7)" }}
                      >
                        Treatment {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Detail */}
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.22em]"
                      style={{ color: "#9C8B6B" }}
                    >
                      {s.category}
                    </p>
                    <h2
                      className="mt-4 font-serif text-4xl leading-tight tracking-tight lg:text-5xl"
                      style={{ color: "#E8E2D5" }}
                    >
                      {s.name}
                    </h2>
                    <p
                      className="mt-6 text-[16px] leading-relaxed"
                      style={{ color: "#B5AC9B" }}
                    >
                      {s.summary}
                    </p>
                    <p
                      className="mt-4 text-[14px] leading-relaxed"
                      style={{ color: "#8B8270" }}
                    >
                      {s.detail}
                    </p>

                    <div
                      className="mt-8 grid grid-cols-2 gap-6 border-t pt-6"
                      style={{ borderColor: "rgba(212,175,55,0.12)" }}
                    >
                      <div>
                        <p
                          className="font-mono text-[9px] uppercase tracking-[0.22em]"
                          style={{ color: "#9C8B6B" }}
                        >
                          Duration
                        </p>
                        <p
                          className="mt-1.5 font-serif text-lg"
                          style={{ color: "#E8E2D5" }}
                        >
                          {s.duration}
                        </p>
                      </div>
                      <div>
                        <p
                          className="font-mono text-[9px] uppercase tracking-[0.22em]"
                          style={{ color: "#9C8B6B" }}
                        >
                          Investment
                        </p>
                        <p
                          className="mt-1.5 font-serif text-lg"
                          style={{ color: "#D4AF37" }}
                        >
                          {s.investment}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openChatbot("general")}
                      className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors"
                      style={{ color: "#D4AF37" }}
                    >
                      Discuss with Dr. Chen
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
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
            Unsure which is
            <br />
            <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
              right for you?
            </em>
          </h2>
          <p
            className="mx-auto mt-8 max-w-md text-[16px] leading-relaxed"
            style={{ color: "#B5AC9B" }}
          >
            Most patients aren&apos;t sure when they arrive. The 90-minute
            consultation exists for exactly this — to look, to listen, to
            propose.
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
            Book a consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>
    </>
  );
}
