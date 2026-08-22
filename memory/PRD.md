# Visionema.net — Product Requirements Doc

## Product
Visual-first, multi-page **Astro + React** website for **Visionema.net**, an Indonesian social media management & creative agency based in Magelang. Tone is fun, witty, playful yet professional. Indonesian default, English toggle available. Mobile-first design.

## Tech Stack
- **Astro 5** + React (islands only where needed) + TypeScript
- Vanilla CSS with brand tokens (Space Grotesk display / Manrope body / Instrument Serif italic)
- Sitemap plugin for SEO
- Runs on port `3000` (routes into the preview URL). Expo/dev server is intentionally stopped.

## Project layout
```
/app/website/
├── astro.config.mjs        # host 0.0.0.0, port 3000, allowedHosts:true (preview)
├── src/
│   ├── layouts/MainLayout.astro   # meta, navbar, footer, sticky CTA, i18n switch
│   ├── components/
│   │   ├── Navbar.astro           # sticky top nav + mobile hamburger + EN/ID toggle
│   │   ├── Footer.astro           # big "Start, Grow, Win!" wordmark
│   │   ├── StickyMobileCTA.astro  # bottom "Chat Visionema" WhatsApp CTA on <720px
│   │   ├── Hero.astro             # phone mockup + rotating word + marquee ticker
│   │   ├── FeaturedWork.astro     # asymmetric 4-tile portfolio preview
│   │   ├── ServicesList.astro     # editorial 4-row services list
│   │   ├── Packages.astro         # compact/full pricing tiers (from pricing.jpeg)
│   │   ├── SocialProof.astro      # Instagram-style tile grid (quote + stat + reel)
│   │   ├── FinalCTA.astro         # big yellow WA button
│   │   └── react/
│   │       ├── MagneticButton.tsx # React Bits-inspired hover magnetic
│   │       ├── RotatingWord.tsx   # rotating italic serif word
│   │       ├── TiltCard.tsx       # 3D tilt on hover (reusable)
│   │       └── ContactForm.tsx    # writes to WhatsApp
│   ├── data/{services,packages,works}.ts  # bilingual data-driven content
│   ├── i18n/translations.ts               # id + en strings, single source
│   ├── config.ts                          # WhatsApp number + brand config
│   ├── pages/
│   │   ├── index.astro    services.astro  packages.astro
│   │   ├── works.astro    about.astro     contact.astro
│   │   └── en/            # English mirrors of every page
│   └── styles/global.css
├── public/{favicon.svg,robots.txt}
└── start-dev.sh           # kills expo + starts astro on :3000
```

## Brand tokens (from VISIONEMA.NET_BRAND GUIDELINE.pdf)
- `--brand-blue` `#1E56E8` · `--brand-blue-deep` `#0A1F5B` · `--brand-cyan` `#33CCFF`
- `--brand-yellow` `#FFCC00` · `--brand-red` `#EF2A2A` · `--brand-cream` `#F7F3E8`
- `--brand-ink` `#0B0F1A`

## Pages & Interactions
| Page | Highlights |
| --- | --- |
| `/` | Hero (rotating word, phone mock, floating stickers, marquee) → Featured Work → Services list → Packages preview → Social Proof grid → Final CTA |
| `/services` | 4 large service blocks with rotating dashed ring & alt layouts |
| `/packages` | Red rotated banner ("Marketing itu Investasi, bukan beban."), 3 pricing cards (Mulai Aja Dulu / Level Up ★ / Scale Up) with every feature from `pricing.jpeg`, FAQ list |
| `/works` | Masonry-esque portfolio grid, every image is clearly labelled `Placeholder · replace with client visual` |
| `/about` | Serif-italic manifesto quote, 3 brand values (Cool / Fun / Trusted), big statement block |
| `/contact` | WhatsApp / Instagram / Email channel list + form that composes a WhatsApp pre-filled message |

## Localisation
- Default language: **Indonesia** (root routes `/`).
- English mirrors live under `/en/*`.
- Toggle in navbar rewrites the path prefix (see `MainLayout.astro` inline script).
- All copy is stored in `src/i18n/translations.ts` + data files (`{id, en}` pairs), so nothing is hard-coded per language.

## Integrations
- WhatsApp deep link: `wa.me/<number>?text=<msg>` (configured in `src/config.ts`).
  - **TODO for user:** replace placeholder `SITE.whatsappNumber` in `/app/website/src/config.ts` with the real Visionema.net WhatsApp number.
- Instagram: `https://instagram.com/visionema_net`
- Contact form: submits by opening WhatsApp with pre-filled message (no backend required).

## Content assets
- Portfolio images use curated Unsplash placeholders and are visibly tagged `Placeholder · replace with client visual`. Ready-to-swap slots documented in `src/data/works.ts`.
- Pricing content is faithful to `pricing.jpeg` — struck-through items in the reference are represented as `included: false` in `src/data/packages.ts`.

## Running locally / in this pod
```bash
bash /app/website/start-dev.sh   # kills expo, starts astro on :3000
```
The preview URL (routed to port 3000) will then serve the website.

## What is intentionally NOT built (per user brief)
- No payment gateway, auth, dashboard, or database.
- No fake testimonials, fake stats, fake awards, fake case studies.
- No push notifications.
