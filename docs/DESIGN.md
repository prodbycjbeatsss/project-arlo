DESIGN.md

ARLO — DESIGN SYSTEM & EXPERIENCE DIRECTION

Status: Initial Framework
Version: 0.1
Date: 11 August 2026

---

1. Purpose

This document defines how Arlo should look, feel and behave visually.

"PRODUCT.md" defines what Arlo is and why it exists.

"DESIGN.md" defines how that product experience should be expressed through:

- Visual design
- Typography
- Colour
- Layout
- Interaction
- Animation
- Haptics
- Micro-interactions
- Visual hierarchy
- Design consistency

This document should evolve as design decisions are made.

It should not contain arbitrary design decisions simply for the sake of filling sections.

---

2. Design Vision

Arlo should feel like a beautifully designed digital surface rather than a traditional productivity application.

The interface should be:

- Minimal
- Calm
- Modern
- Responsive
- Personal
- Intuitive
- Satisfying
- Slightly playful
- Visually distinctive

The user should understand the interface almost immediately without being taught how to use it.

The desired feeling is:

«"This is ridiculously simple."»

followed by:

«"That felt really nice."»

---

3. Core Design Principle

«Complexity underneath. Simplicity on top.»

The application may contain sophisticated AI, metadata and task logic.

The visual interface should not expose that complexity unnecessarily.

A task should be able to contain significant information while remaining visually simple.

---

4. Design Principles

4.1 Minimalism

Every visible element must justify its existence.

If removing an element does not harm the experience, consider removing it.

---

4.2 Hierarchy

The user's tasks are the primary visual content.

Everything else should support them.

Hierarchy should generally be:

1. Task
2. Useful metadata
3. Secondary controls
4. System information

---

4.3 Progressive Disclosure

Do not show everything at once.

Information should appear when it becomes useful.

For example:

The home screen may show:

«Finish video
Friday»

Opening the task can reveal:

- Time
- Notes
- Subtasks
- Reminder
- Other metadata

---

4.4 Interaction Over Configuration

Prefer letting users do something over asking them to configure something.

Example:

Instead of a large "Create Task" form:

«What's on your mind?»

The user writes naturally.

---

4.5 Motion With Purpose

Animation should communicate:

- State
- Cause and effect
- Spatial relationships
- Completion
- Progression

Animation should never exist purely because it looks impressive.

---

4.6 Immediate Feedback

Every meaningful interaction should receive an immediate response.

The user should never wonder:

«"Did that work?"»

---

4.7 Calm Over Urgency

Arlo should not constantly demand attention.

Avoid unnecessary:

- Alerts
- Badges
- Red indicators
- Notifications
- Pop-ups
- Celebrations

The interface should create a sense of control rather than pressure.

---

5. Arlo's Visual Personality

Arlo's visual personality should reflect its brand personality.

Arlo should feel:

Quietly intelligent

The interface is clever without showing off.

Warm

It should feel approachable rather than clinical.

Precise

Interactions should feel deliberate and polished.

Playful

Small moments of motion and feedback can provide personality.

Confident

The interface should not constantly explain itself.

Premium

The quality should come from restraint and attention to detail rather than decoration.

---

6. Visual Inspiration

This section will contain visual references collected during the design research phase.

References may include:

- Mobile applications
- Websites
- Typography
- Animation
- Games
- Operating systems
- Interfaces
- Editorial design
- Motion design
- Physical products
- Other sources of interaction inspiration

We should analyse why a reference works rather than simply copying its appearance.

For every significant reference, ask:

- What do we like?
- Why does it work?
- Could the principle work in Arlo?
- What should we avoid copying?

---

7. Inspiration Categories

We should specifically collect inspiration for:

Home screen

How minimal can the main screen become?

Typography

How can typography provide personality without visual clutter?

Task interaction

How can a task feel physical?

Completion

How can completing something feel satisfying?

Input

How can text entry feel effortless?

AI clarification

How can Arlo ask questions without feeling like a chatbot?

Navigation

How can multiple pages exist without turning the app into a traditional dashboard?

Motion

How can animation create personality?

Themes

How can light and dark modes feel like Arlo rather than generic system themes?

---

8. Colour System

8.1 Initial Direction

Light Mode

Surface: Beige / Cream

Text: White

Accent: Sky Blue

The exact colours remain open until visual exploration.

The light theme should feel warm and distinctive.

---

Dark Mode

Surface: Dark Navy

Accent: Sky Blue

The dark theme should feel deep and calm rather than pure black.

---

8.2 User Themes

Future versions should allow users to customise their appearance.

Potential options:

- Light mode
- Dark mode
- Accent colour
- Surface colour
- Curated themes

V1 should remain intentionally limited.

---

9. Typography

Typography is a major part of Arlo's visual identity.

We should deliberately explore alternatives rather than automatically using common AI recommendations such as:

- Manrope
- Inter

The chosen typeface should have:

- Excellent readability
- Distinctive personality
- Strong large text
- Strong small text
- Good numerals
- Good punctuation
- Excellent mobile rendering
- Good performance
- Strong light/dark appearance

