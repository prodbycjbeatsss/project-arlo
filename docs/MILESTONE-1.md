MILESTONE-1.md

Arlo — Milestone 1: Core Interaction Prototype

1. Milestone Objective

Build the first convincing interactive prototype of Arlo.

The purpose of this milestone is not to build the complete application.

The purpose is to prove that Arlo's core interaction feels:

- Minimal
- Calm
- Intelligent
- Physical
- Satisfying
- Fast
- Premium

The core experience to prove is:

Open → See tasks → Type → Task appears → Swipe → Complete → Move to Completed → Undo

If this interaction does not feel excellent, do not proceed into complex AI functionality.

---

2. Scope

Milestone 1 should contain one primary screen.

The screen should represent Arlo's "Today" list.

It should contain:

- Settings control.
- Today indicator.
- Active tasks.
- Natural text input.
- AI question indicator where appropriate.
- Completed task section.
- Completed-task interaction.
- Undo feedback.

There should be no traditional navigation system.

There should be no dashboard.

There should be no onboarding.

There should be no account system.

There should be no backend.

There should be no real AI API.

There should be no database.

The prototype should use local in-memory/sample state.

---

3. Visual Direction

The visual direction combines the strongest references established in "DESIGN.md".

Primary characteristics:

- Minimal.
- Warm.
- Calm.
- Premium.
- Paper-like.
- Professional.
- Slightly playful.
- Spacious.
- Typography-led.
- Animation-led.

The interface should feel closer to a beautifully designed notes application than a conventional productivity application.

Avoid the visual language of:

- Generic todo apps.
- SaaS dashboards.
- Productivity dashboards.
- Gamified task managers.
- Material Design-heavy interfaces.
- Dense cards.
- Excessive borders.
- Excessive icons.

---

4. Background

Light Mode

Use a warm off-white / cream surface.

The background should have a subtle paper-like quality without using an obvious paper texture.

It should not be pure white.

The background should remain comfortable to look at for extended periods.

Dark Mode

Use a deep dark navy surface.

The dark mode should not simply be black.

Accent

Sky blue is the primary accent colour.

It should be used selectively for:

- AI activity.
- Important interactive states.
- Selected controls.
- Completion feedback where appropriate.

The accent should never overwhelm the interface.

---

5. Typography

Typography is one of the most important parts of the design.

The visual references suggest a clean professional system similar in feeling to Apple's system typography.

Do not automatically use Inter or Manrope.

Choose a typeface that feels:

- Modern.
- Minimal.
- Highly legible.
- Professional.
- Slightly distinctive.

The font should support the feeling of Apple Notes / Amy while allowing Arlo to develop its own identity.

The typography hierarchy should primarily rely on:

- Size.
- Weight.
- Opacity.
- Spacing.

Avoid excessive font styles.

---

6. Home Screen Structure

The home screen should feel almost empty.

Conceptually:

                         Settings


                         Today


Finish video                         Friday

Go shopping                              ?

Clean living room


                         Completed 3


What needs doing...

This is not a fixed layout.

Spacing, alignment and exact positioning should be refined during implementation.

The important principle is:

«The user's tasks should be the dominant content on the screen.»

---

7. Settings

Only a small settings control should appear in the top-right corner.

It should be:

- Minimal.
- Circular/pill-shaped.
- Visually quiet.
- Easy to discover.
- Not visually dominant.

Settings functionality does not need to be implemented in Milestone 1.

The control may simply be present as a visual placeholder.

---

8. Today Indicator

A small pill near the top of the screen should indicate the current list/day.

Example:

Today

The control should feel lightweight.

It should not look like a conventional navigation tab.

Future functionality may allow users to navigate between days.

For Milestone 1, it only needs to communicate that the user is viewing today's tasks.

---

9. Task Design

Tasks should be primarily typography.

Avoid large cards.

Avoid boxed task containers.

Avoid visible checkboxes.

Example:

Finish video
Friday

The task title should be the dominant element.

Metadata should be secondary.

Metadata may include:

- Date.
- Time.
- Deadline.
- Other useful contextual information.

Metadata should use muted typography.

---

10. Task Spacing

Individual tasks should have generous vertical spacing.

The relationship should be:

Lines within a task → relatively close

