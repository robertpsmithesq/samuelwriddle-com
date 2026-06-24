---
name: Upskill
tag: AI-Enabled Content Delivery Platform
href: https://upskill.quanthub.com
image: /assets/upskill.png
description: >-
  Upskill is QuantHub’s platform to deliver the content we sell. It is used to build and present courses that teach a wide range of skills through a series of lessons and assessments. The platform is used by companies, K12 schools, and higher-ed institutions to train students & employees on the latest technological trends and tools, helping these institutions achieve their goals for AI & data literacy.
tags:
  - Ruby on Rails
  - PostgreSQL
  - Tailwind CSS
  - Stripe
  - Sentry
  - AWS S3
  - GitLab CI
  - LTI 1.3 Advantage
  - WCAG AAA
  - Linear
  - Cursor
role: Full-Stack Developer
timeline: April 2025 - Present
status: Active
collaboration: Team
context: Work
coverCaption: Upskill homepage for learners
order: 1
reverse: false
---

Upskill is the product surface where a lot of my day-to-day engineering work lands: course authoring, learning delivery, assessments, reporting, integrations, and the workflows that help organizations run AI and data literacy programs at scale.

This page is placeholder copy for now, but it reflects the shape I want the project detail page to support: product context, architecture notes, implementation tradeoffs, and a few concrete outcomes.

> Placeholder callout: this project page is intentionally structured for practical notes about constraints, tradeoffs, and outcomes.

## The Product Problem

The platform needs to serve a wide range of customers without turning every implementation into a custom project. K12 districts, universities, and enterprise teams all need different terminology, permissions, reporting exports, and launch paths, but they still share the same core learning experience.

That means the engineering work is rarely just building isolated screens. The harder part is designing features that are configurable enough for customer needs while still staying understandable for authors, learners, and internal support teams.

![Placeholder project screenshot using the site logo](/favicon-red.svg)

## My Role

I work across the Rails application, PostgreSQL data model, Tailwind interface, integrations, and production operations. Depending on the feature, that can mean shaping the data contract, building the UI, writing background jobs, tuning queries, coordinating rollout, and watching telemetry after launch.

- Built and maintained product workflows in a mature Rails monolith
- Improved content delivery and assessment experiences for learners
- Supported integrations around payments, storage, observability, and LTI launch flows
- Used accessibility requirements as implementation constraints instead of a final-pass checklist

## Architecture Notes

Upskill is a Rails application backed by PostgreSQL, with Tailwind CSS driving the interface layer. Most product features live inside the monolith because that keeps authentication, authorization, auditability, background work, and customer-specific configuration close together.

```ruby
class CourseLaunch
  def initialize(user:, course:, context:)
    @user = user
    @course = course
    @context = context
  end

  def call
    authorize_launch!
    create_or_resume_enrollment
    track_launch_event
  end
end
```

The placeholder example above is intentionally small, but the real pattern is similar: keep the workflow explicit, make side effects visible, and preserve enough structure that new customer requirements do not have to cut across every layer of the application.

## Implementation Tradeoffs

The most important tradeoff is preserving product velocity without letting configuration sprawl take over. A feature that solves one customer's problem but adds hidden branching everywhere is expensive to keep alive.

I tend to favor boring interfaces between systems: clear model boundaries, explicit service objects where they reduce controller complexity, background jobs for slow work, and database constraints where correctness matters more than convenience.

## Results So Far

The work has helped support a platform used across companies, schools, and higher education institutions. The detail copy here will eventually be replaced with specific outcomes, but this section is designed to hold the kind of practical impact that matters for a portfolio case study.

- Delivered production features across course authoring, learner experience, and reporting
- Supported customer workflows that depend on reliable launches, submissions, and exports
- Kept implementation details close to the existing Rails conventions
- Improved UI consistency across dense operational screens

## What I Learned

Large product surfaces reward restraint. The best implementation is usually the one that fits the existing system well enough that future work can extend it without rediscovering the same constraints.

I also learned that accessibility, observability, and support ergonomics are easiest to handle when they are designed into the first version of a feature. Retrofitting them later almost always costs more.
