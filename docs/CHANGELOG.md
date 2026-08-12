# ARLO — CHANGELOG

This file records meaningful product, design, documentation and development changes.

It is intended to provide a clear historical record for the project and GitHub repository.

---

# 2026-08-12

## Documentation System Reworked

### Changed

Reworked the Arlo documentation into six clear responsibilities:

- `PRODUCT.md`
- `DESIGN.md`
- `DEVELOPMENT.md`
- `ROADMAP.md`
- `MILESTONE-1.md`
- `CHANGELOG.md`

### Documentation Principles

Each document now has a defined purpose.

`PRODUCT.md`

Defines what Arlo is and where the product is going.

`DESIGN.md`

Defines how Arlo should look, move and feel.

`DEVELOPMENT.md`

Defines how Arlo should be engineered and tested.

`ROADMAP.md`

Defines what should be built and in what order.

`MILESTONE-1.md`

Defines the current implementation target and validation criteria.

`CHANGELOG.md`

Records meaningful changes and decisions over time.

---

## Product Direction

Confirmed Arlo's central product philosophy:

> **Complexity underneath. Simplicity on top.**

Confirmed the core experience:

> **Think → Write → Understand → Clarify → Do → Clear**

Confirmed that Arlo should feel like a simple place to put things rather than a conventional productivity system.

---

## Core Interaction

Confirmed the primary Milestone 1 interaction:

```text
Write
 ↓
Task appears
 ↓
Swipe
 ↓
Fill follows finger
 ↓
Text responds
 ↓
Complete
 ↓
Move into Completed
 ↓
Undo
```

The swipe interaction remains the highest-priority interaction in the prototype.

---

## AI Direction

Confirmed that AI should remain quiet and contextual.

Arlo is not intended to become a chatbot application.

AI should primarily:

- Understand
- Enrich
- Clarify

Real AI integration remains outside Milestone 1.

---

## Dynamic Task Enrichment

Established the task as a flexible information object.

Tasks can contain:

- Primary content
- Metadata
- Context
- Questions

The interface should allow information to appear without turning every task into a rigid form.

Dynamic enrichment should ideally animate through movement and reflow rather than abrupt replacement.

---

## Design Direction

Confirmed:

### Light Mode

Warm cream/beige surface with sky-blue accent.

### Dark Mode

Deep navy surface with sky-blue accent.

### Typography

A distinctive typeface should be selected specifically for Arlo.

Inter and Manrope should not be used automatically simply because they are common recommendations.

### Motion

Motion should be:

- Physical
- Calm
- Responsive
- Fast
- Purposeful

---

## Milestone 1 Status

Milestone 1 is currently **in progress**.

Completed foundations include:

- Project foundation
- Arlo identity
- Initial visual foundation
- Task hierarchy
- Input direction
- Task metadata structure
- Dynamic task content direction

Remaining work is primarily the core interaction:

- Task entrance
- AI question interaction
- Dynamic enrichment animation
- Finger-tracked swipe
- Completion fill
- Text response
- Partial swipe recovery
- Successful completion
- Completed section
- Undo
- Final polish
- Full validation

---

## Documentation Cleanup

Removed duplicated roadmap material from the roadmap.

Removed implementation-specific instructions from documents where they belonged elsewhere.

Reduced overlap between:

- Product decisions
- Design decisions
- Engineering rules
- Roadmap stages
- Milestone requirements

The documentation should now be maintained as separate but connected sources of truth.

---

# Earlier Project History

## Project Origin

Arlo was created from an earlier prototype project.

The original project identity is no longer relevant to the product.

The project is now fully directed towards Arlo.

The user-facing application must contain no legacy product branding.

---

# Changelog Rules

Record a changelog entry when a meaningful change is made to:

- Product direction
- Design direction
- Technical foundation
- Milestone scope
- Major interaction
- Important architecture
- Significant documentation decision

Do not record every small code change here.

Individual implementation changes should normally be represented by Git commits.

---

# Entry Format

Future entries should use:

```md
# YYYY-MM-DD

## Category

### Changed

- What changed.

### Why

- Why the decision was made.

### Impact

- What documents, product areas or development stages are affected.
```

The changelog is historical.

Do not rewrite old entries simply because the current direction has changed.

Add a new entry explaining the change.