Separate tasks → noticeably further apart

This is important for readability.

The list should feel like a collection of individual thoughts rather than a spreadsheet.

---

11. Natural Language Input

The user should not need to interact with a traditional form.

The input should feel like writing directly into a notes page.

The user should be able to type:

finish video by Friday

and submit it.

For Milestone 1, parsing may be mocked.

Example:

Input:

finish video by Friday

Output:

Finish video                         Friday

Another example:

call John tomorrow at 4

Output:

Call John                           Tomorrow · 4 PM

The important thing is the interaction, not the AI accuracy at this stage.

---

12. Input Behaviour

The input should begin relatively high on the screen rather than being permanently enclosed in a large bottom input box.

It should feel similar to writing into Apple Notes.

The user should be able to:

1. Open the app.
2. Start typing immediately.
3. Submit naturally.
4. See the task enter the list.

Avoid unnecessary controls around the text input.

---

13. Task Entrance Animation

When a new task is created, it should not simply appear instantly.

The task should enter with a subtle animation.

The preferred direction is inspired by the wavy text animation found in the Sesame reference.

Potential characteristics:

- Fade in.
- Slight vertical movement.
- Gentle wave.
- Soft opacity transition.
- Minimal overshoot.

The effect must remain subtle.

The task should feel like it is naturally appearing rather than performing an animation.

---

14. AI Question Indicator

If a task would benefit from clarification, display a minimal indicator.

Example:

Go shopping                         ?

The question mark should be visually secondary.

It should not look like a notification badge.

The indicator should communicate:

«Arlo has a useful question.»

It should not communicate:

«You have an unread notification.»

---

15. AI Processing Animation

AI activity should use subtle animated typography.

The 21st.dev "ShiningText" component is the current implementation reference.

The visual principle is:

«A muted piece of text with a moving shimmer indicating that Arlo is actively processing something.»

Potential states:

thinking...

searching...

reading...

7 sources

The exact states will be refined later.

The shimmer should:

- Be subtle.
- Use Arlo's colour system.
- Avoid bright flashing.
- Avoid large text.
- Avoid excessive glow.

The AI should feel alive without becoming the interface.

---

16. Definitive Task Completion Interaction

This is the most important part of Milestone 1.

The primary completion animation must use the swipe interaction documented in DESIGN.md Reference #4.

This is not merely inspiration.

This is the animation we want to build.

The interaction should work like this:

Task
↓
User swipes
↓
Fill follows finger
↓
Text responds to fill
↓
Completion threshold
↓
Tactile bounce
↓
Task moves into Completed

---

17. Swipe Behaviour

The task should respond directly to the user's finger.

The interaction should not simply detect:

swipe detected → play animation

Instead:

finger position
      ↓
task position
      ↓
fill position
      ↓
text appearance

These should remain physically connected.

---

18. Completion Fill

A visual fill should travel across the task as the user swipes.

The fill should be subtle.

The fill should not resemble a large progress bar.

It should feel integrated into the task itself.

The fill position should correspond to the user's finger position.

---

19. Text Response

As the fill travels across the task, the text affected by the fill should become muted.

If the user reverses direction:

- The fill retreats.
- The muted text returns towards its normal state.

This should happen continuously.

The interaction should therefore feel reversible until the completion threshold is reached.

---

20. Failed / Partial Swipe

If the user releases before the completion threshold:

The task should spring back.

The spring should have a subtle tactile bounce.

No completion should occur.

The exact threshold should remain configurable during prototyping.

Do not permanently hard-code a design decision such as 25%, 50% or 75% without testing.

---

21. Successful Completion

When the completion threshold is reached:

The task should provide a subtle tactile response.

The preferred sequence:

1. Completion threshold reached.
2. Small bounce.
3. Task becomes slightly muted.
4. Task moves downwards.
5. Task enters the Completed section.
6. Remaining tasks smoothly reposition.

The task should NOT simply fade away.

---

22. Completed Section

Completed tasks should move into a simple collapsed section.

Example:

Completed 3

The completed section should remain visually secondary.

Opening it should reveal completed tasks.

The exact expansion interaction can be simple for Milestone 1.

The important behaviour is that completed tasks remain recoverable without cluttering the active list.

---

