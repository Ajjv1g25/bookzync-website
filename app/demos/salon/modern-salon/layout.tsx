import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AtelierNav } from "./_components/nav";
import { AtelierFooter } from "./_components/footer";
import { AtelierChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Atelier No.9 — Hair, Color, Studio in Williamsburg, Brooklyn",
  description:
    "Atelier No.9. A contemporary hair studio in Williamsburg. Editorial cuts, advanced color, balayage. Walk-ins welcome, online booking, est. 2017.",
};

export default function ModernSalonLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="atelier-theme isolate min-h-screen"
      style={{
        backgroundColor: "#FAF7F0",
        color: "#1A1410",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <AtelierNav />
      <main>{children}</main>
      <AtelierFooter />
      <AtelierChatLauncher />
    </div>
  );
}
