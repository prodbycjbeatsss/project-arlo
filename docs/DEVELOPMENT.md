# ARLO — DEVELOPMENT GUIDE

**Status:** Active  
**Version:** 1.0  
**Date:** 12 August 2026

---

## 1. Purpose

This document defines how Arlo should be developed, tested, reviewed and maintained.

It defines engineering practice.

It does not define:

- Product requirements
- Visual design
- Product roadmap

Those belong in:

- `PRODUCT.md`
- `DESIGN.md`
- `ROADMAP.md`
- `MILESTONE-1.md`

---

## 2. Technical Foundation

Arlo currently uses:

- Expo
- React Native
- TypeScript
- Expo Router
- React
- Git
- GitHub

The primary target is Android.

Development is primarily performed using:

- Termux
- Acode
- Expo Go
- AI-assisted development tools

The established Expo environment should not be changed without a deliberate decision.

---

## 3. Source of Truth

The local project and GitHub repository represent the same codebase.

Repository:

`prodbycjbeatsss/project-arlo`

Local project:

`~/project-arlo`

Normal workflow:

```text
Local project
     ↓
Test
     ↓
Commit
     ↓
Push
     ↓
GitHub
```

---

## 4. Development Cycle

Use:

```text
Plan
 ↓
Implement
 ↓
Run
 ↓
Test on device
 ↓
Inspect
 ↓
Fix
 ↓
Retest
 ↓
Commit
 ↓
Push
```

Prefer small, understandable iterations.

Do not make large numbers of unrelated changes before testing.

---

## 5. AI-Assisted Development

AI is an engineering assistant.

It is not the product owner.

AI-generated implementation must follow:

- `PRODUCT.md`
- `DESIGN.md`
- `ROADMAP.md`
- The active milestone

AI must not invent product features simply because they are common elsewhere.

If a requirement is genuinely unclear, resolve the ambiguity before making a major product decision.

---

## 6. Implementation Principles

Prefer:

- Simple React components
- Local state where appropriate
- Small reusable components
- Clear naming
- Minimal dependencies
- Expo-compatible solutions
- Readable TypeScript
- Straightforward data flow

Avoid:

- Premature abstraction
- Large architecture systems
- Unnecessary state-management libraries
- Unnecessary dependencies
- Over-engineering
- Complex folder structures

The simplest solution that preserves the intended behaviour is normally preferred.

---

## 7. Components

Create components when they provide meaningful value.

A component should generally exist because it:

- Has meaningful behaviour
- Has meaningful state
- Is reused
- Improves readability
- Separates a complex interaction

Do not create a component for every small visual element.

---

## 8. State

Use the simplest state-management approach appropriate to the current milestone.

For Milestone 1:

- Local React state
- No database
- No backend
- No authentication
- No global state library

More sophisticated state management should only be introduced when required.

---

## 9. Dependencies

Treat dependencies as a cost.

Before adding one, ask:

1. Is it genuinely required?
2. Does Expo or React Native already provide the functionality?
3. Can it be implemented simply without another dependency?
4. Is it compatible with the current Expo version?
5. Does it introduce unnecessary maintenance?

Do not install libraries simply because they are popular.

Document meaningful dependency decisions.

---

## 10. Animation

Animation is important to Arlo but must remain purposeful.

Animation should be:

- Responsive
- Physical
- Fast
- Calm
- Consistent

Gesture-driven interactions should maintain a direct relationship between:

```text
Finger
 ↓
Gesture
 ↓
Visual response
```

Avoid decorative animation and long transitions.

---

## 11. Device Testing

The primary testing environment is a physical Android device through Expo Go.

After meaningful UI or interaction changes:

1. Start the Expo server.
2. Open Arlo in Expo Go.
3. Test the changed interaction manually.
4. Test keyboard behaviour where relevant.
5. Test different task states.
6. Check for regressions.

Code compiling does not mean the feature is finished.

---

## 12. Testing Priority

Prioritise:

1. Core interaction
2. Gesture responsiveness
3. Animation quality
4. Visual hierarchy
5. Typography
6. Keyboard behaviour
7. State transitions
8. Edge cases
9. Performance
10. Secondary details

---

## 13. Visual Review

Significant visual changes should be reviewed on the target device.

Check:

- Spacing
- Typography
- Alignment
- Contrast
- Touch targets
- Safe areas
- Keyboard behaviour
- Animation timing
- Screen-size behaviour

Do not rely exclusively on screenshots or desktop previews.

---

## 14. Performance

Arlo should feel immediate.

Avoid unnecessary:

- Re-renders
- Heavy gesture calculations
- Large assets
- Expensive animations
- Excessive nesting

Do not optimise prematurely.

Investigate noticeable frame drops or interaction lag.

---

## 15. File Structure

Keep the project understandable.

Current general structure:

```text
project-arlo/
├── app/
├── assets/
├── docs/
├── app.json
├── index.ts
├── package.json
└── tsconfig.json
```

Introduce new directories only when they provide a clear organisational benefit.

Do not create a large architecture before it is needed.

---

## 16. Documentation Ownership

`PRODUCT.md`

Defines product identity, philosophy and scope.

`DESIGN.md`

Defines visual and interaction direction.

`ROADMAP.md`

Defines development order and validation gates.

`MILESTONE-1.md`

Defines the current milestone and its definition of done.