23. Undo

After completion, provide a minimal temporary undo control.

Example:

Task completed                       Undo

It should be visually quiet.

Undo should return the task to the active list.

The task should animate back into its previous position.

---

24. Haptics

Where Expo/React Native support allows, subtle haptic feedback should be considered for:

- Completion threshold.
- Successful completion.
- Possibly other important interactions.

Haptics must remain subtle.

Do not use haptics for every interaction.

If adding haptics requires excessive dependencies or complexity, leave them for a later milestone.

---

25. Animation Principles

Animations should feel:

- Fast.
- Smooth.
- Physical.
- Responsive.
- Purposeful.
- Calm.

Prefer spring-based movement where appropriate.

Avoid:

- Long transitions.
- Excessive bouncing.
- Large scale changes.
- Confetti.
- Particle effects.
- Excessive blur.
- Decorative animations without functional purpose.

The animation should communicate what happened.

---

26. Prototype Data

Use a small set of local sample tasks initially.

For example:

Finish video
Friday

Go shopping
?

Clean living room

Call John
Today · 4 PM

The exact sample data can be changed during testing.

The prototype should support adding new tasks locally.

Persistence is optional for this milestone.

---

27. AI Behaviour

Do not integrate a real AI service during Milestone 1.

Use deterministic/mock behaviour to demonstrate the intended UX.

The AI layer will be implemented after the interaction design has been validated.

The prototype should nevertheless visually demonstrate how AI will behave.

---

28. What NOT To Build

Do not build:

- Authentication.
- Accounts.
- Cloud sync.
- Database.
- Calendar integration.
- Notifications.
- Widgets.
- Projects.
- Tags.
- Priority systems.
- Statistics.
- Streaks.
- Gamification.
- Social features.
- Multiple dashboards.
- Complex navigation.
- Subscription functionality.
- Chat interface.
- Full AI assistant.

Do not add features simply because they are common in productivity applications.

---

29. Technical Constraints

The prototype is being developed primarily from an Android phone.

Development environment:

- Expo.
- Expo Go.
- Termux.
- Acode.
- TypeScript.
- React Native.
- Expo Router.
- AI Studio.
- Gemini.
- ChatGPT.

Keep dependencies minimal.

Do not install a large UI framework.

Do not introduce unnecessary architecture.

Do not create a complex folder structure.

Prefer simple, understandable React Native components.

---

30. Existing Project

The project currently contains:

app/
  index.tsx

assets/
docs/
  PRODUCT.md
  DESIGN.md

app.json
package.json
tsconfig.json
index.ts

The project originated from an earlier Football IQ Trainer prototype but has now been renamed and repurposed as Arlo.

The old Football IQ identity should not appear anywhere in the user-facing application.

---

31. Definition of Done

Milestone 1 is successful when a user can:

1. Open Arlo.
2. Immediately understand the screen.
3. See today's tasks.
4. Tap the input and start typing.
5. Add a task naturally.
6. See the task enter the list smoothly.
7. Swipe the task.
8. See the fill follow their finger.
9. See the task text respond to the fill.
10. Release early and watch the task spring back.
11. Complete the swipe.
12. Feel the completion response.
13. Watch the task move into Completed.
14. See the remaining tasks smoothly reposition.
15. Undo the completion.
16. Restore the task.

The prototype should feel polished enough that we can evaluate the interaction, not merely confirm that the code works.

---

32. Priority Order

If implementation time or technical limitations require compromises, prioritise in this order:

1. Task interaction.
2. Swipe physics.
3. Completion animation.
4. Task typography.
5. Overall visual calmness.
6. Input experience.
7. Completed section.
8. AI visual states.
9. Haptics.
10. Everything else.

Never sacrifice the core interaction to add secondary features.

---

33. Guiding Principle

The Milestone 1 prototype should answer one question:

«Does Arlo feel better to use than a normal checklist?»

If the answer is not clearly yes, do not expand the product.

Improve the interaction first.

----

MILESTONE-1 AI STUDIO PROMPT

ARLO — AI STUDIO MASTER BUILD PROMPT

Role

You are the lead React Native engineer responsible for building the first interactive prototype of Arlo, a radically minimalist AI-assisted task application.