---

9.1 Future Font Selection

A future version may allow users to select from a curated collection of fonts.

This should not become an unrestricted font marketplace.

The goal is:

«Personalisation without losing Arlo's visual identity.»

---

9.2 Typography Questions

Still to determine:

- Primary font
- Task size
- Task weight
- Metadata size
- Input size
- Page title size
- Settings typography
- Line height
- Letter spacing
- Font variation

---

10. Layout & Spacing

The interface should make generous use of negative space.

The design should avoid:

- Dense grids
- Excessive cards
- Tight spacing
- Unnecessary containers
- Heavy borders

Spacing should help create the feeling of:

«Mental space.»

Exact spacing values remain open until the visual design phase.

---

11. Home Screen

The home screen is the most important screen in Arlo.

Conceptually:

                         ⚙

Today

Finish video
Friday

Go shopping        ?

Clean living room

Call John
4:00 PM


────────────────────────

What's on your mind?

This is only a conceptual structure.

The actual design is undecided.

---

11.1 Home Screen Requirements

The home screen should provide:

- Active tasks
- Natural-language input
- Minimal settings access

Potential future elements:

- Completed counter
- Page navigation
- Current date
- Page title

These should only be included if they improve the experience.

---

12. Task Design

Tasks should be visually simple.

Example:

«Finish video
Friday»

The task title should dominate.

Metadata should remain secondary.

Potential metadata includes:

- Date
- Time
- Reminder
- Location
- Items
- Recurrence

The exact treatment remains open.

---

13. AI Clarification Indicator

Arlo should have a subtle visual language for situations where it wants clarification.

Example:

«Go shopping "?"»

The indicator should:

- Be noticeable
- Not be distracting
- Not look like an error
- Not feel like a warning
- Clearly suggest interaction

The final visual treatment is undecided.

Potential directions:

- Question mark
- Dot
- Small accent indicator
- Subtle animation
- Underline
- Other interaction discovered during design

---

14. AI Clarification Interaction

The clarification interaction should feel like an extension of the task rather than a separate chatbot.

Example:

Go shopping        ?

User opens it.

What do you need to buy?

User replies:

Oranges, toilet roll, chicken

The task returns to its minimal representation:

Go shopping

The additional information remains inside the task.

---

15. Task Detail View

The detail view should use progressive disclosure.

Example:

Finish video

Friday
8:30 PM

Notes

Finish the final edit, thumbnail
and upload.

Subtasks

○ Final edit
○ Thumbnail
○ Upload

This is only an example.

The final information architecture remains open.

The detail view should feel like revealing depth, not navigating into a completely different application.

---

16. Text Input

The input should feel like writing rather than filling out a task form.

Potential placeholder:

«What's on your mind?»

Other possibilities should be explored during design.

The input should:

- Be immediately accessible
- Require minimal interaction
- Support natural language
- Feel integrated into the screen
- Avoid looking like a traditional form

---

17. Task Creation Animation

When a task is submitted, it should enter the list naturally.

Potential behaviours:

- Fade in
- Slide into position
- Expand from the input
- Morph from entered text into the task
- Combination of movement and opacity

The exact behaviour should be prototyped.

The animation should communicate:

«Your thought has become something actionable.»

---

18. Completion Interaction

The completion interaction is deliberately undecided.

Potential directions:

- Swipe
- Tap
- Drag
- Hold
- Flick
- Directional gesture
- Checkbox
- Custom interaction

We should prototype several options.

The final interaction should feel:

- Fast
- Physical
- Obvious
- Satisfying
- Reversible where appropriate

---

19. Completion Animation

The current preferred concept:

«Completed tasks gradually fade away rather than instantly disappearing.»

Possible sequence:

1. User initiates completion.
2. Task responds to the gesture.
3. Task moves slightly.
4. Text becomes progressively transparent.
5. Task contracts or recedes.
6. Task disappears.
7. Remaining tasks reposition smoothly.
8. Completion feedback appears.

The final timing and motion curves remain open.

---

20. Completed Task Counter

The counter should provide acknowledgement without becoming gamification.

Potential:

«1 done»

«2 done»

Eventually:

«All clear.»

The counter should be visually subordinate to the task list.

It should feel like a small moment of acknowledgement.

---

21. Completed Task Recovery

Completed tasks should leave the active interface but remain recoverable.

Potential interaction:

- Swipe
- Pull
- Gesture
- Completed state
- Settings option

The final mechanism remains open.

The design goal is:

«Completed work creates visual space without becoming inaccessible.»

---

22. Empty State

The empty state should be intentionally simple.

The goal is not to fill the empty screen with motivational content.

Potential direction:

All clear.

What's on your mind?

Alternative versions should be explored.

The empty state should make the user feel:

- Calm
- Finished
- Unburdened

---

23. Dark Mode

Dark Mode should use:

Dark navy surface + sky-blue accent

The design should avoid simply inverting Light Mode.

Dark Mode should be deliberately designed for:

