import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CedarwoodNav } from "./_components/nav";
import { CedarwoodFooter } from "./_components/footer";
import { CedarwoodChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Cedarwood Family Medicine — Primary Care in Portland",
  description:
    "Cedarwood Family Medicine. Modern primary care for adults, kids, and families in Portland, OR. Same-day visits, telehealth, and a real doctor who knows your name.",
};

export default function PrimaryCareLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="cedarwood-theme isolate min-h-screen"
      style={{
        backgroundColor: "#F7F5EF",
        color: "#1A2421",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <CedarwoodNav />
      <main>{children}</main>
      <CedarwoodFooter />
      <CedarwoodChatLauncher />
    </div>
  );
}
