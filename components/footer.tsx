"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { industryList } from "@/lib/industry-config";
import { useChatbot } from "@/lib/chatbot-context";

type LinkItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "chat"; label: string };

const columns: { title: string; links: LinkItem[] }[] = [
  {
    title: "Product",
    links: [
      { kind: "link", label: "FAQ", href: "/faq" },
      { kind: "chat", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { kind: "link", label: "About", href: "/about" },
      { kind: "chat", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { kind: "link", label: "Privacy", href: "/privacy" },
      { kind: "link", label: "Terms", href: "/terms" },
      { kind: "link", label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export function Footer() {
  const { open: openChatbot } = useChatbot();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-subtle">
      {/* Subtle top fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              An AI chat assistant that talks to every website visitor, books
              appointments instantly, and captures every lead. Built for
              clinics, salons, and gyms.
            </p>
            <p className="mt-6 font-mono text-xs text-text-subtle">
              Smarter front desk. Fuller calendar.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-4">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-text-subtle">
                Industries
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {industryList.map((ind) => (
                  <li key={ind.key}>
                    <Link
                      href={`/industry/${ind.key}`}
                      className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ind.accentHex }}
                      />
                      {ind.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-text-subtle">
                  {col.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link, i) => (
                    <li key={`${link.label}-${i}`}>
                      {link.kind === "link" ? (
                        <Link
                          href={link.href}
                          className="text-sm text-text-muted transition-colors hover:text-text"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openChatbot("general")}
                          className="text-left text-sm text-text-muted transition-colors hover:text-text"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-subtle">
            © {new Date().getFullYear()} BookZync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
