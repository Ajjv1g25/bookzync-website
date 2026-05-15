"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkle, Star, MapPin, Calendar } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/salon/bridal-studio";
const easeOut = [0.16, 1, 0.3, 1] as const;

const BLUSH = "#F4D5C7";
const CHAMP = "#C9A971";
const CHARCOAL = "#2B2520";
const IVORY = "#FBF6EE";
const SOFT = "#7A6F66";
const SAGE = "#A8B5A0";

const serifFamily = `"Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", Georgia, serif`;

const brides = [
  {
    name: "Annabel & Henry",
    venue: "Lowndes Grove, Charleston",
    season: "October 2024",
    season_color: BLUSH,
    quote:
      "Margaret listened to me for two hours at my trial. She understood my hair, my dress, my face. On the wedding day I felt completely like myself, just dialed up.",
    bg: `linear-gradient(160deg, ${BLUSH} 0%, ${IVORY} 50%, ${CHAMP}40 100%)`,
  },
  {
    name: "Charlotte & Owen",
    venue: "Kiawah Island",
    season: "May 2024",
    season_color: SAGE,
    quote:
      "Worth every penny. They came to our suite at 6am with espresso, did seven of us in three hours, and not a hair shifted at the reception eight hours later.",
    bg: `linear-gradient(160deg, ${SAGE}60 0%, ${IVORY} 60%, ${BLUSH}80 100%)`,
  },
  {
    name: "Catherine & James",
    venue: "Magnolia Plantation",
    season: "April 2024",
    season_color: BLUSH,
    quote:
      "Verbena delivers the kind of bridal beauty that looks like nothing at all — until you see the photos and realize every single detail was considered.",
    bg: `linear-gradient(160deg, ${CHAMP}30 0%, ${IVORY} 50%, ${BLUSH} 100%)`,
  },
  {
    name: "Eliza & Thomas",
    venue: "Beaufort Inn",
    season: "June 2024",
    season_color: SAGE,
    quote:
      "I came in with a Pinterest board of seven different styles. I left with one I never would have thought of — and it was perfect.",
    bg: `linear-gradient(160deg, ${BLUSH} 0%, ${SAGE}40 100%)`,
  },
];

const press = [
  "Magnolia Rouge",
  "Charleston Magazine",
  "The Knot",
  "Style Me Pretty",
  "Garden & Gun",
];

export default function VerbenaBrides() {
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
            <p
              className="text-[11px] uppercase tracking-[0.28em]"
              style={{ color: CHAMP }}
            >
              Real Brides
            </p>
            <h1
              className="mt-4 leading-[1.05] tracking-tight"
              style={{
                color: CHARCOAL,
                fontFamily: serifFamily,
                fontWeight: 500,
                fontSize: "clamp(2.5rem, 7.5vw, 5rem)",
              }}
            >
              Six hundred{" "}
              <span style={{ fontStyle: "italic", color: CHAMP }}>
                mornings.
              </span>
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: SOFT }}
            >
              Every bride who&apos;s ever booked with us has been someone
              specific. Here&apos;s a small selection of the work — and what
              they said.
            </p>
          </div>
        </div>
      </section>

      {/* BRIDES GRID */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-20">
            {brides.map((b, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={b.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: easeOut }}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="relative">
                      <div
                        className="absolute -right-4 -top-4 h-full w-full rounded-2xl border"
                        style={{
                          borderColor: CHAMP,
                          opacity: 0.3,
                        }}
                      />
                      <div
                        className="relative aspect-[4/5] overflow-hidden rounded-2xl border"
                        style={{
                          background: b.bg,
                          borderColor: "rgba(43,37,32,0.1)",
                        }}
                      >
                        <Sparkle
                          className="absolute right-6 top-6 h-4 w-4"
                          style={{ color: CHAMP }}
                          fill={CHAMP}
                        />
                        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                          <p
                            className="text-[10px] uppercase tracking-[0.18em]"
                            style={{ color: CHARCOAL, opacity: 0.5 }}
                          >
                            Captured
                          </p>
                          <p
                            className="mt-2 leading-tight"
                            style={{
                              color: CHARCOAL,
                              fontFamily: serifFamily,
                              fontStyle: "italic",
                              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                            }}
                          >
                            {b.season}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                    <div className="flex gap-0.5">
                      {[0,1,2,3,4].map(i => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={CHAMP}
                          style={{ color: CHAMP }}
                        />
                      ))}
                    </div>
                    <h2
                      className="mt-5 leading-[1.05] tracking-tight"
                      style={{
                        color: CHARCOAL,
                        fontFamily: serifFamily,
                        fontWeight: 500,
                        fontSize: "clamp(1.75rem, 4vw, 3rem)",
                      }}
                    >
                      {b.name}
                    </h2>
                    <div
                      className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.18em]"
                      style={{ color: SOFT }}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" style={{ color: CHAMP }} />
                        {b.venue}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" style={{ color: CHAMP }} />
                        {b.season}
                      </span>
                    </div>

                    <p
                      className="mt-6 leading-relaxed sm:text-lg"
                      style={{
                        color: CHARCOAL,
                        fontFamily: serifFamily,
                        fontStyle: "italic",
                        fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                      }}
                    >
                      &ldquo;{b.quote}&rdquo;
                    </p>

                    <p
                      className="mt-6 text-xs uppercase tracking-[0.18em]"
                      style={{ color: CHARCOAL }}
                    >
                      — {b.name.split(" ")[0]}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: BLUSH }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-[11px] uppercase tracking-[0.28em]"
            style={{ color: CHARCOAL, opacity: 0.7 }}
          >
            As seen in
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:mt-10 sm:gap-x-12">
            {press.map((p) => (
              <span
                key={p}
                style={{
                  color: CHARCOAL,
                  fontFamily: serifFamily,
                  fontStyle: "italic",
                  fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 text-center sm:p-12 lg:p-16"
            style={{ backgroundColor: CHARCOAL }}
          >
            <Sparkle
              className="mx-auto h-6 w-6"
              style={{ color: CHAMP }}
              fill={CHAMP}
            />
            <h2
              className="mx-auto mt-5 max-w-2xl leading-[1.05] tracking-tight"
              style={{
                color: IVORY,
                fontFamily: serifFamily,
                fontWeight: 500,
                fontSize: "clamp(2rem, 6vw, 4rem)",
              }}
            >
              Be our{" "}
              <span style={{ fontStyle: "italic", color: CHAMP }}>next.</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed"
              style={{ color: "rgba(251,246,238,0.7)" }}
            >
              Spring 2026 through Fall 2027 dates are currently available.
              Send us your date — we&apos;ll respond within a day.
            </p>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: CHAMP,
                color: CHARCOAL,
              }}
            >
              Begin an inquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
