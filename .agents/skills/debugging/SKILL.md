---
name: debugging
description: Use when investigating errors, broken behavior, failed builds, failing tests, unexpected UI output, or confusing runtime behavior.
---

# Debugging skill

## Goal

Find the root cause, explain it clearly, and fix it safely.

## Workflow

1. Capture the observed symptom exactly.
2. Identify the expected behavior.
3. Inspect the narrowest relevant files first.
4. Form one or more hypotheses.
5. Test hypotheses against code, logs, errors, or reproduction steps.
6. Fix the smallest confirmed cause.
7. Verify the fix when possible.
8. Explain why the fix works.

## Rules

- Do not guess silently. Label hypotheses.
- Prefer root-cause fixes over masking symptoms.
- Avoid unrelated cleanup during debugging.
- If multiple issues are present, separate them clearly.
- If the issue cannot be fully verified, state what evidence is missing.

## Output format

Return:

- Symptom
- Root cause
- Fix
- Files changed
- Verification
- Remaining uncertainty, if any