You are working inside an existing Expo/React Native/TypeScript project.

Your job is to implement the product and design decisions contained in the provided documentation.

You are not the product designer.

Do not invent conventional productivity-app features.

Do not redesign the product according to your own assumptions.

When a decision is explicitly defined in the documentation, follow it.

When something is deliberately undecided, implement the simplest reasonable prototype and keep the implementation easy to change.

---

SOURCE OF TRUTH

You have been provided with:

- "docs/PRODUCT.md"
- "docs/DESIGN.md"
- "docs/MILESTONE-1.md"
- "package.json"
- "app.json"
- "tsconfig.json"
- "index.ts"
- "app/index.tsx"

Read all of these before modifying the project.

The documentation is the product source of truth.

"MILESTONE-1.md" defines the exact scope of the current build.

Do not expand beyond that scope.

---

PROJECT CONTEXT

The existing project was originally created as a Football IQ Trainer prototype.

It has now been renamed and repurposed as Arlo.

The old Football IQ product is no longer relevant.

The user-facing application must contain no Football IQ Trainer content, terminology or branding.

The current project is intentionally extremely bare.

Current technical foundation:

- Expo 57
- Expo Router
- React Native 0.86
- React 19
- TypeScript
- Android development through Expo Go
- Development primarily performed from an Android phone using Termux and Acode

Keep the project simple.

---

PRODUCT

Arlo is a minimalist task application based on one core idea:

«Write what needs doing. We'll figure out the rest.»

The user should not feel as though they are operating a productivity system.

They should feel as though they have somewhere to put what's in their head and Arlo quietly helps them understand and complete it.

The fundamental loop is:

Capture → Understand → Do → Clear

The interface should remain extremely minimal while intelligence exists underneath it.

---

CORE MVP EXPERIENCE

The first prototype must prove:

Open → See tasks → Type → Task appears → Swipe → Complete → Move to Completed → Undo

Do not build the complete product yet.

Do not build a backend.

Do not connect a real AI API.

Use local/mock data for the AI behaviour.

---

DESIGN PERSONALITY

Arlo should feel:

- Calm
- Premium
- Minimal
- Intelligent
- Slightly playful
- Professional
- Tactile
- Satisfying

It should feel closer to:

- Apple Notes
- Amy Food Journal
- Sesame

than to:

- Todoist
- Microsoft To Do
- Notion
- generic productivity dashboards

Do not copy these products.

Use their principles as reference points.

---

VISUAL DIRECTION

The primary visual direction is:

Warm minimalism + paper-like calmness + sophisticated typography + subtle animation.

Light mode:

- Warm off-white / cream surface.
- Dark primary typography.
- Muted grey secondary typography.
- Sky blue accent.

Dark mode:

- Deep navy surface.
- Light primary typography.
- Muted secondary typography.
- Sky blue accent.

Do not use pure white backgrounds for light mode.

Do not use pure black for dark mode.

The interface should be comfortable to look at.

---

TYPOGRAPHY

Typography is central to the design.

Do not default to Inter or Manrope simply because they are common recommendations.

Use a clean, professional system font or an appropriate available typeface that creates a feeling similar to Apple's typography.

Primary task text:

- Strong.
- Clean.
- Highly readable.

Metadata:

- Smaller.
- Muted.
- Secondary.

AI status:

- Small.
- Muted.
- Animated.

Do not overuse font weights.

---

HOME SCREEN

The home screen should contain almost nothing except:

- Settings control.
- Today indicator.
- Active tasks.
- Natural text input.
- Completed section.

Conceptually:

                         Settings

                         Today

Finish video                         Friday

Go shopping                              ?

Clean living room


                         Completed 3


What needs doing...

This is conceptual only.

Use good judgement to establish spacing and hierarchy.

The task list must remain the dominant content.

Do not introduce:

- Dashboard cards.
- Navigation bars.
- Tabs.
- Project sections.
- Priority indicators.
- Filters.
- Tags.

---

TASK CREATION

The user should be able to type naturally.

Example:

finish video by Friday

The interface should represent the result as:

Finish video                    Friday

Another:

call John tomorrow at 4

Becomes:

Call John                       Tomorrow · 4 PM

For this milestone, parsing can be mocked.

The important thing is the visual and interaction behaviour.

