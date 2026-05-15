"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/salon/modern-salon";
const easeOut = [0.16, 1, 0.3, 1] as const;

const AMBER = "#F59E0B";
const CLAY = "#D87A47";
const INK = "#1A1410";
const CREAM = "#FAF7F0";
const SOFT = "#6B5C4D";

const categories = [
  {
    title: "Cut",
    services: [
      { name: "Editorial Cut", price: "$95", duration: "60 min", desc: "Consultation, wash, precision cut, blow-dry." },
      { name: "Buzz / Bald", price: "$45", duration: "30 min", desc: "Clippers, line work, neck shave with hot towel." },
      { name: "Bang Trim", price: "$25", duration: "15 min", desc: "Walk-in. Between full cuts." },
    ],
  },
  {
    title: "Color",
    services: [
      { name: "Single Process", price: "$180+", duration: "120 min", desc: "Root touch-up or all-over color, gloss finish." },
      { name: "Gloss / Toner", price: "$95", duration: "45 min", desc: "Tone, shine, and refresh between color appointments." },
      { name: "Color Correction", price: "$420+", duration: "By consultation", desc: "Multi-session work. Always starts with a free consult." },
    ],
  },
  {
    title: "Highlights & Balayage",
    services: [
      { name: "Partial Balayage", price: "$240", duration: "150 min", desc: "Hand-painted highlights through the top." },
      { name: "Full Balayage", price: "$320+", duration: "210 min", desc: "The signature service. Full head, ends-out brightness." },
      { name: "Foilayage", price: "$380+", duration: "240 min", desc: "Foiled balayage for maximum lift and dimension." },
    ],
  },
  {
    title: "Men's",
    services: [
      { name: "Cut & Style", price: "$75", duration: "45 min", desc: "Wash, cut, style. The standard." },
      { name: "Cut + Beard", price: "$95", duration: "60 min", desc: "Add a beard trim with hot towel." },
      { name: "Color Camo", price: "$85", duration: "45 min", desc: "Subtle gray blending. Looks like nothing happened." },
    ],
  },
];

export default function AtelierServices() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            style={{ color: SOFT }}
          >
            ← Atelier N°9
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: CLAY }}>
              — Services
            </p>
            <h1
              className="mt-3 font-black leading-[0.95] tracking-tight"
              style={{
                color: INK,
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              }}
            >
              The whole<br />
              <span style={{ color: AMBER, fontStyle: "italic" }}>menu.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: SOFT }}>
              Pricing is a starting point. Final cost depends on hair length,
              density, and what we&apos;re actually doing. We&apos;ll always
              quote you before we start.
            </p>
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.title} className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-baseline gap-4 sm:mb-12">
              <h2
                className="text-3xl font-black leading-none tracking-tight sm:text-4xl"
                style={{ color: INK }}
              >
                {cat.title}
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: INK, opacity: 0.15 }} />
            </div>

            <div className="space-y-0">
              {cat.services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: easeOut }}
                  className="group grid grid-cols-12 items-center gap-4 border-t py-5 transition-colors sm:gap-6 sm:py-7"
                  style={{ borderColor: "rgba(26,20,16,0.15)" }}
                >
                  <div className="col-span-12 sm:col-span-5">
                    <h3 className="text-xl font-black leading-tight sm:text-2xl" style={{ color: INK }}>
                      {s.name}
                    </h3>
                    <p
                      className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: CLAY }}
                    >
                      {s.duration}
                    </p>
                  </div>
                  <div className="col-span-9 sm:col-span-5">
                    <p className="text-sm leading-relaxed sm:text-[15px]" style={{ color: SOFT }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-right">
                    <p className="font-mono text-lg font-bold tabular-nums sm:text-2xl" style={{ color: INK }}>
                      {s.price}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="border-t" style={{ borderColor: "rgba(26,20,16,0.15)" }} />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="font-black leading-[0.95] tracking-tight"
            style={{
              color: INK,
              fontSize: "clamp(2rem, 6vw, 4rem)",
            }}
          >
            Not sure where to{" "}
            <span style={{ color: AMBER, fontStyle: "italic" }}>start?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: SOFT }}>
            Send our chat your hair situation. We&apos;ll match you with the
            right stylist and the right service in under a minute.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: INK,
                color: CREAM,
                boxShadow: "0 12px 32px -8px rgba(26,20,16,0.4)",
              }}
            >
              Chat with us
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <Link
              href={`${BASE}/team`}
              className="inline-flex items-center gap-2 border-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all"
              style={{ borderColor: INK, color: INK }}
            >
              See the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
