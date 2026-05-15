import Link from "next/link";
import { ArrowRight, Sparkles, Target, Zap, Heart } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn, RevealHeading, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { AboutCTAButton } from "@/components/about-cta-button";

export const metadata = {
  title: "About",
  description:
    "BookZync was built by a solo founder who watched local service businesses lose customers to slow chat replies. Today it's an AI front desk for clinics, salons, and gyms.",
};

const values = [
  {
    icon: Zap,
    title: "Speed over everything",
    body: "A reply in 5 seconds is the entire product. Every feature, every line of code, every decision flows from that.",
  },
  {
    icon: Target,
    title: "Built per industry",
    body: "Dental isn't medical isn't salon isn't gym. Generic chatbots fail because they don't speak your language. We do.",
  },
  {
    icon: Heart,
    title: "Honest about limits",
    body: "We're pre-launch, pre-HIPAA, and pre-perfect. We tell you what we don't do yet — and we ship the rest fast.",
  },
];

const stats = [
  { value: "<5s", label: "Reply time, every channel, every shift" },
  { value: "4", label: "Industries with day-one specialization" },
  { value: "24/7", label: "Coverage from week one" },
  { value: "7 days", label: "From signup to live AI" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===================== HERO ===================== */}
        <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-70 mask-radial-faded" />
            <div
              className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full opacity-40 animate-drift-1 dark:opacity-80"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(6,182,212,0.35), transparent 60%)",
                filter: "blur(70px)",
              }}
            />
            <div
              className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full opacity-30 animate-drift-2 dark:opacity-70"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(99,102,241,0.3), transparent 60%)",
                filter: "blur(70px)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
          </div>

          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                <Sparkles className="h-3 w-3" />
                About BookZync
              </div>
            </FadeIn>
            <RevealHeading immediate className="mt-6">
              <h1 className="text-balance text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-text">
                Built so no business{" "}
                <span className="text-gradient-brand">
                  ever misses a lead again
                </span>
              </h1>
            </RevealHeading>
            <FadeIn delay={0.25}>
              <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:text-lg">
                BookZync is an AI front desk for service businesses — clinics,
                salons, and gyms. We replied to chats in five seconds before it
                was cool. Now we&apos;re making sure no one has to think about
                their inbox again.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ===================== ORIGIN STORY ===================== */}
        <section className="relative border-t border-border bg-bg-subtle/40 py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <FadeIn className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                  The story
                </div>
                <RevealHeading className="mt-6">
                  <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.25rem)] font-semibold leading-[1.1] tracking-tight text-text">
                    Why this exists
                  </h2>
                </RevealHeading>
              </FadeIn>
              <FadeIn delay={0.15} className="space-y-5 text-base leading-relaxed text-text-muted lg:col-span-8">
                <p>
                  A few years ago I watched a friend who runs a salon lose a
                  client because her stylist saw the Instagram DM three hours
                  too late. The client had already booked at the salon down the
                  street. The conversation was twelve words long.
                </p>
                <p>
                  That happens every day, in every industry where bookings
                  start as a casual question — and it doesn&apos;t feel like
                  losing a sale, it feels like &ldquo;just one of those
                  things.&rdquo; But add it up over a year and it&apos;s real
                  money walking out the door.
                </p>
                <p>
                  We built BookZync because the technology to fix this is
                  finally good enough. An AI that actually understands what a
                  dental patient means when they say &ldquo;Can you fit me in
                  for a cleaning Friday?&rdquo;, books the slot, sends the
                  confirmation, and never sleeps. That&apos;s the whole
                  product.
                </p>
                <p>
                  We start with four industries because the moment you go
                  generic, you lose. A salon chatbot has to know what balayage
                  is. A medical chatbot has to know when to say &ldquo;please
                  call 911 immediately&rdquo; instead of trying to book. The
                  details matter.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ===================== VALUES ===================== */}
        <section className="relative border-t border-border py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                What we believe
              </div>
            </FadeIn>
            <RevealHeading className="mx-auto mt-6 max-w-2xl text-center">
              <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
                Three principles we ship by
              </h2>
            </RevealHeading>

            <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:shadow-lifted">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent dark:from-white/[0.03]" />
                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <v.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 text-lg font-semibold text-text">
                        {v.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {v.body}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ===================== STATS ===================== */}
        <section className="relative border-t border-border bg-bg-subtle/40 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <FadeIn>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-mono text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                      {s.value}
                    </div>
                    <p className="mt-2 text-sm text-text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===================== ROADMAP / TODAY ===================== */}
        <section className="relative border-t border-border py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <FadeIn className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                Where we are
              </div>
            </FadeIn>
            <RevealHeading className="mt-6 text-center">
              <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
                Honest status report
              </h2>
            </RevealHeading>

            <FadeIn delay={0.15} className="mt-12">
              <div className="space-y-4">
                <RoadmapRow
                  status="now"
                  label="Live now"
                  items={[
                    "AI chat assistant for website widget, Instagram, Facebook, and SMS",
                    "Leads CRM with hot/warm/cold scoring",
                    "Calendar integration with auto-booking",
                    "Industry-tuned models for dental, medical, salon, and gym",
                  ]}
                />
                <RoadmapRow
                  status="soon"
                  label="Shipping next"
                  items={[
                    "Native integrations with the most-asked-for industry tools",
                    "Multi-location workforce management",
                    "Advanced analytics with cohort retention",
                  ]}
                />
                <RoadmapRow
                  status="later"
                  label="On the roadmap"
                  items={[
                    "HIPAA-certified medical workflows",
                    "Direct payment collection through the AI",
                    "Custom voice agents (when the team and the laws are ready)",
                    "Self-serve onboarding for businesses under 5 staff",
                  ]}
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="relative overflow-hidden py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <FadeIn>
              <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface-inverse px-6 py-20 text-center sm:px-16">
                <div className="absolute inset-0 -z-10">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                      maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
                    }}
                  />
                  <div
                    className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-80 animate-drift-1"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(6,182,212,0.5), transparent 60%)",
                      filter: "blur(80px)",
                    }}
                  />
                </div>

                <p className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                  Want to be one of the first?
                </p>
                <RevealHeading>
                  <h2 className="mt-5 text-balance text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-white">
                    We&apos;re onboarding early customers now
                  </h2>
                </RevealHeading>
                <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
                  Early customers get founder-level support, locked-in pricing,
                  and a direct line into what we build next.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <AboutCTAButton />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function RoadmapRow({
  status,
  label,
  items,
}: {
  status: "now" | "soon" | "later";
  label: string;
  items: string[];
}) {
  const statusStyle =
    status === "now"
      ? "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
      : status === "soon"
      ? "border-brand/30 bg-brand/10 text-brand"
      : "border-border bg-bg-subtle text-text-subtle";

  return (
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface p-6 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-3">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${statusStyle}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {label}
        </span>
      </div>
      <ul className="space-y-2.5 md:col-span-9">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted">
            <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-text-subtle" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
