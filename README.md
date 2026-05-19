# AMR Cosmetics — Custom Shopify Homepage

> Premium custom Shopify homepage build for AMR Cosmetics (hair + lip beauty brand). Planned file structure and implementation target — 11 reusable sections, one stylesheet, one script, plain Liquid. No build step.

This repository contains the design rationale, copy, and Shopify theme code for the AMR Cosmetics homepage rebuild.

---

## Contents

| Path | What's inside |
|---|---|
| [`design-doc.md`](./design-doc.md) | Audit of current site, visual DNA, homepage architecture, success criteria |
| [`copy-deck.md`](./copy-deck.md) | All homepage copy, section by section, with voice guardrails |
| [`theme/README.md`](./theme/README.md) | Install instructions + first-time content checklist + maintainability guide |
| [`theme/templates/index.json`](./theme/templates/index.json) | Homepage section ordering + default content |
| [`theme/sections/`](./theme/sections/) | 11 planned sections (hero → email CTA) |
| [`theme/snippets/`](./theme/snippets/) | Reusable premium product card |
| [`theme/assets/`](./theme/assets/) | One stylesheet, one defer-loaded script |

---

## What this is

A clean, custom Shopify homepage build designed to feel premium, minimal, and feminine — preserving the AMR script logo, the white-and-black foundation, and the dual hair + lip identity, while replacing the current default-theme shape with a structured, photography-led editorial experience.

## What this is not

- Not a starter template — built specifically for AMR
- Not headless / not a framework rebuild — vanilla Liquid + CSS + JS
- Not a deployment-ready theme on its own — designed to be installed into an existing Shopify 2.0 base theme (Dawn recommended)

---

## Quick start (for a Shopify developer)

1. Read [`design-doc.md`](./design-doc.md) for the visual decisions
2. Read [`theme/README.md`](./theme/README.md) for install + content steps
3. Drop the Liquid / CSS / JS files into the matching folders in a duplicated theme
4. Replace or merge [`theme/templates/index.json`](./theme/templates/index.json) with your `templates/index.json`
5. Preview, then publish

---

## Status

v1.0 — initial homepage build (2026-05-19).
