"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { industries, industryList, type IndustryKey } from "@/lib/industry-config";
import { useChatbot } from "@/lib/chatbot-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const { open: openChatbot } = useChatbot();

  // Detect industry from pathname (/industry/[key])
  const industryMatch = pathname?.match(/^\/industry\/([a-z]+)/);
  const activeIndustryKey = industryMatch?.[1] as IndustryKey | undefined;
  const activeIndustry =
    activeIndustryKey && activeIndustryKey in industries
      ? industries[activeIndustryKey]
      : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route-like nav (best-effort)
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-border bg-bg/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="BookZync home"
          >
            <Logo />
          </Link>

          {/* Center: Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-text-muted",
                  "transition-colors hover:text-text",
                  solutionsOpen && "text-text"
                )}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Industries
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    solutionsOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                  >
                    <div className="w-[420px] overflow-hidden rounded-xl border border-border bg-surface p-2 shadow-lifted">
                      <div className="px-3 pb-2 pt-1 text-[11px] font-medium uppercase tracking-wider text-text-subtle">
                        By Industry
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {industryList.map((ind) => (
                          <Link
                            key={ind.key}
                            href={`/industry/${ind.key}`}
                            className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-bg-subtle"
                          >
                            <div
                              className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full"
                              style={{
                                backgroundColor: ind.accentHex,
                                boxShadow: `0 0 12px ${ind.accentGlow}`,
                              }}
                            />
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-text">
                                {ind.displayName}
                              </div>
                              <div className="mt-0.5 line-clamp-1 text-xs text-text-muted">
                                For {ind.terms.customerPlural}, {ind.terms.bookingPlural}, and {ind.terms.professional}s
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Theme toggle + CTA */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button
              variant="primary"
              size="sm"
              arrow
              className="hidden sm:inline-flex"
              onClick={() => openChatbot("contact")}
              style={
                activeIndustry
                  ? {
                      backgroundColor: activeIndustry.accentHex,
                      boxShadow: `0 1px 0 0 rgba(255,255,255,0.2) inset, 0 8px 24px -8px ${activeIndustry.accentGlow}`,
                    }
                  : undefined
              }
            >
              Contact Us
            </Button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md",
                "border border-border bg-surface text-text",
                "lg:hidden"
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-border bg-bg shadow-lifted"
            >
              <div className="flex h-16 items-center justify-between border-b border-border px-5">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-text-subtle">
                  By Industry
                </div>
                <div className="mb-6 flex flex-col gap-1">
                  {industryList.map((ind) => (
                    <Link
                      key={ind.key}
                      href={`/industry/${ind.key}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-text transition-colors hover:bg-bg-subtle"
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: ind.accentHex }}
                      />
                      <span className="text-sm font-medium">{ind.displayName}</span>
                    </Link>
                  ))}
                </div>

                <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-text-subtle">
                  Company
                </div>
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-text transition-colors hover:bg-bg-subtle"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-border p-5">
                <ThemeToggle />
                <Button
                  variant="primary"
                  size="md"
                  arrow
                  className="w-full flex-1"
                  onClick={() => {
                    setMobileOpen(false);
                    openChatbot("contact");
                  }}
                  style={
                    activeIndustry
                      ? {
                          backgroundColor: activeIndustry.accentHex,
                          boxShadow: `0 1px 0 0 rgba(255,255,255,0.2) inset, 0 8px 24px -8px ${activeIndustry.accentGlow}`,
                        }
                      : undefined
                  }
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
