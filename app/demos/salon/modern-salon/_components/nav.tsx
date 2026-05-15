"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

const BASE = "/demos/salon/modern-salon";

const navLinks = [
  { label: "Services", href: `${BASE}/services` },
  { label: "Team", href: `${BASE}/team` },
  { label: "Studio", href: `${BASE}#studio` },
  { label: "Contact", href: `${BASE}#contact` },
];

const AMBER = "#F59E0B";
const INK = "#1A1410";
const CREAM = "#FAF7F0";

export function AtelierNav() {
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
      <div className="sticky top-0 z-50 w-full" style={{ backgroundColor: INK }}>
        <Link
          href="/industry/salon"
          className="block py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
          style={{ color: AMBER }}
        >
          Demo by BookZync · See how it works
        </Link>
      </div>

      <header
        className="sticky top-[26px] z-40 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,247,240,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : undefined,
          borderBottom: scrolled
            ? "1px solid rgba(26,20,16,0.08)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href={BASE} className="group flex items-baseline gap-1.5">
            <span
              className="text-2xl font-black leading-none tracking-tight sm:text-3xl"
              style={{ color: INK }}
            >
              Atelier
            </span>
            <span
              className="text-base font-black leading-none tracking-tight sm:text-lg"
              style={{ color: AMBER }}
            >
              N°9
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-bold uppercase tracking-[0.12em] transition-colors"
                  style={{ color: active ? AMBER : INK }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full"
                      style={{ backgroundColor: AMBER }}
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
              className="hidden items-center justify-center text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 sm:inline-flex"
              style={{
                color: CREAM,
                backgroundColor: INK,
                padding: "12px 22px",
              }}
            >
              Book ↗
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

        {mobileOpen && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: "rgba(250,247,240,0.98)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(26,20,16,0.08)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base font-bold uppercase tracking-[0.12em]"
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
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-bold uppercase tracking-[0.12em]"
                style={{ backgroundColor: INK, color: CREAM }}
              >
                Book ↗
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
