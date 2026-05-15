"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/** Why the chatbot was opened — drives the greeting + quick replies */
export type ChatbotIntent =
  | "general" // generic "talk to us"
  | "starter" // Start with Starter button
  | "growth" // Choose Growth button
  | "growth-plus" // Go Growth+ button
  | "demo" // Schedule a personalized tour
  | "contact"; // Contact Us in navbar

interface ChatbotState {
  isOpen: boolean;
  intent: ChatbotIntent;
  /** Open the chatbot, optionally seeding an intent so the bot opens with the right greeting */
  open: (intent?: ChatbotIntent) => void;
  close: () => void;
}

const ChatbotContext = createContext<ChatbotState | null>(null);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<ChatbotIntent>("general");

  const open = (newIntent: ChatbotIntent = "general") => {
    setIntent(newIntent);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <ChatbotContext.Provider value={{ isOpen, intent, open, close }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext);
  if (!ctx) {
    throw new Error("useChatbot must be used within ChatbotProvider");
  }
  return ctx;
}
