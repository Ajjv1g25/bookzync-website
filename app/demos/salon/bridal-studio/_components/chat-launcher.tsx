"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";

export function VerbenaChatLauncher() {
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
            className="mb-1 hidden items-center rounded-full px-4 py-2.5 sm:flex"
            style={{
              backgroundColor: "#FBF6EE",
              color: "#2B2520",
              border: "1px solid rgba(201,169,113,0.4)",
              boxShadow: "0 12px 32px -8px rgba(43,37,32,0.18)",
            }}
          >
            <span className="text-xs uppercase tracking-[0.18em]">
              Inquire
            </span>
          </motion.div>

          <button
            type="button"
            onClick={() => open("general")}
            aria-label="Inquire with Verbena Bridal"
            className="group relative flex items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              width: "56px",
              height: "56px",
              backgroundColor: "#2B2520",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.1) inset, 0 12px 32px -4px rgba(43,37,32,0.45), 0 4px 12px -2px rgba(43,37,32,0.2)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full"
              style={{
                backgroundColor: "#C9A971",
                opacity: 0.25,
                animationDuration: "2.5s",
              }}
            />
            <MessageCircle
              className="relative h-6 w-6"
              style={{ color: "#FBF6EE" }}
              strokeWidth={1.5}
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