- Contrast
- Depth
- Readability
- Reduced visual fatigue
- Accent visibility

---

24. Light Mode

Light Mode should use:

Beige/cream surface + white text + sky-blue accent

This is intentionally unconventional.

We should explore how to maintain sufficient contrast while keeping the desired warm visual identity.

The final colours should be tested rather than assumed.

---

25. Settings

Settings should remain deliberately small.

Potential sections:

Appearance

- Light / Dark
- Accent colour
- Theme

Typography

- Font selection, future

Behaviour

- Completion behaviour
- Completed task visibility
- Haptics
- Sound

AI

Potential future controls.

Settings should never become a second productivity dashboard.

---

26. Pages & Navigation

Pages are a future expansion of the original OnePage concept.

Potential pages:

- Today
- Shopping
- Ideas
- Notes
- Projects
- Other specialised lists

Navigation could use:

- Sidebar
- Drawer
- Gesture
- Minimal page switcher

The navigation system should not dominate the primary experience.

---

27. Animation Language

Arlo's motion should feel:

- Soft
- Physical
- Responsive
- Fast
- Natural
- Intentional
- Satisfying

Avoid:

- Excessive bouncing
- Long transitions
- Gratuitous particles
- Constant movement
- Overly dramatic effects

Motion should make Arlo feel alive without becoming distracting.

---

28. Haptics

Haptic feedback should be considered part of the interaction design.

Potential moments:

- Task creation
- Completion threshold
- Successful completion
- AI clarification response
- Page transition

Haptics should remain subtle.

They should reinforce physicality rather than become noise.

---

29. Sound

Sound is optional and should be approached carefully.

Potential uses:

- Completion
- Task creation
- Important interaction feedback

The default experience should work perfectly without sound.

Sound should never be required to understand the interface.

---

30. Accessibility

Minimalism must not come at the expense of usability.

Design should consider:

- Text contrast
- Font scaling
- Touch target sizes
- Reduced motion
- Colour independence
- Screen readers
- Haptic alternatives
- Gesture alternatives

Important interactions should not depend exclusively on a single gesture.

---

31. Design Tokens

Once the visual direction has been established, Arlo should have a central design-token system.

Potential token categories:

- Colours
- Typography
- Font sizes
- Font weights
- Spacing
- Radii
- Shadows
- Motion durations
- Motion curves
- Opacity
- Haptic intensity

Tokens should be created after the visual direction is established rather than inventing values prematurely.

---

32. Design Research Method

When collecting inspiration, do not simply save screenshots because they look good.

For each useful reference, identify:

What?

What element are we interested in?

Why?

Why does it work?

Principle

What design principle could Arlo learn from it?

Application

How could we adapt that principle to Arlo?

Difference

How can Arlo make it its own?

This prevents the product becoming a collection of copied interfaces.

---

33. Design Decisions

This section records decisions that become locked.

Example:

«Decision: Arlo uses a dark navy background in Dark Mode.

Reason: Creates a calmer and more distinctive alternative to pure black.

Date: TBD»

Decisions should only be marked as final once we are confident.

---

34. Open Design Questions

The following remain intentionally unresolved.

Home

- Exact layout
- Task spacing
- Typography
- Input placement
- Date treatment
- Settings placement
- Empty state

Tasks

- Typography
- Metadata styling
- Interaction states
- Long-task behaviour

Completion

- Gesture
- Direction
- Animation
- Duration
- Haptics
- Recovery

AI

- Clarification indicator
- Question presentation
- Question animation
- Input behaviour

Navigation

- Whether Pages are required for V1
- Sidebar vs gesture
- Page transition

Typography

- Initial font
- Font hierarchy
- Future font selection system

Colour

- Exact cream
- Exact navy
- Exact sky blue
- Supporting colours
- Contrast

These should be resolved through design exploration and prototyping.

---

35. Design Rule

Above everything else:

«Arlo should feel simpler than it actually is.»

The user should never need to understand the complexity underneath the product.

They should simply be able to:

«Write → Do → Clear.»

---

36. Current Design Status

At this stage:

Confirmed

- Arlo name
- Minimal visual philosophy
- Beige/cream Light Mode direction
- Dark navy Dark Mode direction
- Sky-blue accent
- Future user theme customisation
- Typography should be distinctive rather than defaulting to Manrope/Inter
- Future curated font selection
- Minimal home screen
- Natural-language input
- Subtle AI clarification
- Gesture-oriented completion exploration
- Fade/disappear completion concept
- Purposeful animation
- Progressive disclosure

Open

- Exact colours
- Exact typography
- Exact layout
- Completion gesture
- Animation timings
- Haptics
- Input design
- AI indicator
- Navigation
- Page architecture
- Detail view
- Empty state

The next stage is visual research and exploration, not implementation.

---

37. Design Research & Inspiration

This section records visual and interaction references discovered during the design exploration phase.

The purpose is not to copy existing products.

Each reference should be broken down into individual design ideas that may inform Arlo's own visual language.

A reference can influence:

