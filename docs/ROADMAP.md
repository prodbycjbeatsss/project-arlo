# ARLO — DEVELOPMENT ROADMAP

**Status:** Active  
**Version:** 1.0  
**Date:** 12 August 2026

---

## 1. Purpose

This roadmap defines what Arlo is being built towards and the order in which it should be developed.

It is not:

- A complete feature list
- A design specification
- A technical architecture document

The roadmap exists to prevent:

> **Build everything → hope it works.**

Instead:

> **Build → test → evaluate → refine → approve → continue.**

A stage is not complete simply because the code works.

It must satisfy its validation criteria.

---

## 2. Development Loop

Every meaningful stage follows:

```text
DEFINE
  ↓
BUILD
  ↓
RUN
  ↓
TEST ON DEVICE
  ↓
EVALUATE
  ↓
REFINE
  ↓
APPROVE
  ↓
COMMIT
  ↓
NEXT STAGE
```

If the experience is not good enough:

```text
REFINE
  ↓
TEST AGAIN
  ↓
EVALUATE AGAIN
```

---

# 3. Current Position

Arlo is currently in:

> **Milestone 1 — Core Interaction Prototype**

The project foundation and initial visual foundation have already been established.

The remaining work is primarily focused on proving the core task interaction.

See `MILESTONE-1.md` for the exact current status.

---

# 4. Milestone 1 — Core Interaction Prototype

### Objective

Prove that Arlo's fundamental experience feels meaningfully better than a conventional checklist.

The target loop is:

```text
Open
 ↓
See tasks
 ↓
Write
 ↓
Task appears
 ↓
Swipe
 ↓
Complete
 ↓
Move to Completed
 ↓
Undo
```

### Validation Question

> **Does completing a task feel better than tapping a checkbox?**

If the answer is not clearly yes, do not move to the next milestone.

---

## 5. Milestone 1 Order

### Stage 1 — Visual Foundation

Establish:

- Arlo visual identity
- Light/dark surfaces
- Typography
- Task hierarchy
- Today indicator
- Settings control
- Input presentation

**Gate:** The screen feels calm, minimal and visually convincing.

---

### Stage 2 — Task Creation

Establish:

- Natural-language input
- Local task creation
- Mock interpretation
- Task entrance animation

**Gate:** Writing something and seeing it become a task feels natural.

---

### Stage 3 — AI Question & Enrichment Prototype

Establish:

- Question indicator
- Mock clarification
- Natural-language answer
- Dynamic task enrichment
- Reflow/repositioning behaviour

**Gate:** Arlo feels like it understands the user's thought without becoming a chatbot.

---

### Stage 4 — Swipe Completion

Establish:

- Finger-tracked gesture
- Completion fill
- Text response
- Partial swipe spring-back
- Completion threshold
- Completion movement

**Gate:** The interaction feels physical and directly connected to the finger.

This is the highest-priority stage.

---

### Stage 5 — Completed & Undo

Establish:

- Completed section
- Expand/collapse
- Undo
- Restoring completed tasks

**Gate:** Completing work creates space without making recovery difficult.

---

### Stage 6 — Milestone 1 Polish

Review:

- Typography
- Spacing
- Motion
- Gesture physics
- Input behaviour
- Completed state
- AI visual treatment
- Accessibility
- Performance

**Gate:** The complete prototype is convincing when used as an actual task list.

---

# 6. Milestone 1 Completion Gate

Milestone 1 is complete when:

- Task creation works naturally.
- Tasks enter naturally.
- Swipe movement follows the finger.
- Fill responds continuously.
- Text responds to the fill.
- Partial swipes recover naturally.
- Successful completion feels physical.
- Completed tasks leave the active list.
- Remaining tasks reposition smoothly.
- Undo works.
- The interface remains calm.
- No unnecessary product features have been introduced.

Only then should real AI functionality be considered.

---

# 7. Milestone 2 — Intelligent Capture

After Milestone 1 has been validated, the next milestone should introduce real task intelligence.

Potential scope:

- Real natural-language parsing
- Dates and times
- Context extraction
- AI clarification
- Task enrichment
- More robust task states

The exact scope should be defined after Milestone 1 testing.

Do not implement this milestone early.

---

# 8. Milestone 3 — Persistence

Once the interaction and intelligence are proven, Arlo can gain persistent local data.

Potential scope:

- Persistent tasks
- Persistent completed tasks
- Page/list persistence
- Reliable app restart behaviour
- Data migration strategy

The storage architecture should be chosen when this milestone is planned.

---

# 9. Milestone 4 — Pages

Introduce the broader Pages concept.

Potential scope:

- Multiple pages
- Page creation
- Page switching
- AI-assisted page creation
- Page-specific behaviour

The interface should remain consistent with the core Arlo surface.

A dashboard should not be introduced simply to accommodate multiple pages.

---

# 10. Milestone 5 — Reminders & Deeper Task Intelligence

Potential scope:

- Reminders
- Recurrence
- Locations
- More sophisticated task interpretation
- Useful contextual automation

Only build functionality that genuinely reduces user effort.

---

# 11. Milestone 6 — Product Expansion

Potential future areas include:

- Additional page types
- Widgets
- Notifications
- Advanced personalisation
- Curated themes
- Curated fonts
- Cloud synchronisation
- Accounts
- Subscription model

These are possibilities, not commitments.

They should be evaluated against the product philosophy before entering the roadmap.

---

# 12. Scope Control

Ideas that belong to a later milestone should not interrupt the current milestone.

Record the idea.

Do not automatically implement it.

The current milestone always takes priority.

---

# 13. Validation Rule

A technically functional feature is not necessarily a successful feature.

Every major milestone must answer:

> **Does this make Arlo better to use?**

If not:

```text
Stop
 ↓
Identify the problem
 ↓
Refine
 ↓
Test
 ↓
Evaluate
```

---

# 14. Roadmap Principle

Arlo should evolve through validated experiences rather than feature accumulation.

> **Build one meaningful piece. Make it excellent. Prove it. Then build the next one.**

The roadmap protects the product from premature complexity.