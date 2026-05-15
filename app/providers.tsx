"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { ChatbotProvider } from "@/lib/chatbot-context";
import { Chatbot } from "@/components/chatbot";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <ChatbotProvider>
        {children}
        <Chatbot />
      </ChatbotProvider>
    </ThemeProvider>
  );
}
