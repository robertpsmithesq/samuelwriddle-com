---
name: building
description: Use when implementing a scoped code, content, UI, configuration, or documentation change. Best for tasks where the desired behavior is already clear.
---

# Building skill

## Goal

Implement the requested change with minimal, coherent edits.

## Workflow

1. Inspect the relevant existing files before editing.
2. Identify the smallest safe change that satisfies the request.
3. Preserve current architecture and naming conventions.
4. Make the change.
5. Run or recommend the most relevant verification step.
6. Review the diff for unintended changes.

## Implementation rules

- Avoid broad refactors unless required.
- Do not introduce new dependencies without explaining why.
- Keep changes easy to review.
- Prefer composition over duplication, but avoid premature abstraction.
- Preserve public behavior unless the task explicitly changes it.
- Update nearby docs or comments only when they prevent future confusion.

## Output format

Return:

- Summary
- Files changed
- Verification performed or recommended
- Notes / risks
