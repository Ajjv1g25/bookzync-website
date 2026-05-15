import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const BASE = "/demos/medical/specialty-clinic";

const NAVY = "#0B1F3A";
const CYAN = "#00B8D4";
const ICE = "#E8F0F4";
const MUTED = "#8FA8C2";

export function MeridianFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-20 sm:mt-28"
      style={{
        borderTop: "1px solid rgba(0,184,212,0.12)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href={BASE} className="inline-flex items-center gap-2.5">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #00B8D4, #006FA8)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
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
                <span className="text-lg font-semibold" style={{ color: ICE }}>
                  Meridian
                </span>
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.18em]"
                  style={{ color: CYAN }}
                >
                  Heart &amp; Vascular · Est. 2015
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: MUTED }}>
              An advanced cardiology and vascular center in Chicago. Board-
              certified physicians, in-house imaging, and second-opinion
              consultations for complex cases.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              style={{
                backgroundColor: "rgba(0,184,212,0.1)",
                color: CYAN,
              }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Location */}
          <div className="md:col-span-3">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: CYAN }}
            >
              Location
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic" style={{ color: ICE }}>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: CYAN }} />
                <span className="leading-relaxed">
                  680 N. Lake Shore Drive
                  <br />
                  Suite 1450
                  <br />
                  Chicago, IL 60611
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: CYAN }} />
                <span>(312) 555-0241</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: CYAN }} />
                <span>contact@meridiancardio.com</span>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: CYAN }}
            >
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm" style={{ color: MUTED }}>
              {[
                ["Mon — Fri", "7a — 6p"],
                ["Saturday", "8a — 1p"],
                ["Sunday", "On call"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <dt>{day}</dt>
                  <dd className="font-mono font-semibold" style={{ color: ICE }}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: CYAN }}
            >
              Practice
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: MUTED }}>
              <li>
                <Link href={`${BASE}/conditions`} className="transition-colors hover:text-[#E8F0F4]">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/physicians`} className="transition-colors hover:text-[#E8F0F4]">
                  Physicians
                </Link>
              </li>
              <li>
                <Link href={`${BASE}#referrals`} className="transition-colors hover:text-[#E8F0F4]">
                  Referrals
                </Link>
              </li>
              <li>
                <Link href={`${BASE}#contact`} className="transition-colors hover:text-[#E8F0F4]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(0,184,212,0.1)" }}
        >
          <p className="text-xs" style={{ color: MUTED }}>
            © 2026 Meridian Heart &amp; Vascular. All rights reserved.
          </p>
          <Link
            href="/industry/medical"
            className="text-xs transition-colors"
            style={{ color: MUTED }}
          >
            Website by{" "}
            <span className="font-mono font-semibold" style={{ color: CYAN }}>
              BookZync
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
