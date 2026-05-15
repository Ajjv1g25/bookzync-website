"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, Sparkles } from "lucide-react";
import { useChatbot } from "@/lib/chatbot-context";
import {
  getBotReply,
  greetings,
  collectionSuccessReply,
  type BotReply,
} from "@/lib/chatbot-script";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
  action?: BotReply["action"];
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Chatbot() {
  const { isOpen, intent, close } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [collectingInfo, setCollectingInfo] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset and seed greeting whenever the bot opens (or intent changes)
  useEffect(() => {
    if (isOpen) {
      const greeting = greetings[intent];
      setMessages([
        {
          id: "greet-" + Date.now(),
          role: "bot",
          text: greeting.text,
          quickReplies: greeting.quickReplies,
        },
      ]);
      setInput("");
      setIsTyping(false);
      setCollectingInfo(false);
      setSubmittedInfo(false);
    }
  }, [isOpen, intent]);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const sendUserMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: "u-" + Date.now(),
      role: "user",
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise((r) => setTimeout(r, 700 + Math.random() * 600));

    const reply = getBotReply(text, intent);
    const botMsg: Message = {
      id: "b-" + Date.now(),
      role: "bot",
      text: reply.text,
      quickReplies: reply.quickReplies,
      action: reply.action,
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);

    if (reply.action === "collect-info") {
      setCollectingInfo(true);
    }
  };

  const handleQuickReply = (text: string) => {
    sendUserMessage(text);
  };

  const handleSubmitInfo = async (businessName: string, email: string) => {
    if (!email.trim()) return;
    const userMsg: Message = {
      id: "u-info-" + Date.now(),
      role: "user",
      text: `${businessName ? businessName + " · " : ""}${email}`,
    };
    setMessages((prev) => [...prev, userMsg]);
    setCollectingInfo(false);
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 900));

    setMessages((prev) => [
      ...prev,
      {
        id: "b-success-" + Date.now(),
        role: "bot",
        text: collectionSuccessReply.text,
        quickReplies: collectionSuccessReply.quickReplies,
      },
    ]);
    setIsTyping(false);
    setSubmittedInfo(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Soft backdrop — click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-black/40"
            aria-hidden
          />

          {/* Chat panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: easeOut }}
            role="dialog"
            aria-modal="true"
            aria-label="BookZync AI assistant"
            className="fixed bottom-4 right-4 z-50 flex h-[640px] max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-border bg-bg shadow-2xl sm:bottom-6 sm:right-6 sm:w-[420px]"
            style={{
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 48px -12px rgba(0,0,0,0.35), 0 8px 24px -8px rgba(0,0,0,0.2)",
            }}
          >

            {/* ===== Header ===== */}
            <header className="relative flex items-center justify-between border-b border-border bg-bg px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-card"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-hover)))",
                      boxShadow:
                        "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 4px 12px -2px hsl(var(--brand-glow))",
                    }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-50" />
                    <span className="relative h-2.5 w-2.5 rounded-full border-2 border-bg bg-green-500" />
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-text">Zara</div>
                  <div className="font-mono text-[10px] text-text-subtle">
                    BookZync · online
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-bg-subtle hover:text-text"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            {/* ===== Messages ===== */}
            <div
              ref={scrollRef}
              className="relative flex-1 space-y-3 overflow-y-auto bg-bg px-5 py-5"
            >
              {messages.map((msg, i) => (
                <MessageRow
                  key={msg.id}
                  message={msg}
                  isLast={i === messages.length - 1}
                  onQuickReply={handleQuickReply}
                />
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-text-subtle"
                        style={{
                          animation: "pulse-soft 1.4s ease-in-out infinite",
                          animationDelay: `${d * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Inline info-collection form */}
              {collectingInfo && (
                <InfoCollectionCard onSubmit={handleSubmitInfo} />
              )}
            </div>

            {/* ===== Input ===== */}
            <footer className="relative border-t border-border bg-bg px-4 py-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendUserMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    submittedInfo
                      ? "Anything else I can help with?"
                      : "Type a message..."
                  }
                  className="flex-1 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder-text-subtle outline-none focus:border-brand focus:ring-1 focus:ring-brand/30"
                  disabled={isTyping || collectingInfo}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping || collectingInfo}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-hover)))",
                    boxShadow:
                      "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 4px 12px -2px hsl(var(--brand-glow))",
                  }}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-wider text-text-subtle">
                Demo bot · Real AI integration coming soon
              </p>
            </footer>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   Single message row
   ============================================================ */
function MessageRow({
  message,
  isLast,
  onQuickReply,
}: {
  message: Message;
  isLast: boolean;
  onQuickReply: (text: string) => void;
}) {
  const isBot = message.role === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: easeOut }}
    >
      <div className={cn("flex", isBot ? "justify-start" : "justify-end")}>
        <div
          className={cn(
            "max-w-[85%] px-4 py-2.5 text-sm leading-relaxed",
            isBot
              ? "rounded-2xl rounded-bl-sm bg-surface text-text"
              : "rounded-2xl rounded-br-sm text-white"
          )}
          style={
            !isBot
              ? {
                  background:
                    "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-hover)))",
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.2) inset, 0 4px 12px -2px hsl(var(--brand-glow) / 0.4)",
                }
              : undefined
          }
        >
          {/* Preserve line breaks */}
          <span className="whitespace-pre-line">{message.text}</span>
        </div>
      </div>

      {/* Quick reply chips — only under the latest bot message */}
      {isBot && isLast && message.quickReplies && message.quickReplies.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {message.quickReplies.map((qr) => (
            <button
              key={qr}
              type="button"
              onClick={() => onQuickReply(qr)}
              className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand transition-all hover:-translate-y-0.5 hover:bg-brand/15 hover:border-brand/60"
            >
              {qr}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ============================================================
   Info collection card — shown when bot wants email + business name
   ============================================================ */
function InfoCollectionCard({
  onSubmit,
}: {
  onSubmit: (businessName: string, email: string) => void;
}) {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(businessName, email);
      }}
      className="rounded-2xl border border-border bg-surface p-4"
    >
      <label className="block">
        <span className="text-xs font-medium text-text-muted">Business name</span>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Acme Dental"
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text placeholder-text-subtle outline-none focus:border-brand focus:ring-1 focus:ring-brand/30"
        />
      </label>
      <label className="mt-3 block">
        <span className="text-xs font-medium text-text-muted">Email *</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@business.com"
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text placeholder-text-subtle outline-none focus:border-brand focus:ring-1 focus:ring-brand/30"
        />
      </label>
      <button
        type="submit"
        disabled={!email.trim()}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-hover)))",
          boxShadow:
            "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 4px 12px -2px hsl(var(--brand-glow))",
        }}
      >
        Send to BookZync
        <Send className="h-3.5 w-3.5" />
      </button>
    </motion.form>
  );
}
