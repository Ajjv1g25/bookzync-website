import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const BASE = "/demos/salon/modern-salon";
const AMBER = "#F59E0B";
const INK = "#1A1410";
const CREAM = "#FAF7F0";

export function AtelierFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-20 sm:mt-28"
      style={{ backgroundColor: INK, color: CREAM }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href={BASE} className="inline-flex items-baseline gap-1.5">
              <span className="text-3xl font-black leading-none tracking-tight">
                Atelier
              </span>
              <span
                className="text-lg font-black leading-none tracking-tight"
                style={{ color: AMBER }}
              >
                N°9
              </span>
            </Link>
            <p
              className="mt-5 max-w-sm text-sm leading-relaxed"
              style={{ color: "rgba(250,247,240,0.7)" }}
            >
              A contemporary hair studio in Williamsburg. We do editorial
              cuts, advanced color, and balayage that&apos;ll change how
              your hair behaves.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors"
              style={{ color: AMBER }}
            >
              <Instagram className="h-4 w-4" />
              @atelierno9
            </a>
          </div>

          <div className="md:col-span-3">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: AMBER }}
            >
              Studio
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <span className="leading-relaxed" style={{ color: "rgba(250,247,240,0.85)" }}>
                  142 N 9th Street
                  <br />
                  Brooklyn, NY 11211
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <span style={{ color: "rgba(250,247,240,0.85)" }}>(347) 555-0182</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: AMBER }} />
                <span style={{ color: "rgba(250,247,240,0.85)" }}>book@atelierno9.com</span>
              </div>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: AMBER }}
            >
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm" style={{ color: "rgba(250,247,240,0.7)" }}>
              {[
                ["Tue — Fri", "11a — 9p"],
                ["Saturday", "10a — 7p"],
                ["Sun — Mon", "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <dt>{day}</dt>
                  <dd className="font-bold" style={{ color: CREAM }}>{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: AMBER }}
            >
              Studio
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: "rgba(250,247,240,0.7)" }}>
              <li><Link href={`${BASE}/services`} className="transition-colors hover:text-white">Services</Link></li>
              <li><Link href={`${BASE}/team`} className="transition-colors hover:text-white">Team</Link></li>
              <li><Link href={`${BASE}#studio`} className="transition-colors hover:text-white">The space</Link></li>
              <li><Link href={`${BASE}#contact`} className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(250,247,240,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(250,247,240,0.5)" }}>
            © 2026 Atelier N°9. All rights reserved.
          </p>
          <Link
            href="/industry/salon"
            className="text-xs transition-colors"
            style={{ color: "rgba(250,247,240,0.5)" }}
          >
            Website by{" "}
            <span className="font-bold" style={{ color: AMBER }}>BookZync</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
