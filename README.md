# Carat Amor Jewels — Flagship Website

A digital flagship boutique for **Carat Amor Jewels**, a lab-grown diamond showroom in Hyderabad. Not an e‑commerce store: enquiries happen over WhatsApp and a private consultation form. No cart, no checkout.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lenis · React‑Three‑Fiber**.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build (static-first)
npm start          # serve the production build
```

Node 18.18+ (developed on Node 24).

## Deploying to Vercel

1. Push this folder to a Git repo (GitHub/GitLab).
2. In Vercel: **New Project → import the repo**. Framework auto-detects as Next.js.
3. No build config needed. Set the environment variables below if/when you wire email.
4. After the first deploy, set your real domain and update the two `SITE_URL` constants (see _Before you go live_).

## Environment variables (optional — for consultation emails)

The consultation form works out of the box (it logs enquiries server-side and always offers a WhatsApp fallback). To send real emails, add **one** provider and implement the marked block in `lib/sendEnquiry.ts`:

```
RESEND_API_KEY=...        # or
SMTP_URL=smtp://user:pass@host:port
```

---

## Where things live

```
app/                     routes (home, collections, piece, lab-grown, maison, consultation, api)
components/
  sections/              page-level scenes (Hero, Future, Signature, …)
  ui/                    reusable UI (Cta, ProductCard, Logo, Accordion, …)
  motion/                motion primitives (Reveal, MaskedHeading, LightSweep, SmoothScroll, CustomCursor)
  three/                 the r3f refractive diamond
content/                 ALL copy + data as typed objects (no copy is hardcoded in components)
  site.ts                brand facts, contact details, homepage copy   ← edit real-world data HERE
  products.ts            collections + pieces (the catalogue)
  labGrown.ts            education page content
lib/                     data access, motion presets, helpers
public/products/         product photography
```

### Design tokens
All colours, type and motion easings are defined **once** in `app/globals.css` (`@theme` block). Components reference tokens — there are no raw hex values in component files.

---

## Managing content

**Add or edit a piece** → `content/products.ts`, the `PIECES` array. Each piece:

```ts
{
  slug: 'unique-url-slug',
  name: 'Aurelia',
  collection: 'solitaires',      // must match a COLLECTIONS slug
  metal: '18k Rose Gold',
  diamond: 'Oval brilliant, lab-grown',
  carat: '1.20ct',
  image: 'oval-rose-crossover.png',   // file in /public/products
  alt: 'Descriptive alt text…',
  description: 'Editorial one-liner…',
  priceLabel: 'Price on request',
}
```

**Add a collection** → the `COLLECTIONS` array in the same file.

**Swap or re-map photography**
1. Drop the new image into `public/products/`.
2. Point the piece's `image` field at the new filename.
   All image paths resolve through a single helper — `getProductImage()` in `lib/products.ts` — so nothing else needs to change. A piece with no image automatically renders an art-directed placeholder.

**Homepage / brand copy** → `content/site.ts`.

**Client testimonials** (Scene 7) → add to `TESTIMONIALS` in `content/products.ts`. If the array is empty the quote block hides itself automatically.

---

## Before you go live — required real-world data

Search the codebase for `[TODO` — every owner-supplied fact is centralised and marked. The important ones live in `content/site.ts`:

- **WhatsApp number** (`CONTACT.whatsappNumber`, digits only e.g. `919876543210`). Until set, WhatsApp buttons gracefully link to the Instagram profile.
- Showroom **address**, **hours**, **Google Maps link**, **email**, **phone**
- **Certification body** (IGI / GIA / SGL)
- **Brand story** (`BRAND_STORY`) and **per-piece carat weights**
- Production **domain**: update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and the JSON-LD in `app/piece/[slug]/page.tsx`.
- Optional: a real **static map image** for `/maison` (replace the stylised placeholder) and a real **logo file** (the wordmark is currently rebuilt as accessible SVG text).

See `TODO.md` for the full checklist.

---

## Accessibility & performance notes
- WCAG AA colour contrast, visible gold focus rings, full keyboard paths (gallery, lightbox, accordion, menu), skip-to-content link, semantic landmarks, descriptive alt text.
- `prefers-reduced-motion` is fully honoured: the intro is skipped, scroll-scenes become static, the 3D diamond becomes a still, reveals become short fades.
- Three.js loads only on the homepage, lazily, after first paint, and unmounts when scrolled away.