`DEVELOPMENT.md`

Defines engineering workflow and technical rules.

`CHANGELOG.md`

Records meaningful historical changes and decisions.

Do not duplicate large sections between documents.

---

## 17. Git Workflow

Use Git frequently.

Before significant work:

```bash
git status
```

After a stable change:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Commit messages should describe what changed.

Good examples:

```text
Add Arlo home screen
Implement task input
Add task entrance animation
Implement swipe completion
Add completed task section
Add undo interaction
Polish task typography
```

Avoid vague messages such as:

```text
update
changes
stuff
fixed things
```

---

## 18. Stable Checkpoints

Create commits at meaningful stable points.

Important checkpoints include:

- Project foundation
- First working UI
- Working task creation
- Working swipe interaction
- Complete Milestone 1 prototype
- Milestone completion

A stable commit should be recoverable if later experimentation fails.

---

## 19. Experimental Changes

For significant experiments:

1. Commit the stable version.
2. Make the experiment.
3. Test it.
4. Keep it if it improves Arlo.
5. Revert it if it does not.

Do not allow experimental code to silently become the baseline.

---

## 20. Major Changes

Before a significant architectural change, ask:

- Why?
- What problem does it solve?
- Is it required now?
- Can the existing implementation remain simpler?
- What does it affect?
- Is there a smaller solution?

Consider:

- Existing components
- Dependencies
- Expo compatibility
- Performance
- Documentation
- Future milestones

Prefer the smaller solution when it produces the same product outcome.

---

## 21. AI Implementation

Real AI should be introduced incrementally.

Milestone 1 should establish:

- Strong task interaction
- Strong visual language
- Strong input experience
- Strong task lifecycle

Real AI should be isolated behind a clear interface when eventually introduced.

The UI should not become tightly coupled to a specific AI provider.

---

## 22. Secrets

Never commit:

- API keys
- Authentication tokens
- Passwords
- Private credentials

Use appropriate environment configuration.

Check sensitive files before committing.

---

## 23. Debugging

When something breaks:

1. Reproduce it.
2. Identify the likely layer.
3. Inspect the actual error.
4. Fix the smallest relevant problem.
5. Retest.
6. Check for regressions.

Do not rewrite unrelated code to solve a local problem.

---

## 24. When AI Gets Something Wrong

Stop and correct AI-generated implementation if it:

- Changes the framework
- Introduces unnecessary architecture
- Adds unnecessary dependencies
- Removes existing functionality
- Ignores the active milestone
- Contradicts documented design decisions
- Introduces conventional productivity features without approval

The documentation is the authority.

---

## 25. Definition of Done

A feature is complete when:

- It works.
- It follows the specification.
- It has been tested on the target device.
- It does not introduce obvious regressions.
- Its interaction feels correct.
- Its implementation remains understandable.

For visually important interactions, subjective interaction quality matters.

---

## 26. Engineering Guardrail

When choosing between:

**More features**  
and  
**A better core interaction**

choose the better core interaction.

When choosing between:

**More architecture**  
and  
**A simpler implementation**

choose the simpler implementation unless the complexity is genuinely required.

When choosing between:

**More interface**  
and  
**Less interface**

prefer less interface when both achieve the same outcome.

---

## 27. Core Engineering Principle

> **Build only what is needed. Make it excellent. Then build the next thing.**

---

## 28. GitHub as Project Source of Truth

The GitHub repository is the persistent source of truth for the Arlo project.

Repository:

`prodbycjbeatsss/project-arlo`

The repository contains both the current implementation and the current project documentation.

When working on Arlo, AI assistants with access to the connected repository should inspect the repository directly rather than relying on copied or remembered versions of files.

### Documentation

The primary project documentation is located in:

```text
docs/
├── PRODUCT.md
├── DESIGN.md
├── ROADMAP.md
├── MILESTONE-1.md
├── DEVELOPMENT.md
└── CHANGELOG.md

AI may update repository files directly when the user explicitly asks it to do so.
When making direct GitHub changes:
Read the current version of the file first.
Make the smallest appropriate change.
Preserve unrelated content.
Use a clear commit message.
Do not modify additional files without a reason.
Report exactly what was changed.
Local Device vs GitHub
The local project on the Android device and the GitHub repository should normally represent the same project state.
The local project is where the application is run and tested.
GitHub is the persistent project record.
After stable development work:
Local project
     ↓
Test on Android
     ↓
Commit
     ↓
Push
     ↓
GitHub becomes the latest recorded state
If the local project and GitHub differ, do not assume which version is correct.
Inspect the differences before overwriting or reverting anything.
New Chat Sessions
A new AI conversation should not require the user to paste the entire project documentation again.
When repository access is available, the AI should establish context by inspecting:
The repository structure.
The current documentation.
The active roadmap stage.
The relevant source files.
Recent commits when useful.
The user can therefore refer to project files by name, for example:
"Review ROADMAP.md against the current implementation."
or:
"Continue Milestone 1 from where we left off."
The AI should inspect the repository before making assumptions about the current state.
Documentation Consistency
GitHub should be treated as the canonical version of project documentation.
If a conversation contains information that conflicts with the repository:
Check the repository first.
Identify the conflict.
Do not silently overwrite documented decisions.
Ask for clarification when the correct direction cannot be determined from the project.
The goal is to prevent project knowledge from becoming dependent on a single conversation.