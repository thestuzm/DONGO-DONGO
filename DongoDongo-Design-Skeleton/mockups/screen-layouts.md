# Screen Layouts - Visual Consistency Overview

## Main Application Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗ │
│  ║  🎓 DONGO DONGO COPILLOT TUTOR                    ⚙️  👤 ║ │ ← Navigation Bar
│  ╚═══════════════════════════════════════════════════════════╝ │   (Ink Black icons)
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │              [MR. DONGO DONGO MASCOT]                     │ │
│  │                   (SVG Sprite)                            │ │
│  │                  ~~~~~~~~~~~~~~                           │ │
│  │                 (Animated, Cuphead                        │ │
│  │                   hand-drawn style)                       │ │
│  │                                                           │ │
│  │         ╭──────────────────────────────╮                  │ │
│  │         │ "Hello! Ready to learn      │                  │ │
│  │         │  about Computer Studies?"   │                  │ │
│  │         ╰──────────────────────────────╯                  │ │
│  │             ▲                                             │ │
│  │             └── Speech bubble with ink outline            │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  CHAT HISTORY                                                   │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  ╭────────────────────────────────────────────────────╮   │ │
│  │  │ Student: What is a CPU?                           │   │ │
│  │  ╰────────────────────────────────────────────────────╯   │ │
│  │                                                           │ │
│  │  ╭────────────────────────────────────────────────────╮   │ │
│  │  │ Mr. Dongo Dongo: A CPU (Central Processing        │   │ │
│  │  │ Unit) is the brain of the computer! It performs   │   │ │
│  │  │ all the calculations and executes instructions... │   │ │
│  │  ╰────────────────────────────────────────────────────╯   │ │
│  │                                                           │ │
│  │  [Scrollable area with paper texture background]          │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  INPUT AREA                                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  ╭─────────────────────────────────────────────────────╮  │ │
│  │  │ Type your question or click 🎤 to speak...         │  │ │
│  │  ╰─────────────────────────────────────────────────────╯  │ │
│  │         [🎤 Voice]  [📷 Image]  [➤ Send]                  │ │
│  │            ↑           ↑          ↑                       │ │
│  │       Burgundy    Mustard    Burgundy                     │ │
│  │       Red fill    Yellow     Red fill                     │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

