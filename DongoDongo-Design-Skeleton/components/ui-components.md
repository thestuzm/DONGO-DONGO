# UI Components - Dongo Dongo Copilot Tutor

## Component Library (Cuphead-Themed)

### 1. Chat Bubble

```
┌─────────────────────────────────────╮
│  ╭─────────────────────────────╮   │
│  │ User/AI Message Text       │   │
│  │ (Ink Black on Paper White) │   │
│  ╰─────────────────────────────╯   │
│  ▲                                 │
│  └── Hand-drawn tail pointer       │
└─────────────────────────────────────╯
```

**Properties:**
- SVG-based with hand-drawn outline (3px stroke)
- Noisy paper texture background at 5% opacity
- Ink Black text (#1A1A1A)
- Minimum height: 60px, Maximum width: 80% of container
- Accessible: Proper ARIA labels for screen readers

---

### 2. Action Button

```
╭─────────────────────╮
│   [ BUTTON TEXT ]   │ ← Burgundy Red fill
│                     │    Ink Black outline
╰─────────────────────╯    Hand-drawn corners
```

**States:**
| State | Visual Treatment |
|-------|------------------|
| Default | Burgundy Red (#8B0000), Ink Black outline |
| Hover | Slightly lighter red, subtle scale animation |
| Pressed | Darker red, slight compression effect |
| Disabled | 50% opacity, no interaction |
| Focus | 3px Mustard Yellow outline (accessibility) |

**Accessibility:**
- Minimum touch target: 44x44px
- Keyboard focusable with visible focus indicator
- Contrast ratio: 5.9:1 on Paper White background

---

### 3. Input Field

```
╭─────────────────────────────────────╮
│  Type your question here...         │ ← Ink Black text
╰─────────────────────────────────────╯
     ▲
     └── Hand-drawn underline/border
```

**Properties:**
- Paper White background (#F5F1E8)
- Ink Black border (2px, hand-drawn style)
- Minimum height: 48px for touch accessibility
- Font size: 16pt minimum (prevents iOS zoom)
- Clear focus state with Mustard Yellow highlight

---

### 4. Mascot Container

```
┌──────────────────────────────────────┐
│                                      │
│           [MASCOT SVG]               │
│        (Animated Sprite)             │
│                                      │
│   ╭────────────────────────────╮     │
│   │ "Hello! I'm Mr. Dongo     │     │
│   │  Dongo! Ask me anything!" │     │
│   ╰────────────────────────────╯     │
│                                      │
└──────────────────────────────────────┘
```

**Specifications:**
- SVG sprite-based animations (60fps target)
- Contextual states: Idle, Listening, Thinking, Speaking, Reacting
- Speech bubble integrated with chat system
- GPU-accelerated via WinUI 3 Visual Layer

---

### 5. Navigation Bar

```
┌──────────────────────────────────────────────────────┐
│  🏠 Home    📚 Subjects    ⚙️ Settings    👤 Profile │ ← Ink Black icons
├──────────────────────────────────────────────────────┤
│  (Hand-drawn divider line with ink texture)          │
└──────────────────────────────────────────────────────┘
```

**Requirements:**
- Icons: SVG, hand-drawn style
- Active state: Mustard Yellow underline
- Minimum tap target: 48x48px per item
- Keyboard navigable with logical tab order
- High Contrast Mode compatible

---

### 6. Card/Panel

```
╭─────────────────────────────────────╮
│  ╭───────────────────────────────╮  │
│  │ CARD TITLE                    │  │
│  │                               │  │
│  │ Content area with paper       │  │
│  │ texture background            │  │
│  │                               │  │
│  ╰───────────────────────────────╯  │
╰─────────────────────────────────────╯
```

**Styling:**
- Double border effect (outer: thick ink, inner: thin)
- Paper White background with 5% noise texture
- Drop shadow: subtle, ink-style blur
- Responsive: maintains aspect ratio on resize

---

## Accessibility Compliance Checklist

- [ ] All components support keyboard navigation
- [ ] Focus indicators meet 3:1 contrast ratio
- [ ] Touch targets minimum 44x44px
- [ ] Screen reader labels provided (ARIA/XAML Automation)
- [ ] High Contrast Mode compatibility tested
- [ ] Text can be scaled to 200% without breaking layout
- [ ] Color is not the sole means of conveying information
