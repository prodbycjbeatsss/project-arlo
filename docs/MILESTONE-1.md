# ARLO — MILESTONE 1

**Core Interaction Prototype**

**Status:** In Progress  
**Version:** 1.0  
**Date:** 12 August 2026

---

## 1. Objective

Milestone 1 exists to prove Arlo's core interaction.

It is not the complete application.

The target experience is:

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

The key question is:

> **Does Arlo feel better to use than a normal checklist?**

---

## 2. Scope

Milestone 1 uses one primary screen representing the user's current list.

It may contain:

- Today indicator
- Settings control
- Active tasks
- Natural-language input
- AI question indicator
- Completed section
- Undo feedback

It does not require:

- Navigation system
- Dashboard
- Onboarding
- Accounts
- Backend
- Database
- Real AI API
- Cloud synchronisation

Local/mock state is sufficient.

---

# 3. Current Status

The milestone is already partially complete.

### Achieved

- [x] Expo/React Native project foundation
- [x] Arlo project identity
- [x] Basic Arlo screen
- [x] Light/dark visual direction
- [x] Typography direction
- [x] Today indicator
- [x] Settings entry point
- [x] Task hierarchy
- [x] Natural-language input direction
- [x] Local task interaction foundation
- [x] Task metadata structure
- [x] Dynamic task content direction

### Remaining

- [ ] Finalise task entrance animation
- [ ] Finalise AI question interaction
- [ ] Implement dynamic enrichment animation
- [ ] Implement finger-tracked swipe
- [ ] Implement completion fill
- [ ] Implement text response to fill
- [ ] Implement partial-swipe spring-back
- [ ] Implement successful completion movement
- [ ] Implement Completed section behaviour
- [ ] Implement Undo
- [ ] Evaluate haptics
- [ ] Complete full-device testing
- [ ] Polish the complete interaction
- [ ] Milestone 1 review and approval

The checklist should be updated as development progresses.

---

# 4. Visual Requirements

The interface should be:

- Minimal
- Warm
- Calm
- Premium
- Typography-led
- Spacious
- Responsive

Light mode uses a warm cream/beige surface.

Dark mode uses deep navy.

Sky blue is the primary accent.

Detailed visual rules belong in `DESIGN.md`.

---

# 5. Task Requirements

A task should support:

- Primary title
- Optional right-aligned metadata
- Optional contextual information
- Optional AI question

The layout must support different content lengths without collisions.

A task should behave like a flexible piece of information rather than a fixed database row.

---

# 6. Natural-Language Input

The user should be able to write naturally.

Example:

```text
finish video by Friday
```

The prototype may produce:

```text
Finish video                         Friday
```

Another example:

```text
call John tomorrow at 4
```

May produce:

```text
Call John                         Tomorrow · 4 PM
```

Milestone 1 does not require production-level AI parsing.

The interaction is more important than AI accuracy at this stage.

---

# 7. Task Entrance

A new task should enter naturally rather than appearing abruptly.

The current direction is:

- Soft fade
- Slight movement
- Gentle wave
- Subtle opacity change

The final timing should be determined through device testing.

---

# 8. AI Question

A task may display a subtle question indicator.

Example:

```text
Go shopping                         ?
```

The question mark represents:

> **Arlo has a useful question.**

It must not resemble a notification badge.

The question behaviour may be mocked for Milestone 1.

---

# 9. Dynamic Enrichment

When the user answers a question, the existing task should ideally update rather than simply being replaced.

Example:

```text
Wedding Conversation
```

becomes:

```text
Sisters + Wedding Conversation
```

and may then settle into:

```text
Sisters Wedding Conversation
```

The intended effect is smooth movement and reflow.

This should feel like Arlo incorporating new understanding.

---

# 10. Swipe Completion

This is the most important remaining interaction.

The swipe must be continuously connected to the user's finger.

The relationship is:

```text
Finger position
      ↓
Gesture position
      ↓
Fill position
      ↓
Text response
```

