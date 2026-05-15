import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealHeading } from "@/components/motion/fade-in";
import { industryList } from "@/lib/industry-config";

export const metadata = {
  title: "Pricing",
  description:
    "BookZync pricing is shown on each industry page so you see plans and ROI in your own context.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden pt-32 pb-24">
        {/* Background mesh */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70 mask-radial-faded" />
        <div
          className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-50 animate-drift-1 dark:opacity-100"
          style={{
            background:
              "radial-gradient(circle at center, rgba(6,182,212,0.35), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
              Pricing
            </div>
            <RevealHeading immediate className="mt-6">
              <h1 className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-text">
                Pricing lives on{" "}
                <span className="text-gradient-brand">each industry page</span>
              </h1>
            </RevealHeading>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-text-muted sm:text-lg">
              Plans, setup fees, and an ROI calculator are tailored to each
              industry so you see the numbers in your own context. Pick yours.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {industryList.map((ind) => (
              <Link key={ind.key} href={`/industry/${ind.key}`} className="group">
                <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lifted">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background: `radial-gradient(circle, ${ind.accentGlow}, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />
                  <div
                    className="font-mono text-[11px] uppercase tracking-wider"
                    style={{ color: ind.accentHex }}
                  >
                    For {ind.shortName}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-text">
                      {ind.displayName}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-text" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    See pricing, an ROI calculator, demo sites, and{" "}
                    {ind.shortName.toLowerCase()}-specific FAQs.
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
