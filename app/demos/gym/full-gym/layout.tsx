import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NorthpointNav } from "./_components/nav";
import { NorthpointFooter } from "./_components/footer";
import { NorthpointChatLauncher } from "./_components/chat-launcher";

export const metadata: Metadata = {
  title: "Northpoint Athletic Club — Portland's Multi-Discipline Gym",
  description:
    "Northpoint Athletic Club. 32,000 sq ft. Strength, cardio, group fitness, yoga, pool, sauna, recovery. The club Portland trains at, since 2014.",
};

export default function FullGymLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="northpoint-theme isolate min-h-screen"
      style={{
        backgroundColor: "#F8F7F4",
        color: "#1E293B",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <NorthpointNav />
      <main>{children}</main>
      <NorthpointFooter />
      <NorthpointChatLauncher />
    </div>
  );
}
