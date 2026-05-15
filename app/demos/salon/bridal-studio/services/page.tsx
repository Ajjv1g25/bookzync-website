"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkle, Check } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/salon/bridal-studio";
const easeOut = [0.16, 1, 0.3, 1] as const;

const BLUSH = "#F4D5C7";
const CHAMP = "#C9A971";
const CHARCOAL = "#2B2520";
const IVORY = "#FBF6EE";
const SOFT = "#7A6F66";

const serifFamily = `"Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", Georgia, serif`;

const services = [
  {
    name: "Bridal Hair",
    starting: "$485",
    incl: [
      "Two-hour discovery trial",
      "On-location wedding day service",
      "Soft updos · half-ups · veils · accessories",
      "Touch-up kit included",
    ],
  },
  {
    name: "Bridal Makeup",
    starting: "$425",
    incl: [
      "Two-hour discovery trial",
      "On-location wedding day service",
      "Skin prep · airbrush optional · false lashes",
      "Touch-up kit included",
    ],
  },
  {
    name: "Hair + Makeup",
    starting: "$795",
    incl: [
      "Combined trial (both services together)",
      "On-location wedding day service",
      "Both services on the morning of",
      "Our most popular bridal package",
    ],
    popular: true,
  },
  {
    name: "Bridesmaid Hair",
    starting: "$165",
    incl: ["Per attendant", "On-location, day-of only", "No trial required"],
  },
  {
    name: "Bridesmaid Makeup",
    starting: "$145",
    incl: ["Per attendant", "On-location, day-of only", "No trial required"],
  },
  {
    name: "Mother / Family",
    starting: "$135+",
    incl: [
      "Hair or makeup, à la carte",
      "Mother of the bride / groom favorite",
      "Day-of, on-location",
    ],
  },
];

const addons = [
  { name: "Additional trial", price: "$185" },
  { name: "Pre-wedding event glam", price: "$285" },
  { name: "Airbrush makeup upgrade", price: "$45" },
  { name: "Hair extensions installation", price: "$95" },
  { name: "Travel beyond 25mi radius", price: "$1.25/mi" },
];

export default function VerbenaServices() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="text-[11px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: SOFT }}
          >
            ← Verbena Bridal
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: CHAMP }}>
              Services &amp; Pricing
            </p>
            <h1
              className="mt-4 leading-[1.05] tracking-tight"
              style={{
                color: CHARCOAL,
                fontFamily: serifFamily,
                fontWeight: 500,
                fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              }}
            >
              Honest pricing.{" "}
              <span style={{ fontStyle: "italic", color: CHAMP }}>
                Nothing hidden.
              </span>
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: SOFT }}
            >
              Final pricing depends on travel distance and bridal party size.
              Every quote we send breaks out each line clearly — and includes
              what&apos;s in the bag.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                className="relative flex flex-col rounded-2xl border p-7 sm:p-9"
                style={{
                  backgroundColor: s.popular ? CHARCOAL : IVORY,
                  borderColor: s.popular ? CHAMP : "rgba(43,37,32,0.1)",
                  boxShadow: s.popular
                    ? "0 24px 48px -16px rgba(43,37,32,0.25)"
                    : "0 1px 2px 0 rgba(43,37,32,0.04)",
                }}
              >
                {s.popular && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em]"
                    style={{ backgroundColor: CHAMP, color: CHARCOAL }}
                  >
                    Most popular
                  </span>
                )}

                <Sparkle
                  className="h-4 w-4"
                  style={{ color: CHAMP }}
                  fill={CHAMP}
                />
                <h3
                  className="mt-5 leading-tight"
                  style={{
                    color: s.popular ? IVORY : CHARCOAL,
                    fontFamily: serifFamily,
                    fontWeight: 500,
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  }}
                >
                  {s.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      color: s.popular ? "rgba(251,246,238,0.6)" : SOFT,
                    }}
                  >
                    Starting
                  </span>
                  <span
                    style={{
                      color: s.popular ? IVORY : CHARCOAL,
                      fontFamily: serifFamily,
                      fontStyle: "italic",
                      fontSize: "1.75rem",
                    }}
                  >
                    {s.starting}
                  </span>
                </div>

                <ul
                  className="mt-6 flex-1 space-y-3 border-t pt-5"
                  style={{
                    borderColor: s.popular
                      ? "rgba(251,246,238,0.15)"
                      : "rgba(43,37,32,0.1)",
                  }}
                >
                  {s.incl.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                      style={{
                        color: s.popular ? "rgba(251,246,238,0.85)" : CHARCOAL,
                      }}
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                        style={{ color: CHAMP }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group/btn mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors"
                  style={{
                    color: s.popular ? CHAMP : CHARCOAL,
                  }}
                >
                  Inquire
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-[11px] uppercase tracking-[0.28em]"
            style={{ color: CHAMP }}
          >
            Add-ons
          </p>
          <h2
            className="mx-auto mt-4 max-w-xl text-center leading-tight tracking-tight"
            style={{
              color: CHARCOAL,
              fontFamily: serifFamily,
              fontWeight: 500,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            For the bigger picture.
          </h2>

          <div className="mx-auto mt-10 max-w-2xl divide-y" style={{ borderColor: "rgba(43,37,32,0.15)" }}>
            {addons.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-3 border-t py-5"
                style={{ borderColor: "rgba(43,37,32,0.12)" }}
              >
                <p className="text-sm leading-relaxed sm:text-base" style={{ color: CHARCOAL }}>
                  {a.name}
                </p>
                <p
                  className="flex-shrink-0"
                  style={{
                    color: CHAMP,
                    fontFamily: serifFamily,
                    fontStyle: "italic",
                    fontSize: "1.125rem",
                  }}
                >
                  {a.price}
                </p>
              </div>
            ))}
            <div className="border-t" style={{ borderColor: "rgba(43,37,32,0.12)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="leading-[1.05] tracking-tight"
            style={{
              color: CHARCOAL,
              fontFamily: serifFamily,
              fontWeight: 500,
              fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
            }}
          >
            Ready to{" "}
            <span style={{ fontStyle: "italic", color: CHAMP }}>begin?</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: SOFT }}
          >
            Tell us your date, your venue, your bridal party size — we&apos;ll
            send a personal quote and confirm availability within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => openChatbot("general")}
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: CHARCOAL,
              color: IVORY,
              boxShadow: "0 12px 32px -8px rgba(43,37,32,0.35)",
            }}
          >
            Begin an inquiry
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </>
  );
}
