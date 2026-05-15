import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SunnyNav } from "./_components/nav";
import { SunnyFooter } from "./_components/footer";
import { SunnyChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Sunny Smiles Family Dental — Gentle care for every smile",
  description:
    "Sunny Smiles Family Dental. Family-friendly general and pediatric dentistry in San Diego, CA. Dr. Maria Lopez & Dr. James Park.",
};

export default function FamilySmilesLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="sunny-theme isolate min-h-screen"
      style={{
        // Warm cream background, dark text
        backgroundColor: "#FFF9EF",
        color: "#1B2A3D",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <SunnyNav />
      <main>{children}</main>
      <SunnyFooter />
      <SunnyChatLauncher />
    </div>
  );
}
