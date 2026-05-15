"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FadeIn, RevealHeading } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does it take to get set up?",
    a: "Most businesses are live within 7 days. We handle the AI training, calendar setup, and chat-widget installation during onboarding. Growth+ customers also get a custom website built and delivered in that same window.",
  },
  {
    q: "What languages does the AI speak?",
    a: "English. We're focused on shipping a great experience in English before expanding to additional languages.",
  },
  {
    q: "Does it install on my existing website?",
    a: "Yes. BookZync adds a chat widget to any site — WordPress, Squarespace, Webflow, custom code, anything. Just paste a script tag. Growth+ customers get the website built fresh by us with the widget pre-installed.",
  },
  {
    q: "Can I customize what the AI says?",
    a: "Yes. Starter includes basic AI training (greeting, services, hours). Growth and Growth+ include full custom training — tone, common questions, objection handling, even your local slang.",
  },
  {
    q: "What happens if the AI can't answer a question?",
    a: "The AI is trained to recognize its limits. When it doesn't know something, it captures the visitor's details, summarizes what they need, and notifies your team immediately — by SMS, email, or both.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Monthly plans cancel anytime. Annual plans give you 2 months free. Setup fees are one-time — you pay them once at onboarding and never again.",
  },
  {
    q: "What if I want to switch plans later?",
    a: "Upgrade or downgrade anytime. We pro-rate the difference and the change takes effect on your next billing cycle. No re-setup fees when you upgrade.",
  },
  {
    q: "Do you offer refunds?",
    a: "If something's broken on our end and we can't fix it within 7 days, yes. We don't refund cancellations of working subscriptions — but you can cancel anytime to stop future billing. See our refund policy for details.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative border-t border-border bg-bg-subtle/40 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: title + side CTA */}
          <div className="lg:col-span-4">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                FAQ
              </div>
            </FadeIn>
            <RevealHeading className="mt-6">
              <h2 className="text-balance text-[clamp(2rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-text">
                Common questions.
                <br />
                <span className="text-gradient-brand">Honest answers.</span>
              </h2>
            </RevealHeading>
            <FadeIn delay={0.15}>
              <p className="mt-5 text-sm leading-relaxed text-text-muted">
                Industry-specific questions live on each industry page. Below are
                the ones every business asks before signing up.
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
              >
                See full FAQ
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Right: accordion */}
          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              {faqs.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div
                    key={i}
                    className={cn(
                      "border-b border-border last:border-b-0",
                      isOpen && "bg-bg-subtle/50"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-bg-subtle/50"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          "text-sm font-medium transition-colors sm:text-base",
                          isOpen ? "text-text" : "text-text"
                        )}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface transition-all duration-300",
                          isOpen && "rotate-45 border-brand bg-brand text-white"
                        )}
                      >
                        <Plus className="h-3 w-3" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pr-16 text-sm leading-relaxed text-text-muted">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
