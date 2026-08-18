# Arlo Design System

**Version:** 1.2  
**Status:** Active  
**Product:** Arlo  
**Platform:** Mobile  
**Theme:** Light-first, dark-mode ready

---

## 1. Purpose

The Arlo Design System defines the visual, interaction and accessibility principles used throughout the Arlo app.

It exists to ensure that Arlo remains consistent as the product grows and as development is carried out with AI-assisted tooling.

This document defines **how Arlo should look, feel and behave**.

Exact reusable values are defined separately in:

`docs/DESIGN_TOKENS.md`

The two documents should be considered together:

- `DESIGN_SYSTEM.md` defines principles, rules and usage.
- `DESIGN_TOKENS.md` defines the exact reusable values.

Neither document should be treated as a replacement for the other.

---

# 2. Core Product Principle

Arlo should feel:

> **Simple on the surface. Intelligent underneath.**

The interface should never make the user work harder simply because Arlo is capable of doing more.

Arlo is an intelligent task app, not an AI chatbot disguised as a task app.

The intelligence should generally feel:

- quiet
- contextual
- useful
- responsive
- intentional

The interface should generally feel:

- calm
- minimal
- warm
- premium
- lightweight
- tactile

Arlo should feel **obvious rather than impressive**.

---

# 3. Visual Philosophy

Arlo prioritises **clarity over decoration**.

Every visual element should have a purpose.

Use the following hierarchy before introducing additional visual treatment:

1. Typography
2. Spacing
3. Colour hierarchy
4. Surface hierarchy
5. Motion
6. Borders
7. Shadows
8. Decorative elements

A component should not receive a border, shadow, gradient or decorative treatment simply because the design system makes those options available.

Having a token does not mean it needs to be used.

Arlo should never feel visually busy simply because many design tokens exist.

---

# 4. The Arlo Canvas

## 4.1 Immutable V1 Background

The primary application canvas is permanently:

`#F6F3ED`

This is a **hard product-level constraint for V1**.

The main Arlo background must not be changed to:

- white
- grey
- black
- another cream
- another beige
- a gradient
- a user-selected colour

unless this decision is explicitly changed at product level.

Dark mode does not override this rule for the current V1 implementation.

---

## 4.2 Background Philosophy

The warm cream canvas is a defining part of the Arlo identity.

It should provide a continuous visual foundation rather than being divided into numerous coloured sections.

Avoid unnecessary background changes between areas of the application.

The canvas should remain visually dominant.

---

# 5. Surface Hierarchy

Arlo uses a restrained surface hierarchy.

The preferred conceptual hierarchy is:

**Canvas → subtle surface → raised surface**

Surface differences should communicate:

- containment
- hierarchy
- interaction
- focus

They should not exist purely for decoration.

Surfaces should remain visually compatible with the warm cream canvas.

Avoid turning the application into a collection of cards.

A surface should only be introduced when it provides a meaningful structural or interaction benefit.

The exact surface values are defined in `DESIGN_TOKENS.md`.

---

# 6. Colour Architecture

Arlo uses a three-layer colour architecture:

### Primitive colours

Raw colour scales such as:

- brand
- secondary
- neutral
- success
- error
- warning
- info

### Semantic colours

Meaning-based roles such as:

- background
- content
- border
- primary
- accent
- success
- error
- warning
- info

### Component usage

The semantic role is applied to a specific interface element.

For example:

`primary action → semantic primary → brand scale`

Components should generally consume semantic tokens rather than directly referencing primitive values.

This structure is intentional and should remain compatible with future themes, including dark mode.

---

# 7. Primary / Brand Colour

Arlo's primary brand colour is:

`#5B8E99`

It is the central colour of the Arlo visual identity.

It may be used for:

- primary actions
- active states
- focus states
- selected states
- AI activity
- important interactive elements
- brand expression
- links where appropriate

The primary scale should be used according to semantic purpose.

Do not choose arbitrary shades from the scale simply because they look visually appealing.

---

# 8. Accent Colour

Arlo's Accent currently uses the same underlying colour as Primary.

This is intentional.

```text
Primary = #5B8E99
Accent  = #5B8E99
```

There is no requirement for Primary and Accent to be different colours.

Accent exists as a **semantic role**, not necessarily as a separate hue.

This allows the design system to distinguish between:

- the colour itself
- what that colour is being used for