- Typography
- Colour
- Layout
- Motion
- Interaction
- Buttons
- Inputs
- Navigation
- Haptics
- Transitions
- Micro-interactions

A reference should never automatically become an Arlo design decision.

The process is:

Reference → Observation → Principle → Arlo application → Decision

---

Reference #1 — Sesame

Source: Mobbin — Sesame iOS

Link:
https://mobbin.com/apps/sesame-ios-08054121-29ee-4708-86b4-6c3cdfb79478/a192b5b3-dd88-4296-abc8-8e34640379a6/screens

Elements of Interest

Background / Surface

The background colour has more personality than a generic white interface.

Potential Arlo lesson:

The surface itself can contribute significantly to the product's identity.

This supports the current Arlo direction of using:

- Beige / cream for Light Mode
- Dark navy for Dark Mode

Exact colours remain undecided.

---

Kinetic Typography

The onboarding uses a smooth, subtle wavy text animation.

Characteristics we like:

- Text fades in smoothly.
- The text has gentle wave-like movement.
- Movement is subtle rather than exaggerated.
- The animation gives otherwise static typography personality.
- The animation feels polished rather than decorative.
- The effect creates a sense of life without overwhelming the interface.

Potential Arlo Applications

This motion language could potentially be used for:

- Onboarding
- Tasks entering the list
- AI clarification questions
- AI transforming raw input into a structured task
- Empty states
- Page transitions
- Other carefully selected text interactions

Example:

User enters:

«finish video by friday»

Arlo could potentially transform the raw input into:

«Finish video
Friday»

using a related fade/wave motion.

An AI clarification could potentially appear using the same visual language:

«Go shopping
?»

↓

«What do you need to buy?»

The goal would be to make AI interaction feel like a natural part of Arlo's interface rather than a separate chatbot experience.

---

Buttons

The rounded/pill-shaped button treatment is visually appealing.

Elements to investigate further:

- Shape
- Radius
- Size
- Internal spacing
- Typography
- Press state
- Animation
- Colour treatment

Potential Arlo lesson:

Buttons can feel like physical objects within an otherwise minimal interface.

This should be explored rather than copied directly.

---

Current Takeaway

The most important lesson from this reference is not a specific colour, button or animation.

It is:

«A minimal interface can have a strong personality when a small number of elements are designed exceptionally well.»

Potential Arlo design primitives include:

Typography + Surface + Motion + Input + Accent + Interaction

Rather than relying on:

Cards + Icons + Dashboards + Badges + Menus + Decorative graphics

---

Status

Reference only — not an Arlo design decision.

The observations above should remain open until additional references are collected.

Future references should be compared against this one to identify recurring patterns and opportunities for Arlo's own design language.

----

Reference #2 — Apple Notes

Source: Apple Notes — iOS

Elements of Interest

Extreme Minimalism

Apple Notes demonstrates how little interface is required when the content itself is the focus.

The user can open the application and immediately interact with their content without navigating through a dashboard or complicated productivity system.

Potential Arlo lesson:

«The interface should get out of the user's way.»

Arlo should avoid adding interface elements simply because traditional task applications contain them.

---

Content-First Design

The content is the primary visual element.

Controls and secondary functionality remain visually subordinate.

Potential Arlo lesson:

«Tasks should be the interface, not cards containing tasks.»

This supports the idea that Arlo should investigate whether it can avoid traditional:

- Cards
- Containers
- Borders
- Heavy dividers
- Decorative UI

---

Typography & Hierarchy

Apple Notes relies heavily on typography, spacing and hierarchy rather than decorative components to organise information.

This is particularly relevant to Arlo because the task itself should remain visually dominant.

Potential Arlo lesson:

Typography could become one of Arlo's primary design tools rather than relying on boxes and visual containers.

---

Whitespace

Apple Notes makes extensive use of empty space.

The empty space does not feel unfinished. It creates breathing room around the content.

Potential Arlo lesson:

«Empty space should feel intentional.»

This aligns strongly with Arlo's underlying goal of reducing visible and mental clutter.

---

Writing-First Interaction

Notes makes writing feel natural rather than like filling in a structured form.

This is highly relevant to Arlo's natural-language task capture.

The user should be able to open Arlo and immediately type:

«finish video by Friday»

without first deciding:

- Task title
- Due date
- Priority
- Category
- Reminder
- Project

Arlo should interpret the input afterwards.

---

Potential Arlo Direction

Apple Notes provides an important foundation for the Arlo visual philosophy:

Minimal interface + content-first hierarchy + typography + whitespace

However, Arlo should not simply become a task-management version of Apple Notes.

The opportunity is to combine this level of simplicity with Arlo's own interaction language:

Minimal surface

+ 

Natural-language understanding

+ 

Kinetic typography

+ 

Subtle AI interaction

+ 

Satisfying task completion

+ 

Tasks physically leaving the interface

The goal is:

«Apple Notes-level simplicity with an interaction model designed specifically around getting things done.»

---

Important Distinction

Apple Notes is primarily a content container.

Arlo should be an active task surface.

Things should appear, respond, transform, move and eventually disappear.

