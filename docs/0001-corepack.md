# ADR: Package Manager Versioning

## Title

Use Corepack to manage pnpm version

## Decision

Enable Corepack and define pnpm version in package.json via `packageManager`.

## Considered Alternatives

- Global pnpm install via npm
- Using npm directly

## Rationale

Corepack ensures consistent pnpm versions across local, CI, and deployment environments with minimal overhead. This reduces environment drift and aligns with the goal of low-maintenance infrastructure.
