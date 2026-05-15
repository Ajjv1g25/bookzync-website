import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const BASE = "/demos/salon/bridal-studio";

const BLUSH = "#F4D5C7";
const CHAMP = "#C9A971";
const CHARCOAL = "#2B2520";
const IVORY = "#FBF6EE";
const SOFT = "#7A6F66";

const serifFamily = `"Iowan Old Style", "Apple Garamond", Baskerville, "Times New Roman", Georgia, serif`;

export function VerbenaFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-20 sm:mt-28"
      style={{
        backgroundColor: "#F5EBE0",
        borderTop: "1px solid rgba(43,37,32,0.1)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href={BASE} className="group">
              <span
                className="text-3xl leading-none tracking-tight"
                style={{
                  color: CHARCOAL,
                  fontFamily: serifFamily,
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                Verbena
              </span>
              <p
                className="mt-0.5 text-[11px] uppercase tracking-[0.28em]"
                style={{ color: CHAMP }}
              >
                Bridal · Since 2013
              </p>
            </Link>
            <p
              className="mt-5 max-w-sm text-sm leading-relaxed"
              style={{ color: SOFT }}
            >
              Hair and makeup for the most considered wedding day. We
              travel the Lowcountry — Charleston, Kiawah, Sea Island,
              Beaufort — and we&apos;ve done it for over six hundred
              brides.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors"
              style={{ color: CHARCOAL }}
            >
              <Instagram className="h-4 w-4" />
              @verbenabridal
            </a>
          </div>

          <div className="md:col-span-3">
            <h3
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{ color: CHAMP }}
            >
              Studio
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic" style={{ color: CHARCOAL }}>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: CHAMP }} />
                <span className="leading-relaxed">
                  87 King Street
                  <br />
                  Charleston, SC 29401
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: CHAMP }} />
                <span>(843) 555-0167</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: CHAMP }} />
                <span>hello@verbenabridal.com</span>
              </div>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{ color: CHAMP }}
            >
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm" style={{ color: SOFT }}>
              {[
                ["Tue — Sat", "By appt"],
                ["Sun", "Weddings"],
                ["Mon", "Closed"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between gap-3">
                  <dt>{day}</dt>
                  <dd style={{ color: CHARCOAL, fontFamily: serifFamily }}>{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-2">
            <h3
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{ color: CHAMP }}
            >
              Studio
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm" style={{ color: SOFT }}>
              <li><Link href={`${BASE}/services`} className="transition-colors hover:text-[#2B2520]">Services</Link></li>
              <li><Link href={`${BASE}/brides`} className="transition-colors hover:text-[#2B2520]">Real brides</Link></li>
              <li><Link href={`${BASE}#booking`} className="transition-colors hover:text-[#2B2520]">Booking</Link></li>
              <li><Link href={`${BASE}#contact`} className="transition-colors hover:text-[#2B2520]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(43,37,32,0.1)" }}
        >
          <p className="text-xs" style={{ color: SOFT }}>
            © 2026 Verbena Bridal. All rights reserved.
          </p>
          <Link
            href="/industry/salon"
            className="text-xs transition-colors"
            style={{ color: SOFT }}
          >
            Website by{" "}
            <span
              style={{
                color: CHAMP,
                fontFamily: serifFamily,
                fontStyle: "italic",
              }}
            >
              BookZync
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
