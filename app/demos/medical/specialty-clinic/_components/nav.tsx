"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/specialty-clinic";

const navLinks = [
  { label: "Conditions", href: `${BASE}/conditions` },
  { label: "Physicians", href: `${BASE}/physicians` },
  { label: "Referrals", href: `${BASE}#referrals` },
  { label: "Contact", href: `${BASE}#contact` },
];

const NAVY = "#0B1F3A";
const CYAN = "#00B8D4";
const ICE = "#E8F0F4";
const MUTED = "#8FA8C2";

export function MeridianNav() {
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
      {/* Demo banner */}
      <div
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: CYAN }}
      >
        <Link
          href="/industry/medical"
          className="block py-1.5 text-center text-[11px] font-semibold tracking-wide transition-opacity hover:opacity-80"
          style={{ color: NAVY }}
        >
          Demo site built with BookZync · See how it works
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(11,31,58,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          borderBottom: scrolled
            ? "1px solid rgba(0,184,212,0.15)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={BASE} className="group flex items-center gap-2.5">
            <div
              className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-transform group-hover:scale-105 sm:h-11 sm:w-11"
              style={{
                background:
                  "linear-gradient(135deg, #00B8D4, #006FA8)",
                boxShadow:
                  "0 1px 0 0 rgba(255,255,255,0.2) inset, 0 4px 12px -2px rgba(0,184,212,0.4)",
              }}
            >
              {/* Pulse/EKG-style icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12 L6 12 L8 7 L11 17 L14 9 L16 13 L22 13" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-base font-semibold tracking-tight sm:text-lg"
                style={{ color: ICE }}
              >
                Meridian
              </span>
              <span
                className="text-[10px] font-mono uppercase tracking-[0.18em] sm:text-[11px]"
                style={{ color: CYAN }}
              >
                Heart &amp; Vascular
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[14px] font-medium transition-colors"
                  style={{ color: active ? CYAN : ICE }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-full"
                      style={{ backgroundColor: CYAN }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:3125550241"
              className="hidden items-center gap-2 text-sm font-semibold lg:inline-flex"
              style={{ color: ICE }}
            >
              <Phone className="h-4 w-4" style={{ color: CYAN }} />
              (312) 555-0241
            </a>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="hidden items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 sm:inline-flex sm:px-5"
              style={{
                backgroundColor: CYAN,
                color: NAVY,
                boxShadow:
                  "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 8px 24px -8px rgba(0,184,212,0.55)",
              }}
            >
              Request consult
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              style={{ color: ICE }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: "rgba(11,31,58,0.98)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(0,184,212,0.15)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-semibold"
                  style={{ color: ICE }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:3125550241"
                className="flex items-center gap-2 py-3 text-base font-semibold"
                style={{ color: ICE }}
              >
                <Phone className="h-4 w-4" style={{ color: CYAN }} />
                (312) 555-0241
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openChatbot("general");
                }}
                className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold"
                style={{ backgroundColor: CYAN, color: NAVY }}
              >
                Request consult
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
