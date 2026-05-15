// ============================================================
// CTA Connector Config — single source of truth for every
// call-to-action destination across the site.
//
// To wire CTAs to a real backend later (Calendly, Cal.com,
// HubSpot, Typeform, Stripe checkout, mailto, etc.) — just
// edit the URLs below. No other files need to change.
// ============================================================

/** Plan slugs — passed as ?plan= query param for tier-specific CTAs */
export type PlanKey = "starter" | "growth" | "growth-plus";

/** Intent slugs — passed as ?intent= query param so the destination knows why someone clicked */
export type IntentKey = "general" | "demo" | "pricing" | "early-access";

/**
 * Central CTA destination registry.
 *
 * Each value is the URL a button leads to. Today they all point to /contact,
 * but you can replace any of them with:
 *   - A Calendly link: "https://calendly.com/bookzync/intro"
 *   - A Typeform: "https://bookzync.typeform.com/get-started"
 *   - A mailto: "mailto:hello@bookzync.com?subject=Starter%20signup"
 *   - A Stripe checkout: "https://buy.stripe.com/xyz"
 *   - An external CRM form, etc.
 *
 * The query params (?plan=, ?intent=) are kept on internal URLs so the
 * destination form/page can prefill the right plan or context.
 */
export const ctaLinks = {
  // Primary contact / lead capture
  contact: "/contact",
  getStarted: "/contact?intent=early-access",

  // Plan-specific (pricing tier CTAs)
  starter: "/contact?plan=starter",
  growth: "/contact?plan=growth",
  growthPlus: "/contact?plan=growth-plus",

  // Demo scheduling (when a visitor clicks "Schedule a personalized tour")
  scheduleDemo: "/contact?intent=demo",

  // Investor / partnership inquiries (not currently surfaced, but available)
  partnership: "/contact?intent=partnership",
} as const;

/** Helper for typing CTAs */
export type CTAKey = keyof typeof ctaLinks;

/**
 * Build a contact URL with a specific plan + intent context.
 * Useful when you want both — e.g. "intent=demo" + "plan=growth".
 */
export function ctaWith(opts: { plan?: PlanKey; intent?: IntentKey } = {}): string {
  const base = "/contact";
  const params = new URLSearchParams();
  if (opts.plan) params.set("plan", opts.plan);
  if (opts.intent) params.set("intent", opts.intent);
  const q = params.toString();
  return q ? `${base}?${q}` : base;
}