This distinction should remain important as the design develops.

---

Status

Reference only — not an Arlo design decision.

----
Reference #3 — Amy Food Journal

Source: Amy Food Journal

Website: https://www.amyfoodjournal.com/

Developer documentation: https://connect.amyfoodjournal.com/docs

Why This Reference Matters

Amy is one of the strongest references for Arlo because it demonstrates how a sophisticated AI-powered experience can remain extremely minimal.

The user provides natural-language input without completing a traditional form. The system handles the complexity underneath while the interface progressively communicates what it is doing.

This closely aligns with Arlo's core philosophy:

«Write naturally. Let the app figure out the rest.»

---

Elements of Interest

Surface

The interface uses an off-white surface with a subtle paper-like quality.

Characteristics we like:

- Off-white rather than pure white.
- Soft and easy on the eyes.
- Slightly warm / paper-like appearance.
- Consistent across the main experience.
- Doesn't feel overly bright.
- Gives the product a calm and premium personality.

Potential Arlo lesson:

The background should have enough personality to establish the product's visual identity without competing with the content.

This supports the current Arlo Light Mode direction:

Beige / Cream surface + Sky Blue accent

Exact colours remain undecided.

---

Typography

The typography is highly minimal and professional.

Characteristics we like:

- Clean modern typeface.
- Stronger / bolder primary text.
- Muted grey secondary information.
- Blue accent information.
- Restrained letter spacing.
- Comfortable line spacing.
- Larger spacing between separate entries than between lines belonging to the same entry.

The hierarchy allows the interface to remain structured without requiring cards or containers.

Potential Arlo lesson:

«Typography and spacing should provide the structure instead of UI components.»

This is particularly relevant to Arlo's task list.

A task could potentially look like:

Finish video                         Friday


Go shopping                             ?


Clean living room

without requiring a card around each task.

---

Content Hierarchy

Amy separates primary content from contextual intelligence.

The main content sits towards the left while AI processing, metadata and results can occupy the right side.

This creates a quiet secondary information layer without requiring a sidebar.

Potential Arlo application:

The right side of a task could potentially contain:

- Dates
- Times
- AI state
- Clarification indicators
- Processing information
- Other contextual metadata

For example:

Finish video                         Friday

Go shopping                             ?

Call John                            4:00 PM

The exact implementation remains undecided.

---

Natural-Language Input

One of the strongest aspects of Amy is the lack of a conventional data-entry workflow.

The user simply writes naturally.

There is no requirement to populate separate fields before submitting the information.

This supports Arlo's core interaction model:

«Think → type → stop»

rather than:

«Create task → enter title → choose date → choose time → select priority → save»

Potential Arlo lesson:

The input itself should feel like writing rather than completing a form.

This strongly supports the Apple Notes reference.

---

AI Processing Animation

Amy provides an especially useful reference for how AI processing can be communicated without overwhelming the user.

The observed sequence is approximately:

User starts typing

↓

AI indicator appears as three animated dots with a subtle wave/shimmer.

↓

User stops typing

↓

"thinking"

appears with a shimmer animation.

↓

"searching"

appears using a related transition.

↓

"thinking"

changes through a rolling / transforming animation.

↓

"reading"

appears.

↓

The state transforms into something such as:

"7 sources"

with a shimmer effect.

↓

Small circular source indicators appear underneath.

↓

The final result appears.

For example:

"750 cal"

which also enters with a subtle shimmer.

---

Potential Arlo Application

This provides a strong model for Arlo's AI states.

Rather than presenting:

«AI is thinking...»

as a large assistant interface, Arlo could communicate intelligence through small contextual changes.

For example:

Go shopping                    thinking...

↓

Go shopping                    searching...

↓

Go shopping                    ?

↓

Go shopping

with the clarification becoming available.

Or:

Finish video by Friday

could quietly resolve into:

Finish video                    Friday

The user remains focused on their task rather than watching an AI conversation.

---

AI Should Feel Alive, Not Loud

The AI processing animation is deliberately restrained.

Characteristics we want to explore:

- Muted colours.
- Small visual footprint.
- Shimmer.
- Subtle movement.
- State transformations.
- Progressive disclosure.
- No large chatbot panel.
- No excessive AI branding.

The interface should communicate:

«Something intelligent is happening.»

without communicating:

«LOOK — AI IS HAPPENING.»

This is highly compatible with Arlo's philosophy of making AI invisible.

---

AI Source / Context Animation

Amy's use of small circular source indicators is particularly interesting.

The sources appear progressively as the system processes information.

This creates a sense that the AI is actively doing something without requiring a conventional loading spinner.

Potential Arlo lesson:

Arlo could potentially use similarly small animated objects to communicate:

- AI interpretation.
- Extracted dates.
- Context.
- Sources.
- Calendar information.
- Locations.
- Other underlying metadata.

The exact visual treatment should be discovered through prototyping.

---

Main Screen Philosophy

Amy demonstrates a highly focused primary experience.

There is essentially one main screen.

