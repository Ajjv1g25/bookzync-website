"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

/**
 * Sunny Smiles chat launcher.
 * Cheerful floating bubble with a greeting tooltip — feels like a friendly
 * receptionist waving at you. Hides when the chatbot panel is open.
 */
export function SunnyChatLauncher() {
  const { open, isOpen } = useChatbot();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-30 flex items-end gap-3 sm:bottom-7 sm:right-7"
        >
          {/* Greeting bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-1 hidden items-center gap-1 rounded-2xl rounded-br-sm px-4 py-2.5 text-sm font-bold sm:flex"
            style={{
              backgroundColor: "white",
              color: "#1B2A3D",
              boxShadow:
                "0 12px 32px -8px rgba(27,42,61,0.18), 0 0 0 1px rgba(27,42,61,0.04)",
            }}
          >
            <span>Hi! Need help?</span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
          </motion.div>

          {/* Main launcher */}
          <button
            type="button"
            onClick={() => open("general")}
            aria-label="Chat with Sunny Smiles"
            className="group relative flex h-15 w-15 items-center justify-center rounded-full transition-transform hover:scale-105 hover:rotate-3"
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #4DA8DA, #2E8FCF)",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 -1px 0 0 rgba(0,0,0,0.1) inset, 0 12px 32px -4px rgba(77,168,218,0.55), 0 4px 12px -2px rgba(27,42,61,0.2)",
            }}
          >
            {/* Pulse ring */}
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full"
              style={{
                backgroundColor: "#4DA8DA",
                opacity: 0.3,
                animationDuration: "2.5s",
              }}
            />
            {/* Specular highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-2.5 top-1.5 h-4 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)",
              }}
            />
            <MessageCircle
              className="relative h-6 w-6 text-white"
              strokeWidth={2}
            />

            {/* Notification dot */}
            <span
              aria-hidden
              className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #FFA94D, #F38A1A)",
                boxShadow:
                  "0 0 0 2.5px white, 0 4px 8px -2px rgba(255,169,77,0.5)",
              }}
            >
              1
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
