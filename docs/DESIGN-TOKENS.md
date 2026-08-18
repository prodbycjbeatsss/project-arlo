# Arlo Design Tokens

**Version:** 1.2  
**Status:** Active  
**Product:** Arlo  
**Platform:** Mobile  
**Theme:** Light-first, dark-mode ready

---

# 1. Purpose

This document is the **exact-value source of truth** for the Arlo design-token system.

It defines reusable values for:

- colour
- typography
- spacing
- radius
- borders
- elevation
- motion
- component states

The design principles and behavioural rules governing these tokens are defined in:

`docs/DESIGN_SYSTEM.md`

This document should contain reusable values rather than broad design philosophy.

---

# 2. Token Architecture

Arlo uses three layers:

```text
PRIMITIVE TOKENS
       ↓
SEMANTIC TOKENS
       ↓
COMPONENT TOKENS
       ↓
UI
```

### Primitive tokens

Foundational values.

Examples:

```text
color.brand.500
color.neutral.900
color.success.default
```

### Semantic tokens

Meaning-based values.

Examples:

```text
color.background.canvas
color.content.primary
color.primary.default
color.border.default
```

### Component tokens

Component-specific applications of semantic tokens.

Examples:

```text
button.primary.background
input.borderFocus
card.background
task.titleCompleted
```

Components should consume semantic or component tokens rather than arbitrary primitive values wherever possible.

---

# 3. Colour Tokens

## 3.1 Core Arlo Colours

| Token | Value | Role |
|---|---|---|
| `color.background.canvas` | `#F6F3ED` | Main application canvas |
| `color.brand.500` | `#5B8E99` | Primary brand colour |
| `color.secondary.500` | `#7E7B74` | Secondary warm neutral |
| `color.neutral.950` | `#282621` | Strongest warm text |
| `color.content.primary` | `#232320` | Primary application text |
| `color.content.secondary` | `#7E7B74` | Secondary text |
| `color.content.tertiary` | `#A39F97` | Tertiary text |

---

# 4. Brand Colour Scale

Primary / brand colour:

```text
#5B8E99
```

| Token | HEX |
|---|---|
| `color.brand.50` | `#F7F9FA` |
| `color.brand.100` | `#EFF4F5` |
| `color.brand.200` | `#DBE6E9` |
| `color.brand.300` | `#C1D4D8` |
| `color.brand.400` | `#A0BDC4` |
| `color.brand.500` | `#5B8E99` |
| `color.brand.600` | `#46727B` |
| `color.brand.700` | `#2A494F` |
| `color.brand.800` | `#111E21` |
| `color.brand.900` | `#0B1517` |
| `color.brand.950` | `#060B0D` |

The darkest values are deliberately prevented from collapsing into pure black.

---

# 5. Secondary Scale

Arlo's current secondary colour direction is warm taupe/neutral rather than lavender.

Primary anchor:

```text
#7E7B74
```

| Token | HEX |
|---|---|
| `color.secondary.50` | `#F9F8F8` |
| `color.secondary.100` | `#F2F2F1` |
| `color.secondary.200` | `#E3E2E0` |
| `color.secondary.300` | `#CECDCA` |
| `color.secondary.400` | `#B4B2AE` |
| `color.secondary.500` | `#7E7B74` |
| `color.secondary.600` | `#65625A` |
| `color.secondary.700` | `#413E36` |
| `color.secondary.800` | `#1B1915` |
| `color.secondary.900` | `#0F0E0C` |
| `color.secondary.950` | `#080807` |

---

# 6. Accent

Accent currently aliases the primary brand colour.

```text
color.accent.50    = color.brand.50
color.accent.100   = color.brand.100
color.accent.200   = color.brand.200
color.accent.300   = color.brand.300
color.accent.400   = color.brand.400
color.accent.500   = color.brand.500
color.accent.600   = color.brand.600
color.accent.700   = color.brand.700
color.accent.800   = color.brand.800
color.accent.900   = color.brand.900
color.accent.950   = color.brand.950
```

This is intentional.

Accent is currently a semantic role rather than a separate colour family.

