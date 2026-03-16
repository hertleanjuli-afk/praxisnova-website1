# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # Run Next.js linter
```

## Architecture

This is a single-page marketing website for **PraxisNova** (KI-Schulungen für Bau & Immobilien) built with Next.js 14 App Router. The entire site is a single client component.

- **`src/app/page.js`** — The whole site lives here as one `'use client'` component. Contains all sections: nav, hero, target audiences, workshops (with 3D flip cards), pricing, team, CTA, and footer. All data (workshops, pricing tiers, team members) is defined inline as arrays.
- **`src/app/layout.js`** — Root layout with Inter font and German `lang="de"`.
- **`src/app/globals.css`** — Tailwind directives plus a custom `.text-gradient` utility class.
- **`tailwind.config.js`** — Custom color palette under `primary.*` (blue, blue-light, gray, gray-light, red, red-light). All colors are referenced as `primary-blue`, `primary-red`, etc. throughout the codebase.

## Key Details

- Animations use **framer-motion** (`motion`, `AnimatePresence`). Icons come from **lucide-react**.
- The email popup triggers after 10 seconds or via "Mehr Infos" / pricing buttons. Email submission currently only logs to console (no backend).
- Calendly links are placeholder `https://calendly.com` — need to be replaced with actual URLs.
- Workshop card flip uses CSS `perspective` + framer-motion `rotateY`. Module 4 on each card is highlighted in red (custom system integration module).
- Team photos are referenced by filename (`IMG_0426.jpg`, `2CB70EF8-...JPG`) but image rendering is not yet implemented in the component.
- No TypeScript, no testing framework, no API routes configured.
