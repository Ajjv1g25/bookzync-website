"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/family-smiles";

const navLinks = [
  { label: "Services", href: `${BASE}/services` },
  { label: "Our Team", href: `${BASE}/team` },
  { label: "Insurance", href: `${BASE}#insurance` },
  { label: "Contact", href: `${BASE}#contact` },
];

const SUN = "#FFA94D"; // warm orange
const SKY = "#4DA8DA"; // sky blue
const INK = "#1B2A3D";
const MUTED = "#5B6B82";

export function SunnyNav() {
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
      {/* Top demo banner */}
      <div
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: SKY }}
      >
        <Link
          href="/industry/dental"
          className="block py-1.5 text-center text-[11px] font-medium text-white transition-opacity hover:opacity-80"
        >
          ✨ Demo site built with BookZync · See how it works
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,249,239,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : undefined,
          borderBottom: scrolled ? "1px solid rgba(27,42,61,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href={BASE} className="group flex items-center gap-3">
            <div
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 group-hover:rotate-3"
              style={{
                background: `linear-gradient(135deg, ${SUN}, #FFD08A)`,
                boxShadow: "0 8px 24px -8px rgba(255,169,77,0.4)",
              }}
            >
              {/* Sun rays */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-white"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" fill="white" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="5.5"
                    stroke="white"
                    strokeWidth="2"
                    transform={`rotate(${angle} 12 12)`}
                  />
                ))}
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold" style={{ color: INK }}>
                Sunny Smiles
              </span>
              <span className="text-[11px] font-medium" style={{ color: MUTED }}>
                Family Dental
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[15px] font-medium transition-colors"
                  style={{ color: active ? SKY : INK }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full"
                      style={{ backgroundColor: SKY }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8585550193"
              className="hidden items-center gap-2 text-sm font-semibold transition-colors lg:inline-flex"
              style={{ color: INK }}
            >
              <Phone className="h-4 w-4" style={{ color: SUN }} />
              (858) 555-0193
            </a>
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 sm:inline-flex"
              style={{
                background: `linear-gradient(135deg, ${SKY}, #2E8FCF)`,
                boxShadow: "0 8px 24px -8px rgba(77,168,218,0.55)",
              }}
            >
              Book Appointment
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden"
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
              backgroundColor: "rgba(255,249,239,0.98)",
              backdropFilter: "blur(16px)",
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
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openChatbot("general");
                }}
                className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${SKY}, #2E8FCF)` }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
