import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn, RevealHeading } from "@/components/motion/fade-in";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro: string;
  children: ReactNode;
}

export function LegalPage({ title, lastUpdated, intro, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-50 mask-radial-faded" />
            <div
              className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-30 animate-drift-1 dark:opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(6,182,212,0.3), transparent 70%)",
                filter: "blur(70px)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
          </div>

          <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                Legal
              </div>
            </FadeIn>
            <RevealHeading immediate className="mt-6">
              <h1 className="text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-text">
                {title}
              </h1>
            </RevealHeading>
            <FadeIn delay={0.2}>
              <p className="mt-4 font-mono text-xs text-text-subtle">
                Last updated: {lastUpdated}
              </p>
              <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
                {intro}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <FadeIn>
              <div className="prose-legal">{children}</div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* Lightweight prose helpers — wrap content in these so spacing/typography are consistent. */
export function LegalSection({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-bg-subtle font-mono text-xs font-semibold text-text-muted">
          {String(num).padStart(2, "0")}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold tracking-tight text-text">
            {title}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-text-muted">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 leading-relaxed text-text-muted">
          <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-subtle" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
