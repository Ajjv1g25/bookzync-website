import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const BASE = "/demos/gym/full-gym";
const ORANGE = "#F97316";
const SLATE = "#1E293B";
const SLATE_LIGHT = "#475569";
const CREAM = "#F8F7F4";
const MUTED = "#64748B";

export function NorthpointFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-20 sm:mt-28"
      style={{
        backgroundColor: "#EEEAE1",
        borderTop: "1px solid rgba(30,41,59,0.1)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href={BASE} className="inline-flex items-center gap-2.5">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${SLATE}, ${SLATE_LIGHT})`,
                }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
                <span className="text-lg font-bold" style={{ color: SLATE }}>
                  Northpoint
                </span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: ORANGE }}
                >
                  Athletic Club · Est. 2014
                </span>
              </div>
            </Link>
            <p
              className="mt-5 max-w-sm text-sm leading-relaxed"
              style={{ color: MUTED }}
            >
              A 32,000 sq ft athletic club in the Pearl District. Strength,
              cardio, group fitness, yoga, lap pool, sauna, and recovery —
              under one roof, with one membership.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Visit
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic" style={{ color: SLATE }}>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: ORANGE }} />
                <span className="leading-relaxed">
                  1240 NW Lovejoy Street
                  <br />
                  Portland, OR 97209
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: ORANGE }} />
                <span>(503) 555-0376</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: ORANGE }} />
                <span>hello@northpoint.club</span>
              </div>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm" style={{ color: MUTED }}>
              {[
                ["Mon — Fri", "5a — 11p"],
                ["Saturday", "6a — 10p"],
                ["Sunday", "7a — 9p"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <dt>{day}</dt>
                  <dd className="font-semibold" style={{ color: SLATE }}>{time}</dd>
                </div>
              ))}
            </dl>
            <div
              className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold"
              style={{ color: ORANGE }}
            >
              <Clock className="h-3 w-3" />
              <span>24/7 keycard access</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Club
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: MUTED }}>
              <li><Link href={`${BASE}/classes`} className="transition-colors hover:text-[#1E293B]">Classes</Link></li>
              <li><Link href={`${BASE}/membership`} className="transition-colors hover:text-[#1E293B]">Membership</Link></li>
              <li><Link href={`${BASE}#amenities`} className="transition-colors hover:text-[#1E293B]">Amenities</Link></li>
              <li><Link href={`${BASE}#contact`} className="transition-colors hover:text-[#1E293B]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(30,41,59,0.1)" }}
        >
          <p className="text-xs" style={{ color: MUTED }}>
            © 2026 Northpoint Athletic Club. All rights reserved.
          </p>
          <Link
            href="/industry/gym"
            className="text-xs transition-colors"
            style={{ color: MUTED }}
          >
            Website by{" "}
            <span className="font-bold" style={{ color: ORANGE }}>BookZync</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
