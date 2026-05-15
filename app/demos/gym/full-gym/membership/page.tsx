"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/full-gym";
const easeOut = [0.16, 1, 0.3, 1] as const;

const ORANGE = "#F97316";
const ORANGE_DARK = "#EA580C";
const SLATE = "#1E293B";
const SLATE_LIGHT = "#475569";
const CREAM = "#F8F7F4";
const MUTED = "#64748B";

const tiers = [
  {
    name: "Off-Peak",
    price: "$79",
    sub: "/ month",
    desc: "Train when the club is quieter. All amenities, 9am — 4pm weekdays only.",
    popular: false,
  },
  {
    name: "All-Access",
    price: "$129",
    sub: "/ month",
    desc: "The standard membership. All hours, all amenities, all classes.",
    popular: true,
  },
  {
    name: "Performance",
    price: "$229",
    sub: "/ month",
    desc: "All-Access plus 4 personal training sessions per month and InBody scans.",
    popular: false,
  },
];

const benefits = [
  { label: "Strength floor access", offPeak: true, allAccess: true, performance: true },
  { label: "Cardio hall access", offPeak: true, allAccess: true, performance: true },
  { label: "Lap pool & aquatic", offPeak: true, allAccess: true, performance: true },
  { label: "Sauna, steam, cold plunge", offPeak: true, allAccess: true, performance: true },
  { label: "Group fitness classes (60+/wk)", offPeak: true, allAccess: true, performance: true },
  { label: "Locker, towel, amenities", offPeak: true, allAccess: true, performance: true },
  { label: "24/7 keycard access", offPeak: false, allAccess: true, performance: true },
  { label: "Guest passes (2 / month)", offPeak: false, allAccess: true, performance: true },
  { label: "Priority class booking", offPeak: false, allAccess: false, performance: true },
  { label: "Personal training (4 / month)", offPeak: false, allAccess: false, performance: true },
  { label: "InBody body composition scans", offPeak: false, allAccess: false, performance: true },
  { label: "Annual lockout suite", offPeak: false, allAccess: false, performance: true },
];

const enrollment = [
  { num: "01", title: "Chat with us", body: "Our team reviews your training goals and schedule, then recommends a tier." },
  { num: "02", title: "Tour the club", body: "Free 45-minute walk-through with a member services coach. Sample a class on us." },
  { num: "03", title: "Activate", body: "Sign electronically, pay your first month, get your keycard. You're in." },
];

export default function NorthpointMembership() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={BASE}
            className="text-xs font-semibold transition-colors"
            style={{ color: MUTED }}
          >
            ← Northpoint Athletic Club
          </Link>

          <div className="mt-8 max-w-3xl sm:mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
              Membership
            </p>
            <h1
              className="mt-3 font-bold leading-[1.05] tracking-tight"
              style={{
                color: SLATE,
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
              }}
            >
              Three tiers.{" "}
              <span style={{ color: ORANGE }}>No long contracts.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
              Month-to-month memberships. Cancel any time with 30 days notice.
              No initiation fees on annual sign-ups. Family rates available.
            </p>
          </div>
        </div>
      </section>

      {/* TIER CARDS */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
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

                <button
                  type="button"
                  onClick={() => openChatbot("general")}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: tier.popular ? ORANGE : SLATE,
                    color: CREAM,
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
        </div>
      </section>

      {/* COMPARE BENEFITS */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
            Compare
          </p>
          <h2
            className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: SLATE }}
          >
            What&apos;s included.
          </h2>

          <div
            className="mt-10 overflow-x-auto rounded-2xl border bg-white sm:mt-12"
            style={{ borderColor: "rgba(30,41,59,0.08)" }}
          >
            <table className="w-full min-w-[640px]">
              <thead>
                <tr
                  className="border-b"
                  style={{ borderColor: "rgba(30,41,59,0.1)" }}
                >
                  <th
                    className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.14em] sm:px-6 sm:py-5"
                    style={{ color: MUTED }}
                  >
                    Benefit
                  </th>
                  <th
                    className="px-3 py-4 text-center text-xs font-bold sm:px-4 sm:py-5"
                    style={{ color: SLATE }}
                  >
                    Off-Peak
                  </th>
                  <th
                    className="px-3 py-4 text-center text-xs font-bold sm:px-4 sm:py-5"
                    style={{ color: ORANGE }}
                  >
                    All-Access
                  </th>
                  <th
                    className="px-3 py-4 text-center text-xs font-bold sm:px-4 sm:py-5"
                    style={{ color: SLATE }}
                  >
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((b, i) => (
                  <tr
                    key={b.label}
                    className="border-t"
                    style={{
                      borderColor: "rgba(30,41,59,0.08)",
                      backgroundColor: i % 2 === 0 ? "transparent" : "rgba(30,41,59,0.02)",
                    }}
                  >
                    <td
                      className="px-5 py-4 text-sm sm:px-6 sm:py-5 sm:text-[15px]"
                      style={{ color: SLATE }}
                    >
                      {b.label}
                    </td>
                    {[b.offPeak, b.allAccess, b.performance].map((has, j) => (
                      <td key={j} className="px-3 py-4 text-center sm:px-4 sm:py-5">
                        {has ? (
                          <CheckCircle2
                            className="mx-auto h-5 w-5"
                            style={{ color: ORANGE }}
                          />
                        ) : (
                          <X
                            className="mx-auto h-4 w-4"
                            style={{ color: MUTED, opacity: 0.4 }}
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ENROLLMENT */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: "#EEEAE1" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                Enrollment
              </p>
              <h2
                className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                style={{ color: SLATE }}
              >
                Three steps to get going.
              </h2>
              <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
                Most new members are training within 24 hours. The whole
                process is conversational — start a chat below.
              </p>
            </div>

            <div className="space-y-6 lg:col-span-7">
              {enrollment.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                  className="flex gap-5 rounded-2xl border bg-white p-6 sm:p-7"
                  style={{ borderColor: "rgba(30,41,59,0.08)" }}
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-bold sm:h-12 sm:w-12"
                    style={{
                      backgroundColor: `${ORANGE}1F`,
                      color: ORANGE_DARK,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight sm:text-xl" style={{ color: SLATE }}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: MUTED }}>
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            className="font-bold leading-tight tracking-tight"
            style={{
              color: SLATE,
              fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
            }}
          >
            Ready to{" "}
            <span style={{ color: ORANGE }}>join the club?</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-md text-base leading-relaxed sm:text-lg"
            style={{ color: MUTED }}
          >
            Try us free for a day. Use everything. Decide after.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="group inline-flex items-center gap-2 rounded-lg px-7 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                boxShadow: "0 12px 32px -8px rgba(249,115,22,0.55)",
              }}
            >
              Claim your free day pass
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="tel:5035550376"
              className="inline-flex items-center gap-2 rounded-lg border-2 px-7 py-4 text-base font-semibold transition-all"
              style={{ borderColor: SLATE, color: SLATE }}
            >
              (503) 555-0376
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
