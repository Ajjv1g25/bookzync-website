"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Dumbbell,
  Heart,
  Waves,
  Flame,
  Users,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/full-gym";
const easeOut = [0.16, 1, 0.3, 1] as const;

const ORANGE = "#F97316";
const ORANGE_DARK = "#EA580C";
const SLATE = "#1E293B";
const SLATE_LIGHT = "#475569";
const CREAM = "#F8F7F4";
const MUTED = "#64748B";

const amenities = [
  { icon: Dumbbell, name: "Strength Floor", desc: "Plate-loaded, dumbbells to 150 lb, racks, platforms." },
  { icon: Heart, name: "Cardio Hall", desc: "Treadmills, bikes, rowers, stair climbers. All connected." },
  { icon: Flame, name: "Group Fitness", desc: "Two large studios. 60+ weekly classes. From spin to barre." },
  { icon: Waves, name: "Lap Pool", desc: "25-yard, 4 lanes, heated. Aqua fitness and lap swims." },
  { icon: Sparkles, name: "Recovery", desc: "Sauna, steam, cold plunge, massage chairs. Locker amenities." },
  { icon: Users, name: "Personal Training", desc: "Certified trainers. 1-on-1 or 2-on-1 small group." },
];

const stats = [
  { value: "32,000", label: "Sq ft" },
  { value: "60+", label: "Weekly classes" },
  { value: "24/7", label: "Member access" },
  { value: "4.8 ★", label: "Member rating" },
];

const tiers = [
  {
    name: "Off-Peak",
    price: "$79",
    sub: "/ month",
    desc: "All amenities, 9am — 4pm weekdays.",
    perks: ["Full club access", "Group classes included", "Sauna + steam + cold plunge", "30-day cancel"],
    popular: false,
  },
  {
    name: "All-Access",
    price: "$129",
    sub: "/ month",
    desc: "The standard — all hours, all amenities.",
    perks: ["24/7 keycard access", "All 60+ classes/week", "Pool, sauna, recovery", "Guest passes (2/mo)"],
    popular: true,
  },
  {
    name: "Performance",
    price: "$229",
    sub: "/ month",
    desc: "All-Access + 4 monthly PT sessions.",
    perks: ["Everything in All-Access", "4 PT sessions / month", "InBody body comp scans", "Priority booking"],
    popular: false,
  },
];

