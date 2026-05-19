# AMR Cosmetics — Custom Shopify Homepage

> Premium custom Shopify homepage for AMR Cosmetics. Built on top of any 2.0-compatible base theme (Dawn recommended). Composed of 11 reusable sections, one snippet, one stylesheet, one JS file. No build step — paste and ship.

---

## What's in the box

```
theme/
├── README.md                       ← this file
├── templates/
│   └── index.json                  ← homepage section ordering + defaults
├── sections/
│   ├── amr-hero.liquid             ← 01 hero
│   ├── amr-brand-intro.liquid      ← 02 brand intro
│   ├── amr-shop-categories.liquid  ← 03 shop by category
│   ├── amr-featured-products.liquid ← 04 featured products
│   ├── amr-why.liquid              ← 05 why AMR
│   ├── amr-hair-lips-split.liquid  ← 06 GLOSS / GROWTH split
│   ├── amr-routine.liquid          ← 07 build your ritual (bundles)
│   ├── amr-testimonials.liquid     ← 08 reviews
│   ├── amr-gallery.liquid          ← 09 editorial gallery
│   ├── amr-faq.liquid              ← 10 FAQ accordion
│   └── amr-email-cta.liquid        ← 11 email signup
├── snippets/
│   └── amr-product-card.liquid     ← reusable premium product card
└── assets/
    ├── amr-homepage.css            ← full design system + all section styles
    └── amr-homepage.js              ← FAQ smooth-toggle + scroll reveal
```

---

## Install

Two paths — pick one.

### Path A — Add into your existing theme (recommended)

1. In Shopify admin → **Online Store → Themes**, duplicate your live theme. Work on the duplicate.
2. Click the duplicate's **Actions → Edit code**.
3. Drop each AMR file into its matching folder in the theme editor:
   - `sections/amr-*.liquid` → into the theme's `sections/` folder
   - `snippets/amr-product-card.liquid` → into `snippets/`
   - `assets/amr-homepage.css` + `assets/amr-homepage.js` → into `assets/`
4. Open `templates/index.json` in your theme. Either:
   - **Replace** the file's contents with the AMR `index.json` (clears the existing home layout), or
   - **Merge** the `sections` and `order` blocks from the AMR `index.json` into your existing `index.json`.
5. In the theme editor, open `layout/theme.liquid`. Just before `</body>`, add the JS:
   ```liquid
   <script src="{{ 'amr-homepage.js' | asset_url }}" defer></script>
   ```
   *(The CSS auto-loads from the hero section.)*
6. Preview the duplicate. When everything looks right, publish it.

### Path B — Fresh theme

If starting from a fresh Shopify base theme (Dawn or similar):
- Same steps as above; nothing else to remove.
- Make sure your theme uses Shopify 2.0 section groups so the sections render on the homepage.

---

## First-time content checklist

In the Shopify theme editor, after install, run through this list:

- [ ] **Hero** — upload the AMR script logo as PNG with transparent background; optionally add a foreground image
- [ ] **Hero CTAs** — link Primary to your Bestsellers collection, Secondary 1 to Hair Care, Secondary 2 to Lip Care
- [ ] **Brand intro** — copy is pre-filled; edit if voice evolves
- [ ] **Shop by Category** — upload 3 tile images (Hair, Lips, Sets); link each to its collection
- [ ] **Featured Products** — pick a Bestsellers collection OR add product blocks with eyebrows (HAIR / LIPS / SET)
- [ ] **Why AMR** — copy is pre-filled
- [ ] **GLOSS / GROWTH split** — upload one image per panel; link CTAs to Lip Care and Hair Care
- [ ] **Build your ritual** — upload three bundle images; link CTAs to bundle products
- [ ] **Reviews** — pre-filled placeholders are ready to ship; swap for real names + quotes when available
- [ ] **Editorial gallery** — add 6 tiles, mix product still / lifestyle / macro; optional link per tile to IG post
- [ ] **FAQ** — six questions pre-filled; edit copy as policies firm up
- [ ] **Email signup** — copy is pre-filled

---

## Required collections / products

The homepage expects these handles to exist in Shopify (create them if missing — empty collections are fine while staging):

- `bestsellers` (collection)
- `hair-care` (collection)
- `lip-care` (collection)
- `sets` (collection)
- `all` (Shopify auto-creates this)
- `hair-ritual`, `lip-edit`, `complete-ritual` (bundle products — optional for v1; link can point at `sets` collection instead)

If a collection handle differs in the store, just re-link the CTA in the theme editor — no code edit needed.

---

## Image guidance

| Slot | Aspect | Min width | Style |
|---|---|---|---|
| Hero foreground | 16:9 or 4:3 | 2000px | Editorial composition, generous negative space |
| Category tile | 4:5 | 1200px | Single-subject, brand palette, clear product/category cue |
| Product card | 3:4 portrait, transparent or white BG | 1500px | Studio still on white; optional second image for hover |
| GLOSS / GROWTH panel | 4:5 | 1400px | One macro/lifestyle each; warm tone for GROWTH, gloss tone for GLOSS |
| Ritual bundle | 4:5 | 1200px | All bundle items composed together |
| Gallery tile | 1:1 or 4:5 | 1100px | Mix of stills + lifestyle + macro; alternating |

All images are served via Shopify CDN with `srcset`/`sizes` already wired. Don't worry about generating multiple sizes — Shopify handles it.

---

## Customizing the design system

