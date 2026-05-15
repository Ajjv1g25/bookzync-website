"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

export function MeridianChatLauncher() {
  const { open, isOpen } = useChatbot();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-30 flex items-end gap-3 sm:bottom-7 sm:right-7"
        >
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mb-1 hidden items-center gap-2 rounded-lg px-4 py-2.5 sm:flex"
            style={{
              backgroundColor: "rgba(11,31,58,0.95)",
              color: "#00B8D4",
              border: "1px solid rgba(0,184,212,0.3)",
              boxShadow: "0 12px 32px -8px rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
              Patient Concierge
            </span>
          </motion.div>

          <button
            type="button"
            onClick={() => open("general")}
            aria-label="Chat with Meridian Patient Concierge"
            className="group relative flex items-center justify-center rounded-lg transition-transform hover:scale-105"
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #00B8D4, #006FA8)",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 12px 32px -4px rgba(0,184,212,0.55), 0 4px 12px -2px rgba(0,0,0,0.3)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-lg"
              style={{
                backgroundColor: "#00B8D4",
                opacity: 0.3,
                animationDuration: "2.5s",
              }}
            />
            <MessageCircle className="relative h-6 w-6 text-white" strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