If a future design requirement demonstrates that Accent genuinely needs to diverge from Primary, the semantic layer can be changed without restructuring the primitive colour system.

Until then, they should remain aligned.

---

# 9. Secondary Colour

The current Arlo colour system uses a warm neutral/taupe direction for Secondary rather than introducing a separate lavender hue.

The current secondary anchor is:

`#7E7B74`

Secondary should remain subordinate to the primary teal.

It may be used for:

- secondary emphasis
- supporting actions
- secondary visual grouping
- contextual UI
- supporting product accents

Secondary should not become a second primary colour.

> **Important:** The previous design-system definition of Secondary as "soft lavender" is superseded by the current token system. We should not introduce a new lavender colour without a deliberate product-level decision.

---

# 10. Tertiary Colour

Tertiary is represented by the warm neutral family and is intentionally a low-priority role.

The current tertiary anchor is:

`#A39F97`

Potential uses include:

- supporting categorisation
- contextual information
- tertiary labels
- low-emphasis visual grouping
- future feature-specific states

Tertiary should not be introduced merely because a tertiary token exists.

If a design can be achieved using primary, secondary and neutral systems, prefer those existing systems.

---

# 11. Semantic Colours

Arlo supports the following semantic colour roles:

- success
- error
- warning
- info

Semantic colours communicate **meaning**, not decoration.

They should only be used when the corresponding semantic meaning exists.

---

## 11.1 Pastel Constraint

**Red, yellow and green must always remain soft and pastel in normal Arlo UI.**

This is a hard visual-language constraint.

Avoid:

- saturated red
- neon green
- bright yellow
- aggressive warning colours
- high-intensity semantic fills

Semantic colours should remain compatible with Arlo's calm, warm visual language.

Semantic colour should communicate importance without creating unnecessary visual anxiety.

The token system therefore provides:

- soft semantic surfaces
- soft semantic colours
- stronger semantic colours where text/icon contrast requires them

---

## 11.2 Success

Success is used for:

- successful actions
- completion feedback
- positive confirmation
- successful system operations

Success should feel reassuring rather than celebratory unless the interaction specifically calls for stronger feedback.

---

## 11.3 Error

Error is used for:

- invalid input
- failed actions
- destructive consequences
- system errors

Errors should be clear without feeling aggressive.

---

## 11.4 Warning

Warning is used for:

- potentially important conditions
- incomplete information
- actions requiring attention

Warnings should not be used simply to attract attention.

---

## 11.5 Information

Info is used for:

- explanatory information
- neutral system messages
- contextual guidance

Info should not compete with primary product actions.

---

# 12. Neutral Colours

The neutral system provides supporting values for:

- text
- surfaces
- borders
- icons
- disabled states
- supporting UI

Neutral colours should maintain a warm relationship with the Arlo canvas.

Avoid introducing arbitrary greys into individual components.

If a neutral token exists for the required role, use it.

The neutral system should support the overall hierarchy without visually competing with the brand colours.

---

# 13. Text Hierarchy

Arlo uses a restrained text hierarchy.

The primary hierarchy consists of:

1. Primary text
2. Secondary text
3. Tertiary/muted text
4. Disabled text

Hierarchy should primarily be created through:

- colour
- size
- weight
- spacing

Avoid unnecessary:

- uppercase text
- bold labels
- decorative typography
- excessive letter spacing
- multiple competing text styles

The task itself should always receive the strongest appropriate visual priority within the task list.

---

# 14. Typography

The production Arlo typeface is:

**Manrope**

Typography values are defined in:

`docs/DESIGN_TOKENS.md`

The typeface should not be changed without a deliberate design-system decision.

Typography should feel:

- clean
- modern
- readable
- understated

Readability takes priority over visual novelty.

---

# 15. Typography Roles

The token system defines typography by role rather than encouraging arbitrary combinations.

Primary roles include:

- display
- headings
- body text
- labels
- supporting text
- captions

Components should use the closest existing typography role rather than creating one-off font sizes or weights.

If a repeated requirement cannot be represented by the existing typography scale, the token system should be reviewed before introducing a local value.

---

# 16. Typography Principles

## Primary content

Primary task content should be easy to scan and should receive the strongest visual priority.

## Secondary information

Metadata, supporting information and system states should use reduced visual emphasis.

## Placeholder text

Placeholder text should be visually quieter than entered content.

Avoid unnecessary placeholder text when the interface already communicates the intended action.

## Status text

AI states such as:

