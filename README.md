# Portfolio

Personal portfolio site — modern, dark, and intentional.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router v6**

## Prerequisites

- Node.js 18+ and npm

## Setup

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Sections

1. **Navbar** — Sticky, scroll-aware with mobile drawer
2. **Hero** — Full-screen intro with staggered entrance animation
3. **About** — Bio, profile placeholder, and stats
4. **Projects** — Featured work with hover interactions
5. **Skills** — Grouped tech stack with pill layout
6. **Contact** — Email and socials with animated CTA
7. **Footer** — Minimal closing line

## Deployment

This project is configured for zero-config deployment on **Vercel**. The `vercel.json` at the root sets the Vite build command and output directory — push to `main` and Vercel auto-deploys.