COLOR LEGEND:
┌─────────────┬──────────────┬─────────────────────────────────┐
│ Ink Black   │ #1A1A1A      │ Text, outlines, borders         │
├─────────────┼──────────────┼─────────────────────────────────┤
│ Paper White │ #F5F1E8      │ Backgrounds, cards, bubbles     │
├─────────────┼──────────────┼─────────────────────────────────┤
│ Burgundy    │ #8B0000      │ Primary buttons, CTAs           │
│ Red         │              │                                 │
├─────────────┼──────────────┼─────────────────────────────────┤
│ Mustard     │ #B8860B      │ Accents, icons, focus states    │
│ Yellow      │              │                                 │
└─────────────┴──────────────┴─────────────────────────────────┘
```

---

## Subject Selection Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗ │
│  ║  📚 Choose Your Subject                          🏠  ⚙️  ║ │
│  ╚═══════════════════════════════════════════════════════════╝ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │  ╭────────────╮  │  │  ╭────────────╮  │  │ ╭──────────╮ │ │
│  │  │ 💻         │  │  │  │ 📐         │  │  │ │ 🔬       │ │ │
│  │  │ COMPUTER   │  │  │  │ MATHEMATICS│  │  │ │ SCIENCE  │ │ │
│  │  │ STUDIES    │  │  │  │            │  │  │ │          │ │ │
│  │  ╰────────────╯  │  │  ╰────────────╯  │  │ ╰──────────╯ │ │
│  │                  │  │                  │  │               │ │
│  │  Past Papers     │  │  Formulas        │  │  Experiments  │ │
│  │  Quizzes         │  │  Practice        │  │  Theory       │ │
│  │  24 Topics       │  │  18 Topics       │  │  20 Topics    │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │  ╭────────────╮  │  │  ╭────────────╮  │  │ ╭──────────╮ │ │
│  │  │ 📖         │  │  │  │ 🌍         │  │  │ │ 🗣️       │ │ │
│  │  │ ENGLISH    │  │  │  │ GEOGRAPHY  │  │  │ │ LANGUAGES│ │ │
│  │  │            │  │  │  │            │  │  │ │          │ │ │
│  │  ╰────────────╯  │  │  ╰────────────╯  │  │ ╰──────────╯ │ │
│  │                  │  │                  │  │               │ │
│  │  Grammar         │  │  Maps            │  │  Bemba        │ │
│  │  Comprehension   │  │  Climate         │  │  Nyanja       │ │
│  │  15 Topics       │  │  12 Topics       │  │  10 Topics    │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                                 │
│  Cards feature:                                                 │
│  - Hand-drawn SVG borders (3px Ink Black)                      │
│  - Paper White background with 5% noise texture                │
│  - Mustard Yellow hover state                                  │
│  - Burgundy Red "Start Learning" button on selection           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Learning Session Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗ │
│  ║  💻 Computer Studies > Hardware                  🏠  ⚙️  ║ │
│  ╚═══════════════════════════════════════════════════════════╝ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  TOPIC: Central Processing Unit (CPU)                     │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │                                                           │ │
│  │  ╭─────────────────────────────────────────────────────╮ │ │
│  │  │ The CPU is like the BRAIN of the computer! 🧠      │ │ │
│  │  │                                                     │ │ │
│  │  │ It does three main things:                         │ │ │
│  │  │                                                     │ │ │
│  │  │ 1. FETCH - Gets instructions from memory           │ │ │
│  │  │ 2. DECODE - Figures out what they mean             │ │ │
│  │  │ 3. EXECUTE - Carries out the instructions          │ │ │
│  │  │                                                     │ │ │
│  │  │ Think of it like following a recipe:               │ │ │
│  │  │ - You read the recipe (FETCH)                      │ │ │
│  │  │ - You understand the steps (DECODE)                │ │ │
│  │  │ - You cook the dish (EXECUTE)                      │ │ │
│  │  ╰─────────────────────────────────────────────────────╯ │ │
│  │                                                           │ │
│  │  [Mr. Dongo Dongo peeking from corner with thumbs up] 👍 │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  QUIZ TIME!                                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  What does the 'F' in Fetch-Decode-Execute stand for?    │ │
│  │                                                           │ │
│  │  ○ (A) Find                                               │ │
│  │  ● (B) Fetch  ← Correct! Great job! 🎉                   │ │
│  │  ○ (C) Format                                             │ │
│  │  ○ (D) Finish                                             │ │
│  │                                                           │ │
│  │  [Next Question ➤]                                        │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## Settings/Accessibility Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗ │
│  ║  ⚙️ Settings                                     🏠  👤  ║ │
│  ╚═══════════════════════════════════════════════════════════╝ │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  APPEARANCE                                                     │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Mascot Name:                                             │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │ Mr. Dongo Dongo                                     │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  │  [Save Changes]                                           │ │
│  │                                                           │ │
│  │  ☑ Enable Animations                                      │ │
│  │  ☐ Reduced Motion (for accessibility)                     │ │
│  │                                                           │ │
│  │  Theme: [Standard ▼]  [High Contrast ▼]                  │ │
│  │    Options: Standard, Aquatic, Desert, Dusk, Night Sky   │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ACCESSIBILITY                                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Font Size: [Normal ▼]                                    │ │
│  │    Options: Small, Normal, Large, Extra Large             │ │
│  │                                                           │ │
│  │  ☑ Enable Screen Reader Support (Narrator)                │ │
│  │  ☑ High Contrast Mode Compatible                          │ │
│  │  ☑ Keyboard Navigation Enabled                            │ │
│  │                                                           │ │
│  │  Test Colors:                                             │ │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                    │ │
│  │  │ Black│ │ White│ │ Red  │ │Yellow│                    │ │
│  │  │ 21:1 │ │ Base │ │ 5.9:1│ │ 4.6:1│  ← Contrast ratios│ │
│  │  └──────┘ └──────┘ └──────┘ └──────┘                    │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  LEARNING                                                       │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Current Grade: [Grade 12 ▼]                              │ │
│  │  Preferred Subjects: [Computer Studies, Math]             │ │
│  │                                                           │ │
│  │  Progress Tracking: ☑ Enabled                             │ │
│  │  Daily Reminders: ☑ 4:00 PM                               │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Visual Consistency Checklist

### Applied Throughout All Screens:

- [ ] **Color Palette:** Only Ink Black, Paper White, Burgundy Red, Mustard Yellow
- [ ] **Typography:** Hand-drawn headings, clear sans-serif body text
- [ ] **Borders:** Hand-drawn SVG outlines (2-3px Ink Black)
- [ ] **Backgrounds:** Paper White with 5% noisy paper texture
- [ ] **Buttons:** Burgundy Red fill, Ink Black outline, rounded hand-drawn corners
- [ ] **Icons:** SVG, hand-drawn style, consistent stroke width
- [ ] **Mascot:** Integrated into every screen, contextual animations
- [ ] **Accessibility:** 
  - All text meets 4.5:1 contrast ratio minimum
  - Touch targets minimum 44x44px
  - Keyboard navigation indicators visible
  - High Contrast Mode previews available
  - Screen reader labels on all interactive elements

### Responsive Behavior:

- Layouts adapt to different screen sizes (tablet, desktop, hybrid)
- Mascot scales proportionally without losing detail (SVG advantage)
- Chat bubbles adjust width based on content length
- Font scaling supported up to 200% without breaking layout
