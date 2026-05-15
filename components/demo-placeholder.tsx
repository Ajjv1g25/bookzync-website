"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Construction, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn, RevealHeading } from "@/components/motion/fade-in";
import { industries, type IndustryKey } from "@/lib/industry-config";
import { useChatbot } from "@/lib/chatbot-context";

interface DemoPlaceholderProps {
  industry: IndustryKey;
  slug: string;
}

export function DemoPlaceholder({ industry, slug }: DemoPlaceholderProps) {
  const cfg = industries[industry];
  const { open: openChatbot } = useChatbot();
  const demo = cfg.demos.find((d) => d.slug === slug);

  if (!demo) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-text">Demo not found</h1>
            <Link
              href={`/industry/${industry}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-hover"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to {cfg.shortName}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* ===== HERO ===== */}
        <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
          {/* Industry-colored background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-60 mask-radial-faded" />
            <div
              className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-40 animate-drift-1 dark:opacity-80"
              style={{
                background: `radial-gradient(circle at center, ${cfg.accentGlow}, transparent 60%)`,
                filter: "blur(70px)",
              }}
            />
            <div
              className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full opacity-30 animate-drift-2 dark:opacity-70"
              style={{
                background: `radial-gradient(circle at center, ${cfg.accentGlow}, transparent 60%)`,
                filter: "blur(70px)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
          </div>

          <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
            {/* Breadcrumb */}
            <FadeIn>
              <div className="flex items-center gap-2 font-mono text-xs text-text-subtle">
                <Link
                  href={`/industry/${industry}`}
                  className="inline-flex items-center gap-1 hover:text-text"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to {cfg.shortName}
                </Link>
                <span>/</span>
                <span>Demos</span>
                <span>/</span>
                <span className="text-text">{demo.name}</span>
              </div>
            </FadeIn>

            <FadeIn className="mt-8">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
                style={{
                  borderColor: `${cfg.accentHex}33`,
                  backgroundColor: `${cfg.accentHex}15`,
                  color: cfg.accentHex,
                }}
              >
                <Construction className="h-3 w-3" />
                Demo site in production
              </div>
            </FadeIn>

            <RevealHeading immediate className="mt-6">
              <h1 className="text-balance text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-text">
                {demo.name}{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${cfg.accentHex} 0%, ${cfg.accentHex}AA 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  is being built
                </span>
              </h1>
            </RevealHeading>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                {demo.description}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-subtle">
                This demo route is wired up and ready. The real demo site will
                live at this URL — replace this page with the built version
                when ready.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.35} className="mt-10">
              <div className="flex flex-col items-start gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openChatbot("demo")}
                  className="group inline-flex h-12 items-center gap-2 rounded-lg px-7 text-base font-medium text-white transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: cfg.accentHex,
                    boxShadow: `0 1px 0 0 rgba(255,255,255,0.2) inset, 0 8px 24px -8px ${cfg.accentGlow}`,
                  }}
                >
                  Schedule a personalized tour
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <Link href={`/industry/${industry}`}>
                  <button
                    type="button"
                    className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-surface px-7 text-base font-medium text-text transition-all hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated"
                  >
                    Back to {cfg.shortName}
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== PREVIEW PLACEHOLDER ===== */}
        <section className="relative border-t border-border bg-bg-subtle/40 py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <div
                className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface shadow-card"
                style={{
                  background: `linear-gradient(135deg, ${cfg.accentHex}15, ${cfg.accentHex}05)`,
                }}
              >
                {/* Browser bar */}
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-border/50 bg-surface/80 px-4 py-2.5 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className="ml-3 font-mono text-[11px] text-text-subtle">
                    demos.bookzync.com/{industry}/{slug}
                  </span>
                </div>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center pt-10">
                  <div className="text-center">
                    <div
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl shadow-lifted"
                      style={{
                        backgroundColor: cfg.accentHex,
                        boxShadow: `0 0 40px ${cfg.accentGlow}`,
                      }}
                    >
                      <Sparkles className="h-9 w-9 text-white" />
                    </div>
                    <div className="mt-6 font-mono text-[10px] uppercase tracking-wider text-text-subtle">
                      Reference site preview
                    </div>
                    <div className="mt-1 text-xl font-semibold text-text">
                      {demo.name}
                    </div>
                    <div className="mt-2 max-w-xs px-6 text-xs text-text-muted">
                      The interactive demo will live here. Drop your built
                      site&apos;s page.tsx into{" "}
                      <code className="font-mono text-text">
                        app/demos/{industry}/{slug}/
                      </code>{" "}
                      to ship.
                    </div>
                  </div>
                </div>

                {/* Floating chat bubble */}
                <div className="absolute bottom-6 right-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full shadow-lifted"
                    style={{
                      backgroundColor: cfg.accentHex,
                      boxShadow: `0 0 24px ${cfg.accentGlow}`,
                    }}
                  >
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===== OTHER DEMOS IN THIS INDUSTRY ===== */}
        <section className="relative border-t border-border py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <h2 className="text-lg font-semibold text-text">
                Other {cfg.shortName.toLowerCase()} demos
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {cfg.demos
                  .filter((d) => d.slug !== slug)
                  .map((other) => (
                    <Link
                      key={other.slug}
                      href={`/demos/${industry}/${other.slug}`}
                      className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
                    >
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/[0.06] to-transparent dark:from-white/[0.03]" />
                      <div className="relative flex items-center justify-between">
                        <div>
                          <div
                            className="font-mono text-[10px] uppercase tracking-wider"
                            style={{ color: cfg.accentHex }}
                          >
                            {cfg.shortName} demo
                          </div>
                          <div className="mt-1 text-base font-semibold text-text">
                            {other.name}
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-text-muted">
                            {other.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-text-subtle transition-all group-hover:translate-x-1 group-hover:text-text" />
                      </div>
                    </Link>
                  ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
