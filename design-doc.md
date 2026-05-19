---
date: 2026-05-19
tags: [project, design-doc, amr]
client: AMR Cosmetics
status: ready-to-build
says: "Premium Shopify homepage build for AMR — preserve script logo, white-and-black foundation, hair+lip dual identity; build to sell."
related:
  - "[[projects/AMR Cosmetics/copy-deck]]"
  - "[[projects/AMR Cosmetics/theme/README]]"
---

# AMR Cosmetics — Homepage Design Document

## 0. Brand anchors (non-negotiable)

- AMR script logo preserved exactly as the identity mark
- White-and-black visual foundation
- Refined, minimal, elegant, feminine
- Photography-led, not text-led
- Dual product identity: healthy-looking hair + glossy lips
- Tagline: "Where healthy hair meets glossy lips."
- Cosmetic claims only — no medical/therapeutic language

## 1. Audit of current homepage

| Element | Current state | Action |
|---|---|---|
| Header | Default Dawn nav, plain | Replace with editorial header: thin nav, centered script, micro account/cart icons |
| Centered "AMR COSMETICS" wordmark | Competes with script logo | Remove; the script alone carries identity |
| Hero | Wordmark + tiny outlined buttons | Rebuild as full editorial hero with tagline + dual CTAs |
| Product row | 4 tiny thumbnails with legal-text prices | Rebuild as 4-up premium card grid with eyebrow, large image, restrained price |
| Lips+Hair / Elegant Ingredients blocks | Mislabeled as categories | Reframe as editorial split (GLOSS / GROWTH panel — already strongest creative moment) |
| Chocolate GROWTH/GLOSS panel | Strong but isolated, no CTAs | Elevate to full editorial section with category CTAs |
| Tagline | Buried at bottom | Move to hero |
| Story / value props / bundles / reviews / FAQ | All missing | Build all of these |
| Footer | Email capture only | Rebuild with clean column layout, real social links only, policy/contact pathway |
| Mobile | Likely Dawn defaults | Mobile-first rebuild with tested breakpoints |

## 2. AMR Visual DNA (locked design system)

### Identity
- **Primary mark:** AMR script logo, image asset, treated with minimum 1.5x logo-height clear space at all times
- **No competing wordmark.** "AMR COSMETICS" appears only as small uppercase letterspaced text in eyebrows/SEO contexts
- **Trademark line:** "© AMR Cosmetics" in micro type, ink-mute color, footer-only

### Color tokens
```
--amr-ink:        #0f0f0f   /* primary ink, not pure black */
--amr-ink-soft:   #2a2a2a   /* secondary headings */
--amr-ink-mute:   #6a6a6a   /* meta, captions */
--amr-paper:      #ffffff   /* primary background */
--amr-paper-warm: #faf7f4   /* warm off-white section */
--amr-paper-cool: #f5f2ee   /* cool off-white section */
--amr-hairline:   #ebe6e0   /* dividers, borders */

--amr-nude:       #e8d9cc   /* restrained accent */
--amr-blush:      #f4dcd2   /* lip-section accent */
--amr-rose:       #d4a094   /* CTA hover, gloss accent */
--amr-taupe:      #b89f8a   /* hair-section accent */
--amr-brown:      #6e4a35   /* warm brand accent */
--amr-cocoa:      #4a2f22   /* signature warm — GLOSS/GROWTH band */
--amr-gold:       #b8915a   /* micro details only */
```

Distribution: 90% ink/paper foundation, 8% cocoa-brown as the signature warm moment, 2% nude/blush/rose/taupe/gold as restrained supporting accents.

### Type system
- **Display (serif):** Cormorant Garamond or EB Garamond, weight 400, line-height 1.05–1.15, letter-spacing -0.01em
- **Body (sans):** Inter or system stack, weight 400/500, line-height 1.55–1.65
- **Eyebrow:** sans 11–12px, weight 500, letter-spacing 0.2em, uppercase
- **Script:** AMR logo only — never re-used as a font

