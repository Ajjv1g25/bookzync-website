"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkle, Heart, Star, MapPin } from "lucide-react";
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

const services = [
  {
    name: "Bridal Hair",
    desc: "Soft updos, modern half-ups, hair-down with texture. Trial included.",
    starting: "$485",
  },
  {
    name: "Bridal Makeup",
    desc: "Skin-led, photograph-ready, never overdone. Trial included.",
    starting: "$425",
  },
  {
    name: "Hair + Makeup",
    desc: "Both services for the bride. Two trials. The most popular package.",
    starting: "$795",
  },
  {
    name: "Bridal Party",
    desc: "Hair, makeup, or both — for each member of your wedding party.",
    starting: "$185+",
  },
];

const testimonials = [
  {
    quote:
      "Margaret listened to me for two hours at my trial. She understood my hair, my dress, my face. On the wedding day I felt completely like myself, just dialed up.",
    name: "Annabel Whitlock",
    location: "Married at Lowndes Grove",
  },
  {
    quote:
      "Worth every penny. They came to our suite at 6am with espresso, did seven of us in three hours, and not a hair shifted at the reception eight hours later.",
    name: "Charlotte Bell",
    location: "Married at Kiawah Island",
  },
];

const locations = ["Charleston", "Kiawah", "Sea Island", "Beaufort", "Sullivan's Island"];

