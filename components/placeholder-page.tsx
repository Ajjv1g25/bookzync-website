import Link from "next/link";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Button } from "./ui/button";
import { RevealHeading } from "./motion/fade-in";

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

export function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden pt-16">
        {/* Background mesh */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70 mask-radial-faded"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 animate-drift-1 dark:opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(6,182,212,0.4), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <div className="mx-auto max-w-2xl px-5 py-24 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            In development
          </div>
          <RevealHeading immediate className="mt-6">
            <h1 className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-text">
              {title}
            </h1>
          </RevealHeading>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-lg text-balance text-base text-text-muted sm:text-lg">
              {subtitle}
            </p>
          )}
          <p className="mt-6 font-mono text-xs text-text-subtle">
            This page is being built in an upcoming session.
          </p>
          <div className="mt-10">
            <Link href="/">
              <Button variant="primary" size="lg" arrow>
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
