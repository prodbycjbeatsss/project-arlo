# ARLO — DESIGN SYSTEM & INTERACTION DIRECTION

**Status:** Working Direction  
**Version:** 1.0  
**Date:** 12 August 2026

---

## 1. Design Objective

Arlo should feel like a beautiful digital surface rather than a conventional productivity application.

The interface should be:

- Minimal
- Calm
- Warm
- Premium
- Typography-led
- Spacious
- Responsive
- Slightly playful

The central design principle is:

> **Complexity underneath. Simplicity on top.**

---

## 2. Design Hierarchy

The visual hierarchy should prioritise:

1. Tasks
2. Task metadata
3. Natural-language input
4. Useful contextual information
5. Secondary controls

The interface should not compete with the user's tasks.

---

## 3. Home Screen

The home screen should contain only what is necessary.

Conceptually:

```text
                         Settings

                           Today


Finish video                         Friday

Go shopping                              ?

Clean living room


                         Completed 3


What needs doing...
```

This is a hierarchy reference rather than a fixed pixel layout.

The task list must remain visually dominant.

---

## 4. Surface

### Light Mode

Use a warm cream / beige surface.

It should:

- Avoid pure white.
- Feel soft rather than sterile.
- Remain comfortable for prolonged use.
- Provide sufficient contrast.

### Dark Mode

Use a deep navy surface.

It should:

- Avoid pure black.
- Preserve the same visual hierarchy as light mode.
- Remain calm rather than dramatic.

---

## 5. Accent

Sky blue is the primary accent.

Use it selectively for:

- AI activity
- Important interactive states
- Selected controls
- Completion feedback where appropriate

The accent should never dominate the screen.

---

## 6. Typography

Typography is one of the primary visual tools.

Do not automatically use Inter or Manrope.

The chosen typeface should provide:

- High readability
- Strong mobile rendering
- Distinct personality
- Good numerals
- Good punctuation
- Clear hierarchy

Hierarchy should primarily be created through:

- Size
- Weight
- Opacity
- Spacing

Avoid unnecessary typographic styles.

---

## 7. Task Layout

A task is a flexible visual object rather than a rigid database row.

Its layout should support:

- Primary title
- Right-aligned metadata
- Optional contextual information
- AI questions

The underlying layout can use an invisible structural grid.

The grid exists to prevent:

- Collisions
- Unstable spacing
- Metadata overlap
- Problems when content changes

The grid must not become visually obvious.

---

## 8. Primary Task Content

The task title is the dominant element.

Example:

```text
Ring Mom
```

It should be typography-led.

Avoid:

- Cards
- Borders
- Checkboxes
- Heavy containers

---

## 9. Metadata

Date and time information should occupy a secondary right-side region.

Example:

```text
Ring Mom                         4:00 PM
```

Metadata should remain visually secondary.

Long titles should use the available space intelligently and wrap where necessary.

Metadata must never collide with primary task text.

---

## 10. Optional Context

Context should only occupy space when it exists.

Example:

```text
Ring Mom                         4:00 PM
Wedding Conversation
```

A task without context should not reserve an empty second row.

This allows task height to respond naturally to its content.

---

## 11. Flexible Information

The design should not assume a permanent set of metadata categories.

Arlo may eventually understand:

- Dates
- Times
- People
- Locations
- Events
- Deadlines
- Items
- Other useful context

The visual system should therefore use flexible content regions rather than fixed field assumptions.

---

## 12. AI Questions

An AI question belongs to the task.

Example:

```text
Ring Mom                         4:00 PM
Wedding Conversation             ?
```

The question indicator should be:

- Small
- Quiet
- Discoverable
- Clearly interactive

It must not resemble:

- A notification badge
- An unread counter
- A warning
- A chatbot message

---

## 13. AI Processing

AI processing should be represented through subtle animated typography.

Reference direction:

**Shining Text / shimmer**

Possible states:

```text
thinking...
searching...
reading...
7 sources
```

The treatment should be:

- Small
- Muted
- Responsive
- Calm
- Sky-blue where appropriate

Avoid large AI panels, glowing interfaces or persistent AI controls.

---

## 14. Natural-Language Input

