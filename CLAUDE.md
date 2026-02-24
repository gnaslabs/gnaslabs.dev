# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio/landing page for NS Labs. Bilingual (English/Vietnamese) single-page application with 3D graphics, showcasing ns-shop, vocab, ns-money, ns-drive, and ns-tracing projects.

## Commands

```bash
bun run dev               # Vite dev server with HMR
bun run build             # tsc type-check + Vite build
bun run lint              # ESLint
bun run preview           # Preview production build
```

Deployed to Cloudflare Pages via Wrangler (`wrangler.jsonc`).

## Architecture

```
src/
├── components/
│   ├── sections/            # Hero, Projects, Contact
│   ├── three/               # Scene, FloatingGeo, ParticleField (3D)
│   ├── ui/                  # Navbar, ProjectCard, ProjectDetailModal, LanguageSwitcher
│   └── layout/              # Container wrapper
├── data/projects.ts         # Project definitions with Lucide icons
├── i18n/
│   ├── translations/        # en.ts, vi.ts (UI text)
│   ├── projects/            # en.ts, vi.ts (project descriptions)
│   ├── types.ts             # i18n type definitions
│   └── index.ts             # Translation helpers
├── stores/LanguageContext.tsx  # React Context for locale
├── lib/utils.ts             # cn() utility
└── styles/globals.css       # Tailwind + custom CSS (gradients, glow effects)
```

### i18n

URL-based routing (`/en`, `/vi`) with auto-detection (localStorage → browser language → `en`). UI translations and project content are separated. Type-safe with `satisfies` checks.

### 3D Scene

Three.js via @react-three/fiber + @react-three/drei:
- **ParticleField**: 400 floating particles with additive blending
- **FloatingGeo**: Animated icosahedron with custom GLSL shaders (simplex noise displacement, Fresnel edge glow), follows cursor with lerp smoothing

### Visual Effects

Framer Motion animations: staggered letter animation on hero, scroll-triggered fade-up, 3D tilt on project cards, modal scale transitions. OKLCH color system (cyan, purple, teal).

## Tech Stack

- React 19, TypeScript 5.9, Vite 7
- Three.js + @react-three/fiber + @react-three/drei
- Tailwind CSS 4 (@tailwindcss/vite plugin)
- Framer Motion (animations)
- Lucide React (icons)
- Path alias: `@/` → `src/`
- No router library — uses hash navigation (`#hero`, `#projects`, etc.)

## Project Content Updates

This site showcases ns-shop, ns-money-kmp, vocab-kmp, ns-drive, and ns-tracing. When those projects add major features or change their positioning, update:

- `src/i18n/projects/en.ts` and `src/i18n/projects/vi.ts` — feature descriptions, taglines, highlights
- `src/data/projects.ts` — feature group structure and Lucide icons

Product names in content: NS Shop, NS Money, NS Vocab (Vocab), NS Drive, NS Tracing.

## Conventions

- File naming: `kebab-case.tsx`
- Function declarations with named exports
- TypeScript strict mode
- Tailwind utility classes + custom CSS for complex effects
- `cn()` utility (clsx + tailwind-merge) for className merging
