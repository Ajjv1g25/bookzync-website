"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  Moon,
  Sun,
  Filter,
  Repeat,
  Users,
} from "lucide-react";
import { FadeIn, RevealHeading } from "@/components/motion/fade-in";
import { type IndustryConfig } from "@/lib/industry-config";

/* =================================================================
   Dispatcher — pick the right calculator for the industry
   ================================================================= */
export function IndustryCalculator({ cfg }: { cfg: IndustryConfig }) {
  switch (cfg.key) {
    case "dental":
      return <DentalCalculator cfg={cfg} />;
    case "medical":
      return <MedicalCalculator cfg={cfg} />;
    case "salon":
      return <SalonCalculator cfg={cfg} />;
    case "gym":
      return <GymCalculator cfg={cfg} />;
  }
}

/* =================================================================
   Shared primitives
   ================================================================= */
function CalculatorSection({
  cfg,
  title,
  subtitle,
  children,
}: {
  cfg: IndustryConfig;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section
      id="calculator"
      className="relative border-t border-border bg-bg-subtle/30 py-24 lg:py-28"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 opacity-25 dark:opacity-50"
        style={{
          background: `radial-gradient(ellipse at center top, ${cfg.accentGlow}, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
            style={{
              borderColor: `${cfg.accentHex}33`,
              backgroundColor: `${cfg.accentHex}15`,
              color: cfg.accentHex,
            }}
          >
            {cfg.shortName} ROI calculator
          </div>
        </FadeIn>
        <RevealHeading className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
            {title}
          </h2>
        </RevealHeading>
        <FadeIn delay={0.15} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-balance text-base text-text-muted sm:text-lg">
            {subtitle}
          </p>
        </FadeIn>
        <FadeIn className="mt-14">{children}</FadeIn>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  accent,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  accent: string;
  format: (n: number) => string;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-text">{label}</label>
        <span
          className="font-mono text-2xl font-semibold tracking-tight"
          style={{ color: accent }}
        >
          {format(value)}
        </span>
      </div>
      <div className="relative mt-4 py-2">
        {/* Track */}
        <div className="h-2 rounded-full bg-border-strong/40" />
        {/* Fill — no transition during drag; positioned absolutely over track */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full"
          style={{
            width: `${percent}%`,
            backgroundColor: accent,
            boxShadow: `0 0 12px ${accent}66`,
            willChange: "width",
          }}
        />
        {/* Native input — invisible but full-area hit target.
            `touch-none` keeps mobile drags from triggering page scroll. */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 z-10 w-full cursor-pointer appearance-none bg-transparent opacity-0 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent"
          style={{ touchAction: "none" }}
          aria-label={label}
        />
        {/* Visible thumb — pointer-events:none so the input below catches everything */}
        <div
          className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white shadow-lifted"
          style={{
            left: `calc(${percent}% - 10px)`,
            backgroundColor: accent,
            willChange: "left",
          }}
        />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-text-subtle">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function SeePricingLink({ accent }: { accent: string }) {
  return (
    <Link href="#pricing" className="mt-8 block">
      <button
        type="button"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition-all hover:-translate-y-0.5 hover:shadow-lifted"
      >
        See pricing
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          style={{ color: accent }}
        />
      </button>
    </Link>
  );
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={className}
    >
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </motion.div>
  );
}

/* =================================================================
   1) DENTAL — Patient acquisition (clean 2-pane)
   Inputs: chats/month, avg patient LTV
   Output: monthly recovery + new patients/month
   ================================================================= */
function DentalCalculator({ cfg }: { cfg: IndustryConfig }) {
  const [chats, setChats] = useState(100);
  const [ltv, setLtv] = useState(1500);

  const RECOVERY = 0.3;
  const monthly = Math.round(chats * ltv * RECOVERY);
  const annual = monthly * 12;
  const newPatients = Math.round(chats * RECOVERY);

  return (
    <CalculatorSection
      cfg={cfg}
      title="What you're leaving in the chair"
      subtitle="Drag the sliders. Industry recovery rate: 30% of patient chats convert when answered in seconds."
    >
      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 shadow-card lg:grid-cols-12 lg:p-12">
        <div className="lg:col-span-7">
          <Slider
            label="Patient chats per month"
            value={chats}
            min={20}
            max={500}
            step={10}
            onChange={setChats}
            accent={cfg.accentHex}
            format={(n) => n.toString()}
          />
          <div className="mt-8" />
          <Slider
            label="Average new patient lifetime value"
            value={ltv}
            min={500}
            max={3000}
            step={50}
            onChange={setLtv}
            accent={cfg.accentHex}
            format={(n) => `$${n.toLocaleString("en-US")}`}
          />
          <div className="mt-10 rounded-xl border border-border bg-bg-subtle p-5 font-mono text-xs leading-relaxed text-text-muted">
            <span className="font-semibold text-text">Math: </span>
            {chats} chats × ${ltv.toLocaleString("en-US")} × 30% = $
            {monthly.toLocaleString("en-US")}/mo
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-inverse p-8 text-white lg:col-span-5">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${cfg.accentHex}, transparent 60%)`,
            }}
          />
          <div className="relative">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
              Monthly recovery
            </span>
            <AnimatedNumber
              value={monthly}
              prefix="$"
              className="mt-3 font-mono text-5xl font-semibold tracking-tight sm:text-6xl"
            />
            <div className="mt-2 font-mono text-xs text-white/50">
              ≈ ${annual.toLocaleString("en-US")} per year
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-white/60">New patients/mo</span>
                <span
                  className="font-mono text-3xl font-semibold"
                  style={{ color: cfg.accentHex }}
                >
                  +{newPatients}
                </span>
              </div>
              <p className="mt-2 text-[11px] text-white/40">
                That&apos;s {newPatients * 12} new patients filling your chair
                in year one.
              </p>
            </div>

            <SeePricingLink accent={cfg.accentHex} />
          </div>
        </div>
      </div>
    </CalculatorSection>
  );
}