Secondary functionality is stored behind additional interfaces rather than constantly occupying the primary surface.

This strongly supports the current Arlo direction.

Potential Arlo main screen:

- Current day's tasks.
- Natural-language writing area.
- Small "Today" control.
- Settings icon.
- Minimal supporting controls.

Nothing else should compete with the task list.

---

Navigation / Secondary Interfaces

Amy demonstrates the principle of keeping secondary functionality out of the main interface.

Additional functionality can exist behind slide-in cards or secondary surfaces.

Potential Arlo lesson:

«Don't add navigation simply because the app has multiple functions.»

The main screen should remain the primary experience.

If Arlo eventually contains:

- Multiple lists.
- Notes.
- Shopping lists.
- AI-assisted lists.
- Other page types.

they should be explored through secondary navigation rather than allowing the main screen to become a dashboard.

---

Day-Based Organisation

Amy uses a small "Today" control at the top of the screen.

This is a useful reference for Arlo's day-based task model.

Potential structure:

                         Today

Finish video
Friday

Go shopping
?

Clean living room

Each day can have its own list.

Future rollover behaviour could allow unfinished tasks to move forward automatically.

This is currently a product/behaviour question rather than a final design decision.

---

Input Position

Amy demonstrates an interaction where the user can begin typing directly into the main content area rather than first selecting a conventional input field.

This strongly aligns with the Arlo concept.

The input should feel closer to writing a note than filling out a form.

Potentially:

Finish video by Friday|

rather than:

┌─────────────────────────┐
│ What needs doing...?    │
└─────────────────────────┘

The exact input behaviour remains subject to prototyping.

---

Bottom Controls

Amy appears to use a small number of circular controls near the bottom of the interface.

Potential Arlo equivalents could include:

- Keyboard control.
- AI control.
- Microphone / voice input.

These should not automatically be implemented.

Their purpose and necessity should be validated during interaction design.

The underlying principle is:

«Controls should remain secondary to writing.»

---

Product Personality

Based on this reference, the qualities we want Arlo to potentially share are:

- Calm
- Premium
- Playful through animation
- Intelligent
- Human
- Effortless

The interface should not feel childish despite using playful motion.

It should feel sophisticated first, with personality revealed through interaction.

---

Why Amy Feels Easy to Use

The strongest product lesson is not simply that Amy looks minimal.

It is that the user can dump information into the application without first managing the information.

The user does not need to:

- Fill out multiple fields.
- Categorise the information.
- Calculate values manually.
- Decide what metadata matters.
- Organise the information before submitting it.

The application handles the complexity.

This is highly relevant to Arlo.

The user should be able to write:

«"finish video by Friday"»

rather than manually creating a task and assigning a deadline.

The experience should feel like:

«"I told Arlo what I need to do."»

rather than:

«"I created and configured a task."»

---

Potential Arlo Design Principle

Amy reinforces a potentially important Arlo principle:

«Complexity should happen around the user's input, not inside it.»

The user interaction should remain simple while the system becomes increasingly intelligent underneath.

---

Motion Language — Potential Direction

Amy introduces several motion behaviours worth investigating for Arlo:

Wave

Potentially useful for text entering the interface.

Shimmer

Potentially useful for AI processing.

Rolling / transforming text

Potentially useful for AI state changes.

Pop / progressive appearance

Potentially useful for metadata and contextual information.

Fade

Potentially useful for secondary information and completion.

These are motion hypotheses, not final Arlo animation rules.

They should be tested together to determine whether they form a coherent motion language.

---

Relationship to Other References

Amy combines several qualities found independently in our other references.

Apple Notes

Content-first simplicity
Whitespace
Writing-first interaction
Minimal visible UI

+ 

Sesame

Kinetic typography
Subtle animation
Personality through motion
Strong visual primitives

+ 

Amy

Natural-language AI
Contextual intelligence
Progressive AI feedback
Minimal AI interface
Animated processing states

This combination currently represents a strong potential foundation for Arlo's visual and interaction direction.

---

Important Distinction

Amy should not become the visual template for Arlo.

The goal is not:

«"Make a task-management version of Amy."»

The goal is to extract the underlying principles:

«Amy's natural-language input
→ Arlo's natural-language task capture»

«Amy's contextual AI
→ Arlo's contextual task intelligence»

«Amy's processing states
→ Arlo's subtle AI feedback»

«Amy's source animation
→ Arlo's contextual metadata / intelligence layer»

«Amy's minimal interface
→ Arlo's minimal task surface»

The final combination should develop into an independent Arlo design language.

---

Status

Strong reference — principles identified, implementation not decided.

----

AI Shimmer — Implementation Inspiration

A potential implementation for Arlo's AI processing states has been identified through the 21st.dev Shining Text component.

Source: 21st.dev — Shining Text

The component uses an animated gradient that continuously moves across the text, creating a subtle shimmer effect.

The effect is particularly relevant to Arlo because it provides a way to communicate that the AI is actively processing information without introducing a traditional loading spinner, progress bar or chatbot interface.

What the Effect Does

