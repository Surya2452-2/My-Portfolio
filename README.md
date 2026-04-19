# Portfolio Website (Next.js)

Modern personal portfolio built with Next.js App Router, focused on premium UI, proof-driven project storytelling, and smooth page transitions.

## What is implemented

- Multi-page portfolio routes: `/`, `/about`, `/projects`, `/skills`, `/education`, `/contact`
- Structured case-study system with public dynamic routes: `/projects/[slug]`
- Centralized static project content source shared across Home, Projects list, and Case Study pages
- Contextual contact intent via query contract: `/contact?topic=<project-slug>`
- Sticky navigation, theme toggle, subtle reveal animations, and route transition feel

## Tech stack

- Next.js (App Router)
- React
- CSS Modules
- next/image for optimized images

## Project structure

```text
app/
  layout.jsx
  page.jsx
  (pages)/
    about/page.jsx
    projects/page.jsx
    projects/[slug]/page.jsx
    skills/page.jsx
    education/page.jsx
    contact/page.jsx
components/
  Navbar.jsx
  Footer.jsx
  PageTransition.jsx
  RevealOnScroll.jsx
  SocialLinks.jsx
data/
  projects.js
styles/
  globals.css
public/images/
```

## Project data contract

`data/projects.js` is the single source of truth for project content:

- `slug`
- `title`
- `role`
- `duration`
- `stack`
- `impactSummary`
- `problem`
- `approach`
- `keyDecisions`
- `outcome`
- `metrics`
- `proofChips`
- `screenshots`
- `repoUrl`
- `demoUrl`

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Quality checks

```bash
npm run lint
npm run build
```

## Notes

- Case-study pages are statically generated from `projects` data via `generateStaticParams`.
- Contact page accepts optional `topic` query param and shows contextual message when slug matches a project.