---

# 7. Warm Neutral Scale

Arlo uses warm neutrals rather than generic cool greys.

| Token | HEX |
|---|---|
| `color.neutral.50` | `#FCFAF6` |
| `color.neutral.100` | `#F6F3ED` |
| `color.neutral.200` | `#EDE9E1` |
| `color.neutral.300` | `#DDD8CE` |
| `color.neutral.400` | `#C8C2B7` |
| `color.neutral.500` | `#B0A99D` |
| `color.neutral.600` | `#958E82` |
| `color.neutral.700` | `#777168` |
| `color.neutral.800` | `#59544D` |
| `color.neutral.900` | `#3D3A35` |
| `color.neutral.950` | `#282621` |

---

# 8. Background Tokens

```text
color.background.canvas       = #F6F3ED
color.background.surface      = #FBF9F5
color.background.subtle       = #EDE9E1
color.background.elevated     = #FFFDFA
```

### Canvas

Main application background.

### Surface

Standard contained surfaces.

### Subtle

Low-emphasis containers and secondary areas.

### Elevated

Menus, popovers, modals and other higher-level surfaces.

---

# 9. Content Tokens

```text
color.content.primary         = #232320
color.content.secondary       = #7E7B74
color.content.tertiary        = #A39F97
color.content.disabled        = #BDB8AF
color.content.inverse         = #F6F3ED
```

---

# 10. Primary Tokens

```text
color.primary.default         = #5B8E99
color.primary.hover           = #4A7D87
color.primary.pressed         = #3E6C75
color.primary.subtle          = #E8F0F1
```

---

# 11. Accent Tokens

```text
color.accent.default          = #5B8E99
color.accent.subtle           = #E8F0F1
```

---

# 12. Secondary Tokens

```text
color.secondary.default       = #7E7B74
color.secondary.hover         = #65625A
color.secondary.pressed       = #413E36
color.secondary.subtle        = #F2F2F1
```

---

# 13. Tertiary Tokens

```text
color.tertiary.default        = #A39F97
color.tertiary.subtle         = #EDE9E1
```

---

# 14. Border Tokens

```text
color.border.subtle            = rgba(35, 35, 32, 0.06)
color.border.default           = rgba(35, 35, 32, 0.10)
color.border.strong            = rgba(35, 35, 32, 0.16)
color.border.focus             = #5B8E99
```

---

# 15. Success Tokens

Semantic colours retain a soft/pastel visual language.

```text
color.success.surface          = #EDF5EF
color.success.soft             = #DCEDE1
color.success.default          = #82B89A
color.success.strong           = #3F7355
```

---

# 16. Warning Tokens

```text
color.warning.surface          = #F7F1E4
color.warning.soft             = #EFE1C5
color.warning.default          = #D1B477
color.warning.strong           = #866D3C
```

---

# 17. Error Tokens

```text
color.error.surface            = #F7ECEC
color.error.soft               = #EED7D7
color.error.default            = #C98282
color.error.strong             = #8A4C4C
```

---

# 18. Info Tokens

```text
color.info.surface             = #EDF3F7
color.info.soft                = #DCE9F0
color.info.default             = #82A8C0
color.info.strong              = #496F87
```

---

# 19. Typography

## 19.1 Font Family

```text
font.family.sans = Manrope
```

---

# 20. Font Sizes

```text
font.size.xs    = 12px
font.size.sm    = 14px
font.size.md    = 16px
font.size.lg    = 18px
font.size.xl    = 24px
font.size.2xl   = 30px
font.size.3xl   = 36px
font.size.4xl   = 48px
```

---

# 21. Font Weights

```text
font.weight.regular   = 400
font.weight.medium    = 500
font.weight.semibold  = 600
font.weight.bold      = 700
```

---

# 22. Line Heights

```text
font.lineHeight.tight      = 1.15
font.lineHeight.heading    = 1.25
font.lineHeight.body       = 1.50
font.lineHeight.relaxed    = 1.60
```

---

# 23. Semantic Typography

## Display

```text
type.display
  size: 48px
  weight: 700
  line-height: 1.15
```

