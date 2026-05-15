import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AurumNav } from "./_components/nav";
import { AurumFooter } from "./_components/footer";
import { AurumChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Aurum Dental Studio — Cosmetic Dentistry",
  description:
    "Aurum Dental Studio. Bespoke cosmetic dentistry in the heart of the city. Veneers, whitening, Invisalign, smile makeovers by Dr. Sarah Chen, DDS.",
};

export default function ModernClinicLayout({ children }: { children: ReactNode }) {
  // Force dark luxury theme regardless of root theme preference.
  return (
    <div
      className="aurum-theme isolate min-h-screen"
      style={{
        // Inline styles so this looks identical in light + dark mode of the root theme.
        // Aurum = gold; theme is deep black background + warm cream text + champagne gold accent.
        backgroundColor: "#0A0908",
        color: "#E8E2D5",
        // Tailwind's font-serif (system serif fallback chain — feels editorial without loading custom fonts)
        fontFamily:
          "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, serif",
      }}
    >
      {/* Subtle film grain texture overlay using radial gradient noise */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />
      <div className="relative z-10">
        <AurumNav />
        <main>{children}</main>
        <AurumFooter />
      </div>
      <AurumChatLauncher />
    </div>
  );
}
