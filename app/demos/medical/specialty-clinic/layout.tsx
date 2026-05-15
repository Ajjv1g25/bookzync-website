import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MeridianNav } from "./_components/nav";
import { MeridianFooter } from "./_components/footer";
import { MeridianChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Meridian Heart & Vascular — Advanced Cardiology in Chicago",
  description:
    "Meridian Heart & Vascular. Leading cardiology, electrophysiology, and vascular care in Chicago. Board-certified physicians, advanced diagnostics, second-opinion consultations.",
};

export default function SpecialtyClinicLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="meridian-theme isolate min-h-screen"
      style={{
        backgroundColor: "#0B1F3A",
        color: "#E8F0F4",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <MeridianNav />
      <main>{children}</main>
      <MeridianFooter />
      <MeridianChatLauncher />
    </div>
  );
}
