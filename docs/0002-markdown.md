# ADR: Content Strategy for Personal Site

## Decision

Use Astro with MDX + Content Collections for all site content.

## Considered Alternatives

- Plain Markdown in /pages
- Headless CMS (e.g. Sanity, Contentful)
- Hardcoded Astro components

## Rationale

- MDX allows component-driven content without backend complexity
- Content Collections provide type safety and scalability
- Avoids introducing environment variables or external dependencies early
- Keeps deployment fully static and low-maintenance