## Heading XL

```text
type.heading-xl
  size: 36px
  weight: 700
  line-height: 1.15
```

## Heading LG

```text
type.heading-lg
  size: 30px
  weight: 700
  line-height: 1.25
```

## Heading MD

```text
type.heading-md
  size: 24px
  weight: 600
  line-height: 1.25
```

## Body LG

```text
type.body-lg
  size: 18px
  weight: 400
  line-height: 1.50
```

## Body

```text
type.body
  size: 16px
  weight: 400
  line-height: 1.50
```

## Body SM

```text
type.body-sm
  size: 14px
  weight: 400
  line-height: 1.50
```

## Label

```text
type.label
  size: 14px
  weight: 600
  line-height: 1.25
```

## Caption

```text
type.caption
  size: 12px
  weight: 500
  line-height: 1.30
```

---

# 24. Spacing

Arlo uses a 4px base spacing unit.

```text
space.1    = 4px
space.2    = 8px
space.3    = 12px
space.4    = 16px
space.5    = 20px
space.6    = 24px
space.8    = 32px
space.10   = 40px
space.12   = 48px
space.16   = 64px
```

---

# 25. Semantic Spacing

```text
spacing.component.xs      = 8px
spacing.component.sm      = 12px
spacing.component.md      = 16px
spacing.component.lg      = 24px

spacing.section.sm        = 24px
spacing.section.md        = 32px
spacing.section.lg        = 48px
spacing.section.xl        = 64px
```

---

# 26. Radius

```text
radius.xs       = 4px
radius.sm       = 8px
radius.md       = 12px
radius.lg       = 16px
radius.xl       = 24px
radius.pill     = 999px
```

---

# 27. Component Radius

```text
radius.input       = 12px
radius.button      = 12px
radius.card        = 16px
radius.modal       = 24px
radius.badge       = 999px
radius.avatar      = 999px
```

---

# 28. Shadows

Arlo uses restrained elevation.

```text
shadow.none =
none

shadow.sm =
0 1px 2px rgba(35, 35, 32, 0.04)

shadow.md =
0 4px 12px rgba(35, 35, 32, 0.06)

shadow.lg =
0 8px 24px rgba(35, 35, 32, 0.08)

shadow.xl =
0 16px 40px rgba(35, 35, 32, 0.10)
```

---

# 29. Motion Duration

```text
motion.duration.instant   = 0ms
motion.duration.fast      = 120ms
motion.duration.normal    = 200ms
motion.duration.slow      = 300ms
motion.duration.emphasis  = 450ms
```

---

# 30. Motion Easing

```text
motion.ease.standard =
cubic-bezier(0.2, 0, 0, 1)

motion.ease.enter =
cubic-bezier(0, 0, 0.2, 1)

motion.ease.exit =
cubic-bezier(0.4, 0, 1, 1)
```

---

# 31. Button Tokens

```text
button.primary.background        = color.primary.default
button.primary.backgroundHover   = color.primary.hover
button.primary.backgroundPressed = color.primary.pressed
button.primary.foreground        = #F6F3ED

button.secondary.background      = color.background.subtle
button.secondary.foreground      = color.content.primary
button.secondary.border          = color.border.default

button.radius                    = radius.md
button.height                    = 44px
button.paddingX                 = 16px
```

---

# 32. Input Tokens

```text
input.background        = color.background.surface
input.foreground        = color.content.primary
input.placeholder       = color.content.tertiary

input.border            = color.border.default
input.borderFocus       = color.border.focus

input.radius            = radius.md
input.height            = 48px
input.paddingX          = 16px
```

---

# 33. Card Tokens

```text
card.background         = color.background.surface
card.border             = color.border.subtle
card.shadow             = shadow.sm
card.radius             = radius.lg
card.padding            = space.4
```

Cards should only use these tokens when a card is structurally justified.

---

# 34. Badge Tokens

```text
badge.success.background = color.success.surface
badge.success.foreground = color.success.strong

badge.warning.background = color.warning.surface
badge.warning.foreground = color.warning.strong

badge.error.background   = color.error.surface
badge.error.foreground   = color.error.strong

badge.info.background    = color.info.surface
badge.info.foreground    = color.info.strong
```