The input should feel like writing rather than completing a form.

Conceptually:

```text
What needs doing...
```

Avoid:

- Large input cards
- Excessive controls
- Form-like field layouts
- Prominent submit buttons where unnecessary

The input should visually belong to the same surface as the task list.

---

## 15. Task Entrance

New tasks should enter naturally.

The preferred direction is inspired by the Sesame reference.

Possible properties:

- Soft fade
- Small vertical movement
- Gentle wave
- Subtle opacity transition
- Minimal overshoot

The animation should not draw attention to itself.

---

## 16. Completion Interaction

The completion gesture is one of Arlo's defining interactions.

The user should physically manipulate the task.

Conceptually:

```text
Finger
  ↓
Gesture position
  ↓
Fill position
  ↓
Text response
```

The visual response must remain connected to the user's finger.

Do not treat the swipe as a simple trigger.

---

## 17. Completion Fill

A subtle fill travels across the task during the gesture.

Conceptually:

```text
██████░░░░░░░░
Finish video
```

The fill should:

- Follow the finger.
- Remain subtle.
- Exist inside the task interaction.
- Retreat when the gesture retreats.

It should not look like a conventional progress bar.

---

## 18. Text Response

As the fill travels across the task:

- Affected text becomes muted.
- Unaffected text remains normal.
- Reversing the gesture restores the text.

This response must be continuous.

The user should feel that their finger is physically affecting the task.

---

## 19. Partial Gesture

If the user releases before the completion threshold:

```text
Release
   ↓
Spring back
   ↓
Restore
```

The movement should use a subtle spring.

The gesture must feel reversible rather than failed.

---

## 20. Successful Completion

The preferred sequence is:

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

The movement into Completed is part of the meaning of completion.

---

## 21. Completed Section

Completed work should become visually secondary.

Conceptually:

```text
Completed 3
```

The section can expand to reveal completed tasks.

The active list should remain the dominant experience.

---

## 22. Undo

Undo should be temporary and minimal.

Conceptually:

```text
Task completed                         Undo
```

The action should allow the task to return naturally to the active list.

It should not become a permanent UI element.

---

## 23. Dynamic Enrichment

When Arlo gains information about an existing task, the task should ideally evolve rather than simply disappear and reappear.

Conceptually:

```text
Wedding Conversation

        ↓

Sisters + Wedding Conversation

        ↓

Sisters Wedding Conversation
```

The words and contextual elements should shift and reflow where technically practical.

The intended feeling is:

> **Arlo is incorporating new understanding into the existing thought.**

The transition should be:

- Smooth
- Fast
- Physical
- Subtle
- Consistent

Avoid abrupt replacement where possible.

---

## 24. Motion Language

Arlo's motion should be:

- Physical
- Soft
- Responsive
- Fast
- Natural
- Intentional

Use animation to communicate state.

Do not animate simply because animation is possible.

Avoid:

- Confetti
- Particle effects
- Excessive bounce
- Giant checkmarks
- Long transitions
- Excessive blur
- Excessive glow

---

## 25. Haptics

Haptics should be used only where they improve the physical experience.

Potential uses:

- Completion threshold
- Successful completion

Haptics should remain subtle.

They are supportive rather than essential.

---

## 26. Voice

Arlo's interface language should be short and human.

Prefer:

```text
What do you need to buy?
```

```text
When do you need it?
```

```text
Nice.
```

```text
All clear.
```

Avoid technical or corporate language.

---

## 27. Design Guardrails

Challenge any proposed interface element with:

> **Does this make the experience clearer, easier or more satisfying?**

Prefer:

- Less interface
- More whitespace
- Strong typography
- Useful motion
- Clear hierarchy
- Contextual information

Avoid:

- Feature clutter
- Dashboard patterns
- Decorative complexity
- Conventional productivity UI where a simpler interaction works better

---

## 28. Current Design References

The current reference principles include:

- Apple Notes — simplicity and typography
- Amy — calm, premium mobile experience
- Sesame — subtle text motion
- Shining Text — restrained AI activity treatment

These are references for principles, not designs to copy.

---

## 29. Design Principle

> **The interface should become quieter as Arlo becomes more intelligent.**