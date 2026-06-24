---
name: Upskill
tag: AI-Enabled Content Delivery Platform
href: https://upskill.quanthub.com
image: /assets/upskill.png
description: >-
  Upskill is QuantHub’s platform to deliver curriculum to learners, teachers, and organizations. It is used to build and present courses that teach a wide range of skills through a series of lessons and assessments. The platform is used by companies, K12 schools, and higher-ed institutions to train students & employees on the latest technological trends and tools, helping these institutions achieve their goals for AI & data literacy.
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
collaboration: Team (9)
context: Work
coverCaption: Upskill homepage
order: 1
reverse: false
---

## Overview

I joined the Upskill engineering team in April 2025. Over the last 15 months, I’ve deployed more than 140 features and bug fixes to production. This article highlights the most important features I've worked on, emphasizing the business impact of each feature.

## Context

QuantHub helps companies and educational institutions create the curriculum they need, with a focus on AI fluency and data literacy. Our curriculum development pipeline is significantly faster than traditional curriculum development teams (weeks instead of months). This speed matters because the topics we specialize in are changing very quickly.

Upskill is the delivery layer for our curriculum. Within the platform are multiple "apps" to support different types of users:

- Our curriculum development team builds courses, including learning outcomes, case studies, and activities.
- Students experience these courses by working through resources and assessments to earn official badges.
- Teachers administer these courses by reviewing lessons, managing class rosters, and tracking student progress.
- Our customer success team leverages system-admin tools to set up these courses and resolve support tickets.

In addition to supporting multiple business functions, the product supports multiple types of institutions: K12, higher education, and corporate.

## My Role

I work as a full-stack developer on a team of nine, including a product manager, designer, engineering director, QA specialist, and five software developers. My team is responsible for:

- Designing and building new features that help us onboard new customers & support existing ones
- Triaging and resolving critical application issues
- Shipping these features and bug fixes as quickly as possible

As a junior developer, my primary value has been helping the team move quickly across a wide range of work. I started with quick wins, building expertise in advanced UI/UX patterns. Over time, I became trusted with high-stakes features that involved complex UI/UX requirements under tight deadlines. Furthermore, I'm often asked to try out the newest tools and software development practices, especially ones that leverage AI.

My day-to-day work usually involves:

- Translating product designs into Rails views & components
- Breaking large releases into small ones
- Using feature flags to test new features quickly
- Coordinating with product and QA to clarify edge cases
- Working with senior engineers on architecture for more complex features
- Reviewing pull requests to help senior engineers ship faster and to expand my own understanding of the codebase

AI has helped me move faster, especially considering that I had never worked with Ruby on Rails before joining the team. However, our process still depends on a lot of manual review, including code review, QA & acceptance testing. We use AI to generate code and discover issues quickly, but we do not treat it as a substitute for engineering judgment or product thinking.

## Tech Stack

Upskill is a Ruby on Rails monolith with PostgreSQL. The frontend is built primarily with Rails views & ViewComponents, using Tailwind CSS for styling and Hotwire/Turbo for interactivity. Our other integrations include:

- SolidQueue for background jobs
- S3-backed file storage
- Sentry for error monitoring
- Stripe for payments
- Mailtrap for emails
- Pendo for user tours
- Freshdesk for customer support

Because Upskill serves educational institutions, accessibility and reliability are not optional. We regularly evaluate our work against WCAG requirements, monitor production errors closely, and maintain dependency management policies that require security vulnerabilities to be patched before new feature releases. We also support integrations with multiple LMS platforms via the LTI 1.3 Advantage spec.

## My Contributions

### Learner Homepage

One of my highest-impact areas has been the learner homepage experience.

When I joined the team, our primary course experience used a “stepping stone” path layout. It worked, but it was inherited from an earlier version of the product, when we were still piecing together pages with Bulma and one-off styling rather than building from a shared design system. As a result, the experience felt unpolished, especially for a page that played such an important role in sales demos.

![Old v2 layout](/assets/upskill/old_v2_path.png)

Over time, I was the lead developer on several projects that moved this experience toward a more modern learner homepage with our new design system.

![New learner homepage](/assets/upskill.png)

The goal was not just to make the page look better. The homepage needed to help learners understand:

- **What course they were working through:** the old design has the course and unit titles small and aligned left, while the new design has those elements centered, much bolder, and with supporting elements like the iconography.
- **What they had already completed:** the old design only turned a stepping stone into a checkmark when an activity was complete, while the new design changes the button color, adds a badge and "Completed" text next to each completed activity, and has an aggregate unit progress bar.
- **What they should do next:** the old design automatically scrolled the learner to the next activity (which was sometimes jarring) and used very light color shades, but the new design uses stronger "not started" and "next" colors to indicate clearly what activity is next and what can be done.
- **How their progress contributed to concrete achievements:** the old design had a small text panel at the bottom of the path indicating that a badge or certificate was available for completing a course, while the new design has the badge or certificate image as the first item in the unit, so the learner is always clear on what they're working toward.

The business impact of these releases was helping us land some of our first substantial higher education contracts, and we still get positive feedback about the modern learner experience during our sales demos.

One of the most important technical outcomes was my early work with Rails ViewComponent. As older Bulma-based UI patterns became harder to scale and maintain, we needed to 1) move toward more modern frontend frameworks, such as Tailwind and 2) build reusable components to standardize UI elements application-wide. Through this series of projects, I helped define how ViewComponent fit into our application, shaping our team's frontend conventions and best practices.

The most challenging part of this work was release pressure, as some of these homepage changes had ambitious timelines. To manage this challenge, I broke up the work into small pieces that could be quickly reviewed, tested, and released behind a feature flag. Because each change was scoped narrowly, my team could review each piece quickly, giving our internal stakeholders steady visibility into progress without exposing customers to the risk of a large, disruptive release.

Overall, this work best represents the impact I had on Upskill: improving a core product experience, helping establish stronger frontend patterns, and supporting the sales momentum behind some of our most important early customer relationships.

### Teacher Experience

Teachers, professors, and managers are usually the people responsible for deciding whether Upskill will be adopted by the organization. As a result, we spend a lot of time refining the teacher experience, because a clear, intuitive admin workflow supports both successful demos and long-term retention.

I've been the lead developer on several major features contributing to the teacher experience, primarily the class roster.

**Class Roster**

The class roster is the first page that teachers see when logging into Upskill.

Before the roster page existed, teachers gave students codes or links to join classes. While this worked well in corporate settings, it was challenging for educational institutions, where teachers needed to be more hands-on with managing students. Furthermore, it was visually unclear that teachers needed to set up classes to get the most out of the platform (it was possible for teachers to use the platform without setting up classes, but they would lose some functionality).

To encourage teachers to start creating classes, I built a new roster page that clearly indicates how to perform tasks necessary in an education context. It starts with an empty state graphic, which gives teachers a description of where they are in the platform and a clear call to action (create a class).

![Roster Empty State](/assets/upskill/roster_empty_state.png)

After teachers create a class, they are then redirected to the new roster page, which gives teachers the ability to edit classes, add or remove students and teachers, and generate codes if they still want to.

![Class Roster](/assets/upskill/roster.png)

Encouraging teachers to use classes enabled the following:

- **User management**: the old workflow made it very difficult for teachers to add and remove students or other proctors directly, while the new workflow introduced a prominent button and inline form for teachers to _see_ how to manage their students (as opposed to remembering multiple steps).
- **Visibility**: teachers who have classes configured will have multiple visual cues appear in the application header, class switcher, and filters on reports & curriculum pages, giving them a clear understanding of what class they're currently managing in the platform.
- **Curriculum assignment**: the old workflow didn't allow us to license curriculum through a group (instead requiring students in classes to enroll in curriculum as individuals), while the new workflow allowed teachers to select available courses when setting up a class, automatically licensing all students in the class to access the curriculum.

This new feature was designed to give teachers more control, which ended up significantly reducing our customer support tickets (contributing to an 80% year-over-year decrease). Furthermore, it improved our customer success team's ability to onboard new teachers quickly, often leading to same-day turnaround for configuring new classes.

This was one of the first pages that used our new design system for administrators, including a page header, description, white panel, primary buttons, and table components. Spending a lot of time designing these components to be scalable across the platform paved the way for the rest of the administrative features to be migrated to the new design system, which was another initiative I led.