The text itself remains stationary while a light gradient travels across the letters.

Conceptually:

thinking...
   ─────→

The moving highlight creates the impression that the text is active or being processed.

The effect is:

- Subtle.
- Continuous.
- Minimal.
- Easy to understand.
- Visually engaging without dominating the interface.

Potential Arlo Use

The shimmer could become a recurring visual language for AI processing.

For example:

thinking...

↓

searching...

↓

understanding...

↓

reading...

↓

7 sources

The text could change between states while the shimmer remains consistent.

This would create a single visual language for the AI rather than requiring a different loading animation for every state.

Why It Fits Arlo

The effect supports an important Arlo principle:

«The AI should feel alive without becoming the interface.»

Instead of displaying a large AI component or chatbot conversation, Arlo can communicate its activity through a small piece of animated typography.

The user can continue focusing on their task while the AI quietly works alongside it.

Potential Visual Treatment

The current 21st.dev implementation uses a dark-to-light gradient travelling across the text.

For Arlo, the effect should eventually be adapted to the product's own visual system.

Potential direction:

- Muted grey base text.
- Soft sky-blue highlight.
- Subtle shimmer rather than a bright flash.
- Small typography.
- Fast but calm movement.
- No excessive glow.
- No distracting effects.

The exact colours, speed and intensity should be determined during prototyping.

Potential AI Interaction

The shimmer could be used alongside Arlo's contextual AI system.

Example:

Go shopping                         thinking...

The AI processes the task.

Go shopping                         searching...

The AI determines that additional information would be useful.

Go shopping                              ?

The user opens the question:

What do you need to buy?

The AI then returns to the task surface without creating a separate chatbot conversation.

Potential Processing Sequence

A more complex task could potentially follow a sequence such as:

User types:

finish video by friday

↓

thinking...

↓

understanding...

↓

Finish video                         Friday

The animation should make the transformation feel like Arlo is understanding the user's input, rather than simply processing a request.

Implementation Reference

The current reference component is a React component using Motion.

The core implementation:

- Animates "backgroundPosition".
- Uses a moving CSS gradient.
- Clips the gradient to the text.
- Loops continuously.
- Uses a linear animation.
- Takes the displayed text as a prop.

The existing implementation is useful as a prototype starting point, not necessarily as the final Arlo implementation.

The component should eventually be adapted to:

- Arlo's typography.
- Arlo's colour system.
- Arlo's animation timing.
- Arlo's accessibility requirements.
- Arlo's motion language.

Important Design Constraint

The shimmer should communicate activity, not demand attention.

Avoid:

- Bright flashing.
- Large text.
- Excessive glow.
- Fast movement.
- Constant AI indicators everywhere.
- Decorative animation with no functional meaning.

The ideal feeling is:

«"Something is happening."»

rather than:

«"Look at this AI animation."»

Status

Strong implementation inspiration — prototype candidate.

The Shining Text effect should be tested alongside the Sesame-inspired text animation and other future Arlo motion concepts before becoming a permanent part of the design system.

----

Reference #4 — Task Completion Interaction

Source: Reddit — Playful Todo / Swipe Interaction

Status: PRIMARY ANIMATION DIRECTION — THIS IS THE ANIMATION WE WANT TO BUILD

This interaction is the strongest reference discovered so far for Arlo's task-completion experience.

The goal is not to copy the original implementation or visual design. We want to reproduce the underlying interaction concept and adapt it into Arlo's own visual language.

The interaction should become one of the defining characteristics of Arlo.

---

Core Concept

Completing a task should feel like physically moving it out of the user's active workload.

The user does not press a conventional checkbox.

Instead:

«The user swipes across the task.»

The interface responds continuously to the user's finger.

The completion process itself becomes the animation.

---

Desired Interaction

1. Resting State

A task appears normally:

Finish video

The task is clean, bright and visually prominent.

---

2. User Begins Swiping

The user places their finger on the task and begins dragging.

The task should respond immediately to the gesture.

The interaction should feel physical rather than simply detecting that a swipe occurred.

---

3. Fill Follows the Finger

A subtle visual fill travels across the task as the user swipes.

Conceptually:

██████░░░░░░░░░░░░░
Finish video

As the user continues:

████████████░░░░░░
Finish video

The fill should be directly connected to the user's finger position.

It should not simply play as a pre-defined animation after the swipe is detected.

---

4. Text Reacts to the Fill

As the fill travels across the task, the section of text that has been reached should become muted.

Conceptually:

████████████░░░░░░
Finish video

The portion of the text covered by the completed region becomes less prominent.

The important behaviour is that the text reacts continuously to the fill position.

If the user reverses the swipe, the fill retreats and the affected text should return towards its normal appearance.

This creates a tactile relationship between:

Finger → Fill → Text

---

Partial Swipe

If the user releases the task before reaching the completion threshold:

The task should spring back to its original position.

The interaction should include a subtle tactile bounce.

The task should not accidentally complete simply because the user moved it slightly.

The exact activation and completion thresholds should be determined during prototyping.

---

Completion Threshold

