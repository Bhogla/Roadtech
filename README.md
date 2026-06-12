# Roadtech Asphalt Technologies — Website

Marketing site for **Roadtech Asphalt Technologies Pvt Ltd** — manufacturer of bitumen
emulsions, modified bitumen, cold-mix products and road-maintenance solutions for highways,
expressways, runways and test tracks across India.

Built with **React 18 + TypeScript + Vite**, **Tailwind CSS**, and **React Router v6**.
Static site, no backend (the contact form is structured to wire up to a form service later).

---

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → ./dist
npm run preview  # preview the production build locally
```

Node 18+ recommended.

---

## Project structure

```
src/
  data/content.ts        # ALL copy + contact details (single source of truth)
  components/            # Header, Footer, Layout, Card, Tabs, Accordion, Reveal, ui primitives, icons
  pages/                 # Home, About, Products, Consultancy, Contact, Join, NotFound
public/images/           # photography (see "Swapping in real photography" below)
tailwind.config.js       # design tokens — colours + fonts (named, not inline hex)
PRODUCT.md / DESIGN.md   # strategy + visual system docs
```

All site copy and contact data live in **`src/data/content.ts`** — edit there, not in the
components. Design tokens (colours, fonts, type scale, z-index) live in **`tailwind.config.js`**.

---

## Design system (quick reference)

Colour tokens (`tailwind.config.js`): `ink`, `charcoal`, `warm`, `asphalt` (orange accent),
`aggregate` (muted gray — labels/borders only), `certgreen` (cert badges only), plus helpers
`warm-ink` / `warm-mute` for AA-legible body text on light backgrounds.

Fonts (Google Fonts, loaded in `index.html`): **Barlow Condensed** (display/headings),
**Barlow** (body), **JetBrains Mono** (codes, spec labels, datasheet tags).

> Note: the brief suggested "Inter or similar" for body. Body is set in **Barlow** (the
> non-condensed sibling of the display face, originally drawn for highway/manufacturing
> signage) — a stronger on-brand pairing. Swap back in `tailwind.config.js` → `fontFamily.sans`
> and the `<link>` in `index.html` if you prefer Inter.

---

## Swapping in real photography

All photography in `public/images/` is **placeholder** stock to be replaced with real Roadtech
photography. The current images are sourced from **Wikimedia Commons** (authentic Indian
highways, expressways, an asphalt plant, a runway and paving equipment) and **Unsplash**.
Several Commons images are CC-BY / CC-BY-SA — **if you keep any of them in production, add the
required attribution**; otherwise replace them.

Replace files in place (keep the same filename) to swap an image with no code changes:

| File | Used for |
|---|---|
| `hero-highway.jpg` | Home hero background |
| `about-construction.jpg` | Home "Legacy" figure · Consultancy gallery |
| `ind-highways.jpg` | Home Industries → Highways · About page hero |
| `ind-runways.jpg` | Home Industries → Runways |
| `ind-racetrack.jpg` | Home Industries → Race & Test Tracks |
| `prod-emulsion.jpg` | Products → Bitumen Emulsion / RS-1 |
| `prod-modified.jpg` | Products → Modified Bitumen · Products page hero · gallery |
| `prod-coldmix.jpg` | Products → Coldmix Application |
| `prod-special.jpg` | Products → Special Products · gallery |
| `svc-microsurfacing.jpg` | Services → Microsurfacing · gallery |
| `svc-bitumen-design.jpg` | Services → Bitumen Design · gallery |
| `svc-testing.jpg` | Services → Material Testing |
| `svc-consultancy.jpg` | Services → Technical Consultancy · Consultancy hero · gallery |
| `texture-asphalt-dark.jpg` | Home stat-banner background texture |

**Company logo:** the header logo auto-loads your real artwork — **save the official logo as
`public/logo.svg`** (or change `LOGO_SRC` in `src/components/Logo.tsx` to `/logo.png`). Use a
**transparent-background, light/white** version so it reads on the dark header; tune the height
via the `<img>` className (`h-11`) if needed. Until that file exists, the header falls back to a
faithful **recreated SVG mark + wordmark** (`LogoMark` in `Logo.tsx`). The favicon
(`public/favicon.svg`) uses the same recreated mark — replace it too if you have a favicon export.

Products that have **no real photo** (CSS-1, SS-1, CME, CQS, PME, PMB, PMB 70, CRMB, RAP) render
a styled datasheet placeholder by design — add an `image` (and `alt`) to the product in
`content.ts` to replace it with a photo.

---

## Connecting the contact form

The form in `src/pages/Contact.tsx` does **client-side validation only** — on a valid submit it
shows a success state but does **not** send anywhere yet. To wire it to a form service
(e.g. [Formspree](https://formspree.io)):

1. In `Contact.tsx`, find the `onSubmit` handler (look for the `// No backend wired yet` comment).
2. Replace the `setSubmitted(true)` branch with a `fetch` POST to your endpoint, e.g.:

   ```ts
   await fetch('https://formspree.io/f/<your-id>', {
     method: 'POST',
     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
     body: JSON.stringify(fields),
   })
   setSubmitted(true)
   ```

3. Add loading / error states around the request as needed.

The fields collected are `name`, `email`, `phone` (optional), `message`.

---

## Content notes (from the content audit)

- **No invented specs.** Products lacking real descriptions show "specifications available on
  request" rather than fabricated data. Do not add specs you can't verify.
- **Certifications** (ISO, MSME, IIA) are shown by name only — no certificate numbers or
  standard versions, because none were available. Add them when you have the documents.
- **Canonical emails:** `info@roadtech-asphalt.com` (general) and `sales@roadtech-asphalt.com`
  (sales). The old Gmail addresses were intentionally dropped.
- **Footer** links only to pages that exist. There are no Privacy / Cookies / Terms links —
  add real pages and routes first if you want them, rather than dead links.
- The **vision statement** and the **"Our Work" gallery** framing were rewritten/reframed from
  the legacy site per the rebuild brief.

---

## Accessibility

WCAG 2.1 AA targeted: semantic HTML, labelled form fields and nav, accessible tabs (arrow-key
roving focus) and FAQ accordion, a skip-to-content link, visible keyboard focus on all
interactive elements, and a full `prefers-reduced-motion` fallback (scroll reveals are visible
by default and never gate content). Responsive across mobile / tablet / desktop.
