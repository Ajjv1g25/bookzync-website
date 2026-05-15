import type { Metadata } from "next";
import type { ReactNode } from "react";
import { VerbenaNav } from "./_components/nav";
import { VerbenaFooter } from "./_components/footer";
import { VerbenaChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Verbena Bridal — Bridal Hair & Makeup in Charleston, SC",
  description:
    "Verbena Bridal. Hair and makeup for the most considered wedding day. On-location service across the Lowcountry. Charleston, est. 2013.",
};

export default function BridalStudioLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="verbena-theme isolate min-h-screen"
      style={{
        backgroundColor: "#FBF6EE",
        color: "#2B2520",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <VerbenaNav />
      <main>{children}</main>
      <VerbenaFooter />
      <VerbenaChatLauncher />
    </div>
  );
}
