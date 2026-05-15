"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

export function CedarwoodChatLauncher() {
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
          {/* Greeting label */}
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mb-1 hidden items-center gap-1.5 rounded-2xl rounded-br-sm px-4 py-2.5 sm:flex"
            style={{
              backgroundColor: "white",
              color: "#1A2421",
              boxShadow:
                "0 12px 32px -8px rgba(45,58,46,0.15), 0 0 0 1px rgba(45,58,46,0.05)",
            }}
          >
            <span className="text-sm font-semibold">How can we help?</span>
          </motion.div>

          {/* Main launcher */}
          <button
            type="button"
            onClick={() => open("general")}
            aria-label="Chat with Cedarwood Family Medicine"
            className="group relative flex items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #6E8B6F, #8FA890)",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 12px 32px -4px rgba(110,139,111,0.55), 0 4px 12px -2px rgba(45,58,46,0.2)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full"
              style={{
                backgroundColor: "#6E8B6F",
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
