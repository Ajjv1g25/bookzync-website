"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/salon/modern-salon";
const easeOut = [0.16, 1, 0.3, 1] as const;

const AMBER = "#F59E0B";
const CLAY = "#D87A47";
const INK = "#1A1410";
const CREAM = "#FAF7F0";
const SOFT = "#6B5C4D";

const stylists = [
  {
    num: "01",
    name: "Reese Park",
    role: "Founder · Color Specialist",
    years: 14,
    handle: "@reese.colors",
    bio: "Reese opened Atelier N°9 in 2017 after a decade working between Vidal Sassoon Academy and a high-volume color salon in SoHo. She specializes in advanced color correction, modern balayage, and the kind of dimension that doesn't look like dimension. Won't lighten anyone she doesn't think it'll work on.",
    focuses: ["Balayage", "Color correction", "Blondes"],
    bg: `linear-gradient(135deg, ${AMBER}, ${CLAY})`,
  },
  {
    num: "02",
    name: "Mara Whitfield",
    role: "Senior Stylist",
    years: 9,
    handle: "@mara.cuts.hair",
    bio: "Mara is Atelier's resident shape specialist. Trained under Vidal Sassoon principles and pulls inspiration from 90s editorial, Japanese textured cutting, and her grandmother's hairdresser in Yorkshire. If you've ever wanted a fringe but were too scared, talk to Mara.",
    focuses: ["Precision cuts", "Curtain bangs", "Curl cutting"],
    bg: `linear-gradient(135deg, ${INK}, ${CLAY})`,
  },
  {
    num: "03",
    name: "Jordan Reyes",
    role: "Stylist · Men's Specialist",
    years: 6,
    handle: "@jordancuts",
    bio: "Jordan came up through barbering before training in editorial cutting. He runs Atelier's men's program — fades, classic scissor work, beards, and color camo for guys who don't want to look like they color. Books two weeks out.",
    focuses: ["Men's editorial", "Fades", "Beard work"],
    bg: `linear-gradient(135deg, ${CLAY}, ${INK})`,
  },
];

export default function AtelierTeam() {
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
              — Team
            </p>
            <h1
              className="mt-3 font-black leading-[0.95] tracking-tight"
              style={{
                color: INK,
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              }}
            >
              Three stylists.<br />
              <span style={{ color: AMBER, fontStyle: "italic" }}>One philosophy.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {stylists.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: easeOut }}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
                >
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    <div
                      className="relative aspect-[3/4] border-2"
                      style={{ background: s.bg, borderColor: INK }}
                    >
                      <p
                        className="absolute left-4 top-4 font-mono text-xl font-black sm:text-2xl"
                        style={{ color: INK }}
                      >
                        {s.num}
                      </p>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                    <p
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: CLAY }}
                    >
                      {s.role}
                    </p>
                    <h2
                      className="mt-3 font-black leading-[0.95] tracking-tight"
                      style={{
                        color: INK,
                        fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
                      }}
                    >
                      {s.name}
                    </h2>
                    <div
                      className="mt-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{ color: SOFT }}
                    >
                      <span>{s.years} years</span>
                      <span>·</span>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition-colors"
                        style={{ color: CLAY }}
                      >
                        <Instagram className="h-3 w-3" />
                        {s.handle}
                      </a>
                    </div>

                    <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: INK }}>
                      {s.bio}
                    </p>

                    <div className="mt-6">
                      <p
                        className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: SOFT }}
                      >
                        Focus
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.focuses.map((f) => (
                          <span
                            key={f}
                            className="border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]"
                            style={{
                              borderColor: INK,
                              color: INK,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openChatbot("general")}
                      className="group mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: INK,
                        color: CREAM,
                        boxShadow: "0 12px 32px -8px rgba(26,20,16,0.4)",
                      }}
                    >
                      Book with {s.name.split(" ")[0]}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 text-center sm:p-12 lg:p-16" style={{ backgroundColor: INK }}>
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: AMBER }}>
              — Want a specific stylist?
            </p>
            <h2
              className="mx-auto mt-4 max-w-2xl font-black leading-[0.95] tracking-tight"
              style={{
                color: CREAM,
                fontSize: "clamp(2rem, 6vw, 3.75rem)",
              }}
            >
              Just{" "}
              <span style={{ color: AMBER, fontStyle: "italic" }}>ask.</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-md text-base leading-relaxed"
              style={{ color: "rgba(250,247,240,0.7)" }}
            >
              Our chat books with any stylist on the team. Tell us who, when,
              what — we&apos;ll get it locked in.
            </p>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: AMBER, color: INK }}
            >
              Book a stylist
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
