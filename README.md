# Greet Mertens Portfolio

A portfolio website built with Astro and Sanity CMS, showcasing projects and articles.

## Structure

```
├── web/      # Astro frontend (deployed on Netlify)
├── sanity/   # Sanity CMS studio
└── package.json
```

## Tech Stack

- **Frontend**: Astro v5 + TypeScript
- **CMS**: Sanity Studio v4
- **Deployment**: Netlify
- **Package Manager**: pnpm workspaces

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development**
   ```bash
   # Web app
   cd web && pnpm dev

   # Sanity Studio  
   cd sanity && pnpm dev
   ```

## Scripts

### Web (`/web`)
- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm preview` - Preview build

### Sanity (`/sanity`)
- `pnpm dev` - Studio development
- `pnpm deploy` - Deploy studio

## Environment

Create `/web/.env`:
```env
PUBLIC_SANITY_PROJECT_ID="ph08or48"
PUBLIC_SANITY_DATASET="production"
```

## Requirements

- Node.js 22.14.0 (via Volta)
- pnpm 10.4.1+

---

**Author**: Wannes Salomé ([mail@wannessalome.nl](mailto:mail@wannessalome.nl))