- thinking
- writing

should remain subtle.

They should not compete visually with the task itself.

---

# 17. Spacing

Arlo uses a controlled spacing system based on a 4px unit.

Exact values are defined in:

`docs/DESIGN_TOKENS.md`

Spacing should communicate:

- grouping
- hierarchy
- separation
- rhythm

Prefer existing spacing tokens over arbitrary pixel values.

Do not introduce one-off spacing values unless there is a genuine and repeated design requirement.

---

# 18. Spacing Philosophy

Arlo should have generous but efficient spacing.

The interface should feel breathable without wasting screen space.

Use whitespace as a structural tool.

The absence of a divider does not mean two elements cannot be visually separated.

When choosing between a divider and additional spacing, prefer spacing when it communicates the relationship clearly.

---

# 19. Border Radius

Arlo uses a restrained radius system.

Exact values are defined in:

`docs/DESIGN_TOKENS.md`

Existing radius tokens should be reused consistently.

Do not introduce new radius values simply to make individual components slightly different.

New radius values should only be introduced when repeated real-world UI requirements demonstrate that the existing scale is insufficient.

---

# 20. Radius Usage

General guidance:

- Small radius → small controls and compact UI
- Medium radius → standard controls and components
- Large radius → larger surfaces
- Full radius → pills, badges and circular UI

Radius should support hierarchy rather than become decoration.

The most appropriate existing radius token should be used before creating a new one.

---

# 21. Borders

Borders should be used **sparingly**.

Arlo should not rely on borders to define every component.

Prefer:

1. spacing
2. typography
3. surface contrast

before adding a border.

Borders may be appropriate for:

- form controls
- input boundaries
- settings controls
- focused controls
- clearly separated system states

Individual task rows should not automatically receive visible borders or divider lines.

---

# 22. Shadows and Elevation

Arlo uses subtle elevation only when it improves usability or hierarchy.

Shadows should be:

- soft
- restrained
- low contrast
- purposeful

Avoid:

- heavy card shadows
- excessive elevation
- multiple competing elevation levels
- shadows on every component

A component should not have a shadow simply because it is technically a card.

---

# 23. Interaction States

Interactive components should communicate state clearly.

Supported states may include:

- default
- hover where platform-appropriate
- pressed
- focused
- active
- disabled
- loading
- success
- error

Mobile interfaces should prioritise states that are meaningful for touch interaction.

State changes should generally be subtle.

Arlo should feel responsive without feeling noisy.

---

# 24. Pressed States

Pressed states should provide immediate tactile confirmation.

They may use:

- subtle opacity changes
- surface changes
- restrained scale changes
- controlled motion

Avoid dramatic transformations.

The user should feel that the interface responded immediately to their action.

---

# 25. Focus States

Focus must be visually identifiable and accessible.

The primary brand colour may be used for focus indication.

Focus treatment should remain visually consistent with Arlo's restrained aesthetic.

Focus should never depend solely on a subtle colour difference that may be difficult to perceive.

---

# 26. Disabled States

Disabled controls should communicate that they cannot currently be used without disappearing completely from the interface.

Use reduced:

- contrast
- opacity
- interaction feedback

Do not rely solely on colour to communicate disabled state.

Disabled elements should remain legible.

---

# 27. Task List Principles

The task list is the core of Arlo.

It should remain visually simple.

Task rows should prioritise:

1. Task title
2. Task state
3. Interaction

Avoid adding unnecessary metadata directly into the list.

The list should not resemble:

- a spreadsheet
- a dashboard
- a database
- a chat interface

The task itself remains the primary visual focus.

---

# 28. Task Structure

Each task is a separate task object.

The visual system should not imply that tasks are merely lines of text inside one large editable document.

Each task should have an identifiable state that can support:

- incomplete
- completed
- processing where required
- error where required

Task metadata should only appear when it provides useful information.

---

# 29. Task Creation

Creating a task should feel immediate.

The intended interaction is:

1. User enters task text.
2. User presses Enter.
3. A new task object is created.
4. The new task appears at the bottom of the task list.
5. The input clears.
6. Focus remains available for another task.

The creation experience should feel continuous rather than requiring the user to repeatedly activate the composer.

---

# 30. New Task Animation

Newly created tasks may use the approved Arlo wave animation.

The current preferred direction is **Wave Version B**.

The animation combines:

- character-by-character entrance
- subtle vertical movement
- subtle opacity fade
- gentle scale/settling
- staggered timing