Do not implement a simple:

```text
Swipe detected → Play animation
```

The task should respond throughout the gesture.

---

# 11. Completion Fill

A subtle fill should travel across the task during the gesture.

It must:

- Follow the finger
- Remain inside the task interaction
- Retreat when the gesture retreats
- Avoid looking like a conventional progress bar

---

# 12. Text Response

As the fill moves across the task:

- Affected text becomes muted.
- Unaffected text remains normal.
- Reversing the gesture restores the text.

The response must be continuous.

---

# 13. Partial Swipe

If released before the threshold:

```text
Release
 ↓
Spring back
 ↓
Restore
```

No completion should occur.

The threshold should remain configurable during development.

---

# 14. Successful Completion

At the completion threshold:

```text
Threshold
 ↓
Subtle tactile response
 ↓
Small bounce
 ↓
Task becomes muted
 ↓
Task moves into Completed
 ↓
Remaining tasks reposition
```

The task should not simply disappear.

The movement into Completed is part of the completion experience.

---

# 15. Completed Section

Completed tasks should leave the active list while remaining recoverable.

Example:

```text
Completed 3
```

The section should remain visually secondary.

Expansion can remain simple for Milestone 1.

---

# 16. Undo

After completion, provide a minimal temporary undo action.

Conceptually:

```text
Task completed                         Undo
```

Undo should:

- Restore the task
- Return it to the active list
- Animate the return naturally

---

# 17. Haptics

Haptics are optional.

If simple and stable within the current Expo environment, test them for:

- Completion threshold
- Successful completion

Do not add haptics everywhere.

If they add unnecessary complexity, defer them.

---

# 18. Out of Scope

Do not build:

- Authentication
- Accounts
- Cloud sync
- Database infrastructure
- Calendar integration
- Notifications
- Widgets
- Projects
- Tags
- Priority systems
- Statistics
- Streaks
- Gamification
- Social features
- Complex navigation
- Subscription functionality
- Full AI chat
- Full AI assistant

Do not expand the milestone simply because a feature seems useful.

---

# 19. Technical Approach

Keep the prototype simple.

Use:

- Local React state
- Small components
- Expo-compatible animation/gesture tooling
- Minimal dependencies

Do not introduce complex architecture for Milestone 1.

---

# 20. Testing

Every meaningful interaction must be tested on the physical Android device.

Test:

- Short tasks
- Long tasks
- Tasks with metadata
- Tasks without metadata
- Tasks with context
- Partial swipes
- Reversed swipes
- Successful swipes
- Multiple completions
- Undo
- Completed expansion
- Keyboard behaviour
- Light mode
- Dark mode

---

# 21. Definition of Done

Milestone 1 is complete when a user can:

1. Open Arlo.
2. Understand the screen immediately.
3. See current tasks.
4. Start typing naturally.
5. Add a task.
6. Watch the task enter naturally.
7. Swipe the task.
8. See the fill follow the finger.
9. See the text respond.
10. Release early and see the task recover.
11. Complete the gesture.
12. Feel the completion response.
13. Watch the task move into Completed.
14. See remaining tasks reposition.
15. Undo the completion.
16. Restore the task.

The experience must feel polished enough to evaluate as a product interaction.

---

# 22. Priority

When trade-offs are required:

1. Swipe interaction
2. Gesture physics
3. Completion behaviour
4. Task typography
5. Visual calmness
6. Input experience
7. Completed section
8. AI visual states
9. Haptics
10. Secondary details

Never sacrifice the core interaction for secondary functionality.

---

# 23. Milestone Approval

Before Milestone 1 is marked complete, compare the finished prototype against:

- `PRODUCT.md`
- `DESIGN.md`
- `ROADMAP.md`
- This document

Then ask:

> **Does Arlo feel meaningfully better to use than a normal checklist?**

If the answer is not clearly yes, return to the relevant stage and refine it.

---

# 24. Guiding Principle

> **Do not expand the product until the core interaction deserves to be expanded.**