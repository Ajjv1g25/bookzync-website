"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

/**
 * Aurum Dental concierge chat launcher.
 * Persistent gold bubble in the bottom-right that opens the BookZync chatbot.
 * Hides itself while the chatbot is open so the panel takes its place.
 */
export function AurumChatLauncher() {
  const { open, isOpen } = useChatbot();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-30 flex items-end gap-3 sm:bottom-7 sm:right-7"
        >
          {/* Concierge label — appears on desktop after a brief delay */}
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mb-1 hidden rounded-full px-4 py-2.5 sm:block"
            style={{
              backgroundColor: "rgba(10,9,8,0.95)",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.3)",
              boxShadow: "0 12px 32px -8px rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
              Concierge
            </span>
          </motion.div>

          {/* Main launcher */}
          <button
            type="button"
            onClick={() => open("general")}
            aria-label="Open concierge chat"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #9C7B33)",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 12px 36px -6px rgba(212,175,55,0.55), 0 4px 12px -2px rgba(0,0,0,0.4)",
            }}
          >
            {/* Pulse ring */}
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full"
              style={{
                backgroundColor: "#D4AF37",
                opacity: 0.35,
                animationDuration: "2.5s",
              }}
            />
            {/* Specular highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-2 top-1 h-4 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
              }}
            />
            <MessageCircle
              className="relative h-5 w-5"
              strokeWidth={1.75}
              style={{ color: "#0A0908" }}
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