All design tokens are CSS custom properties at the top of `assets/amr-homepage.css`. Change once, propagates everywhere.

Common adjustments:

```css
:root {
  /* Make the brand warm color cooler */
  --amr-cocoa: #3a261c;

  /* Tighten section spacing site-wide */
  --amr-section-pad: clamp(64px, 7vw, 120px);

  /* Swap the serif */
  --amr-font-display: "EB Garamond", Georgia, serif;
}
```

For Shopify-native font control, you can replace the CSS variable values with Shopify font_picker output in `theme.liquid`:
```liquid
<style>
  :root {
    --amr-font-display: {{ settings.type_header_font.family }}, {{ settings.type_header_font.fallback_families }};
    --amr-font-body: {{ settings.type_body_font.family }}, {{ settings.type_body_font.fallback_families }};
  }
</style>
{{ settings.type_header_font | font_face: font_display: 'swap' }}
{{ settings.type_body_font | font_face: font_display: 'swap' }}
```

---

## Section-by-section quick edits

**Add a new FAQ question**
Theme editor → FAQ section → **Add block → Question** → fill question + rich-text answer.

**Reorder homepage sections**
Theme editor → drag sections in the left rail. The `index.json` updates automatically.

**Swap a category tile image**
Theme editor → Shop by Category → pick the tile → **Image picker**.

**Add a product to Featured**
Theme editor → Featured Products → **Add block → Product** → pick product, set eyebrow (HAIR / LIPS / SET).

**Change the brand-warm color (cocoa)**
Edit `--amr-cocoa` value in `assets/amr-homepage.css`. Affects GLOSS/GROWTH band, email CTA band, and accent strokes.

**Add a new value-prop column to Why AMR**
The schema is fixed at 4 columns by design — adding a 5th would harm the rhythm. If you need to swap one, edit titles/bodies in the theme editor.

---

## Accessibility notes

- All sections use proper landmark/heading hierarchy (`<section aria-labelledby>` + `<h2 id>`)
- The AMR script logo carries `alt="AMR Cosmetics"`
- FAQ uses native `<details>/<summary>` so it works without JS
- Focus rings on all interactive elements (gold ring on dark, ink ring on light)
- Color contrast: ink-on-paper meets WCAG AA; cocoa-on-paper-warm meets AA for large text
- All interactive targets ≥ 44×44px on mobile
- `prefers-reduced-motion` disables all transitions and reveal animations

---

## Performance notes

- All section CSS lives in one file (`amr-homepage.css`) — single render-blocking stylesheet, no inline styles
- Hero image uses `loading="eager"` + `fetchpriority="high"` for LCP
- All other images use `loading="lazy"`
- `srcset` + `sizes` provided for every image — Shopify CDN handles the variants
- JS is `defer`-loaded and progressive enhancement only
- Expected: Lighthouse Performance ≥ 85, Accessibility ≥ 95 on mobile

If performance dips:
1. Check hero image — should be under 250KB at 2000px wide
2. Check that lazy-loaded images aren't being requested above the fold
3. Run the Shopify Theme Inspector

---

## Why this stays maintainable

- **Design tokens, not hardcoded values.** Colors, spacing, radii, and typography live in CSS custom properties so future brand updates are token edits, not section rewrites.
- **Native HTML where possible.** FAQ uses real `<details>`/`<summary>`, so it works without JavaScript.
- **No build step, no framework.** The homepage is implemented in Liquid, vanilla CSS, and minimal vanilla JS, so any Shopify developer can maintain it without a custom toolchain.
- **Prefixed naming.** Sections, snippets, classes, and assets are all `amr-*` prefixed to reduce integration conflicts with the base theme.
- **Plain-language schemas.** Theme editor settings use merchant-friendly labels like Headline, Subline, Eyebrow, and CTA Label.
- **Flexible media handling.** Layouts rely on responsive containers and `aspect-ratio` instead of hardcoded image dimensions.
- **Constraints where they help.** Repeating content like Featured Products and FAQ uses blocks; brand-shaping sections keep tighter schema constraints to preserve visual rhythm. Fixed desktop columns must collapse responsively on smaller screens.
- **Cosmetic-safe defaults.** Placeholder copy avoids medical claims and can be swapped later without rewriting the layout.
- **Lightweight asset model.** One homepage stylesheet and one small defer-loaded script keep the implementation simple and performant.
- **App-ready review section.** Testimonials can launch as placeholders, then be replaced later with Judge.me or Loox app blocks without rebuilding the page.

---

## Intentionally deferred

- Klaviyo or Mailchimp wiring
- Judge.me or Loox integration
- Custom cart drawer
- Sticky promo bar
- Quick shop on product cards
- PDP redesign
- Collection-page redesign

**Note:** Custom domain purchase and DNS connection are separate launch tasks. They are not part of homepage implementation, but they are required for a branded production launch.

---

## Versioning

- **v1.0** (2026-05-19) — initial homepage build: 11 sections, design system, README.

Bump the version when you ship structural changes. Patch (1.0.1) for copy edits, minor (1.1) for new sections, major (2.0) for design-system overhauls.

---

## Questions

For implementation questions, refer to:
- `../design-doc.md` — the visual + architecture decisions
- `../copy-deck.md` — all homepage copy with voice guardrails

For Shopify-specific theme development:
- [Shopify section schema reference](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema)
- [Shopify Liquid docs](https://shopify.dev/docs/api/liquid)
