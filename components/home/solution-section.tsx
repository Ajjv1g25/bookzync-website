"use client";

import { Bot, CalendarRange, Users, BarChart3 } from "lucide-react";
import { FadeIn, Stagger, StaggerItem, RevealHeading } from "@/components/motion/fade-in";

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-bg-subtle/40 py-24 lg:py-32">
      {/* Subtle decorative gradient */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-30 dark:opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(6,182,212,0.2), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-brand">
            The solution
          </div>
        </FadeIn>
        <RevealHeading className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Your digital growth engine
          </h2>
        </RevealHeading>
        <FadeIn delay={0.15} className="mx-auto mt-5 max-w-2xl text-center">
          <p className="text-balance text-base text-text-muted sm:text-lg">
            One AI front desk. Every channel. Every shift. Built for service
            businesses that can't afford to miss a booking.
          </p>
        </FadeIn>

        {/* Bento grid */}
        <Stagger
          className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12"
          stagger={0.1}
        >
          {/* Card 1: AI chat assistant (large) */}
          <StaggerItem className="lg:col-span-7">
            <FeatureCard
              icon={Bot}
              title="A chat assistant that never logs off"
              body="Replies to every visitor message in seconds, answers questions in your business's voice, qualifies the lead, and books the appointment — all in one chat thread. Available the moment they're on your site."
              tall
            >
              <WaveformVisual />
            </FeatureCard>
          </StaggerItem>

          {/* Card 2: Calendar */}
          <StaggerItem className="lg:col-span-5">
            <FeatureCard
              icon={CalendarRange}
              title="A calendar that fills itself"
              body="Bookings flow straight into your dashboard, color-coded by source. See AI-booked vs manually-booked at a glance. Reschedule with one click."
              tall
            >
              <CalendarVisual />
            </FeatureCard>
          </StaggerItem>

          {/* Card 3: Leads CRM */}
          <StaggerItem className="lg:col-span-5">
            <FeatureCard
              icon={Users}
              title="Every lead, captured and ranked"
              body="Hot leads bubble to the top. Every conversation logged. Follow up the moment a customer goes cold — or let the AI handle the follow-up automatically."
            >
              <LeadsVisual />
            </FeatureCard>
          </StaggerItem>

          {/* Card 4: Analytics */}
          <StaggerItem className="lg:col-span-7">
            <FeatureCard
              icon={BarChart3}
              title="Numbers you can actually act on"
              body="See where leads come from, when chats peak, which services convert, which staff are busiest. Spot the leak before it costs you a month of revenue."
            >
              <ChartVisual />
            </FeatureCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

/* =================================================================
   Feature card shell
   ================================================================= */
interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  children?: React.ReactNode;
  tall?: boolean;
}

function FeatureCard({ icon: Icon, title, body, children, tall }: FeatureCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:shadow-lifted ${
        tall ? "min-h-[420px]" : "min-h-[340px]"
      }`}
    >
      {/* Visual area (top) */}
      <div className="relative flex-1 overflow-hidden border-b border-border bg-bg-subtle">
        {children}
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-brand">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p>
      </div>
    </article>
  );
}

/* =================================================================
   Visual: animated waveform (AI conversation)
   ================================================================= */
function WaveformVisual() {
  // Pre-generated bar heights for stable SSR
  const bars = [
    20, 35, 50, 30, 65, 80, 45, 55, 70, 40, 25, 60, 75, 50, 35, 55, 65, 80, 45, 30,
    55, 70, 40, 60, 35, 50, 70, 55, 40, 65, 75, 45, 30, 55, 60, 70, 50, 35, 45, 60,
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      {/* Background radial */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.15), transparent 60%)",
        }}
      />

      <div className="relative flex h-full max-h-[200px] w-full items-center justify-center gap-1 px-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-brand/40 to-brand"
            style={{
              height: `${h}%`,
              animation: `pulse-soft ${1.5 + (i % 5) * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.05}s`,
              opacity: 0.4 + (h / 100) * 0.6,
            }}
          />
        ))}
      </div>

      {/* Floating "Listening..." pill */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-[11px] font-medium text-text backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          AI listening...
        </div>
      </div>
    </div>
  );
}

/* =================================================================
   Visual: stylized calendar grid
   ================================================================= */
function CalendarVisual() {
  // Some cells are filled (manual), some highlighted (AI-booked), some open
  // 7 columns x 4 rows
  const cells: Array<"open" | "manual" | "ai"> = [
    "open", "manual", "open", "ai", "manual", "open", "open",
    "manual", "ai", "open", "manual", "ai", "manual", "open",
    "open", "manual", "ai", "open", "manual", "open", "ai",
    "ai", "open", "manual", "ai", "open", "manual", "manual",
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="grid w-full max-w-xs grid-cols-7 gap-1.5">
        {cells.map((c, i) => (
          <div
            key={i}
            className={`aspect-square rounded-md transition-all ${
              c === "ai"
                ? "bg-brand shadow-[0_0_12px_-2px_hsl(var(--brand)/0.6)]"
                : c === "manual"
                ? "bg-border-strong/40"
                : "border border-dashed border-border"
            }`}
            style={{
              animation: c === "ai" ? "pulse-soft 2s ease-in-out infinite" : undefined,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* =================================================================
   Visual: lead list rows
   ================================================================= */
function LeadsVisual() {
  const leads = [
    { name: "Sarah K.", hot: true, status: "New" },
    { name: "Michael P.", hot: false, status: "Booked" },
    { name: "Anya R.", hot: true, status: "New" },
    { name: "James O.", hot: false, status: "Contacted" },
  ];

  return (
    <div className="absolute inset-0 flex items-center p-6">
      <div className="flex w-full flex-col gap-2">
        {leads.map((l, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5"
            style={{
              opacity: 1 - i * 0.15,
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`h-7 w-7 rounded-full ${
                  l.hot
                    ? "bg-gradient-to-br from-orange-400 to-red-500"
                    : "bg-gradient-to-br from-brand/40 to-brand/20"
                }`}
              />
              <div className="text-xs font-medium text-text">{l.name}</div>
              {l.hot && (
                <span className="rounded-full bg-orange-500/10 px-1.5 py-0.5 text-[9px] font-medium text-orange-500">
                  Hot
                </span>
              )}
            </div>
            <span className="font-mono text-[10px] text-text-subtle">
              {l.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =================================================================
   Visual: animated line chart
   ================================================================= */
function ChartVisual() {
  return (
    <div className="absolute inset-0 flex items-end p-6">
      <svg
        viewBox="0 0 400 160"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chart-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="2 4" opacity="0.5">
          {[40, 80, 120].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} />
          ))}
        </g>

        {/* Filled area */}
        <path
          d="M 0 110 L 50 95 L 100 100 L 150 70 L 200 75 L 250 50 L 300 55 L 350 30 L 400 25 L 400 160 L 0 160 Z"
          fill="url(#chart-fill)"
        />

        {/* Line */}
        <path
          d="M 0 110 L 50 95 L 100 100 L 150 70 L 200 75 L 250 50 L 300 55 L 350 30 L 400 25"
          fill="none"
          stroke="url(#chart-stroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {[
          [0, 110], [50, 95], [100, 100], [150, 70], [200, 75],
          [250, 50], [300, 55], [350, 30], [400, 25],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="hsl(var(--brand))"
            opacity={i / 8 + 0.3}
          />
        ))}
      </svg>
    </div>
  );
}
