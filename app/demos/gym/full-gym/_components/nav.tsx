"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/gym/full-gym";
const navLinks = [
  { label: "Classes", href: `${BASE}/classes` },
  { label: "Membership", href: `${BASE}/membership` },
  { label: "Amenities", href: `${BASE}#amenities` },
  { label: "Contact", href: `${BASE}#contact` },
];

const ORANGE = "#F97316";
const SLATE = "#1E293B";
const SLATE_LIGHT = "#475569";
const CREAM = "#F8F7F4";
const MUTED = "#64748B";

export function NorthpointNav() {
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
      <div className="sticky top-0 z-50 w-full" style={{ backgroundColor: SLATE }}>
        <Link
          href="/industry/gym"
          className="block py-1.5 text-center text-[11px] font-semibold tracking-[0.14em] transition-opacity hover:opacity-80"
          style={{ color: ORANGE }}
        >
          Demo by BookZync · See how it works
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(248,247,244,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          borderBottom: scrolled
            ? "1px solid rgba(30,41,59,0.08)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href={BASE} className="group flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform group-hover:scale-105 sm:h-11 sm:w-11"
              style={{
                background: `linear-gradient(135deg, ${SLATE}, ${SLATE_LIGHT})`,
              }}
            >
              {/* Mountain peak logo */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none">
                <path
                  d="M3 20 L9 8 L13 14 L17 6 L21 20 Z"
                  fill={ORANGE}
                  stroke={ORANGE}
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold sm:text-lg" style={{ color: SLATE }}>
                Northpoint
              </span>
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]"
                style={{ color: ORANGE }}
              >
                Athletic Club
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[14px] font-semibold transition-colors"
                  style={{ color: active ? ORANGE : SLATE }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                      style={{ backgroundColor: ORANGE }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:5035550376"
              className="hidden items-center gap-2 text-sm font-semibold lg:inline-flex"
              style={{ color: SLATE }}
            >
              <Phone className="h-4 w-4" style={{ color: ORANGE }} />
              (503) 555-0376
            </a>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 sm:inline-flex"
              style={{
                backgroundColor: ORANGE,
                boxShadow: "0 8px 24px -8px rgba(249,115,22,0.55)",
              }}
            >
              Join the club
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              style={{ color: SLATE }}
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
              backgroundColor: "rgba(248,247,244,0.98)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(30,41,59,0.08)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-semibold"
                  style={{ color: SLATE }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:5035550376"
                className="flex items-center gap-2 py-3 text-base font-semibold"
                style={{ color: SLATE }}
              >
                <Phone className="h-4 w-4" style={{ color: ORANGE }} />
                (503) 555-0376
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openChatbot("general");
                }}
                className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: ORANGE }}
              >
                Join the club
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
