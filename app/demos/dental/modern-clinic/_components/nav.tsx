"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/dental/modern-clinic";

const navLinks = [
  { label: "Treatments", href: `${BASE}/services` },
  { label: "Studio", href: `${BASE}/about` },
  { label: "Consultation", href: `${BASE}#consultation` },
];

export function AurumNav() {
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
      {/* "Built by BookZync" demo banner — subtle pill at the very top */}
      <div
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: "rgba(10,9,8,0.95)" }}
      >
        <Link
          href="/industry/dental"
          className="block py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] transition-colors"
          style={{ color: "#9C8B6B" }}
        >
          ← Demo site built with BookZync · See how
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(10,9,8,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.08)" : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-12">
          {/* Logo */}
          <Link href={BASE} className="group flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #9C7B33)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.2) inset, 0 4px 16px -4px rgba(212,175,55,0.4)",
              }}
            >
              <span className="font-serif text-base font-semibold text-[#0A0908]">A</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-serif text-base tracking-tight"
                style={{ color: "#E8E2D5" }}
              >
                Aurum
              </span>
              <span
                className="font-mono text-[8.5px] uppercase tracking-[0.22em]"
                style={{ color: "#9C8B6B" }}
              >
                Dental Studio
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium uppercase tracking-[0.16em] transition-colors"
                  style={{ color: active ? "#D4AF37" : "#B5AC9B" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openChatbot("general")}
              className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5 md:inline-flex"
              style={{
                backgroundColor: "#D4AF37",
                color: "#0A0908",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 8px 24px -8px rgba(212,175,55,0.5)",
              }}
            >
              Book Consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden"
              style={{ color: "#E8E2D5" }}
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
              backgroundColor: "rgba(10,9,8,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(212,175,55,0.1)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-medium uppercase tracking-[0.16em]"
                  style={{ color: "#E8E2D5" }}
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
                className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium uppercase tracking-[0.18em]"
                style={{ backgroundColor: "#D4AF37", color: "#0A0908" }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
