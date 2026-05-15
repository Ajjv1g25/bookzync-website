import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const BASE = "/demos/medical/primary-care";

const SAGE = "#6E8B6F";
const FOREST = "#2D3A2E";
const INK = "#1A2421";
const MUTED = "#5C6A65";

export function CedarwoodFooter() {
  return (
    <footer
      className="relative mt-20 sm:mt-28"
      id="contact"
      style={{
        backgroundColor: "#EDEAE0",
        borderTop: "1px solid rgba(45,58,46,0.1)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href={BASE} className="inline-flex items-center gap-2.5">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${SAGE}, #8FA890)`,
                }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path
                    d="M12 3 C 9 6, 7 9, 7 13 C 7 17, 9 20, 12 21 C 15 20, 17 17, 17 13 C 17 9, 15 6, 12 3 Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold" style={{ color: INK }}>
                  Cedarwood
                </span>
                <span className="text-xs font-medium" style={{ color: MUTED }}>
                  Family Medicine · Since 2011
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: MUTED }}>
              A modern primary care practice in the heart of Portland. We see
              adults, children, and families — same-day visits available, and
              every patient sees their own provider.
            </p>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <h3
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: FOREST }}
            >
              Visit us
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic" style={{ color: INK }}>
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: SAGE }}
                />
                <span className="leading-relaxed">
                  2845 NW Thurman Street
                  <br />
                  Portland, OR 97210
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: SAGE }} />
                <span>(503) 555-0149</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: SAGE }} />
                <span>care@cedarwoodfamily.com</span>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: FOREST }}
            >
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm" style={{ color: MUTED }}>
              {[
                ["Mon — Fri", "7a — 7p"],
                ["Saturday", "8a — 1p"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <dt>{day}</dt>
                  <dd className="font-semibold" style={{ color: INK }}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
            <div
              className="mt-4 flex items-center gap-1.5 text-[11px] font-medium"
              style={{ color: SAGE }}
            >
              <Clock className="h-3 w-3" />
              <span>Telehealth 7 days</span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: FOREST }}
            >
              Practice
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: MUTED }}>
              <li>
                <Link href={`${BASE}/services`} className="transition-colors hover:text-[#1A2421]">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/providers`} className="transition-colors hover:text-[#1A2421]">
                  Providers
                </Link>
              </li>
              <li>
                <Link href={`${BASE}#portal`} className="transition-colors hover:text-[#1A2421]">
                  Patient portal
                </Link>
              </li>
              <li>
                <Link href={`${BASE}#contact`} className="transition-colors hover:text-[#1A2421]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(45,58,46,0.1)" }}
        >
          <p className="text-xs" style={{ color: MUTED }}>
            © 2026 Cedarwood Family Medicine. All rights reserved.
          </p>
          <Link
            href="/industry/medical"
            className="text-xs transition-colors"
            style={{ color: MUTED }}
          >
            Website by{" "}
            <span className="font-semibold" style={{ color: SAGE }}>
              BookZync
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
