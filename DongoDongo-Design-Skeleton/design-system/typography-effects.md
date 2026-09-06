# Typography & Visual Effects - Dongo Dongo Copilot Tutor

## Typography

### Font Families

| Element | Font Style | Size | Weight | Line Height |
|---------|------------|------|--------|-------------|
| **Headings** | Hand-drawn Display | 24-32pt | Bold | 1.2 |
| **Body Text** | Clear Sans-Serif | 16-18pt | Regular | 1.5 |
| **UI Labels** | Clean Sans-Serif | 14pt | Medium | 1.4 |
| **Captions** | Simple Sans | 12pt | Regular | 1.3 |

### Accessibility Requirements

- Minimum body text size: 16pt
- Support for Windows font scaling up to 200%
- Adequate letter spacing for dyslexia-friendly reading
- No text conveyed through images alone

## Visual Effects (Cuphead Style)

### 1. Noisy Paper Texture

**Implementation:** SVG `<feTurbulence>` filter
**Opacity:** 5-10% (subtle background layer)
**Purpose:** Creates vintage paper feel without obscuring content

```svg
<filter id="paperTexture">
  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
  <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0"/>
</filter>
```

### 2. Ink Bleed Effect

**Implementation:** CSS blur filter (minimal)
**Usage:** Decorative headings ONLY (not body text)
**Blur Radius:** 0.5-1px maximum

```css
.ink-bleed-heading {
  filter: blur(0.5px);
  text-shadow: 0 0 1px rgba(0,0,0,0.1);
}
```

### 3. Hand-Drawn Outlines

**Implementation:** SVG stroke with variable width
**Color:** Ink Black (#1A1A1A)
**Width:** 2-3px for UI elements, 4-5px for illustrations

## Asset Format Standards

| Asset Type | Format | Reason |
|------------|--------|--------|
| Icons | SVG | Scalable, sharp at any resolution |
| Mascot Animations | SVG Sprites | Lightweight, GPU-accelerated |
| Background Textures | SVG Filters | Procedural, small file size |
| Illustrations | SVG | Vector-based, maintains quality |

## Performance Guidelines

- All animations must be GPU-accelerated via WinUI 3 Visual Layer
- SVG preferred over raster formats (PNG/JPEG)
- Texture opacity kept minimal to avoid visual noise
- Ink bleed effect restricted to non-critical text elements