The purpose is to make the task feel as though it is naturally forming into the list.

The animation must remain:

- subtle
- quick
- readable
- repeatable

Animation must never delay task availability or prevent interaction with the newly created task.

---

# 31. Animation Philosophy

Motion in Arlo should communicate:

- cause and effect
- hierarchy
- state change
- continuity

Motion should not exist simply because an animation is technically possible.

If an animation does not improve understanding or tactile quality, do not add it.

This is a core design rule.

---

# 32. Wave Animation Principles

Letter-level animation should be used selectively.

The stagger should be short enough that users do not have to wait for the task to become readable.

Avoid:

- exaggerated bouncing
- large vertical movement
- long delays
- excessive blur
- dramatic rotations
- distracting easing

The final resting state must always match the normal task typography.

---

# 33. AI Interaction Language

Arlo's AI should feel integrated into the product rather than presented as a separate chatbot experience.

AI should generally operate through existing task interactions.

The interface should communicate AI processing only when the user benefits from knowing that processing is taking place.

Avoid unnecessary AI branding around ordinary task actions.

---

# 34. AI Colour Language

The primary Arlo teal is the default AI and interaction colour.

AI-related states should feel:

- subtle
- calm
- responsive
- intelligent

Avoid making AI states visually overwhelming.

AI should not constantly glow, pulse or dominate the interface.

Colour and motion should communicate that Arlo is doing something without making the interface feel like a loading screen.

---

# 35. AI Motion

AI-related animation should be particularly restrained.

Suitable approaches include:

- subtle shimmer
- opacity transitions
- restrained pulsing
- small organic motion
- controlled text transitions

Avoid:

- constant motion
- large loading animations
- excessive glow
- dramatic gradients
- distracting effects

The user should never feel that the interface is performing for them.

---

# 36. Iconography

Icons should be:

- simple
- recognisable
- lightweight
- consistent in visual weight

Icons should not compete with task content.

Use icons where they improve recognition, navigation or interaction.

Do not introduce an icon simply because an action could technically have one.

The standalone Arlo icon may be used as a brand or AI indicator where appropriate.

---

# 37. Logo Usage

Arlo branding assets are stored in:

`assets/branding/`

The primary logo consists of the icon and wordmark.

The standalone icon may be used for:

- app icon
- AI indicator
- favicon
- avatar
- compact branding

Do not create duplicate logo assets for every use case unless implementation requirements genuinely require them.

The full logo should not be forced into small UI spaces where it becomes visually weak or unreadable.

---

# 38. Accessibility

Accessibility is part of the design system rather than an optional enhancement.

UI must not communicate important information through colour alone.

Interactive elements should have:

- sufficient touch area
- clear state changes
- readable text
- appropriate contrast
- accessible labels where required

Animation should not prevent users from understanding or using the interface.

Semantic colours must remain sufficiently distinguishable from their associated surfaces and text.

---

# 39. Dark Mode

Arlo's design architecture should support dark mode.

However:

**Dark mode is not part of the current V1 visual implementation.**

Do not introduce dark-mode styling into V1 components unless specifically requested.

The semantic token architecture should allow future dark-mode values to be introduced without restructuring the application.

Components should therefore avoid directly encoding assumptions that prevent theme-specific semantic values from being introduced later.

---

# 40. Design Token Usage

Developers should use design tokens rather than hard-coded values wherever an appropriate token exists.

For example, prefer:

`spacing.component.padding-lg`

over:

`17px`

Prefer the approved semantic colour token over creating a new colour that happens to look similar.

Prefer an existing radius token over creating a component-specific radius.

Prefer an existing typography token over introducing a one-off font size.

If an existing token does not adequately solve a repeated design problem, the design-token system should be updated rather than accumulating one-off values throughout the codebase.

---

# 41. Token Hierarchy

Arlo uses three conceptual layers:

### Primitive tokens

Raw scales and foundational values.

Examples:

`color.brand.500`

`color.neutral.900`

`color.success.default`

### Semantic tokens

Meaning-based values.

Examples:

`color.primary.default`

`color.content.primary`

`color.background.canvas`

`color.border.default`

### Component usage

How semantic values are applied to actual UI.

Example:

`primary action → color.primary.default`

Primitive values should generally not be referenced directly by individual components when an appropriate semantic token exists.

This allows the semantic layer to evolve independently and provides a clean foundation for future themes.