---

# 35. Task Tokens

```text
task.background           = color.background.surface
task.backgroundCompleted  = color.background.subtle

task.title                = color.content.primary
task.titleCompleted       = color.content.tertiary

task.meta                 = color.content.secondary

task.border               = color.border.subtle

task.check.background     = color.background.subtle
task.check.active         = color.primary.default

task.completedOpacity     = 0.65

task.radius               = radius.lg
task.padding              = space.4
```

---

# 36. AI Tokens

Arlo's AI uses the existing brand system rather than introducing a separate AI colour.

```text
ai.primary       = color.primary.default
ai.subtle        = color.primary.subtle
ai.foreground    = color.content.primary
```

---

# 37. Theme Architecture

The semantic token layer should be treated as the theme boundary.

For example:

```text
color.background.canvas
color.background.surface
color.content.primary
color.primary.default
color.border.default
```

Components should consume these semantic values.

Future dark-mode implementation should replace semantic values rather than requiring component-level redesign.

---

# 38. Dark Mode

Dark mode values are intentionally not implemented as part of the current V1 visual theme.

The token architecture remains prepared for future theme expansion.

No component should hard-code assumptions that make future theme-specific semantic values impossible.

---

# 39. Token Usage Rules

## Use semantic tokens first

Prefer:

```text
color.primary.default
```

over:

```text
color.brand.500
```

when implementing a primary action.

---

## Use primitive tokens when necessary

Primitive tokens may be used when no appropriate semantic role exists.

---

## Avoid arbitrary values

Do not introduce values such as:

```text
#123456
17px
13px
19px
```

without first considering whether an existing token or a new reusable token is appropriate.

---

# 40. Complete Token Map

```text
ARLO TOKENS
│
├── COLOR
│   ├── Brand
│   ├── Secondary
│   ├── Accent
│   ├── Neutral
│   ├── Success
│   ├── Warning
│   ├── Error
│   └── Info
│
├── SEMANTIC COLOR
│   ├── Background
│   ├── Content
│   ├── Border
│   ├── Primary
│   ├── Accent
│   ├── Secondary
│   └── Tertiary
│
├── TYPOGRAPHY
│   ├── Family
│   ├── Size
│   ├── Weight
│   ├── Line Height
│   └── Semantic Roles
│
├── SPACING
│   ├── Primitive Scale
│   └── Semantic Spacing
│
├── RADIUS
│   ├── Primitive Scale
│   └── Component Radius
│
├── SHADOW
│   └── Elevation Scale
│
├── MOTION
│   ├── Duration
│   └── Easing
│
└── COMPONENT
    ├── Button
    ├── Input
    ├── Card
    ├── Badge
    ├── Task
    └── AI
```

---

# 41. Source of Truth

`DESIGN_TOKENS.md` is the source of truth for exact reusable design values.

`DESIGN_SYSTEM.md` is the source of truth for design principles, behaviour and usage rules.

If a value is needed repeatedly and does not exist here, evaluate whether it belongs in the token system before introducing a hard-coded value.

The token system should evolve deliberately rather than accumulate arbitrary values.

---

# 42. V1 Core Values

The following values represent the current core Arlo visual identity:

```text
Canvas:
#F6F3ED

Primary:
#5B8E99

Accent:
#5B8E99

Secondary:
#7E7B74

Primary Text:
#232320

Secondary Text:
#7E7B74

Tertiary Text:
#A39F97

Typeface:
Manrope
```

These values should be treated as established V1 design decisions.

---

# 43. Design Language Summary

```text
WARM CREAM
     +
MUTED TEAL
     +
WARM CHARCOAL
     +
SOFT NEUTRALS
     +
PASTEL SEMANTIC COLOURS
     +
RESTRAINED SURFACES
     +
SOFT RADIUS
     +
SUBTLE ELEVATION
     +
PURPOSEFUL MOTION
```

The resulting interface should feel:

**Calm. Warm. Minimal. Tactile. Premium. Human.**