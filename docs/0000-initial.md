# ADR: Local JavaScript Tooling

## Title

Use pnpm with Node LTS for local development

## Decision

Use Node.js LTS managed through the system package manager and pnpm via Corepack.

## Considered Alternatives

- npm
- Bun
- Yarn

## Rationale

pnpm is fast, mature, works well on Windows, and stays close to the standard Node ecosystem. Bun is attractive but unnecessary for a mostly static Astro site, and npm is simpler but slower/noisier for repeated installs.
