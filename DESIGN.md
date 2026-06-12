# Design

## Theme
"Modern Industrial / Datasheet." Dark near-black and warm off-white sections alternate in a deliberate rhythm; dark sections are dense and technical, warm sections are generous and editorial. A single orange accent (`asphalt`) marks CTAs, dividers, and key figures only. The unifying motif is the **datasheet**: bordered monospace chip badges (grade codes, certifications), bracketed figure/section labels (`FIG. 01 :: …`, `SPEC-001 :: …`), label/value pair grids, and road-marking dashed dividers.

## Color
Committed dark/warm contrast strategy with one orange accent. Tokens (exact, brand-committed — do not retune):

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0E0E10` | Primary dark background |
| `charcoal` | `#1C1C1F` | Secondary dark surface / cards on dark |
| `warm` | `#F5F4F0` | Off-white content background |
| `asphalt` | `#E85D2D` | Orange accent — CTAs, eyebrow tags, dividers, key figures (SPARINGLY) |
| `aggregate` | `#8A8780` | Muted gray — labels, borders, secondary text ON DARK only |
| `certgreen` | `#2E7D5B` | Certification / compliance badges only |

Derived helpers (in config): `warm-line` (#E2E0DA borders on warm), `ink-line` (rgba white 0.10 borders on dark), `warm-ink` (#26262A body text on warm — used instead of `aggregate` to keep body ≥4.5:1).

**Contrast rule:** `aggregate` (#8A8780) fails 4.5:1 on `warm`; never use it for body copy on light backgrounds. Body on warm = `ink`/`warm-ink`. `aggregate` is allowed for secondary text on `ink`/`charcoal` (passes ~5.5:1) and for labels/borders.

## Typography
Three roles, two families (one superfamily across widths + one mono):
- **Display / headings:** Barlow Condensed (600/700), uppercase for major headings, letter-spacing ≥ -0.02em. Fluid `clamp()`, max ≤ ~5.5rem.
- **Body:** Barlow (400/500/600). Highway-signage-derived grotesque — the non-condensed sibling of the display face, designed to pair. Line length capped 65–75ch. (Chosen over Inter per "or similar" latitude: stronger on-brand fit, avoids the default.)
- **Utility / technical:** JetBrains Mono (400/500/700) for grade codes, spec labels, figure tags, footer label/value keys, chip badges.

Scale ratio ≥1.25. Light text on dark gets +0.05–0.1 line-height.

## Components
- **Chip** — bordered monospace badge (thin border, uppercase, tracked). Variants: default, `accent` (orange), `cert` (green). Used for grade codes (RS-1), certifications (ISO Certified, MSME Registered, Est. 2020).
- **FigureLabel** — bracketed mono section/figure label (`FIG. 01 :: LEGACY OPERATIONS`). Hero eyebrows, image captions, section headers. The deliberate, named alternative to a tracked-uppercase eyebrow on every section.
- **Card** — reusable: optional mono code tag + image (or ImagePlaceholder) + heading + short description. Reused across Home product/service previews and Products catalog. Hover = border-color shift + subtle lift.
- **ImagePlaceholder** — datasheet-styled bordered box (dashed road-marking border, subtle technical icon, mono `[ IMAGE ON REQUEST ]` tag) for products lacking a real photo. Never literal "Upload Image" text.
- **Tabs** — accessible (role=tablist, arrow-key nav, focus ring) for Products and Consultancy.
- **Accordion** — accessible FAQ disclosure (button + aria-expanded).
- **Footer** — "Registered Office" datasheet block: label/value pair grid (label = mono uppercase aggregate, value = warm/white), not a four-column link footer.
- **DashRule** — road-marking dashed horizontal divider for section transitions.
- **Reveal** — scroll-reveal wrapper (fade + slide-up, one easing/timing site-wide); content visible by default, enhanced when motion allowed; full reduced-motion bypass.

## Layout
- Hero: dark, full-bleed road photography + **directional** gradient (darker where text sits, photo visible elsewhere). Condensed display headline, short subhead, ONE solid-orange primary CTA + one secondary text link with icon.
- Section rhythm: alternate `warm` editorial blocks with `ink`/`charcoal` dense "stat banner" proof sections. Generous whitespace on warm; tighter on dark.
- Responsive grids: `repeat(auto-fit, minmax(…, 1fr))`; flex-wrap for 1D. Semantic z-index scale.
- Max content width ~1200px; fluid `clamp()` spacing.

## Motion
One easing (`cubic-bezier(0.22, 1, 0.36, 1)`, ease-out-quint-ish) and timing across the site. Scroll reveals: fade + 16px slide-up, staggered within lists. Hover: border-color / subtle scale, no bounce. Hero gets one orchestrated load (headline + chips stagger). Every animation has a `prefers-reduced-motion` crossfade/instant fallback. Content never gated on JS-triggered reveal.

## Imagery
Current photography is **CC-licensed placeholder** from Wikimedia Commons (authentic Indian highways/expressways, asphalt plant, runway, paving equipment) + a few Unsplash road/industrial shots — chosen so the site reads real, not as colored blocks. All marked for replacement with real Roadtech photography; see README for the slot list and attribution note. Product catalog grades that have no real photo use the datasheet ImagePlaceholder (honest, intentional), not stock.