---

# 42. Semantic-First Implementation

When implementing UI, follow this order:

1. Identify the design role.
2. Find the appropriate semantic token.
3. Use the semantic token.
4. Only reference a primitive token when no suitable semantic role exists.
5. If the same primitive value is repeatedly required, consider adding or refining a semantic token.

Do not create component-specific colour values to solve a problem that belongs in the token system.

---

# 43. Consistency Rules

When implementing a new component:

1. Check the existing design system.
2. Reuse existing semantic tokens.
3. Reuse existing interaction patterns.
4. Reuse existing spacing relationships.
5. Reuse existing radius values.
6. Reuse existing typography.
7. Reuse existing surface treatments.
8. Only introduce a new token when an existing token genuinely cannot fulfil the requirement.

Consistency is more important than giving every component a unique visual treatment.

---

# 44. Token Extension Rules

A new token should only be introduced when:

- an existing token cannot fulfil the requirement
- the requirement is likely to recur
- the value has a clear semantic purpose
- the value improves system consistency
- the addition does not unnecessarily expand the design vocabulary

Do not create tokens for:

- one-off visual tweaks
- arbitrary pixel values
- minor colour differences
- component-specific preferences
- temporary experimentation

Experimental values should remain local until the design decision has been validated.

---

# 45. Things Arlo Should Avoid

Arlo should avoid:

- unnecessary cards
- excessive borders
- heavy shadows
- saturated semantic colours
- neon red, yellow or green
- large gradients
- excessive glassmorphism
- excessive blur
- generic AI imagery
- constant animation
- decorative motion
- unnecessary icons
- dense dashboards
- excessive metadata
- arbitrary colours
- arbitrary spacing
- arbitrary radius values
- UI that feels like a spreadsheet
- UI that feels like a chatbot
- excessive use of secondary or tertiary colours
- visually competing brand colours
- decorative UI without a functional purpose

---

# 46. Hard Constraints

The following rules should be treated as product-level constraints unless deliberately changed.

### Background

`#F6F3ED` is the permanent V1 application canvas.

### Primary colour

`#5B8E99` is the primary brand and interaction colour.

### Accent

Accent currently aliases the primary colour.

### Secondary colour

Secondary uses the warm neutral/taupe colour family.

### Tertiary colour

Tertiary uses the low-emphasis warm neutral family and should be used sparingly.

### Semantic colours

Red, yellow and green must remain soft/pastel.

### Task structure

Each task is a separate task object.

### Task creation

Enter creates a new task.

### Task ordering

New tasks are added to the bottom of the list.

### Visual hierarchy

The task itself remains the primary focus.

### Borders

Use borders sparingly.

### Shadows

Use elevation only when it provides meaningful hierarchy or usability.

### Animation

Animation must have a purpose.

### AI

AI should feel integrated, quiet and contextual rather than like a chatbot.

### Dark mode

Architecturally supported, but not part of V1 implementation.

### Tokens

Existing tokens should be reused before introducing new values.

---

# 47. Decision-Making Framework

When deciding between two valid design solutions, prefer the one that:

1. reduces visual noise
2. reduces cognitive load
3. preserves consistency
4. requires less user interaction
5. feels more natural
6. uses existing semantic tokens
7. remains easy to maintain
8. preserves the Arlo visual identity

If a solution requires adding several new tokens to achieve a small visual improvement, reconsider the solution.

The design system should simplify development rather than create additional decisions.

---

# 48. Source of Truth

The Arlo design system consists of two primary documents:

### `docs/DESIGN_SYSTEM.md`

Defines:

- design principles
- visual philosophy
- usage rules
- interaction behaviour
- visual hierarchy
- accessibility principles
- product-level constraints
- token usage rules

### `docs/DESIGN_TOKENS.md`

Defines:

- primitive colour scales
- semantic colour mappings
- typography tokens
- spacing tokens
- radius tokens
- border tokens
- elevation tokens
- motion tokens
- component tokens
- future theme values

The design system explains **why and when** a token is used.

The token system defines **the exact value**.

If a visual decision conflicts with the design system, the design system should be reviewed before introducing a new one-off solution.

---

# 49. Final Design Principle

Arlo should never feel like a design system being demonstrated to the user.

The system exists to make the interface feel natural.

The best implementation is usually the one where the user notices:

- the task
- the action
- the result

and almost nothing else.

> **Simple on the surface. Intelligent underneath.**