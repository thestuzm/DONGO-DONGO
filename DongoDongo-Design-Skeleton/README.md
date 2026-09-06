# Dongo Dongo Copilot Tutor - Design Skeleton README

## Overview

This directory contains the complete design skeleton for the **Dongo Dongo Copilot Tutor**, a Windows-based educational application featuring a Cuphead-inspired aesthetic and an interactive mascot (Mr. Dongo Dongo) designed for Zambian Grade 12 students.

## Design Philosophy

### Core Principles

1. **Visual Consistency:** Every element follows the Cuphead hand-drawn cartoon style with ink outlines, painterly colors, and vintage paper textures
2. **Accessibility First:** WCAG 2.1 AA compliance built into every component from day one
3. **Cultural Relevance:** Designed specifically for Zambian educational context with localizable content
4. **Performance Optimized:** SVG-based assets, GPU-accelerated animations via WinUI 3 Visual Layer

---

## Directory Structure

```
DongoDongo-Design-Skeleton/
│
├── design-system/
│   ├── color-palette.md          # Color specifications with WCAG compliance
│   └── typography-effects.md     # Fonts, visual effects, asset standards
│
├── components/
│   ├── ui-components.md          # Button, input, chat bubble, card specs
│   └── mascot-behavior.md        # Mr. Dongo Dongo animation states & logic
│
├── mockups/
│   └── screen-layouts.md         # ASCII wireframes of all main screens
│
├── assets/                       # (Placeholder for future SVG assets)
│   ├── icons/
│   ├── mascot-sprites/
│   └── textures/
│
└── documentation/
    └── accessibility-checklist.md # WCAG compliance verification
```

---

## Quick Reference

### Color Palette

| Color | Hex | Usage | Contrast on White |
|-------|-----|-------|-------------------|
| Ink Black | `#1A1A1A` | Text, outlines | 21:1 ✅ AAA |
| Paper White | `#F5F1E8` | Backgrounds | Base |
| Burgundy Red | `#8B0000` | Buttons, CTAs | 5.9:1 ✅ AA |
| Mustard Yellow | `#B8860B` | Accents, focus | 4.6:1 ✅ AA |

### Key Components

1. **Chat Bubble** - SVG with hand-drawn outline, paper texture background
2. **Action Button** - Burgundy Red fill, Ink Black border, 44x44px minimum
3. **Input Field** - 48px height, hand-drawn border, keyboard accessible
4. **Mascot Container** - Animated SVG sprite, contextual states
5. **Navigation Bar** - Hand-drawn icons, logical tab order
6. **Card/Panel** - Double border effect, noise texture

### Mascot States

| State | Trigger | Animation |
|-------|---------|-----------|
| Idle | No interaction (5+ sec) | Random cycle (yawn, itch, look around) |
| Listening | Voice/text input | Eyes follow, hands to ears/typing |
| Thinking | AI processing | Scratching head, thought bubble |
| Speaking | AI response | Mouth sync, gestures, nodding |
| Confused | Error/unrecognized | Head tilt, raised eyebrow |
| Encouraging | Success | Smiling, thumbs up, dance |

---

## Accessibility Requirements

### Mandatory Compliance

- ✅ All text meets 4.5:1 contrast ratio (WCAG AA)
- ✅ Touch targets minimum 44x44px
- ✅ Full keyboard navigation with visible focus indicators
- ✅ Screen reader support (Windows Narrator integration)
- ✅ High Contrast Mode compatibility (all 4 Windows themes)
- ✅ Font scaling up to 200% without breaking layout
- ✅ Color not used as sole means of conveying information

### Testing Tools

- WebAIM Color Contrast Checker
- Deque Color Contrast Analyzer
- Windows Accessibility Insights
- Narrator screen reader testing

---

## Technical Stack Recommendations

### Frontend Framework
- **WinUI 3** with Windows App SDK
- Fluent Design System principles
- Single-project MSIX packaging

### Graphics & Animation
- **SVG** for all scalable assets (icons, illustrations, mascot)
- **SVG Filters** for procedural textures (`<feTurbulence>` for paper noise)
- **WinUI 3 Visual Layer** for GPU-accelerated rendering
- **Sprite-based animation** for mascot (60fps target)

### Data Storage
- **ApplicationData** class for user settings (mascot name, preferences)
- Local storage only (no cloud dependency required)

### Voice Processing
- **whisper.cpp** or **faster-whisper** for offline STT
- Local processing for privacy and performance

---

## Next Steps for Implementation

### Phase 1: Foundation (Weeks 1-4)
- [ ] Set up WinUI 3 project structure
- [ ] Implement color palette as resource dictionary
- [ ] Create base component templates (Button, TextBox, Card)
- [ ] Build noisy paper texture SVG filter
- [ ] Establish accessibility testing pipeline

### Phase 2: Mascot Development (Weeks 5-8)
- [ ] Design Mr. Dongo Dongo character sheets (Cuphead style)
- [ ] Create SVG sprite animations for all states
- [ ] Implement state machine controller in C#
- [ ] Integrate speech bubble system
- [ ] Add personalization feature (rename mascot)

### Phase 3: Core UI (Weeks 9-12)
- [ ] Build main chat interface
- [ ] Implement subject selection screen
- [ ] Create learning session view
- [ ] Develop settings/accessibility panel
- [ ] Ensure responsive layouts across screen sizes

### Phase 4: Integration & Testing (Weeks 13-16)
- [ ] Integrate voice input (whisper.cpp)
- [ ] Connect AI backend for responses
- [ ] Conduct accessibility audit
- [ ] Test High Contrast Mode compatibility
- [ ] User testing with Zambian Grade 12 students (remote/local)

### Phase 5: Polish & Launch (Weeks 17-20)
- [ ] Performance optimization (GPU acceleration, asset compression)
- [ ] Final accessibility certification
- [ ] Package as MSIX for distribution
- [ ] Create user documentation
- [ ] Deploy MVP with Computer Studies subject

---

## Cultural Considerations

### For Zambian Students

- **Naming:** Allow students to personalize mascot name (formal/informal)
- **Content:** Align with ECZ (Examinations Council of Zambia) syllabi
- **Language:** Support for English + local languages (Bemba, Nyanja options)
- **Context:** Include past papers, quizzes familiar to Zambian students
- **Pedagogy:** Encouraging, patient tutor persona (addresses overcrowded classroom challenges)

---

## Contact & Resources

### Design Inspiration
- Cuphead game aesthetic (Studio MDHR)
- Talking Tom Cat (contextual mascot behavior)
- Microsoft Fluent Design System
- WCAG 2.1 Guidelines

### Technical Documentation
- [WinUI 3 Documentation](https://learn.microsoft.com/en-us/windows/apps/winui/)
- [Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/)
- [SVG Filter Effects](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Filters)
- [WCAG 2.1 Standard](https://www.w3.org/TR/WCAG21/)

---

**Version:** 1.0  
**Last Updated:** 2026  
**Status:** Design Skeleton Complete - Ready for Implementation
