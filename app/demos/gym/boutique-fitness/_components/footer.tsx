import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const BASE = "/demos/gym/boutique-fitness";
const ORANGE = "#F97316";
const CARBON = "#0A0A0A";
const CREAM = "#F5F2EC";
const STEEL = "#2A2A2A";

export function ProofFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-20 sm:mt-28"
      style={{ borderTop: "1px solid rgba(249,115,22,0.15)" }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href={BASE} className="inline-flex items-baseline gap-1">
              <span
                className="text-3xl font-black leading-none tracking-tight"
                style={{ color: CREAM }}
              >
                PROOF
              </span>
              <span
                className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: ORANGE }}
              >
                / Strength
              </span>
            </Link>
            <p
              className="mt-5 max-w-sm text-sm leading-relaxed"
              style={{ color: "rgba(245,242,236,0.6)" }}
            >
              A coached strength training studio in Industry City, Brooklyn.
              Barbells, kettlebells, structured programming. No mirrors,
              no spin class.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors"
              style={{ color: ORANGE }}
            >
              <Instagram className="h-4 w-4" />
              @proof.strength
            </a>
          </div>

          <div className="md:col-span-3">
            <h3
              className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Studio
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: ORANGE }} />
                <span className="leading-relaxed" style={{ color: "rgba(245,242,236,0.85)" }}>
                  220 36th Street, Suite 4B
                  <br />
                  Brooklyn, NY 11232
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: ORANGE }} />
                <span style={{ color: "rgba(245,242,236,0.85)" }}>(718) 555-0214</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: ORANGE }} />
                <span style={{ color: "rgba(245,242,236,0.85)" }}>train@proofstrength.com</span>
              </div>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3
              className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 font-mono text-sm" style={{ color: "rgba(245,242,236,0.6)" }}>
              {[
                ["Mon — Fri", "5:30a — 9p"],
                ["Saturday", "7a — 2p"],
                ["Sunday", "8a — 12p"],
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
              className="font-mono text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Train
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: "rgba(245,242,236,0.6)" }}>
              <li><Link href={`${BASE}/classes`} className="transition-colors hover:text-white">Classes</Link></li>
              <li><Link href={`${BASE}/coaches`} className="transition-colors hover:text-white">Coaches</Link></li>
              <li><Link href={`${BASE}#method`} className="transition-colors hover:text-white">Method</Link></li>
              <li><Link href={`${BASE}#contact`} className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(249,115,22,0.15)" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,242,236,0.4)" }}>
            © 2026 PROOF Strength
          </p>
          <Link
            href="/industry/gym"
            className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: "rgba(245,242,236,0.4)" }}
          >
            Website by{" "}
            <span className="font-bold" style={{ color: ORANGE }}>BookZync</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
