// ============================================================
// Industry configuration — single source of truth
// All 4 industries are first-class. No "Coming Soon" anywhere.
//
// Product positioning: AI that lives in your chat surfaces
// (website widget, social DMs, SMS) — captures every lead,
// qualifies them, and books appointments. NO voice / phone calls.
// ============================================================

export type IndustryKey = "dental" | "medical" | "salon" | "gym";

export interface DemoSite {
  name: string;
  /** URL slug for the demo route at /demos/[industry]/[slug] */
  slug: string;
  description: string;
  /** "tour" = link goes to demo scheduling; "live" = link goes to the demo site */
  status: "tour" | "live";
  /** External URL — if set, demo link goes here instead of /demos/... */
  url?: string;
  /** Optional preview image (path from /public). Falls back to icon card if absent. */
  image?: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryConfig {
  key: IndustryKey;
  displayName: string;
  shortName: string;
  accentClass: string;
  accentHex: string;
  accentGlow: string;
  terms: {
    customer: string;
    customerPlural: string;
    booking: string;
    bookingPlural: string;
    professional: string;
    location: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineSplit: { plain: string; accent: string };
    subheadline: string;
    stat: { value: string; label: string };
  };
  /** Three problem callouts specific to this industry */
  problems: Array<{
    title: string;
    body: string;
    stat: string;
    statLabel: string;
  }>;
  /** Three feature highlights specific to this industry */
  features: Array<{
    title: string;
    body: string;
  }>;
  roi: {
    recoveryRate: number;
    leadsPerMonth: { min: number; max: number; default: number; step: number };
    ltv: { min: number; max: number; default: number; step: number };
    leadsLabel: string;
    ltvLabel: string;
  };
  demos: [DemoSite, DemoSite];
  faqs: IndustryFAQ[];
  /** Planned industry-specific integrations / connectors */
  connectors: Connector[];
}

export interface Connector {
  name: string;
  /** Short category tag e.g. "Practice management" */
  category: string;
  /** Status: building now (highlighted) or on roadmap */
  status: "soon" | "roadmap";
}

export const industries: Record<IndustryKey, IndustryConfig> = {
  dental: {
    key: "dental",
    displayName: "Dental Clinics",
    shortName: "Dental",
    accentClass: "text-accent-dental",
    accentHex: "#06B6D4",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    terms: {
      customer: "patient",
      customerPlural: "patients",
      booking: "appointment",
      bookingPlural: "appointments",
      professional: "dentist",
      location: "practice",
    },
    hero: {
      eyebrow: "For Dental Clinics",
      headline: "Stop losing patients to slow replies. Start filling your chair.",
      headlineSplit: {
        plain: "Stop losing patients to slow replies.",
        accent: "Start filling your chair.",
      },
      subheadline:
        "Patients message your website at 11pm asking about cleanings, whitening, and insurance. Your AI replies in seconds, qualifies them, and books the appointment — while you sleep.",
      stat: { value: "5 min", label: "is when a lead goes cold. Yours replies in 5 seconds." },
    },
    problems: [
      {
        title: "Slow replies kill new patients",
        stat: "80%",
        statLabel: "of leads choose whoever replies first",
        body: "Patients chat with three clinics and book the one that answers first. Your competition is faster than your front desk — and the front desk hates chasing chat windows all day.",
      },
      {
        title: "Insurance questions clog the inbox",
        stat: "1 in 4",
        statLabel: "chats are about insurance acceptance",
        body: "Every 'Do you take MetLife?' steals five minutes from your team. The AI knows your plans and answers instantly, then captures the patient if they're a match.",
      },
      {
        title: "After-hours leakage",
        stat: "62%",
        statLabel: "of dental chats happen outside hours",
        body: "When the lights go off, your competitors with chatbots keep capturing leads. By morning, the highest-intent ones are already booked elsewhere.",
      },
    ],
    features: [
      {
        title: "Knows your insurance plans",
        body: "Trained on which carriers you accept. Patients ask, the AI answers instantly, then collects what your team needs to verify.",
      },
      {
        title: "Triages emergencies smartly",
        body: "Recognizes urgent keywords (pain, swelling, trauma), captures the patient, and pings the duty dentist immediately.",
      },
      {
        title: "Books cleanings without your staff",
        body: "On Growth and Growth+, the AI checks your calendar, offers real slots, and confirms — fully autonomous.",
      },
    ],
    roi: {
      recoveryRate: 0.3,
      leadsPerMonth: { min: 20, max: 500, default: 100, step: 10 },
      ltv: { min: 500, max: 3000, default: 1500, step: 50 },
      leadsLabel: "Chats received per month",
      ltvLabel: "Average patient lifetime value",
    },
    demos: [
      {
        name: "Modern Clinic",
        slug: "modern-clinic",
        description:
          "Cosmetic-focused practice. Sleek hero, before/after gallery, transparent pricing, AI chat widget pre-installed.",
        status: "tour",
        image: "/demos/modern-clinic.png",
      },
      {
        name: "Family Smiles",
        slug: "family-smiles",
        description:
          "Warm general practice. Kid-friendly imagery, insurance info, online intake forms, AI chat widget pre-installed.",
        status: "tour",
        image: "/demos/family-smiles.png",
      },
    ],
    faqs: [
      {
        question: "Where does the AI live?",
        answer:
          "Your website (chat widget), Instagram and Facebook DMs, and SMS. One inbox, one AI, every channel covered.",
      },
      {
        question: "Does the AI handle insurance questions?",
        answer:
          "Yes. We train it on the plans you accept. Patients ask, the AI answers, then collects the info your team needs to verify.",
      },
      {
        question: "What about dental emergencies?",
        answer:
          "The AI recognizes urgent keywords (pain, swelling, trauma), captures the patient's details, and pings you immediately so you can follow up. Nothing falls through.",
      },
      {
        question: "Can patients book cleanings without my staff doing anything?",
        answer:
          "On Growth and Growth+, yes. The AI checks your calendar, offers real slots, and confirms automatically. Starter captures the request and routes it to your team to confirm.",
      },
      {
        question: "Does it integrate with my practice management software?",
        answer:
          "BookZync runs as a standalone dashboard — we don't write into your PMS. Most clinics use BookZync as their chat-and-leads layer and copy confirmed appointments into their PMS once a day.",
      },
      {
        question: "How is patient information protected?",
        answer:
          "We store only the minimum needed to book — name, contact, intent, requested time. We are not HIPAA-certified yet, so the AI is instructed never to collect PHI like diagnoses or medical history.",
      },
    ],
  connectors: [
      { name: "Dentrix", category: "Practice management", status: "soon" },
      { name: "Open Dental", category: "Practice management", status: "soon" },
      { name: "Eaglesoft", category: "Practice management", status: "roadmap" },
      { name: "Curve Dental", category: "Practice management", status: "roadmap" },
      { name: "Google Calendar", category: "Scheduling", status: "soon" },
      { name: "Stripe", category: "Payments", status: "soon" },
      { name: "Twilio", category: "SMS", status: "soon" },
      { name: "Mailchimp", category: "Email marketing", status: "roadmap" },
    ]
  },

  medical: {
    key: "medical",
    displayName: "Medical Practices",
    shortName: "Medical",
    accentClass: "text-accent-medical",
    accentHex: "#3B82F6",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    terms: {
      customer: "patient",
      customerPlural: "patients",
      booking: "appointment",
      bookingPlural: "appointments",
      professional: "doctor",
      location: "practice",
    },
    hero: {
      eyebrow: "For Medical Practices",
      headline: "Patients don't wait for office hours. Now you don't have to either.",
      headlineSplit: {
        plain: "Patients don't wait for office hours.",
        accent: "Now you don't have to either.",
      },
      subheadline:
        "Patients message when symptoms hit — not when your front desk is open. Your AI replies instantly, triages requests, and books appointments around the clock.",
      stat: { value: "24/7", label: "patient capture, even when you're closed" },
    },
    problems: [
      {
        title: "Inquiries arrive at 2am",
        stat: "70%",
        statLabel: "of patient chats start after-hours",
        body: "Symptoms don't care about your schedule. By morning, anxious patients have already booked with whoever replied first — usually a clinic with a chatbot.",
      },
      {
        title: "Front desk drowning in routing",
        stat: "30%",
        statLabel: "of staff time goes to routing alone",
        body: "Which provider? Which specialty? In-person or telehealth? The AI asks the right routing questions and books with the right doctor — your team only sees clean, qualified bookings.",
      },
      {
        title: "Refill requests pile up",
        stat: "5x",
        statLabel: "more refill requests than visits",
        body: "Every refill request slows down booking. The AI captures, formats, and queues them for your team — bookings keep flowing while admin gets handled.",
      },
    ],
    features: [
      {
        title: "Routes to the right provider",
        body: "Configure your providers and specialties. The AI asks routing questions and books with the appropriate doctor.",
      },
      {
        title: "Handles telehealth and in-person",
        body: "Mark slots as in-person, telehealth, or either. The AI offers the right options based on what the patient needs.",
      },
      {
        title: "Triages urgent symptoms",
        body: "Detects emergency keywords and directs patients to 911 or your nurse line immediately. Never tries to diagnose.",
      },
    ],
    roi: {
      recoveryRate: 0.25,
      leadsPerMonth: { min: 20, max: 500, default: 80, step: 10 },
      ltv: { min: 300, max: 2500, default: 1200, step: 50 },
      leadsLabel: "Patient chats per month",
      ltvLabel: "Average patient lifetime value",
    },
    demos: [
      {
        name: "Primary Care",
        slug: "primary-care",
        description:
          "Modern family practice site. Provider bios, same-day booking, telehealth section, patient portal preview, AI chat for new patients.",
        status: "tour",
        image: "/demos/primary-care.png",
      },
      {
        name: "Specialty Clinic",
        slug: "specialty-clinic",
        description:
          "Specialty cardiology center. Subspecialty physicians, condition workup pages, referrals workflow, live EKG hero, AI patient concierge.",
        status: "tour",
        image: "/demos/specialty-clinic.png",
      },
    ],
    faqs: [
      {
        question: "Is BookZync HIPAA-compliant?",
        answer:
          "Not yet — we're transparent about that. We store only name, contact, intent, and requested time. The AI is explicitly instructed never to collect symptoms, diagnoses, or any PHI. For full HIPAA workflows you'd still use your EHR.",
      },
      {
        question: "Can the AI handle prescription refill requests?",
        answer:
          "The AI captures the request and routes it to your staff with all relevant details. It never makes clinical decisions — every refill is reviewed by your team before being processed.",
      },
      {
        question: "How does it handle urgent symptoms?",
        answer:
          "We train the AI to detect urgent keywords and direct patients to call 911 or your nurse line immediately. The AI never tries to diagnose.",
      },
      {
        question: "Can it route to different providers or specialties?",
        answer:
          "Yes. Configure your providers and specialties, and the AI asks the right routing questions before booking with the appropriate doctor.",
      },
      {
        question: "Does it support telehealth bookings?",
        answer:
          "Yes — you can mark slots as in-person, telehealth, or either. The AI offers the right options based on the patient's needs.",
      },
    ],
  connectors: [
      { name: "Epic", category: "EHR", status: "roadmap" },
      { name: "Athenahealth", category: "EHR", status: "soon" },
      { name: "DrChrono", category: "EHR", status: "soon" },
      { name: "Practice Fusion", category: "EHR", status: "roadmap" },
      { name: "NextGen", category: "EHR", status: "roadmap" },
      { name: "Google Calendar", category: "Scheduling", status: "soon" },
      { name: "Zoom Health", category: "Telehealth", status: "soon" },
      { name: "Twilio", category: "SMS", status: "soon" },
    ]
  },

  salon: {
    key: "salon",
    displayName: "Salons & Studios",
    shortName: "Salon",
    accentClass: "text-accent-salon",
    accentHex: "#F59E0B",
    accentGlow: "rgba(245, 158, 11, 0.4)",
    terms: {
      customer: "client",
      customerPlural: "clients",
      booking: "booking",
      bookingPlural: "bookings",
      professional: "stylist",
      location: "salon",
    },
    hero: {
      eyebrow: "For Salons & Studios",
      headline: "Beauty clients book on impulse. Be there when they decide.",
      headlineSplit: {
        plain: "Beauty clients book on impulse.",
        accent: "Be there when they decide.",
      },
      subheadline:
        "Your clients scroll Instagram at 11pm and want a balayage Friday. If you're not in their DMs to book them, they pick a competitor. Your AI books them on the spot — stylist preference and all.",
      stat: { value: "11pm", label: "is when most beauty bookings get decided" },
    },
    problems: [
      {
        title: "Instagram DMs go unanswered",
        stat: "73%",
        statLabel: "of salon DMs wait 4+ hours for a reply",
        body: "By the time your stylist sees the DM, your client has booked across town. The AI replies in seconds, in your voice, with real slot offers.",
      },
      {
        title: "Stylist matching is hard at scale",
        stat: "40%",
        statLabel: "of bookings are with a specific stylist",
        body: "New client wants someone who specializes in curly hair. The AI knows who does what, who's accepting new clients, and matches them — without your front desk.",
      },
      {
        title: "Color formula amnesia",
        stat: "$200+",
        statLabel: "lost per re-corrected color",
        body: "Returning clients expect you to remember their last formula. The AI logs notes from every visit, so when they rebook, you have everything in the dashboard.",
      },
    ],
    features: [
      {
        title: "Matches clients to stylists",
        body: "Knows which stylist does what, who's accepting new clients. Returning clients are matched to their previous stylist automatically.",
      },
      {
        title: "Remembers color and preference notes",
        body: "Stores notes from past visits. When a returning client books, you have their formula and preferences ready in the dashboard.",
      },
      {
        title: "Handles same-day and walk-ins",
        body: "Configure same-day availability rules and the AI offers walk-in slots automatically. Or set it to capture-and-notify before confirming.",
      },
    ],
    roi: {
      recoveryRate: 0.4,
      leadsPerMonth: { min: 20, max: 500, default: 120, step: 10 },
      ltv: { min: 200, max: 1500, default: 600, step: 25 },
      leadsLabel: "DMs and chats per month",
      ltvLabel: "Average client lifetime value",
    },
    demos: [
      {
        name: "Modern Salon",
        slug: "modern-salon",
        description:
          "Full-service salon site. Stylist portfolios, service menu, price-by-stylist, AI chat with stylist matching.",
        status: "tour",
        image: "/demos/modern-salon.png",
      },
      {
        name: "Bridal Studio",
        slug: "bridal-studio",
        description:
          "Specialty bridal site. Lookbook gallery, package pricing, trial booking, AI chat for consultations.",
        status: "tour",
        image: "/demos/bridal-studio.png",
      },
    ],
    faqs: [
      {
        question: "Where does the AI live?",
        answer:
          "Your website (chat widget), Instagram and Facebook DMs, and SMS. One inbox, every channel — your stylists never have to switch apps to reply.",
      },
      {
        question: "Can clients request a specific stylist?",
        answer:
          "Yes — the AI knows which stylist does what, who's accepting new clients, and matches based on the service. Returning clients are matched to their previous stylist by default.",
      },
      {
        question: "Does it handle color formula notes and client history?",
        answer:
          "The AI stores notes from past visits so when a returning client books, you have their formula and preferences in the dashboard.",
      },
      {
        question: "What about walk-ins and same-day bookings?",
        answer:
          "Configure same-day availability rules and the AI offers walk-in slots automatically. Or set it to capture and notify you before confirming.",
      },
      {
        question: "Can it sell packages and gift cards?",
        answer:
          "Package inquiries are captured and routed to you for follow-up. Direct package sales through the AI are on our roadmap.",
      },
      {
        question: "Does it handle deposits or no-show protection?",
        answer:
          "The AI captures the booking; payment links can be sent via SMS or email after confirmation. Fully integrated deposits are coming soon.",
      },
    ],
  connectors: [
      { name: "Square Appointments", category: "Booking", status: "soon" },
      { name: "Vagaro", category: "Booking", status: "soon" },
      { name: "Mindbody", category: "Booking", status: "roadmap" },
      { name: "Booksy", category: "Booking", status: "soon" },
      { name: "Fresha", category: "Booking", status: "roadmap" },
      { name: "Instagram", category: "Social DMs", status: "soon" },
      { name: "Stripe", category: "Payments", status: "soon" },
      { name: "Google Calendar", category: "Scheduling", status: "soon" },
    ]
  },

  gym: {
    key: "gym",
    displayName: "Gyms & Fitness Studios",
    shortName: "Gym",
    accentClass: "text-accent-gym",
    accentHex: "#F97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
    terms: {
      customer: "member",
      customerPlural: "members",
      booking: "session",
      bookingPlural: "sessions",
      professional: "trainer",
      location: "gym",
    },
    hero: {
      eyebrow: "For Gyms & Fitness Studios",
      headline: "Members ask outside business hours. Your AI answers in seconds.",
      headlineSplit: {
        plain: "Members ask outside business hours.",
        accent: "Your AI answers in seconds.",
      },
      subheadline:
        "Prospects ask about classes, tours, and PT outside your staffed hours — and most don't ask twice. Your AI captures every chat, books tours, and fills classes around the clock.",
      stat: { value: "70%", label: "of new gym inquiries happen after-hours" },
    },
    problems: [
      {
        title: "Tours don't get booked",
        stat: "60%",
        statLabel: "of tour requests die in chat queues",
        body: "Prospect asks about a tour at 9pm. Nobody answers until morning. By then they've signed up at the gym next door. Your AI books the tour the same minute they ask.",
      },
      {
        title: "Class capacity is invisible",
        stat: "3 in 10",
        statLabel: "members ask 'is X class full?' weekly",
        body: "Your front desk gets the same question all day. The AI checks live class capacity, books open spots, and adds people to waitlists when classes fill.",
      },
      {
        title: "PT consults stall in inbox",
        stat: "$2k+",
        statLabel: "average value of a converted PT lead",
        body: "Every PT lead that ghosts is real revenue. The AI matches members to trainers by specialty and books the intro session before they cool off.",
      },
    ],
    features: [
      {
        title: "Books tours instantly",
        body: "Tour requests get the same-minute response and a confirmed slot. Your sales team only sees prospects who actually showed up.",
      },
      {
        title: "Manages class waitlists",
        body: "Checks live class capacity, books open spots, adds people to waitlists when classes fill. No more 'is this full?' messages.",
      },
      {
        title: "Matches members to trainers",
        body: "Configure your trainers and their specialties — the AI matches members and books the intro PT session.",
      },
    ],
    roi: {
      recoveryRate: 0.2,
      leadsPerMonth: { min: 20, max: 500, default: 150, step: 10 },
      ltv: { min: 400, max: 3000, default: 1000, step: 50 },
      leadsLabel: "Inquiries and chats per month",
      ltvLabel: "Average member lifetime value",
    },
    demos: [
      {
        name: "Boutique Fitness",
        slug: "boutique-fitness",
        description:
          "Small studio site. Class schedule, trainer bios, intro pass offer, AI chat for trials and PT consults.",
        status: "tour",
        image: "/demos/boutique-fitness.png",
      },
      {
        name: "Full Gym",
        slug: "full-gym",
        description:
          "Large facility site. Membership tiers, amenities tour, day pass purchase, AI chat for tours and class signups.",
        status: "tour",
        image: "/demos/full-gym.png",
      },
    ],
    faqs: [
      {
        question: "Where does the AI live?",
        answer:
          "Your website (chat widget), Instagram and Facebook DMs, and SMS. One inbox covers every channel members reach out from.",
      },
      {
        question: "Can it sell memberships directly?",
        answer:
          "The AI captures member intent and books a tour or trial. Direct membership purchase through the AI is on our roadmap — for now, tour-to-close is the workflow.",
      },
      {
        question: "Does it handle class capacity and waitlists?",
        answer:
          "Yes. On Growth and Growth+, the AI checks live class capacity, books open spots, and adds people to waitlists when classes fill.",
      },
      {
        question: "Can it book personal training consultations?",
        answer:
          "Absolutely. Configure your trainers and their specialties — the AI matches members to trainers and books the intro session.",
      },
      {
        question: "What about trial passes and intro offers?",
        answer:
          "Set up your trial pass terms and the AI offers them to qualified leads. The dashboard tracks which trials convert.",
      },
      {
        question: "Does it work for both small studios and large gyms?",
        answer:
          "Yes. Small studios use it as their entire front desk; large gyms use it to handle overflow and after-hours capture.",
      },
    ],
  connectors: [
      { name: "Mindbody", category: "Member management", status: "soon" },
      { name: "ClubReady", category: "Member management", status: "roadmap" },
      { name: "Glofox", category: "Studio software", status: "soon" },
      { name: "Wodify", category: "CrossFit software", status: "roadmap" },
      { name: "TeamUp", category: "Class scheduling", status: "soon" },
      { name: "Trainerize", category: "PT software", status: "roadmap" },
      { name: "Stripe", category: "Payments", status: "soon" },
      { name: "Twilio", category: "SMS", status: "soon" },
    ]
  },
};

export const industryList: IndustryConfig[] = [
  industries.dental,
  industries.medical,
  industries.salon,
  industries.gym,
];

export function calculateRoi(
  industry: IndustryKey,
  leadsPerMonth: number,
  ltv: number
): number {
  const cfg = industries[industry];
  return Math.round(leadsPerMonth * ltv * cfg.roi.recoveryRate);
}
