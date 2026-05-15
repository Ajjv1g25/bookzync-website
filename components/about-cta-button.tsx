"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatbot } from "@/lib/chatbot-context";

/**
 * About page CTA — opens the chatbot.
 * Extracted as a client component so `app/about/page.tsx` stays a server component.
 */
export function AboutCTAButton() {
  const { open: openChatbot } = useChatbot();
  return (
    <Button
      variant="primary"
      size="lg"
      arrow
      onClick={() => openChatbot("general")}
      className="bg-white text-neutral-900 hover:bg-white/90 hover:text-neutral-900"
    >
      Get in touch
    </Button>
  );
}
