# Owner checklist — real-world data still needed

The site is fully built and runs. The items below are facts I must **not** invent — fill each one in and the change flows across the whole site. Everything is centralised; search the code for `[TODO` to jump to each.

> Note: the site is now framed as a **made-to-order atelier with no physical showroom** (owner confirmed). All address/hours/map fields were removed.

## 1. Contact — `content/site.ts` → `CONTACT`
- [x] **WhatsApp number** — set (`918008331188`).
- [ ] **Email** — `email`
- [ ] **Certification body** — `certificationBody` (IGI / GIA / SGL) — used on piece pages, lab-grown page and the trust band
- [ ] **Facebook URL** — `facebook` (optional). Instagram is already set (`caratamorjewels`).

## 2. Brand story — `content/site.ts` → `BRAND_STORY`
- [x] Written (owner asked for an invented story): Golconda/Hyderabad heritage → made-to-order atelier narrative. Review the four paragraphs and adjust any detail you'd phrase differently.

## 3. Catalogue — `content/products.ts` → `PIECES`
- [ ] **Carat weights** for every piece are placeholders (`[TODO] ~1.20ct`). Confirm exact specs.
- [ ] Review piece **names** — I named them editorially (Aurelia, Celeste, Seraphine…). Swap for your real product names if they exist.
- [ ] Confirm **metals** and diamond descriptions match each physical piece.

## 4. Testimonials — `content/products.ts` → `TESTIMONIALS`
- [ ] Empty by design. Add real client words to enable Scene 7's quote block (it hides itself until then).

## 5. Production domain
- [x] Set to `https://caratamorjewels.com` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/piece/[slug]/page.tsx`.

## 6. Consultation email delivery — `lib/sendEnquiry.ts`
- [ ] Optional. The form already works (logs server-side + WhatsApp fallback). To send real emails, add `RESEND_API_KEY` or `SMTP_URL` and implement the marked send block.

## 7. Assets
- [x] **Logo:** real transparent logo wired in (`public/logo.png`) — nav, footer, intro, 404.
- [ ] **Photography placeholders:** none — all 11 supplied photos are wired in. Every catalogue piece has a real image. (If you add pieces without photos, they render an art-directed placeholder until an image is set.)

---

### Notes on what was improvised (as invited)
- Editorial **piece names**, **collection structure** (Solitaires / Bridal / Signature / Everyday / For Him), and **descriptions** were written to fit the actual photographs — adjust freely.
- The **3D hero diamond** is procedurally lit (no external HDRI) so it works offline and within a strict CSP.