---

INPUT

The input should feel like writing into a notes application.

Do not create a large conventional form.

Avoid a prominent rectangular text-entry card.

The user should be able to start typing quickly.

Submission should feel natural.

When submitted:

1. Create the task.
2. Parse/mock useful metadata.
3. Animate the task into the list.
4. Return the user to the minimal list experience.

---

TASK ENTRANCE

New tasks should enter with a subtle animation.

Use the Sesame-inspired motion direction documented in "DESIGN.md".

Potential characteristics:

- Soft fade.
- Slight movement.
- Gentle wave.
- Small opacity transition.

Do not make the task perform a dramatic animation.

The animation should feel like the interface naturally receiving the user's thought.

---

AI QUESTION

Some tasks can benefit from additional information.

Example:

Go shopping

May display:

Go shopping                         ?

The question indicator should be subtle.

It is not a notification badge.

It represents:

«Arlo has a useful question.»

For this milestone, the question can be mocked.

Do not create a chatbot interface.

---

AI SHIMMER

The AI processing animation should follow the 21st.dev Shining Text concept documented in "DESIGN.md".

Potential states:

thinking...

then:

searching...

then:

reading...

then:

7 sources

The exact sequence can initially be mocked.

The animation should use a subtle moving shimmer across the text.

The effect should be:

- Muted.
- Calm.
- Small.
- Responsive.
- Premium.

Do not create a large AI panel.

Do not create a chatbot.

Do not make the AI visually dominate the task.

The AI should feel like an invisible layer of intelligence.

---

MOST IMPORTANT: COMPLETION INTERACTION

The task completion interaction documented as Reference #4 in DESIGN.md is the PRIMARY COMPLETION ANIMATION.

This is not optional inspiration.

Build this interaction.

The user should complete tasks by swiping.

Do not use a conventional checkbox as the primary interaction.

---

SWIPE MECHANIC

The swipe must be directly connected to the user's finger.

Do not implement:

detect swipe
→ trigger pre-made animation

Instead implement:

finger position
→ task movement
→ fill position
→ text response

in real time.

The interaction should feel physical.

---

FILL

As the user swipes, a subtle fill should travel across the task.

Conceptually:

██████░░░░░░░░░░
Finish video

then:

████████████░░░░
Finish video

The fill must track the gesture.

It should not look like a generic progress bar.

---

TEXT RESPONSE

The text should respond to the fill.

The portion affected by the fill should become muted.

If the user reverses their swipe:

- Fill retreats.
- Text returns towards its normal appearance.

This relationship should be continuous.

The effect should make the user feel that their finger is physically interacting with the task.

---

PARTIAL SWIPE

If the user releases before the completion threshold:

- Do not complete the task.
- Spring the task back.
- Use a subtle tactile bounce.
- Restore the original visual state.

The threshold should be configurable.

Do not hard-code an arbitrary percentage as a permanent design decision.

---

SUCCESSFUL COMPLETION

When the user reaches the completion threshold:

1. Provide a subtle tactile response.
2. Give the task a small physical bounce.
3. Transition the task into a completed visual state.
4. Move the task downwards into the Completed section.
5. Smoothly reposition the remaining active tasks.

The task must not simply fade away.

The task should feel as though it has physically left the active workload.

---

COMPLETED SECTION

Completed tasks should move into a simple collapsed section.

Example:

Completed 3

The completed area should remain visually secondary.

It should be possible to open it and see completed tasks.

The exact expansion behaviour can be simple.

Do not build a complicated history screen.

---

UNDO

After completing a task, show a minimal temporary undo action.

Conceptually:

Task completed                         Undo

Undo should:

- Restore the task.
- Return it to the active list.
- Animate it back naturally.

Keep the toast minimal.

---

HAPTICS

If simple to implement with the existing Expo environment, consider subtle haptic feedback at:

- Completion threshold.
- Successful completion.

Do not add excessive haptics.

If haptics require unnecessary dependencies or complexity, defer them.

---

ANIMATION LANGUAGE

Arlo's animation should feel:

- Physical.
- Smooth.
- Calm.
- Responsive.
- Premium.
- Slightly playful.

Use animation to communicate state.

Do not add animation simply because it looks impressive.

