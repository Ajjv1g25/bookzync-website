// ============================================================
// Chatbot scripted responses
//
// This is a placeholder script for the chatbot UI. Today every
// reply is keyword-matched. When you wire up a real AI backend
// (Anthropic Claude, OpenAI, Gemini, etc.), replace `getBotReply()`
// below with an async fetch to your API — keep the BotReply shape
// and the UI keeps working.
// ============================================================

import type { ChatbotIntent } from "./chatbot-context";

export interface BotReply {
  text: string;
  quickReplies?: string[];
  /** Special UI action the bot wants to trigger */
  action?: "collect-info" | "payment-link";
}

/** Greeting shown when the chatbot is opened, varies by intent */
export const greetings: Record<ChatbotIntent, BotReply> = {
  general: {
    text:
      "Hi! I'm Zara, BookZync's AI assistant. I can answer questions about our plans, walk you through pricing, or get you set up. What can I help with?",
    quickReplies: ["How does it work?", "See pricing", "I'm ready to start"],
  },
  starter: {
    text:
      "Great choice — Starter is perfect for getting started. $149/mo with a one-time $99 setup. Want me to walk you through what's included?",
    quickReplies: ["What's included?", "Setup process?", "Yes, let's start"],
  },
  growth: {
    text:
      "Awesome — Growth is our most popular plan. $349/mo + $199 setup gets you full AI training, calendar bookings, and analytics. Should I walk through it?",
    quickReplies: ["What's included?", "Compare with Starter", "Yes, let's start"],
  },
  "growth-plus": {
    text:
      "Going all-in! Growth+ is $599/mo + $499 setup, and we build a custom website for you too. Want me to walk through what's involved?",
    quickReplies: ["What's included?", "Website timeline?", "Yes, let's start"],
  },
  demo: {
    text:
      "Happy to schedule a personalized tour. Mind sharing your name and email so we can find a time?",
    quickReplies: ["Schedule call", "I have a question first"],
  },
  contact: {
    text:
      "Hi there! How can I help? I can answer questions about the product, pricing, or connect you with our team.",
    quickReplies: ["See pricing", "How does it work?", "Talk to a human"],
  },
};

/**
 * Get a bot reply for a user message.
 * Today: keyword matching. Tomorrow: replace with an AI API call.
 */
export function getBotReply(
  userMessage: string,
  intent: ChatbotIntent
): BotReply {
  const m = userMessage.toLowerCase().trim();

  // -------- Pricing --------
  if (m.includes("price") || m.includes("cost") || m.includes("pricing")) {
    return {
      text:
        "Our plans:\n• Starter — $149/mo + $99 setup\n• Growth — $349/mo + $199 setup (most popular)\n• Growth+ — $599/mo + $499 setup (custom website included)\n\nAll plans cancel anytime. Annual = 2 months free.",
      quickReplies: ["What's in Starter?", "What's in Growth?", "I'm ready to start"],
    };
  }

  // -------- How it works --------
  if (
    m.includes("how does it work") ||
    m.includes("how it works") ||
    m.includes("how does this work")
  ) {
    return {
      text:
        "Three steps:\n1. Connect your channels — website widget and SMS.\n2. We train the AI in 48 hours on your services, pricing, and tone.\n3. Live in 7 days. The AI handles every chat 24/7, books appointments, captures leads.",
      quickReplies: ["See pricing", "What's the setup?", "I'm ready"],
    };
  }

  // -------- Setup --------
  if (m.includes("setup") || m.includes("onboarding") || m.includes("install")) {
    return {
      text:
        "Setup is a one-time fee covering AI training, calendar configuration, and (on Growth+) building your custom website. Most businesses go live in 7 days from signup. We handle everything.",
      quickReplies: ["See pricing", "How long exactly?", "Let's start"],
    };
  }

  // -------- What's included --------
  if (m.includes("what") && (m.includes("included") || m.includes("get"))) {
    if (intent === "starter" || m.includes("starter")) {
      return {
        text:
          "Starter includes:\n• AI chat assistant (24/7) on your website and via SMS\n• Leads CRM\n• Email notifications\n• Workforce management\n• Basic AI training\n\n$149/mo + $99 setup.",
        quickReplies: ["Compare Growth", "Yes, let's start", "Cancel anytime?"],
      };
    }
    if (intent === "growth-plus" || m.includes("growth+") || m.includes("growth plus")) {
      return {
        text:
          "Growth+ includes everything in Growth, plus:\n• Custom website built by us\n• AI chat widget pre-installed\n• Hosting included\n• Custom domain support\n• Dedicated onboarding\n\n$599/mo + $499 setup.",
        quickReplies: ["Website timeline?", "Yes, let's start", "Compare Growth"],
      };
    }
    // default: growth
    return {
      text:
        "Growth includes everything in Starter, plus:\n• Calendar bookings — AI fills slots automatically\n• Analytics & reports\n• Live status board\n• SMS notifications\n• Full custom AI training\n• Priority support\n\n$349/mo + $199 setup. Most popular tier.",
      quickReplies: ["What about Growth+?", "Yes, let's start", "Cancel anytime?"],
    };
  }

  // -------- Cancellation / refunds --------
  if (m.includes("cancel") || m.includes("refund") || m.includes("contract")) {
    return {
      text:
        "No long contracts. Cancel anytime — service stays active until the end of your paid period, then stops. Setup fees are one-time and non-refundable since we dedicate engineering hours upfront.",
      quickReplies: ["See pricing", "How does setup work?", "Let's start"],
    };
  }

  // -------- Compare --------
  if (m.includes("compare") || m.includes("difference") || m.includes("vs")) {
    return {
      text:
        "Quick comparison:\n• Starter ($149/mo) — AI captures leads, your team confirms bookings.\n• Growth ($349/mo) — AI auto-books appointments + analytics. Most pick this.\n• Growth+ ($599/mo) — Growth + a brand-new website built by us.",
      quickReplies: ["Starter details", "Growth details", "Growth+ details"],
    };
  }

  // -------- Ready / start / sign up --------
  if (
    m.includes("ready") ||
    m.includes("start") ||
    m.includes("sign up") ||
    m.includes("signup") ||
    m.includes("let's go") ||
    m.includes("yes")
  ) {
    return {
      text:
        "Excellent! Drop your business name and email and I'll send onboarding details + a secure payment link. Setup begins same day.",
      action: "collect-info",
    };
  }

  // -------- Human / call --------
  if (
    m.includes("human") ||
    m.includes("person") ||
    m.includes("call") ||
    m.includes("talk to someone") ||
    m.includes("schedule")
  ) {
    return {
      text:
        "Of course — share your email and I'll have our team reach out within one business day to set up a call.",
      action: "collect-info",
    };
  }

  // -------- Website timeline --------
  if (m.includes("website") || m.includes("timeline") || m.includes("how long")) {
    return {
      text:
        "On Growth+, your custom website is delivered within 7 days of signup, along with the AI chat widget already installed. We handle design, copy, hosting — you just review.",
      quickReplies: ["What's included in Growth+?", "Let's start", "See other plans"],
    };
  }

  // -------- Fallback --------
  return {
    text:
      "Good question. Let me get a human to handle this properly — share your email and someone from our team will reach out today.",
    action: "collect-info",
  };
}

/**
 * Final message after the user submits their info via the collect-info action.
 */
export const collectionSuccessReply: BotReply = {
  text:
    "Got it! 🎉 Our team will be in touch shortly with onboarding details and a payment link. In the meantime, feel free to ask anything else.",
  quickReplies: ["See pricing", "How does it work?"],
};
