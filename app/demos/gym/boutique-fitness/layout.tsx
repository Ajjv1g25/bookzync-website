import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ProofNav } from "./_components/nav";
import { ProofFooter } from "./_components/footer";
import { ProofChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "PROOF Strength — Strength Training Studio in Brooklyn",
  description:
    "PROOF Strength. A 4,200 sq ft strength training studio in Industry City. Coached barbell programming. 12-week cohorts. Brooklyn, est. 2019.",
};

export default function BoutiqueFitnessLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="proof-theme isolate min-h-screen"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#F5F2EC",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <ProofNav />
      <main>{children}</main>
      <ProofFooter />
      <ProofChatLauncher />
    </div>
  );
}