Type scale (fluid):
- h1: clamp(2.75rem, 6vw, 5.25rem)
- h2: clamp(2rem, 4vw, 3.25rem)
- h3: clamp(1.375rem, 2.2vw, 1.75rem)
- body: clamp(1rem, 0.9vw + 0.85rem, 1.0625rem)
- micro: 0.8125rem
- eyebrow: 0.75rem

### Photography rules
- Studio stills on white for product blocks
- Warm-toned/cocoa-background lifestyle for brand-moment sections
- Macro (gloss, lip, hair texture) for editorial gallery and split panels
- No identical card grids — visual rhythm cycles still → macro → lifestyle → still
- Subjects feel polished, not pose-y; honest skin texture; warm light

### Spacing & motion
- Section padding: `clamp(72px, 9vw, 144px)` top/bottom
- Container: max-width 1440px, inline padding `clamp(20px, 5vw, 80px)`
- Editorial copy block max-width: 680px
- Hover/transition: 240ms cubic-bezier(.2,.6,.2,1)
- No parallax, no scroll-triggered hijacking — quiet motion only

## 3. Homepage architecture

```
01  Hero                         (full-bleed editorial)
02  Brand intro                  (single editorial paragraph + pulled quote)
03  Shop by Category             (3 premium tiles: Hair / Lips / Sets)
04  Featured Products            (4-up custom card grid)
05  Why AMR                      (4 quiet value props, hairline dividers)
06  GLOSS / GROWTH split         (signature editorial moment, elevated)
07  Build your ritual            (3 curated bundles, AOV driver)
08  Reviews                      (3-up, real-review-ready)
09  Editorial gallery            (6-image masonry, IG-energy without IG-clutter)
10  FAQ                          (6-question accordion)
11  Email CTA                    (cocoa-warm band, one-line promise)
```

## 4. What changes vs. the current site

| Concern | Current | New |
|---|---|---|
| Hero | Wordmark + tiny buttons | Editorial hero, tagline anchored, dual CTAs |
| Product cards | Stock thumbnails | Custom card with eyebrow, large image, hover state |
| Categories | Mislabeled photo blocks | Clear three-tile category nav |
| Brand story | Absent | Editorial intro section |
| Bundles | Absent | "Build your ritual" — 3 curated sets |
| Social proof | Absent | 3-up testimonial layout, ready for Judge.me/Loox |
| FAQ | Absent | 6-question accordion |
| GLOSS/GROWTH | Isolated panel | Full editorial section with category CTAs |
| Footer | Stock + only email | Clean columns, real socials only, contact + policy paths |
| Mobile | Dawn defaults | Mobile-first, tested 360/768/1024/1440 |

## 5. Out-of-scope (deferred — not blocking v1)

- PDP redesign — homepage-first, PDP next
- Collection page redesign — homepage-first
- Custom checkout — Shopify default until volume justifies
- Cart drawer — Dawn default fine for v1; can upgrade later
- Klaviyo/Mailchimp wiring — email CTA posts to Shopify customer list by default; upgrade when account exists
- Reviews integration (Judge.me/Loox) — placeholder structure shipped, real wiring once app installed
- Pop-ups — intentionally omitted; brand reads more premium without one in v1

## 5a. Required for launch but out of homepage scope

- **Custom domain purchase + DNS connection** — separate launch task. Not part of the homepage implementation, but required for a branded production launch on amrcosmetics.com (or chosen domain).

## 6. Success criteria

- Homepage loads in under 2.5s on mobile (LCP)
- Lighthouse Performance ≥ 85, Accessibility ≥ 95
- No layout shift on hero image load
- Mobile shopping flow tested on iPhone SE (smallest target) through iPhone 15 Pro Max
- All sections editable via Shopify theme customizer with no code edits
- Photography asset slots are obvious and one-click swappable
- Zero AI/ML language in customer-facing copy or schema labels