The primary challenge with this release was managing scope creep. Since this workflow didn't exist before, I kept discovering issues during the review process, ranging from small frontend inconsistencies around the platform to significant backend issues with removing students from classes. While this made the feature hard to roll out, I met our tight spring deadline without compromising quality by tracking issues in writing and deciding which ones could be deferred to fast-follow releases.

Overall, my work on the roster is important to me because of its usefulness to internal stakeholders, which is an easy way to connect with my colleagues in the customer success and sales teams.

### Others

The larger releases above are the easiest to show off, but I’ve also contributed to several other important features:

**Teaching Guide**

![Teaching Guide](/assets/upskill/teacher_guide.png)

I took over the development of a dedicated guide page for teachers to understand the curriculum we built for them. This replaced a legacy guide component that presented resources for teachers directly on the learn page, which was both distracting and confusing. The new guide presents the same narratives and skills we present to students on the learn page, while also linking teachers to pre-filtered reports for their classes and giving them a peek into our curriculum delivery methodology.

**Reports**

I undertook a major effort to facelift our reports to make them conform to our new design system and decouple them from legacy functionality. While this effort improved users' visual experience with the platform, it also resolved a significant amount of tech debt we had as a team, paving the way for us to overhaul reports again in the future.

_Before_:

![Old reports](/assets/upskill/old_reports.png)

_After_:

![Learner Reports](/assets/upskill/reports.png)

**Navigation**

I built major navigation features, including the course switcher and app menu. These components make it easier for users to control what they are currently learning or teaching, and users with multiple roles can easily move between different parts of the platform. While it significantly improved regular users' everyday workflows, it also addressed a critical need brought up by our sales team members, who had identified that better ways to switch contexts were needed during demos.

**Content Delivery**

I’ve worked on several features to help our curriculum development team present content in multiple formats, including organizing articles into series, attaching audio/video resources to skills in courses, and adding content blocks (such as email, app, and chatbot cues) to items during assessments. This work matters because curriculum delivery is not just about storing content: it is about providing the student with the right material in the right format, so they can complete their assignments and actually understand the concepts.

**Public Achievements**

I rebuilt the public achievement page, which external users see when verifying badges and certificates earned through Upskill. This work made achievements feel more trustworthy when learners posted them on social platforms.

**Timed Assessments**

I’ve handled several bugs with timed assessments, leading to me becoming a local subject matter expert in this area. This work resolved discrepancies we noticed when running reports for assessments, and it also made the visual cues provided during timed assessments more accurate, improving the user experience.

**Subscriptions**

One of my earliest features involved tracking subscriptions from students paying for courses through a third party. This work supported our first higher-education contracts, which led to renewals from those customers and paved the way for us to onboard new customers easily.

**Code Review**

More recently, I’ve started reviewing pull requests for senior engineers, meaning I currently either contribute to or review 90% of all work done on Upskill. This helps my team move faster because my reviews can unblock releases more quickly. It also helps me grow because I get more exposure to architectural decisions, newer parts of the codebase, and patterns I may not encounter in my own feature work.

## Takeaway

Working on Upskill is teaching me that being a good engineer requires being a product owner. I shouldn't just build a feature because it's fun to build: if a feature doesn't make sense to me as I'm building it, it likely won't make sense to an end user. For example, a new feature for teachers is not successful just because the page loads and it looks pretty: it is successful when a teacher logs in, understands what to do, and uses the feature to improve their workflow. Having a product ownership mindset as an engineer is one of the best ways to ensure users will trust the platform.

It has also taught me how much the release cadence matters when deploying features. Finishing features quickly matters, but shipping everything immediately isn't always the right decision; sometimes it's better to release a smaller version first, then ship the rest of the functionality quickly, so that customers have access to critical functionality quickly. In a fast-paced environment, good software engineers 1) make it work, 2) make it right, then 3) make it fast.

Most importantly, this project is helping me grow from someone who could complete assigned work into someone who can shape the future of applications. As I continue striving to become a senior engineer, I’ve been learning to handle ambiguity by asking better questions. While this matters from a product perspective (as I've already mentioned), it also matters from a personal growth perspective, as this is a skill that I will continue to use for the rest of my career.

Upskill is still active, and my work on it is ongoing. As the product continues to grow, so will this page.
