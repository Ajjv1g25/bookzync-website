import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const BASE = "/demos/dental/modern-clinic";

export function AurumFooter() {
  return (
    <footer
      className="relative mt-32 border-t pt-20 pb-10"
      style={{ borderColor: "rgba(212,175,55,0.12)" }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href={BASE} className="inline-flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #9C7B33)",
                }}
              >
                <span
                  className="font-serif text-lg font-semibold"
                  style={{ color: "#0A0908" }}
                >
                  A
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg" style={{ color: "#E8E2D5" }}>
                  Aurum Dental Studio
                </span>
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.22em]"
                  style={{ color: "#9C8B6B" }}
                >
                  Cosmetic Dentistry · Est. 2018
                </span>
              </div>
            </Link>
            <p
              className="mt-6 max-w-sm text-sm leading-relaxed"
              style={{ color: "#B5AC9B" }}
            >
              Bespoke cosmetic dentistry. We design smiles the way an atelier
              designs couture — with patience, precision, and obsession.
            </p>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <h3
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "#D4AF37" }}
            >
              Visit
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic" style={{ color: "#B5AC9B" }}>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "#9C8B6B" }} />
                <span className="leading-relaxed">
                  127 Madison Avenue, Suite 1208
                  <br />
                  New York, NY 10016
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#9C8B6B" }} />
                <span>(212) 555-0182</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#9C8B6B" }} />
                <span>concierge@aurumdental.studio</span>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <h3
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "#D4AF37" }}
            >
              Hours
            </h3>
            <dl className="mt-5 space-y-2 text-sm" style={{ color: "#B5AC9B" }}>
              {[
                ["Mon — Thu", "8:00 — 18:00"],
                ["Friday", "8:00 — 16:00"],
                ["Saturday", "By appointment"],
                ["Sunday", "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <dt>{day}</dt>
                  <dd className="font-mono text-xs" style={{ color: "#E8E2D5" }}>
                    {time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h3
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "#D4AF37" }}
            >
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "#B5AC9B" }}>
              <li>
                <Link href={`${BASE}/services`} className="transition-colors hover:text-[#E8E2D5]">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href={`${BASE}/about`} className="transition-colors hover:text-[#E8E2D5]">
                  Our studio
                </Link>
              </li>
              <li>
                <Link href={`${BASE}#consultation`} className="transition-colors hover:text-[#E8E2D5]">
                  Consultation
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#E8E2D5]"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: "rgba(212,175,55,0.08)" }}
        >
          <p
            className="font-mono text-[10px] uppercase tracking-[0.18em]"
            style={{ color: "#7A7160" }}
          >
            © 2026 Aurum Dental Studio · All rights reserved
          </p>
          <Link
            href="/industry/dental"
            className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: "#9C8B6B" }}
          >
            Website by{" "}
            <span style={{ color: "#D4AF37" }} className="hover:text-[#E8E2D5]">
              BookZync
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