/* =================================================================
   2) MEDICAL — After-hours capture focus
   Inputs: inquiries/month, avg patient annual value, after-hours %
   Output: after-hours revenue + day/night split bar
   ================================================================= */
function MedicalCalculator({ cfg }: { cfg: IndustryConfig }) {
  const [inquiries, setInquiries] = useState(80);
  const [annualValue, setAnnualValue] = useState(1200);
  const [afterHoursPct, setAfterHoursPct] = useState(70);

  const RECOVERY = 0.25;
  const totalMonthly = Math.round(inquiries * annualValue * RECOVERY);
  const afterHoursMonthly = Math.round(
    (totalMonthly * afterHoursPct) / 100
  );
  const inHoursMonthly = totalMonthly - afterHoursMonthly;
  const afterHoursPatients = Math.round(
    inquiries * RECOVERY * (afterHoursPct / 100)
  );

  return (
    <CalculatorSection
      cfg={cfg}
      title="Patients you miss at 2am"
      subtitle="Most patient inquiries arrive after-hours. Calculate what your AI captures while you're closed."
    >
      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 shadow-card lg:grid-cols-12 lg:p-12">
        <div className="lg:col-span-7">
          <Slider
            label="Patient inquiries per month"
            value={inquiries}
            min={20}
            max={500}
            step={10}
            onChange={setInquiries}
            accent={cfg.accentHex}
            format={(n) => n.toString()}
          />
          <div className="mt-8" />
          <Slider
            label="Average patient annual value"
            value={annualValue}
            min={300}
            max={2500}
            step={50}
            onChange={setAnnualValue}
            accent={cfg.accentHex}
            format={(n) => `$${n.toLocaleString("en-US")}`}
          />
          <div className="mt-8" />
          <Slider
            label="% of inquiries after-hours"
            value={afterHoursPct}
            min={40}
            max={90}
            step={5}
            onChange={setAfterHoursPct}
            accent={cfg.accentHex}
            format={(n) => `${n}%`}
          />

          {/* Day vs night split visualization */}
          <div className="mt-10">
            <div className="mb-3 flex items-baseline justify-between text-xs font-medium text-text-muted">
              <span className="flex items-center gap-1.5">
                <Moon className="h-3.5 w-3.5" />
                After-hours capture
              </span>
              <span className="flex items-center gap-1.5">
                <Sun className="h-3.5 w-3.5" />
                In-hours capture
              </span>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-border-strong/30">
              <motion.div
                animate={{ width: `${afterHoursPct}%` }}
                transition={{ duration: 0.25 }}
                style={{ backgroundColor: cfg.accentHex }}
              />
              <motion.div
                animate={{ width: `${100 - afterHoursPct}%` }}
                transition={{ duration: 0.25 }}
                className="bg-border-strong"
              />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[11px] text-text-subtle">
              <span>${afterHoursMonthly.toLocaleString("en-US")}/mo</span>
              <span>${inHoursMonthly.toLocaleString("en-US")}/mo</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-inverse p-8 text-white lg:col-span-5">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${cfg.accentHex}, transparent 60%)`,
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2">
              <Moon className="h-3.5 w-3.5 text-white/60" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                After-hours captured
              </span>
            </div>
            <AnimatedNumber
              value={afterHoursMonthly}
              prefix="$"
              className="mt-3 font-mono text-5xl font-semibold tracking-tight sm:text-6xl"
            />
            <div className="mt-2 font-mono text-xs text-white/50">
              every month, while you sleep
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="font-mono text-[10px] text-white/50">
                  Total/mo
                </div>
                <div className="mt-1 font-mono text-xl font-semibold text-white">
                  ${totalMonthly.toLocaleString("en-US")}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="font-mono text-[10px] text-white/50">
                  Late-night patients
                </div>
                <div
                  className="mt-1 font-mono text-xl font-semibold"
                  style={{ color: cfg.accentHex }}
                >
                  +{afterHoursPatients}
                </div>
              </div>
            </div>

            <SeePricingLink accent={cfg.accentHex} />
          </div>
        </div>
      </div>
    </CalculatorSection>
  );
}

