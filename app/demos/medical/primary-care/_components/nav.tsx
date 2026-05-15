"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/medical/primary-care";

const navLinks = [
  { label: "Services", href: `${BASE}/services` },
  { label: "Providers", href: `${BASE}/providers` },
  { label: "Patient Portal", href: `${BASE}#portal` },
  { label: "Contact", href: `${BASE}#contact` },
];

const SAGE = "#6E8B6F";
const FOREST = "#2D3A2E";
const INK = "#1A2421";
const MUTED = "#5C6A65";

export function CedarwoodNav() {
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
        style={{ backgroundColor: FOREST }}
      >
        <Link
          href="/industry/medical"
          className="block py-1.5 text-center text-[11px] font-medium text-white/90 transition-opacity hover:opacity-80"
        >
          Demo site built with BookZync · See how it works
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,245,239,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : undefined,
          borderBottom: scrolled
            ? "1px solid rgba(45,58,46,0.08)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={BASE} className="group flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-105 sm:h-11 sm:w-11"
              style={{
                background: `linear-gradient(135deg, ${SAGE}, #8FA890)`,
              }}
            >
              {/* Cedar leaf SVG */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none">
                <path
                  d="M12 3 C 9 6, 7 9, 7 13 C 7 17, 9 20, 12 21 C 15 20, 17 17, 17 13 C 17 9, 15 6, 12 3 Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <line x1="12" y1="6" x2="12" y2="20" stroke={SAGE} strokeWidth="1.5" />
                {[
                  [10, 8, 12, 9],
                  [14, 8, 12, 9],
                  [9, 12, 12, 13],
                  [15, 12, 12, 13],
                  [10, 16, 12, 17],
                  [14, 16, 12, 17],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={SAGE}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                ))}
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold sm:text-lg" style={{ color: INK }}>
                Cedarwood
              </span>
              <span
                className="text-[10px] font-medium tracking-wide sm:text-[11px]"
                style={{ color: MUTED }}
              >
                Family Medicine
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
                  style={{ color: active ? SAGE : INK }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                      style={{ backgroundColor: SAGE }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:5035550149"
              className="hidden items-center gap-2 text-sm font-semibold lg:inline-flex"
              style={{ color: INK }}
            >
              <Phone className="h-4 w-4" style={{ color: SAGE }} />
              (503) 555-0149
            </a>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="hidden items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 sm:inline-flex sm:px-5"
              style={{
                backgroundColor: SAGE,
                boxShadow: "0 8px 24px -8px rgba(110,139,111,0.55)",
              }}
            >
              Book a visit
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              style={{ color: INK }}
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
              backgroundColor: "rgba(247,245,239,0.98)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(45,58,46,0.08)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-semibold"
                  style={{ color: INK }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:5035550149"
                className="flex items-center gap-2 py-3 text-base font-semibold"
                style={{ color: INK }}
              >
                <Phone className="h-4 w-4" style={{ color: SAGE }} />
                (503) 555-0149
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openChatbot("general");
                }}
                className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: SAGE }}
              >
                Book a visit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
