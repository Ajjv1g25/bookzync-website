"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Plus, MessageCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FadeIn, RevealHeading } from "@/components/motion/fade-in";
import { useChatbot } from "@/lib/chatbot-context";

const categories = [
  {
    title: "Getting Started",
    description: "Onboarding, setup, and what to expect in your first 30 days.",
    questions: [
      {
        q: "How long does it take to go live?",
        a: "Most businesses are live within 7 days. We handle the AI training, calendar setup, and chat-widget installation during onboarding. Growth+ customers also get a custom website built and delivered in that same window.",
      },
      {
        q: "Does the AI install on my existing website?",
        a: "Yes. BookZync adds a chat widget to any site — WordPress, Squarespace, Webflow, custom code, anything. Just paste a script tag. Growth+ customers get a website built fresh by us with the widget pre-installed.",
      },
      {
        q: "What do I need to provide for onboarding?",
        a: "Your service list with prices, your business hours, your booking system (or we set you up with one), and answers to your 10 most-asked customer questions. We do the rest.",
      },
      {
        q: "Do I need technical skills to use this?",
        a: "No. If you can copy-paste a snippet, you can run BookZync. The dashboard is plain-language. The AI's training is handled by us. Updates, edits, and tone changes are one chat message away.",
      },
    ],
  },
  {
    title: "How the AI Works",
    description: "What it does, where it lives, and what languages it speaks.",
    questions: [
      {
        q: "Where does the AI live?",
        a: "On your website (chat widget) and via SMS. Customers chat with it like they'd chat with a person — asking about hours, prices, availability, and booking appointments. It's available 24/7.",
      },
      {
        q: "What languages does the AI speak?",
        a: "English. We're focused on shipping a great experience in English before expanding to additional languages.",
      },
      {
        q: "Will it sound like a robot?",
        a: "No. We train each AI on your specific business — your service names, your tone, your typical responses. Customers usually can't tell. Your team can review every conversation and edit the AI's responses in real time.",
      },
      {
        q: "What happens if the AI can't answer something?",
        a: "It hands off cleanly. The conversation transcript is forwarded to your team via email (or Slack on Growth/Growth+), and the customer is told someone will follow up. Nothing falls through.",
      },
      {
        q: "Can the AI actually book appointments?",
        a: "Yes — that's the whole point. It checks live calendar availability, holds the slot, collects customer info, and confirms via SMS or email. Cancellations and rescheduling work the same way.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    description: "Plans, setup fees, and how billing works.",
    questions: [
      {
        q: "How much does BookZync cost?",
        a: "Starter is $149/month with a $99 one-time setup. Growth is $349/month with a $199 setup. Growth+ is $599/month with a $499 setup and includes a custom-built website. Annual billing saves you 2 months.",
      },
      {
        q: "Is there a contract?",
        a: "No long-term contract. Monthly plans are month-to-month — cancel any time. Annual plans run for 12 months. Either way, you keep your data if you leave.",
      },
      {
        q: "What does the setup fee cover?",
        a: "AI training on your services and tone, widget installation on your site, calendar integration, SMS number provisioning, and a live onboarding session with our team. It's a one-time fee per plan.",
      },
      {
        q: "Can I change plans later?",
        a: "Yes. Upgrade any time and the new tier starts immediately. Downgrades take effect at the next billing cycle so you don't lose features mid-month.",
      },
      {
        q: "Do you offer refunds?",
        a: "Yes, within a clearly defined window. See our refund policy for details — short version: if we can't get the AI working for you in the first 30 days, you get your setup fee back.",
      },
    ],
  },
  {
    title: "For My Business",
    description: "Industry-specific questions about how this fits.",
    questions: [
      {
        q: "What industries does BookZync work for?",
        a: "Today: dental, medical, salon, and gym. The AI is trained differently for each — a dental clinic gets terminology like 'cleaning' and 'whitening,' a gym gets 'membership' and 'trial pass.' We pick the right base model for your industry during onboarding.",
      },
      {
        q: "Can it handle insurance or HIPAA-sensitive info?",
        a: "Today we don't store PHI or transmit HIPAA-regulated data. The AI can answer general questions about which insurances you accept, but won't ask for or store medical record numbers, conditions, or other PHI. HIPAA-certified workflows are on our roadmap for 2026.",
      },
      {
        q: "How does it know my services and prices?",
        a: "We train it on a structured intake of your service list, prices, and policies during onboarding. You can edit any of this any time from the dashboard — the AI updates immediately.",
      },
      {
        q: "Will the AI sell or upsell aggressively?",
        a: "Only if you want it to. The default is helpful and informative. You can tell us 'always mention our intro pass' or 'never push appointments — let customers ask first,' and we'll train that in.",
      },
    ],
  },
  {
    title: "The Custom Website",
    description: "What's included with the Growth+ plan.",
    questions: [
      {
        q: "What's the website like that comes with Growth+?",
        a: "A custom-designed, modern, mobile-first marketing site — 3-5 pages, hand-built by our team. You can see live examples at any of our demo sites linked from the homepage.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. Domain, code, content — all yours. If you ever leave BookZync, you keep the site. We hand over the code and hosting transfers cleanly.",
      },
      {
        q: "Can I make changes to the site after launch?",
        a: "Yes. Small content edits are included in your monthly plan (text, prices, hours, service descriptions, images). Structural redesigns are scoped separately.",
      },
      {
        q: "What about hosting?",
        a: "Growth+ includes hosting, SSL, a custom domain, and CDN delivery. There's no separate hosting bill.",
      },
    ],
  },
  {
    title: "Privacy & Data",
    description: "How customer data is handled.",
    questions: [
      {
        q: "Where does customer data live?",
        a: "On secure, US-based infrastructure. Conversations are encrypted in transit and at rest. You own all customer data and can export or delete it any time.",
      },
      {
        q: "Do you share my customer data with anyone?",
        a: "No. We don't sell, share, or use your customer data for any purpose other than running your AI. The full policy is on our Privacy page.",
      },
      {
        q: "Can I delete a customer's conversation history?",
        a: "Yes. Customers can request deletion under standard privacy laws (GDPR, CCPA), and you can also delete any conversation from the dashboard at any time.",
      },
    ],
  },
];

export default function FAQPage() {
  const { open: openChatbot } = useChatbot();

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Decorative background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-40 dark:opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(6,182,212,0.18), transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* HERO */}
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-text-muted">
                <MessageCircle className="h-3.5 w-3.5 text-brand" />
                Frequently asked questions
              </div>
            </FadeIn>

            <RevealHeading className="mt-6 text-balance text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-text">
              Everything we get asked.
            </RevealHeading>

            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-text-muted sm:text-lg">
                Real answers to the questions we hear most. Don&apos;t see
                yours? Open a chat and ask us directly.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="pb-16 sm:pb-24 lg:pb-32">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="space-y-16 sm:space-y-24">
              {categories.map((cat, ci) => (
                <FAQCategory key={cat.title} category={cat} index={ci} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <FadeIn>
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 text-center sm:p-12 lg:p-16"
                style={{
                  boxShadow: "0 24px 48px -16px rgba(6,182,212,0.15)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(6,182,212,0.3), transparent 60%)",
                    filter: "blur(40px)",
                  }}
                />

                <div className="relative">
                  <MessageCircle className="mx-auto h-8 w-8 text-brand" />
                  <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-tight text-text sm:text-3xl">
                    Have a question we didn&apos;t answer?
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-balance text-sm leading-relaxed text-text-muted sm:text-base">
                    Open a chat. The same AI we&apos;d set up for your
                    business is right here to answer yours.
                  </p>
                  <Button
                    onClick={() => openChatbot("general")}
                    size="lg"
                    className="mt-7"
                  >
                    Chat with us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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

function FAQCategory({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-7 sm:mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          0{index + 1}
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-text sm:text-3xl">
          {category.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
          {category.description}
        </p>
      </div>

      <div className="space-y-2">
        {category.questions.map((q, i) => (
          <FAQItem key={q.q} question={q.q} answer={q.a} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
        aria-expanded={open}
      >
        <span className="text-base font-semibold leading-snug text-text sm:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-muted"
        >
          <Plus className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div
                className="border-t border-border pt-4 text-sm leading-relaxed text-text-muted sm:text-[15px]"
              >
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
