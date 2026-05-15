# BookZync Website

Marketing site for **BookZync** — an AI front-desk SaaS for clinics, salons, and gyms.

> *Smarter front desk. Fuller calendar.*

Built with **Next.js 16** (App Router) + **Tailwind v4** + **motion/react** + **next-themes** + TypeScript.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (Turbopack)
npm run dev

# 3. Open http://localhost:3000
```

Requires **Node 18.18+** (Node 20 LTS recommended).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint |
| `npx tsc --noEmit` | Typecheck without emitting JS |

---

## Project structure

```
bookzync-website/
├── app/
│   ├── globals.css           Tokens (light + dark), keyframes, utilities
│   ├── layout.tsx            Fonts, metadata, theme provider
│   ├── providers.tsx         ThemeProvider + ChatbotProvider mount
│   ├── page.tsx              Home page
│   ├── sitemap.ts            Auto-generated sitemap.xml
│   ├── robots.ts             Auto-generated robots.txt
│   ├── pricing/              Full pricing page
│   ├── faq/                  Full categorized FAQ
│   ├── about/                About page
│   ├── industry/[key]/       Dynamic industry pages (dental/medical/salon/gym)
│   ├── demos/                Eight demo sites (3 pages each = 24 demo routes)
│   │   ├── dental/{modern-clinic,family-smiles}/
│   │   ├── medical/{primary-care,specialty-clinic}/
│   │   ├── salon/{modern-salon,bridal-studio}/
│   │   └── gym/{boutique-fitness,full-gym}/
│   └── {privacy,terms,refund-policy}/   Legal
├── components/
│   ├── chatbot.tsx           AI chat widget (mounted globally)
│   ├── navbar.tsx / footer.tsx / logo.tsx
│   ├── theme-toggle.tsx
│   ├── motion/fade-in.tsx    Animation primitives
│   ├── home/                 Home page sections
│   ├── industry/             Industry page builder + ROI calculator
│   └── ui/                   Button, Badge, etc.
├── lib/
│   ├── industry-config.ts    Single source of truth for all industry content
│   ├── chatbot-context.tsx   React context for opening/closing the chatbot
│   ├── chatbot-script.ts     Scripted bot replies
│   └── utils.ts              cn() helper
└── public/
    ├── favicon.png + favicon-{16,32}.png + apple-icon.png
    ├── logo.png + logo-transparent.png
    └── demos/*.png           Homepage screenshots of each demo
```

---

## What's built

### Marketing pages
- **Home** — hero, problem/solution, industry selector, pricing preview, FAQ, CTA
- **Industry pages** — 4 industries (dental, medical, salon, gym), each with custom hero, ROI calculator, demos, FAQs
- **Pricing** — full pricing page with monthly/annual toggle
- **FAQ** — 6 categorized sections, animated accordion
- **About** — origin story, roadmap, team
- **Legal** — Privacy, Terms, Refund Policy

### Demo sites (8 total, 3 pages each)
Real "what your site could look like" demos with distinct visual identities:

| Industry | Demo 1 | Demo 2 |
|---|---|---|
| Dental | Aurum Dental Studio (cosmetic, NYC) | Sunny Smiles (family, San Diego) |
| Medical | Cedarwood Family Medicine (Portland) | Meridian Heart & Vascular (Chicago) |
| Salon | Atelier N°9 (Brooklyn brutalist) | Verbena Bridal (Charleston) |
| Gym | PROOF Strength (Brooklyn) | Northpoint Athletic Club (Portland) |

### The chatbot
- Mounted globally — every "Contact" / "Get Started" / "Book" CTA opens it
- Scripted replies for now (`lib/chatbot-script.ts`)
- Intent system so different CTAs land on different conversation flows
- Solid opaque panel design (no liquid glass)

### Design system
- **Fonts**: Geist Sans + Geist Mono
- **Color tokens**: HSL CSS variables, dual light + dark theme
- **Industry accents**: Dental cyan `#06B6D4` · Medical blue `#3B82F6` · Salon amber `#F59E0B` · Gym orange `#F97316`
- **Motion**: scroll-triggered reveals via `motion/react`, respects `prefers-reduced-motion`

---

## Deployment

### Recommended: DigitalOcean App Platform

This site is a standard Next.js app and runs perfectly on App Platform with zero config.

**Build settings** (App Platform auto-detects most of this):
- **Source**: GitHub repo, `main` branch
- **Build command**: `npm run build`
- **Run command**: `npm start`
- **HTTP port**: `3000`
- **Node version**: 20.x
- **Instance**: Basic XXS ($5/mo) is fine to start

See [`DEPLOY.md`](./DEPLOY.md) for the full step-by-step deployment guide.

### Alternative: Vercel

Push to GitHub → import on Vercel → done. No config needed.

### Alternative: Self-hosted (Docker)

A `Dockerfile` is included for containerized deploys. Build and run:

```bash
docker build -t bookzync-website .
docker run -p 3000:3000 bookzync-website
```

---

## Environment variables

None required for the marketing site to run. The chatbot is currently scripted, not connected to an LLM API. When you wire it up to a real backend:

```bash
# .env.local
ANTHROPIC_API_KEY=sk-ant-...
# or
OPENAI_API_KEY=sk-...
```

See `.env.example` for the full list.

---

## Updating content

| To change... | Edit... |
|---|---|
| Hero copy on the home page | `components/home/hero.tsx` |
| Industry page content (hero, services, FAQs) | `lib/industry-config.ts` |
| Pricing tier features or prices | `components/home/pricing-preview.tsx` + `app/pricing/page.tsx` |
| FAQ questions | `app/faq/page.tsx` |
| Chatbot scripted replies | `lib/chatbot-script.ts` |
| Demo site copy | `app/demos/{industry}/{slug}/page.tsx` |
| Sitemap entries | `app/sitemap.ts` |

---

## License

Proprietary — © BookZync.
