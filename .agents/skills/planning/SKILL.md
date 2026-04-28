---
name: planning
description: Use when turning a vague goal, product idea, bug report, migration, architecture decision, or feature request into a concrete plan before implementation. Do not edit code unless explicitly asked.
---

# Planning skill

## Goal

Turn ambiguity into an actionable, sequenced plan.

## Workflow

1. Restate the goal in concrete terms.
2. Identify relevant context:
   - existing files or folders to inspect,
   - user constraints,
   - architectural boundaries,
   - likely risks.
3. Separate facts from assumptions.
4. Propose a small set of implementation options when meaningful.
5. Recommend one path with rationale.
6. Break the work into small, ordered steps.
7. Define "done" for each step.

## Output format

Return:

- Goal
- Relevant context
- Assumptions
- Recommended approach
- Step-by-step plan
- Risks / tradeoffs
- Open questions, only if they materially block progress

## Rules

- Prefer incremental delivery over large rewrites.
- Avoid tool-specific project management assumptions unless requested.
- Do not invent files, APIs, or requirements without marking them as assumptions.
- If the task is ready to implement, end with a concise build-ready checklist.
