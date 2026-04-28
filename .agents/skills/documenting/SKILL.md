---
name: documenting
description: Use when converting decisions, implementation details, setup steps, architecture notes, or lessons learned into durable project documentation.
---

# Documenting skill

## Goal

Create concise documentation that helps future humans and agents work in this repository.

## Workflow

1. Identify the audience: future maintainer, future agent, user, or contributor.
2. Capture the durable facts:
   - what exists,
   - why it exists,
   - how to use it,
   - how to verify it,
   - what not to change casually.
3. Put information in the most appropriate place:
   - README for human-facing overview,
   - AGENTS.md for agent-facing rules,
   - inline comments for local non-obvious code,
   - docs/ for longer references.
4. Keep docs concise and close to the thing they describe.

## Rules

- Do not document obvious code.
- Do not let documentation become a second source of truth when code/config is clearer.
- Prefer examples over abstract descriptions.
- Mark unstable decisions as provisional.

## Output format

Return:

- Documentation added or revised
- Location
- Why it belongs there
- Any stale docs removed or avoided
