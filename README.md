# Portfolio — Thilak Raj Murugan

Modern, minimal portfolio designed to drive recruiter callbacks for backend and distributed systems roles.

**Live:** http://localhost:3000

## Design

- **Style:** Modern SaaS landing page (Option 4)
- **Layout:** Split hero with code visual, timeline experience, card-based sections
- **Theme:** Light/dark with high contrast
- **Typography:** Inter for readability, JetBrains Mono for code

## Stack

- Next.js 16 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

**Vercel** (recommended):
```bash
npx vercel
```

**Docker**:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Customize

1. **Content** — Edit files in `src/components/`
2. **Resume** — Replace `public/resume.pdf`
3. **Colors** — Update `tailwind.config.ts`

## Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx    # Fixed header with theme toggle
│   ├── Hero.tsx          # Split layout with code visual
│   ├── About.tsx         # Bio + focus areas grid
│   ├── Experience.tsx    # Timeline with expandable cards
│   ├── Projects.tsx      # 2-column card grid
│   ├── Skills.tsx        # 4-column skill categories
│   ├── Contact.tsx       # 3-card contact layout
│   └── Footer.tsx        # Minimal footer
└── public/
    └── resume.pdf
```

## Design Principles

1. **Recruiter-first** — Scannable in 30 seconds
2. **Impact-focused** — Metrics over responsibilities
3. **Backend passion** — Code visual in hero, tech-forward language
4. **Modern but professional** — SaaS aesthetic without being flashy
