# Project instructions

This is a personal website built with Astro, MDX, and Tailwind.

## Agent workflow

Use the repo skills in `.agents/skills/` when the task matches one of these phases:

- `planning`: clarify goals, constraints, architecture, milestones, and implementation sequence.
- `building`: implement a scoped change with minimal, reviewable edits.
- `debugging`: reproduce, isolate, explain, and fix defects.
- `reviewing`: inspect code or UI for correctness, quality, risk, and maintainability.

When unsure, start with planning before editing code.

## General rules

- Prefer per-repo context over global assumptions.
- Inspect existing files before proposing new structure.
- Make the smallest coherent change that satisfies the task.
- Do not add dependencies, services, databases, or major architecture changes without explaining the tradeoff first.
- Preserve existing conventions unless there is a clear reason to change them.
- Favor readable code over clever code.
- Report changed files and verification steps after implementation.

## Environment hiccups

- Run `nvm use` before running any commands in a session, to make sure the proper version of node is being used
- This project favors pnpm over npm

## Done means

A task is not complete until the agent has:

- summarized what changed,
- listed files touched,
- explained how to verify the result,
- noted any risks, assumptions, or follow-up work.
