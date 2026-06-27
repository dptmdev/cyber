# Cyber Law & Ethics — Exam Notes

A small, fast, reading-first study site for **Cyber Law and Ethics (OEC-CS801B)**.
Built with [Astro](https://astro.build) so it ships as plain static HTML with almost no
JavaScript — great on a phone and on a laptop.

## Features

- **6 syllabus units** with definitions, key points, real examples, comparison tables, and
  green “exam focus” boxes containing the lines worth memorising.
- **Light & dark mode** — follows your system by default, remembers your choice, no flash on load.
- **Reading-optimised** — the text column is capped (~68 characters) on desktop so it never
  stretches, and is full-width with safe padding on mobile (no horizontal scrolling).
- **Small theme-aware SVG diagrams** (CIA triad, passive vs active, attack lifecycle,
  DoS vs DDoS, public-key flow) to make concepts click.
- Sidebar contents on desktop, slide-in menu on mobile, plus a reading-progress bar.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # outputs the static site to ./dist
npm run preview  # preview the production build locally
```

## Editing the notes

All content lives in **`src/content/units/*.mdx`** — one file per unit. Each file starts with
frontmatter:

```yaml
---
title: Introduction to Cybercrime
order: 1            # controls position in the sidebar & prev/next
lectureHours: 4
summary: One-line description shown on the home page.
topics: [Cybercrime, Forgery, Hacking]
---
```

Write normal Markdown below it. To drop in a callout or diagram, import the component at the
top of the file and use it inline, e.g.:

```mdx
import Callout from '../../components/Callout.astro';

<Callout type="exam">Key point to remember…</Callout>
```

Callout `type` can be `exam` (green), `danger` (red), or `tip` (amber).

## Deploy to Render (static site, from GitHub)

1. Push this `site/` folder to a GitHub repository.
2. In Render → **New → Static Site**, connect the repo.
3. Settings:
   - **Root Directory:** `site` *(leave blank if the repo root already is this folder)*
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Create the site. Every push to the branch redeploys automatically.

A `render.yaml` blueprint is included if you prefer Render’s Blueprint flow instead.