Once the user reaches the required completion threshold:

The task should provide a small tactile response.

The reference interaction has a satisfying bounce when the completion state is reached.

Arlo should reproduce this principle.

The completion moment should feel physical and deliberate without becoming exaggerated.

Potential feedback:

- Small spring/bounce.
- Subtle scale or position response.
- Haptic feedback where supported.
- Slight visual emphasis.

No large celebration animation should be used.

---

Moving the Completed Task

The task should NOT simply fade away.

Once completed, the task should physically move downwards into a dedicated completed area.

This is an important Arlo design decision.

The desired sequence is:

Task

↓

Swipe

↓

Fill follows finger

↓

Text responds

↓

Completion threshold

↓

Tactile bounce

↓

Task moves down

↓

Completed

The task should feel as though it has been removed from the user's active workload, rather than deleted.

---

Completed Section

Completed tasks should be stored in a simple collapsed section.

For example:

Today

Finish video

Clean living room


Completed 3

The completed section should remain visually secondary.

Opening it could reveal:

Completed

Go shopping
Call John
Buy batteries

The exact interaction for opening the section is still undecided.

Potential options include:

- Tap.
- Pull.
- Swipe.
- Small expandable control.

The important principle is:

«Completed tasks leave the active list without being lost.»

---

Movement Into Completed

The transition into the completed section should be animated rather than instantaneous.

Potential sequence:

Task reaches completion
        ↓
Small tactile bounce
        ↓
Task becomes slightly muted
        ↓
Task moves downward
        ↓
Task settles into Completed
        ↓
Active tasks smoothly reposition

The movement should use spring-based motion where appropriate.

The remaining tasks should smoothly close the space created by the completed task.

This should make the list feel like a physical collection of objects rather than a static list of rows.

---

Undo

There should always be a simple way to reverse an accidental completion.

The preferred approach is a minimal temporary toast:

Task completed                 Undo

The toast should remain unobtrusive.

Selecting Undo should return the task to its previous position in the active list using a smooth reverse animation.

The completed section should also provide a secondary way to restore a task if the undo window has expired.

---

Why This Interaction Fits Arlo

This interaction directly supports the product philosophy:

«Capture → Do → Clear → Feel lighter»

The task doesn't simply change from:

"☐"

to:

"☑"

Instead, the user physically removes it from their active workload.

The interface communicates:

«This is no longer something you need to think about.»

The completed task still exists, but it has been moved somewhere that doesn't demand the user's attention.

---

No Traditional Checkbox

The primary completion interaction should not use a conventional checkbox.

A checkbox may potentially exist as an accessibility or alternative interaction later, but the core Arlo interaction should be the swipe.

The swipe should become part of Arlo's identity.

---

No Gamification

The completion interaction should not use:

- Confetti.
- XP.
- Points.
- Coins.
- Large celebrations.
- Streak mechanics.
- Achievement pop-ups.
- Excessive sounds.

The interaction itself should provide the satisfaction.

The desired feeling is:

«"That's satisfying."»

not:

«"The app is congratulating me."»

---

Motion Principles

The completion interaction should feel:

- Physical.
- Responsive.
- Smooth.
- Tactile.
- Calm.
- Playful.
- Precise.

The animation should respond to the user's input rather than feeling like a predetermined animation sequence.

Important Motion Relationship

The interaction should maintain a clear relationship between:

Finger position

↓

Task movement

↓

Fill position

↓

Text state

↓

Completion state

This relationship is more important than the exact visual effect.

---

Prototype Variables

The following should remain adjustable during implementation:

- Swipe activation distance.
- Completion threshold.
- Maximum task displacement.
- Fill speed.
- Fill opacity.
- Text muting amount.
- Spring stiffness.
- Spring damping.
- Completion bounce intensity.
- Completion movement distance.
- Completed-section position.
- Undo duration.
- Haptic intensity.
- Animation duration.

These should be tuned by actually using the interaction rather than decided entirely from theory.

---

Relationship to Arlo's Other Motion References

This completion interaction complements the existing motion direction.

Sesame

→ Wavy text / expressive typography.

Amy

→ AI processing and contextual intelligence.

21st.dev Shining Text

→ AI shimmer implementation candidate.

Arlo Completion Interaction

→ Physical task completion and movement.

This creates the beginning of a coherent motion language:

Interaction| Motion
AI working| Shimmer
Text entering| Wave / fade
AI state changing| Text transformation
Task being completed| Gesture-driven fill
Completion reached| Tactile bounce
Task completed| Physical movement into Completed
Undo| Reverse movement

---

Definitive Design Decision

This is the completion animation we want to build.

The Reddit reference should therefore be treated as the primary animation reference for Arlo's task completion interaction.

We should reproduce the interaction principles rather than directly copying its visual implementation.

The final Arlo version should use:

Swipe → fill follows finger → text responds to fill → tactile completion bounce → task moves into Completed → active list clears itself.

The exact physics, colours, typography and implementation will be determined during prototyping.

Status: DECIDED — PRIMARY COMPLETION INTERACTION.