export default function NorthpointHome() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        {/* Soft orange glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-20 h-[400px] w-[400px] rounded-full opacity-30 sm:h-[560px] sm:w-[560px]"
          style={{
            background: `radial-gradient(circle, ${ORANGE}66, transparent 70%)`,
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
                  style={{
                    backgroundColor: `${ORANGE}1F`,
                    color: ORANGE_DARK,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ORANGE }}
                  />
                  Pearl District · Portland
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="mt-5 text-balance font-bold leading-[1.05] tracking-tight sm:mt-6"
                style={{
                  color: SLATE,
                  fontSize: "clamp(2.25rem, 6.5vw, 4.5rem)",
                }}
              >
                The whole club.{" "}
                <span style={{ color: ORANGE }}>One membership.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
                className="mt-5 max-w-xl text-base leading-relaxed sm:mt-7 sm:text-lg"
                style={{ color: MUTED }}
              >
                Northpoint is a 32,000 sq ft athletic club in the Pearl
                District. Strength, cardio, classes, pool, sauna, recovery —
                everything you need to train, all in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
                className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                    boxShadow:
                      "0 1px 0 0 rgba(255,255,255,0.2) inset, 0 12px 32px -8px rgba(249,115,22,0.55)",
                  }}
                >
                  Get a free day pass
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link
                  href={`${BASE}/membership`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3.5 text-base font-semibold transition-all hover:-translate-y-0.5"
                  style={{ borderColor: SLATE, color: SLATE }}
                >
                  See memberships
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium sm:mt-10"
                style={{ color: MUTED }}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" style={{ color: ORANGE }} />
                  <span>Free trial day pass</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4" style={{ color: ORANGE }} fill={ORANGE} />
                  <span>4.8 / 5 · 2,400+ members</span>
                </div>
              </motion.div>
            </div>

            {/* Right — amenity preview card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="relative lg:col-span-5"
            >
              <HeroCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 gap-y-6 rounded-2xl border bg-white px-6 py-7 sm:grid-cols-4 sm:px-10 sm:py-8"
            style={{ borderColor: "rgba(30,41,59,0.08)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: SLATE }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs"
                  style={{ color: ORANGE }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="scroll-mt-24 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              The amenities
            </p>
            <h2
              className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: SLATE }}
            >
              Everything in one place.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
              Northpoint is six floors of training surface. Strength, conditioning,
              recovery, and community — under one keycard.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <motion.article
                key={a.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: easeOut }}
                className="group rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 sm:p-7"
                style={{
                  borderColor: "rgba(30,41,59,0.08)",
                  boxShadow: "0 1px 2px 0 rgba(30,41,59,0.04)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${ORANGE}1F`,
                    color: ORANGE_DARK,
                  }}
                >
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold" style={{ color: SLATE }}>
                  {a.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {a.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: "#EEEAE1" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
              Membership
            </p>
            <h2
              className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: SLATE }}
            >
              Pick the tier that fits.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
              Month-to-month. No long contracts. Switch tiers or cancel any time
              with 30 days notice.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {tiers.map((tier, i) => (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                className={`relative flex flex-col rounded-2xl border p-7 sm:p-9 ${
                  tier.popular ? "lg:-translate-y-3" : ""
                }`}
                style={{
                  backgroundColor: tier.popular ? SLATE : "white",
                  borderColor: tier.popular ? ORANGE : "rgba(30,41,59,0.1)",
                  boxShadow: tier.popular
                    ? "0 24px 48px -16px rgba(249,115,22,0.3)"
                    : "0 1px 2px 0 rgba(30,41,59,0.04)",
                }}
              >
                {tier.popular && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Most popular
                  </span>
                )}

                <h3
                  className="text-xl font-bold leading-tight sm:text-2xl"
                  style={{ color: tier.popular ? CREAM : SLATE }}
                >
                  {tier.name}
                </h3>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className="text-4xl font-bold tracking-tight sm:text-5xl"
                    style={{ color: tier.popular ? ORANGE : SLATE }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: tier.popular ? "rgba(248,247,244,0.6)" : MUTED,
                    }}
                  >
                    {tier.sub}
                  </span>
                </div>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{
                    color: tier.popular ? "rgba(248,247,244,0.7)" : MUTED,
                  }}
                >
                  {tier.desc}
                </p>

                <ul
                  className="mt-6 flex-1 space-y-3 border-t pt-5"
                  style={{
                    borderColor: tier.popular
                      ? "rgba(248,247,244,0.15)"
                      : "rgba(30,41,59,0.1)",
                  }}
                >
                  {tier.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                      style={{
                        color: tier.popular ? "rgba(248,247,244,0.9)" : SLATE,
                      }}
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        style={{ color: ORANGE }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: tier.popular ? ORANGE : SLATE,
                    color: tier.popular ? CREAM : CREAM,
                    boxShadow: tier.popular
                      ? "0 8px 24px -8px rgba(249,115,22,0.55)"
                      : "0 8px 24px -8px rgba(30,41,59,0.4)",
                  }}
                >
                  Choose {tier.name}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <Link
              href={`${BASE}/membership`}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: SLATE }}
            >
              Compare all benefits
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLASSES TEASER */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                Group fitness
              </p>
              <h2
                className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                style={{ color: SLATE }}
              >
                60+ classes a week.{" "}
                <span style={{ color: ORANGE }}>Always something on.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
                Spin, barre, yoga, HIIT, pilates, kickbox, cycle — taught by
                certified instructors in two dedicated studios.
              </p>
              <Link
                href={`${BASE}/classes`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: SLATE }}
              >
                See the full schedule
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:gap-4">
              {[
                { name: "Spin", count: "12 / week", bg: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})` },
                { name: "Yoga", count: "10 / week", bg: `linear-gradient(135deg, ${SLATE}, ${SLATE_LIGHT})` },
                { name: "HIIT", count: "8 / week", bg: `linear-gradient(135deg, ${SLATE_LIGHT}, ${ORANGE})` },
                { name: "Barre", count: "6 / week", bg: `linear-gradient(135deg, ${ORANGE}AA, ${SLATE_LIGHT})` },
              ].map((c) => (
                <article
                  key={c.name}
                  className="aspect-square overflow-hidden rounded-2xl p-5 sm:aspect-[4/3] sm:p-6"
                  style={{ background: c.bg }}
                >
                  <div className="flex h-full flex-col justify-between">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80"
                    >
                      {c.count}
                    </span>
                    <p className="text-2xl font-bold leading-none text-white sm:text-3xl">
                      {c.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16"
            style={{
              background: `linear-gradient(135deg, ${SLATE}, ${SLATE_LIGHT})`,
            }}
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                  Day pass
                </p>
                <h2
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                  style={{ color: CREAM }}
                >
                  Try us free.{" "}
                  <span style={{ color: ORANGE }}>One day, on the house.</span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: "rgba(248,247,244,0.7)" }}>
                  Use everything. Strength floor, cardio hall, classes, pool,
                  sauna, recovery. Decide after.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 text-base font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                    color: CREAM,
                    boxShadow: "0 12px 32px -8px rgba(249,115,22,0.55)",
                  }}
                >
                  Claim your day pass
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroCard() {
  return (
    <div className="mx-auto max-w-sm lg:max-w-none">
      <div
        className="relative overflow-hidden rounded-2xl border bg-white p-6 sm:p-7"
        style={{
          borderColor: "rgba(30,41,59,0.08)",
          boxShadow:
            "0 1px 2px 0 rgba(30,41,59,0.04), 0 24px 48px -16px rgba(30,41,59,0.18)",
        }}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
            Today's classes
          </p>
          <div
            className="flex items-center gap-1.5 text-[10px] font-semibold"
            style={{ color: ORANGE_DARK }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: ORANGE }} />
            Live updates
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {[
            { time: "6:00 AM", name: "Spin · Studio A", spots: "4 left", color: ORANGE },
            { time: "7:30 AM", name: "Vinyasa Yoga", spots: "2 left", color: SLATE },
            { time: "9:00 AM", name: "HIIT 45", spots: "12 left", color: ORANGE },
            { time: "12:00 PM", name: "Barre Sculpt", spots: "Open", color: SLATE_LIGHT },
            { time: "5:30 PM", name: "Cycle 30", spots: "Full", color: MUTED },
            { time: "7:00 PM", name: "Power Vinyasa", spots: "6 left", color: ORANGE },
          ].map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg px-3 py-2.5"
              style={{
                backgroundColor: c.spots === "Full" ? "rgba(30,41,59,0.04)" : "#FFF7ED",
                opacity: c.spots === "Full" ? 0.6 : 1,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tabular-nums" style={{ color: SLATE }}>
                  {c.time}
                </span>
                <span className="text-xs font-medium" style={{ color: SLATE }}>
                  {c.name}
                </span>
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{ color: c.color }}
              >
                {c.spots}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
