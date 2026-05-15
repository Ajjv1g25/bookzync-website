"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Star, Scissors, Sparkles } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/salon/modern-salon";
const easeOut = [0.16, 1, 0.3, 1] as const;

const AMBER = "#F59E0B";
const CLAY = "#D87A47";
const INK = "#1A1410";
const CREAM = "#FAF7F0";
const SOFT = "#6B5C4D";

const services = [
  { num: "01", name: "Cut", desc: "Editorial precision cuts. Consultation included.", price: "$95+" },
  { num: "02", name: "Color", desc: "Single process, gloss, color correction.", price: "$180+" },
  { num: "03", name: "Balayage", desc: "Hand-painted highlights. The Atelier signature.", price: "$320+" },
  { num: "04", name: "Men's grooming", desc: "Cut, beard, hot towel. The whole thing.", price: "$75+" },
];

const stylists = [
  { name: "Reese Park", role: "Founder · Color Specialist", years: 14 },
  { name: "Mara Whitfield", role: "Senior Stylist", years: 9 },
];

export default function AtelierHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO — big editorial */}
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: CLAY }}
          >
            Williamsburg · est. 2017
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="mt-4 text-balance font-black leading-[0.95] tracking-tight sm:mt-6"
            style={{
              color: INK,
              fontSize: "clamp(2.75rem, 11vw, 8rem)",
            }}
          >
            Hair, but{" "}
            <span style={{ color: AMBER, fontStyle: "italic" }}>actually</span>
            <br />
            considered.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
          >
            <p
              className="max-w-md text-base leading-relaxed lg:col-span-5 lg:text-lg"
              style={{ color: SOFT }}
            >
              Atelier N°9 is a small, contemporary hair studio. Six chairs.
              Long appointment windows. Stylists who&apos;ll tell you what
              your hair actually wants.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-7 lg:items-end lg:justify-end">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: INK,
                  color: CREAM,
                  boxShadow: "0 12px 32px -8px rgba(26,20,16,0.4)",
                }}
              >
                Book online
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <Link
                href={`${BASE}/services`}
                className="inline-flex items-center justify-center gap-2 border-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
                style={{ borderColor: INK, color: INK }}
              >
                See services
              </Link>
            </div>
          </motion.div>

          {/* Big amber accent block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="mt-12 grid grid-cols-12 gap-3 sm:mt-16"
          >
            <div
              className="col-span-12 aspect-[16/9] sm:col-span-8 sm:aspect-[16/8]"
              style={{
                background: `linear-gradient(135deg, ${AMBER} 0%, ${CLAY} 100%)`,
              }}
            >
              <div className="flex h-full items-end p-5 sm:p-8">
                <div>
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: INK }}
                  >
                    The studio
                  </p>
                  <p
                    className="mt-2 text-2xl font-black leading-tight sm:text-3xl"
                    style={{ color: INK }}
                  >
                    Six chairs.
                    <br />
                    Three colorists.
                    <br />
                    One philosophy.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-span-12 grid grid-cols-2 gap-3 sm:col-span-4 sm:grid-cols-1"
            >
              <div
                className="aspect-square sm:aspect-auto sm:h-1/2"
                style={{ backgroundColor: INK }}
              >
                <div className="flex h-full flex-col justify-between p-4 sm:p-5">
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: AMBER }}
                  >
                    Reviews
                  </p>
                  <div>
                    <p className="text-3xl font-black leading-none sm:text-4xl" style={{ color: CREAM }}>4.9</p>
                    <div className="mt-1.5 flex gap-0.5">
                      {[0,1,2,3,4].map(i => (
                        <Star key={i} className="h-3 w-3" fill={AMBER} style={{ color: AMBER }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="aspect-square sm:aspect-auto sm:h-1/2"
                style={{ backgroundColor: CREAM, border: `2px solid ${INK}` }}
              >
                <div className="flex h-full flex-col justify-between p-4 sm:p-5">
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: CLAY }}
                  >
                    Bookings
                  </p>
                  <div>
                    <p className="text-3xl font-black leading-none sm:text-4xl" style={{ color: INK }}>2.4k</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: SOFT }}>
                      Last year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES — big editorial list */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: CLAY }}>
                — Services
              </p>
              <h2
                className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: INK }}
              >
                The work.
              </h2>
            </div>
            <Link
              href={`${BASE}/services`}
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] transition-colors"
              style={{ color: INK }}
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 sm:mt-14">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: easeOut }}
                className="group grid grid-cols-12 items-center gap-4 border-t py-6 transition-colors sm:gap-6 sm:py-8"
                style={{ borderColor: "rgba(26,20,16,0.15)" }}
              >
                <div className="col-span-2 sm:col-span-1">
                  <p
                    className="font-mono text-base font-bold sm:text-lg"
                    style={{ color: CLAY }}
                  >
                    {s.num}
                  </p>
                </div>
                <div className="col-span-7 sm:col-span-5">
                  <h3
                    className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl"
                    style={{ color: INK }}
                  >
                    {s.name}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-sm leading-relaxed sm:text-[15px]" style={{ color: SOFT }}>
                    {s.desc}
                  </p>
                </div>
                <div className="col-span-3 sm:col-span-2 text-right">
                  <p
                    className="font-mono text-base font-bold tabular-nums sm:text-lg"
                    style={{ color: INK }}
                  >
                    {s.price}
                  </p>
                </div>
              </motion.div>
            ))}
            <div
              className="border-t"
              style={{ borderColor: "rgba(26,20,16,0.15)" }}
            />
          </div>
        </div>
      </section>

      {/* THE STUDIO */}
      <section id="studio" className="scroll-mt-24 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: INK }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: AMBER }}>
                — The space
              </p>
              <h2
                className="mt-4 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl"
                style={{ color: CREAM }}
              >
                Built around{" "}
                <span style={{ color: AMBER }}>your hour.</span>
              </h2>
              <p
                className="mt-6 text-base leading-relaxed sm:text-[17px]"
                style={{ color: "rgba(250,247,240,0.7)" }}
              >
                We renovated a 1,400 sq ft loft on North 9th into a six-chair
                studio with proper natural light, vinyl on the record player,
                and an espresso machine that gets used.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4">
              {[
                { label: "Square feet", value: "1,400" },
                { label: "Chairs", value: "6" },
                { label: "Wash basins", value: "4" },
                { label: "Free wifi", value: "Yes" },
                { label: "Espresso", value: "Always" },
                { label: "Cat", value: "Friday" },
              ].map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.03, ease: easeOut }}
                  className="border p-5 sm:p-6"
                  style={{ borderColor: "rgba(245,158,11,0.25)" }}
                >
                  <p
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: AMBER }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="mt-2 text-3xl font-black tracking-tight sm:text-4xl"
                    style={{ color: CREAM }}
                  >
                    {f.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: CLAY }}>
                — Team
              </p>
              <h2
                className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl"
                style={{ color: INK }}
              >
                Three<br />stylists.
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: SOFT }}>
                Each with their own waitlist, each with their own thing.
              </p>
              <Link
                href={`${BASE}/team`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em]"
                style={{ color: INK }}
              >
                Meet the team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              {stylists.map((s, i) => (
                <article key={s.name} className="overflow-hidden border-2" style={{ borderColor: INK }}>
                  <div
                    className="aspect-[3/4]"
                    style={{
                      background: i === 0
                        ? `linear-gradient(135deg, ${AMBER}, ${CLAY})`
                        : `linear-gradient(135deg, ${INK}, ${CLAY})`,
                    }}
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-black leading-tight sm:text-xl" style={{ color: INK }}>
                      {s.name}
                    </h3>
                    <p
                      className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: CLAY }}
                    >
                      {s.role}
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: SOFT }}>
                      {s.years} years
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 text-center sm:p-12 lg:p-16" style={{ backgroundColor: AMBER }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: INK }}>
              — Ready
            </p>
            <h2
              className="mx-auto mt-4 max-w-2xl font-black leading-[0.95] tracking-tight"
              style={{
                color: INK,
                fontSize: "clamp(2.25rem, 7vw, 4.5rem)",
              }}
            >
              Find a chair.<br />
              <span style={{ fontStyle: "italic" }}>Find a stylist.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: INK }}>
              Most new clients book a consultation first — 20 minutes, free,
              walk-out with a plan.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openChatbot("general")}
                className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: INK,
                  color: CREAM,
                  boxShadow: "0 12px 32px -8px rgba(26,20,16,0.5)",
                }}
              >
                Book now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <a
                href="tel:3475550182"
                className="inline-flex items-center gap-2 border-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
                style={{ borderColor: INK, color: INK }}
              >
                (347) 555-0182
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
