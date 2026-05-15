import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const BASE = "/demos/dental/family-smiles";

const SUN = "#FFA94D";
const SKY = "#4DA8DA";
const INK = "#1B2A3D";
const MUTED = "#5B6B82";

export function SunnyFooter() {
  return (
    <footer
      className="relative mt-24 overflow-hidden"
      id="contact"
    >
      {/* Sunny background curve */}
      <div
        className="absolute inset-x-0 -top-12 h-24"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 50% 100%, ${SUN}33, transparent 70%)`,
        }}
      />

      <div
        className="relative pt-20 pb-12"
        style={{
          background: `linear-gradient(180deg, transparent 0%, #FFEED7 50%, #FFD9A3 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link href={BASE} className="inline-flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${SUN}, #FFD08A)`,
                    boxShadow: "0 8px 24px -8px rgba(255,169,77,0.4)",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
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
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold" style={{ color: INK }}>
                    Sunny Smiles
                  </span>
                  <span className="text-xs font-medium" style={{ color: MUTED }}>
                    Family Dental · Since 2009
                  </span>
                </div>
              </Link>
              <p
                className="mt-6 max-w-sm text-sm leading-relaxed"
                style={{ color: MUTED }}
              >
                Gentle, family-friendly dentistry in San Diego. We see kids as
                young as 12 months and grandparents in their 90s — and we love
                every visit.
              </p>

              <div className="mt-5 flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{ backgroundColor: "rgba(27,42,61,0.06)", color: INK }}
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{ backgroundColor: "rgba(27,42,61,0.06)", color: INK }}
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Visit us */}
            <div className="md:col-span-3">
              <h3
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: SKY }}
              >
                Visit us
              </h3>
              <address className="mt-5 space-y-3 text-sm not-italic" style={{ color: INK }}>
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: SUN }} />
                  <span className="leading-relaxed">
                    1452 Sunset Cliffs Blvd
                    <br />
                    San Diego, CA 92107
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 flex-shrink-0" style={{ color: SUN }} />
                  <span>(858) 555-0193</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 flex-shrink-0" style={{ color: SUN }} />
                  <span>hello@sunnysmiles.com</span>
                </div>
              </address>
            </div>

            {/* Hours */}
            <div className="md:col-span-3">
              <h3
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: SKY }}
              >
                Office hours
              </h3>
              <dl className="mt-5 space-y-2 text-sm" style={{ color: MUTED }}>
                {[
                  ["Mon — Thu", "8 AM — 6 PM"],
                  ["Friday", "8 AM — 4 PM"],
                  ["Saturday", "9 AM — 1 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-3">
                    <dt>{day}</dt>
                    <dd className="font-semibold" style={{ color: INK }}>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Quick links */}
            <div className="md:col-span-2">
              <h3
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: SKY }}
              >
                Quick links
              </h3>
              <ul className="mt-5 space-y-3 text-sm" style={{ color: MUTED }}>
                <li>
                  <Link href={`${BASE}/services`} className="transition-colors hover:text-[#1B2A3D]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={`${BASE}/team`} className="transition-colors hover:text-[#1B2A3D]">
                    Our team
                  </Link>
                </li>
                <li>
                  <Link href={`${BASE}#insurance`} className="transition-colors hover:text-[#1B2A3D]">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href={`${BASE}#contact`} className="transition-colors hover:text-[#1B2A3D]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="mt-14 flex flex-col items-center justify-between gap-3 border-t pt-6 md:flex-row"
            style={{ borderColor: "rgba(27,42,61,0.1)" }}
          >
            <p className="text-xs" style={{ color: MUTED }}>
              © 2026 Sunny Smiles Family Dental · All rights reserved
            </p>
            <Link
              href="/industry/dental"
              className="text-xs transition-colors"
              style={{ color: MUTED }}
            >
              Website by{" "}
              <span className="font-bold" style={{ color: SKY }}>
                BookZync
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