/* =================================================================
   3) SALON — "Without AI vs With AI" comparison
   Inputs: DMs/month, avg client LTV
   Output: 2 stacked bars showing the lift
   ================================================================= */
function SalonCalculator({ cfg }: { cfg: IndustryConfig }) {
  const [dms, setDms] = useState(120);
  const [ltv, setLtv] = useState(600);

  // Without AI: slow replies → 15% convert
  // With AI: instant replies → 40% convert
  const WITHOUT_AI = 0.15;
  const WITH_AI = 0.4;

  const monthlyWithout = Math.round(dms * ltv * WITHOUT_AI);
  const monthlyWith = Math.round(dms * ltv * WITH_AI);
  const lift = monthlyWith - monthlyWithout;
  const annualLift = lift * 12;
  const clientsLifted = Math.round(dms * (WITH_AI - WITHOUT_AI));

  // For bar widths, max bar = with AI
  const withoutBarPct = (WITHOUT_AI / WITH_AI) * 100;

  return (
    <CalculatorSection
      cfg={cfg}
      title="The cost of every slow reply"
      subtitle="Salons that reply in seconds book 40% of their DMs. Salons that don't book 15%. Drag to see the gap."
    >
      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 shadow-card lg:grid-cols-12 lg:p-12">
        <div className="lg:col-span-7">
          <Slider
            label="DMs + chats per month"
            value={dms}
            min={20}
            max={500}
            step={10}
            onChange={setDms}
            accent={cfg.accentHex}
            format={(n) => n.toString()}
          />
          <div className="mt-8" />
          <Slider
            label="Average client lifetime value"
            value={ltv}
            min={200}
            max={1500}
            step={25}
            onChange={setLtv}
            accent={cfg.accentHex}
            format={(n) => `$${n.toLocaleString("en-US")}`}
          />

          {/* Comparison bars */}
          <div className="mt-10 space-y-5">
            <div>
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-text-muted">Without AI (15% book)</span>
                <span className="font-mono font-semibold text-text">
                  ${monthlyWithout.toLocaleString("en-US")}/mo
                </span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-border-strong/30">
                <motion.div
                  animate={{ width: `${withoutBarPct}%` }}
                  transition={{ duration: 0.25 }}
                  className="h-full bg-border-strong"
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-text">With AI (40% book)</span>
                <span
                  className="font-mono font-semibold"
                  style={{ color: cfg.accentHex }}
                >
                  ${monthlyWith.toLocaleString("en-US")}/mo
                </span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-border-strong/30">
                <motion.div
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                  style={{
                    backgroundColor: cfg.accentHex,
                    boxShadow: `0 0 16px ${cfg.accentHex}66`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-bg-subtle p-5 font-mono text-xs leading-relaxed text-text-muted">
            <span className="font-semibold text-text">The gap: </span>
            {dms} DMs × ${ltv.toLocaleString("en-US")} × (40% − 15%) = $
            {lift.toLocaleString("en-US")}/mo
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-inverse p-8 text-white lg:col-span-5">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${cfg.accentHex}, transparent 60%)`,
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3.5 w-3.5 text-white/60" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                Monthly lift from AI
              </span>
            </div>
            <AnimatedNumber
              value={lift}
              prefix="$"
              className="mt-3 font-mono text-5xl font-semibold tracking-tight sm:text-6xl"
            />
            <div className="mt-2 font-mono text-xs text-white/50">
              ≈ ${annualLift.toLocaleString("en-US")} per year
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
              <Repeat
                className="h-5 w-5 flex-shrink-0"
                style={{ color: cfg.accentHex }}
              />
              <div>
                <div className="font-mono text-xl font-semibold text-white">
                  +{clientsLifted} clients/mo
                </div>
                <div className="mt-0.5 text-[11px] text-white/50">
                  gained from the speed of reply alone
                </div>
              </div>
            </div>

            <SeePricingLink accent={cfg.accentHex} />
          </div>
        </div>
      </div>
    </CalculatorSection>
  );
}

/* =================================================================
   4) GYM — Conversion funnel visualization
   Inputs: inquiries/month, tour conversion %, avg member LTV
   Output: Inquiries → Tours → Members funnel
   ================================================================= */
function GymCalculator({ cfg }: { cfg: IndustryConfig }) {
  const [inquiries, setInquiries] = useState(150);
  const [tourConv, setTourConv] = useState(35);
  const [memberLtv, setMemberLtv] = useState(1000);

  // AI books tours from 60% of qualified inquiries
  const tours = Math.round(inquiries * 0.6);
  const members = Math.round((tours * tourConv) / 100);
  const annualRevenue = members * memberLtv;
  const monthlyRevenue = Math.round(annualRevenue / 12);

  return (
    <CalculatorSection
      cfg={cfg}
      title="Members behind every chat"
      subtitle="Track the funnel from inquiry to active member. Drag the sliders to see where the money is."
    >
      <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 shadow-card lg:grid-cols-12 lg:p-12">
        <div className="lg:col-span-7">
          <Slider
            label="Inquiries + chats per month"
            value={inquiries}
            min={20}
            max={500}
            step={10}
            onChange={setInquiries}
            accent={cfg.accentHex}
            format={(n) => n.toString()}
          />
          <div className="mt-8" />
          <Slider
            label="Tour-to-member conversion rate"
            value={tourConv}
            min={15}
            max={60}
            step={5}
            onChange={setTourConv}
            accent={cfg.accentHex}
            format={(n) => `${n}%`}
          />
          <div className="mt-8" />
          <Slider
            label="Average member lifetime value"
            value={memberLtv}
            min={400}
            max={3000}
            step={50}
            onChange={setMemberLtv}
            accent={cfg.accentHex}
            format={(n) => `$${n.toLocaleString("en-US")}`}
          />

          {/* Funnel viz */}
          <div className="mt-10 space-y-3">
            <FunnelRow
              label="Inquiries received"
              value={inquiries}
              max={inquiries}
              accent={cfg.accentHex}
              opacity={0.35}
            />
            <FunnelRow
              label="Tours booked (60%)"
              value={tours}
              max={inquiries}
              accent={cfg.accentHex}
              opacity={0.6}
            />
            <FunnelRow
              label={`New members (${tourConv}%)`}
              value={members}
              max={inquiries}
              accent={cfg.accentHex}
              opacity={1}
            />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-inverse p-8 text-white lg:col-span-5">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${cfg.accentHex}, transparent 60%)`,
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-white/60" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                New members/month
              </span>
            </div>
            <AnimatedNumber
              value={members}
              suffix=""
              className="mt-3 font-mono text-5xl font-semibold tracking-tight sm:text-6xl"
            />
            <div className="mt-2 font-mono text-xs text-white/50">
              new active members joining each month
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-baseline justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-xs text-white/60">Monthly revenue</span>
                <span
                  className="font-mono text-2xl font-semibold"
                  style={{ color: cfg.accentHex }}
                >
                  ${monthlyRevenue.toLocaleString("en-US")}
                </span>
              </div>
              <div className="flex items-baseline justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-xs text-white/60">Annual revenue</span>
                <span className="font-mono text-2xl font-semibold text-white">
                  ${annualRevenue.toLocaleString("en-US")}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-white/40">
              <Filter className="h-3 w-3" />
              {inquiries} → {tours} tours → {members} members
            </div>

            <SeePricingLink accent={cfg.accentHex} />
          </div>
        </div>
      </div>
    </CalculatorSection>
  );
}

function FunnelRow({
  label,
  value,
  max,
  accent,
  opacity,
}: {
  label: string;
  value: number;
  max: number;
  accent: string;
  opacity: number;
}) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-xs">
        <span className="text-text-muted">{label}</span>
        <span className="font-mono font-semibold text-text">{value}</span>
      </div>
      <div className="h-5 overflow-hidden rounded-md bg-border-strong/30">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.25 }}
          className="h-full"
          style={{
            backgroundColor: accent,
            opacity,
            boxShadow: opacity === 1 ? `0 0 12px ${accent}66` : undefined,
          }}
        />
      </div>
    </div>
  );
}
