"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/boutique-fitness";
const navLinks = [
  { label: "Classes", href: `${BASE}/classes` },
  { label: "Coaches", href: `${BASE}/coaches` },
  { label: "Method", href: `${BASE}#method` },
  { label: "Contact", href: `${BASE}#contact` },
];

const ORANGE = "#F97316";
const CARBON = "#0A0A0A";
const CREAM = "#F5F2EC";
const STEEL = "#2A2A2A";

export function ProofNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { open: openChatbot } = useChatbot();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 w-full" style={{ backgroundColor: ORANGE }}>
        <Link
          href="/industry/gym"
          className="block py-1.5 text-center font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
          style={{ color: CARBON }}
        >
          Demo by BookZync · See how it works
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          borderBottom: scrolled
            ? "1px solid rgba(249,115,22,0.2)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href={BASE} className="group flex items-baseline gap-1">
            <span
              className="text-2xl font-black leading-none tracking-tight sm:text-3xl"
              style={{ color: CREAM }}
            >
              PROOF
            </span>
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs"
              style={{ color: ORANGE }}
            >
              / Strength
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
                  style={{ color: active ? ORANGE : CREAM }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full"
                      style={{ backgroundColor: ORANGE }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="hidden items-center justify-center font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5 sm:inline-flex"
              style={{
                color: CARBON,
                backgroundColor: ORANGE,
                padding: "12px 22px",
              }}
            >
              Start trial ↗
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              style={{ color: CREAM }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: "rgba(10,10,10,0.98)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-mono text-sm font-bold uppercase tracking-[0.18em]"
                  style={{ color: CREAM }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openChatbot("general");
                }}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em]"
                style={{ backgroundColor: ORANGE, color: CARBON }}
              >
                Start trial ↗
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