export default function VerbenaHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
        {/* Blush glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full opacity-50 sm:h-[600px] sm:w-[600px]"
          style={{ background: `radial-gradient(circle, ${BLUSH}80, transparent 70%)` }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <p
                  className="text-[11px] uppercase tracking-[0.28em]"
                  style={{ color: CHAMP }}
                >
                  Bridal Hair &amp; Makeup · Charleston
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                className="mt-5 text-balance leading-[1.02] tracking-tight"
                style={{
                  color: CHARCOAL,
                  fontFamily: serifFamily,
                  fontWeight: 500,
                  fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
                }}
              >
                The most considered{" "}
                <span style={{ fontStyle: "italic", color: CHAMP }}>
                  morning
                </span>{" "}
                of your wedding.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
                className="mt-6 max-w-xl text-base leading-relaxed sm:mt-8 sm:text-lg"
                style={{ color: SOFT }}
              >
                Verbena is a small Charleston-based studio doing bridal hair
                and makeup the right way — unhurried, on-location, and
                completely on you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
                className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: CHARCOAL,
                    color: IVORY,
                    boxShadow: "0 12px 32px -8px rgba(43,37,32,0.35)",
                  }}
                >
                  Begin an inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link
                  href={`${BASE}/services`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                  style={{ borderColor: CHARCOAL, color: CHARCOAL }}
                >
                  View services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:mt-12"
                style={{ color: SOFT }}
              >
                <div className="flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5" style={{ color: CHAMP }} fill={CHAMP} />
                  <span style={{ fontFamily: serifFamily, fontStyle: "italic", fontSize: "15px" }}>
                    600+ brides
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5" style={{ color: CHAMP }} fill={CHAMP} />
                  <span style={{ fontFamily: serifFamily, fontStyle: "italic", fontSize: "15px" }}>
                    Featured in Magnolia Rouge &amp; Charleston Magazine
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right — bridal moment card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="relative lg:col-span-5"
            >
              <BridalCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE — left-aligned editorial */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{ color: CHAMP }}
              >
                The experience
              </p>
              <h2
                className="mt-4 leading-[1.05] tracking-tight"
                style={{
                  color: CHARCOAL,
                  fontFamily: serifFamily,
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                }}
              >
                Hair and makeup,{" "}
                <span style={{ fontStyle: "italic", color: CHAMP }}>
                  the slow way.
                </span>
              </h2>
            </div>
            <div className="space-y-8 lg:col-span-7">
              {[
                {
                  num: "I.",
                  title: "Inquiry",
                  body: "Send us your date and venue. We confirm availability and book a discovery call within 24 hours.",
                },
                {
                  num: "II.",
                  title: "Trial",
                  body: "Two hours in our King Street studio. We test looks, photograph them outside in real light, and refine.",
                },
                {
                  num: "III.",
                  title: "Wedding morning",
                  body: "We arrive at your suite or venue, set up, and work through your entire bridal party — calm, on time, on schedule.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                  className="grid grid-cols-12 items-baseline gap-4 border-t pt-6 sm:gap-6 sm:pt-8"
                  style={{ borderColor: "rgba(43,37,32,0.15)" }}
                >
                  <div className="col-span-2 sm:col-span-1">
                    <p
                      style={{
                        color: CHAMP,
                        fontFamily: serifFamily,
                        fontStyle: "italic",
                        fontSize: "1.5rem",
                      }}
                    >
                      {step.num}
                    </p>
                  </div>
                  <div className="col-span-10 sm:col-span-11">
                    <h3
                      className="leading-tight"
                      style={{
                        color: CHARCOAL,
                        fontFamily: serifFamily,
                        fontWeight: 500,
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: SOFT }}>
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="text-[11px] uppercase tracking-[0.28em]"
              style={{ color: CHAMP }}
            >
              Services
            </p>
            <h2
              className="mx-auto mt-4 max-w-2xl leading-[1.05] tracking-tight"
              style={{
                color: CHARCOAL,
                fontFamily: serifFamily,
                fontWeight: 500,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              What we offer,{" "}
              <span style={{ fontStyle: "italic" }}>and for whom.</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {services.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
                className="rounded-2xl border p-7 transition-all hover:-translate-y-1 sm:p-9"
                style={{
                  backgroundColor: IVORY,
                  borderColor: "rgba(43,37,32,0.1)",
                  boxShadow: "0 1px 2px 0 rgba(43,37,32,0.04)",
                }}
              >
                <Sparkle className="h-4 w-4" style={{ color: CHAMP }} fill={CHAMP} />
                <h3
                  className="mt-5 leading-tight"
                  style={{
                    color: CHARCOAL,
                    fontFamily: serifFamily,
                    fontWeight: 500,
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  }}
                >
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: SOFT }}>
                  {s.desc}
                </p>
                <div
                  className="mt-6 flex items-baseline justify-between border-t pt-5"
                  style={{ borderColor: "rgba(43,37,32,0.1)" }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: SOFT }}
                  >
                    Starting at
                  </span>
                  <span
                    style={{
                      color: CHARCOAL,
                      fontFamily: serifFamily,
                      fontStyle: "italic",
                      fontSize: "1.5rem",
                    }}
                  >
                    {s.starting}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center sm:mt-14">
            <Link
              href={`${BASE}/services`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors"
              style={{ color: CHARCOAL }}
            >
              See full services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: BLUSH }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p
            className="text-[11px] uppercase tracking-[0.28em]"
            style={{ color: CHARCOAL, opacity: 0.7 }}
          >
            Where we work
          </p>
          <h2
            className="mx-auto mt-4 max-w-3xl leading-[1.05] tracking-tight"
            style={{
              color: CHARCOAL,
              fontFamily: serifFamily,
              fontWeight: 500,
              fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
            }}
          >
            Across the{" "}
            <span style={{ fontStyle: "italic" }}>Lowcountry.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-5">
            {locations.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm sm:text-base"
                style={{
                  borderColor: "rgba(43,37,32,0.25)",
                  color: CHARCOAL,
                  fontFamily: serifFamily,
                }}
              >
                <MapPin className="h-3.5 w-3.5" style={{ color: CHAMP }} />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-[11px] uppercase tracking-[0.28em]"
            style={{ color: CHAMP }}
          >
            Real brides
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border bg-white p-7 sm:p-10"
                style={{ borderColor: "rgba(43,37,32,0.08)" }}
              >
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(i => (
                    <Star key={i} className="h-3.5 w-3.5" fill={CHAMP} style={{ color: CHAMP }} />
                  ))}
                </div>
                <p
                  className="mt-5 text-base leading-relaxed sm:text-lg"
                  style={{
                    color: CHARCOAL,
                    fontFamily: serifFamily,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="mt-6 border-t pt-5"
                  style={{ borderColor: "rgba(43,37,32,0.08)" }}
                >
                  <p
                    className="text-sm"
                    style={{
                      color: CHARCOAL,
                      fontFamily: serifFamily,
                      fontWeight: 500,
                    }}
                  >
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em]" style={{ color: SOFT }}>
                    {t.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center sm:mt-14">
            <Link
              href={`${BASE}/brides`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors"
              style={{ color: CHARCOAL }}
            >
              More real brides
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING / CTA */}
      <section id="booking" className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 text-center sm:p-12 lg:p-16"
            style={{ backgroundColor: CHARCOAL }}
          >
            <Sparkle className="mx-auto h-6 w-6" style={{ color: CHAMP }} fill={CHAMP} />
            <h2
              className="mx-auto mt-5 max-w-2xl leading-[1.05] tracking-tight"
              style={{
                color: IVORY,
                fontFamily: serifFamily,
                fontWeight: 500,
                fontSize: "clamp(2rem, 6vw, 4rem)",
              }}
            >
              Reserve your{" "}
              <span style={{ fontStyle: "italic", color: CHAMP }}>date.</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed"
              style={{ color: "rgba(251,246,238,0.7)" }}
            >
              We typically book six to twelve months in advance. The earlier
              you reach out, the more we can plan together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: CHAMP,
                  color: CHARCOAL,
                }}
              >
                Begin an inquiry
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:8435550167"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-4 text-xs uppercase tracking-[0.18em] transition-all"
                style={{ borderColor: "rgba(251,246,238,0.3)", color: IVORY }}
              >
                (843) 555-0167
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   Bridal card — soft moment / decorative
   ============================================================ */
function BridalCard() {
  return (
    <div className="mx-auto max-w-sm lg:max-w-none">
      <div className="relative">
        {/* Stacked frames */}
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
            background: `linear-gradient(160deg, ${BLUSH} 0%, ${IVORY} 50%, ${CHAMP}40 100%)`,
            borderColor: "rgba(43,37,32,0.1)",
          }}
        >
          {/* Top accent */}
          <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
            <Sparkle className="h-4 w-4" style={{ color: CHAMP }} fill={CHAMP} />
            <p
              className="mt-4 text-[10px] uppercase tracking-[0.28em]"
              style={{ color: CHARCOAL, opacity: 0.6 }}
            >
              The morning of
            </p>
          </div>

          {/* Center serif quote */}
          <div className="absolute inset-x-6 top-1/3 sm:inset-x-10">
            <p
              className="leading-[1.15]"
              style={{
                color: CHARCOAL,
                fontFamily: serifFamily,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              Quiet. Unhurried.<br />Completely you.
            </p>
          </div>

          {/* Bottom row */}
          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between sm:inset-x-8 sm:bottom-8">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.18em]"
                style={{ color: CHARCOAL, opacity: 0.5 }}
              >
                Booking
              </p>
              <p
                className="mt-1 text-sm"
                style={{
                  color: CHARCOAL,
                  fontFamily: serifFamily,
                  fontStyle: "italic",
                }}
              >
                Spring &apos;26 — Fall &apos;27
              </p>
            </div>
            <div className="flex gap-0.5">
              {[0,1,2,3,4].map(i => (
                <Star key={i} className="h-3 w-3" style={{ color: CHAMP }} fill={CHAMP} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