Avoid:

- Confetti.
- Particle explosions.
- Excessive bounce.
- Giant checkmarks.
- Long transitions.
- Excessive blur.
- Excessive glow.

---

DEPENDENCIES

Keep dependencies minimal.

Do not install:

- UI frameworks.
- Component libraries.
- Large state-management systems.
- Backend SDKs.
- Database libraries.
- Authentication systems.

An animation library may be installed if it is genuinely the best solution for the gesture-driven interaction.

Prefer established React Native / Expo-compatible animation and gesture tooling.

Before installing a dependency, consider whether the functionality can be achieved cleanly without it.

---

CODE QUALITY

Keep the implementation understandable.

Do not create an elaborate architecture for a prototype.

Use small components where they genuinely improve clarity.

Potential structure:

app/
  index.tsx

components/
  TaskItem
  TaskInput
  CompletedSection
  AIStatus
  TodayHeader

This is only a suggestion.

Do not create dozens of files.

Keep the project easy for a developer working entirely from an Android phone to understand.

---

STATE

Use simple local React state for Milestone 1.

The prototype should support:

- Adding tasks.
- Completing tasks.
- Restoring tasks.
- Expanding completed tasks.
- Mock AI states.

No database is required.

No authentication is required.

No cloud persistence is required.

---

RESPONSIVENESS

The prototype is primarily intended for Android phones.

Design for portrait orientation.

It must work comfortably across common Android screen sizes.

Avoid hard-coded dimensions that only work on one device.

Use safe areas correctly.

Keyboard behaviour should feel natural.

The interface should not become unusable when the keyboard opens.

---

ACCESSIBILITY

Do not sacrifice basic accessibility for visual design.

Ensure:

- Text remains readable.
- Interactive controls have appropriate hit areas.
- Gestures have reasonable alternatives where necessary.
- Motion can eventually be reduced.

A full accessibility system is not required for this milestone, but do not build fundamentally inaccessible interactions.

---

DO NOT CHANGE PRODUCT DECISIONS

Do not add conventional productivity features because they seem useful.

Do not add:

- Priority.
- Tags.
- Projects.
- Folders.
- Categories.
- Statistics.
- Streaks.
- Gamification.
- Calendar.
- Notifications.
- Accounts.
- Social features.
- Chat.
- Dashboard.
- Complex settings.

These are outside Milestone 1.

---

DO NOT IMPLEMENT REAL AI YET

The AI should be visually represented but mocked.

Do not connect Gemini API or another LLM API unless explicitly instructed later.

The purpose of Milestone 1 is to validate the interface and interaction.

AI implementation comes after the core interaction is proven.

---

DEVELOPMENT PROCESS

Before making changes:

1. Read all provided files.
2. Read "PRODUCT.md".
3. Read "DESIGN.md".
4. Read "MILESTONE-1.md".
5. Inspect the current project structure.
6. Identify the smallest implementation necessary.

Then build the prototype.

Do not rewrite the entire project unnecessarily.

Do not introduce unrelated changes.

---

ITERATION

After implementing the first version, evaluate it against this question:

«Does this feel meaningfully better than checking a checkbox?»

If not, focus on improving:

- Swipe physics.
- Fill behaviour.
- Text response.
- Completion bounce.
- Movement into Completed.
- Typography.
- Spacing.

Do not compensate for a weak interaction by adding more features.

---

IMPORTANT PRODUCT PRINCIPLE

Arlo should feel like:

«Somewhere to put what's in your head.»

Not:

«Another productivity system you have to manage.»

The UI should therefore remain extremely quiet.

The intelligence and complexity should exist underneath the surface.

---

FIRST DELIVERABLE

Build the Milestone 1 prototype now.

The first implementation should be fully runnable through Expo Go.

Prioritise a polished single-screen experience over breadth.

The finished prototype should allow the user to experience:

Open Arlo
↓
See tasks
↓
Type a task
↓
Task enters the list
↓
Swipe task
↓
Fill follows finger
↓
Text responds
↓
Release early → spring back
OR
Complete → tactile bounce
↓
Task moves into Completed
↓
Remaining tasks reposition
↓
Undo if required

This is the product we are testing.

Do not build beyond this until this interaction is working and feels excellent.