---
name: reviewing
description: Use when evaluating code, UI, architecture, documentation, diffs, pull requests, or implementation quality. Do not make changes unless explicitly asked.
---

# Reviewing skill

## Goal

Give precise, useful feedback that improves quality without creating unnecessary churn.

## Workflow

1. Identify the review target and intended outcome.
2. Inspect the relevant files or diff.
3. Evaluate correctness, maintainability, usability, accessibility, security, and consistency as applicable.
4. Distinguish blocking issues from suggestions.
5. Provide concrete fixes or examples for important findings.
6. Call out what is working well.

## Review severity

Use these labels:

- Blocking: likely bug, broken behavior, security issue, data loss, or failed requirement.
- Important: should fix soon; meaningful quality, maintainability, UX, or reliability issue.
- Suggestion: optional improvement.
- Praise: something worth preserving.

## Rules

- Be specific and actionable.
- Do not nitpick style unless it affects clarity or consistency.
- Avoid rewriting the project in the review.
- Prefer fewer high-quality findings over many low-value comments.
- If reviewing UI, consider layout, hierarchy, states, affordances, responsiveness, and accessibility.

## Output format

Return:

- Overall assessment
- Blocking issues
- Important issues
- Suggestions
- What is working well
- Recommended next step
