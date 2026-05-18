# samuelwriddle.com

Personal portfolio site for Sam Riddle. The MVP is a single-page Astro site with sections for intro, about, experience, projects, skills, strengths, education, and contact.

## Stack

- Astro
- MDX content collections
- Tailwind CSS
- TypeScript
- pnpm

## Setup

Requires Node `>=22.12.0`.

```sh
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

```sh
pnpm dev           # start local dev server
pnpm build         # build production output to dist/
pnpm preview       # preview the production build locally
pnpm check         # run Astro/TypeScript checks
pnpm format        # format the repo
pnpm format:check  # check formatting without writing changes
```

## Content

Most portfolio content lives in `src/content/`:

- `experience/`
- `projects/`
- `education/`

Page sections and reusable UI live in `src/components/`. Global styles and tokens live in `src/styles/`.

## Verify

Before shipping a change, run:

```sh
pnpm check
pnpm build
```
