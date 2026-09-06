# Dongo Dongo - Development Assumptions & Decisions

## Document Purpose
This file records assumptions made during autonomous development to ensure transparency and provide context for future iterations.

---

## 1. Curriculum Data Assumptions

### Zambian ECZ Syllabus Coverage
- **Assumption**: The curriculum structure follows the Examination Council of Zambia (ECZ) framework for Grades 3-12.
- **Decision**: Created three distinct tiers with age-appropriate depth levels:
  - Tier 1 (Gentle Waltz): Foundational concepts, visual learning
  - Tier 2 (Midnight Chase): Transitional analytical thinking
  - Tier 3 (Last Ride): Rigorous exam preparation
- **Note**: Actual ECZ syllabi should be validated by education specialists before production deployment.

### Subject Distribution
- **Assumption**: Core subjects (Math, English, Science) appear in all tiers with increasing complexity.
- **Decision**: Specialized subjects (Physics, Chemistry, Biology, Advanced Math) introduced only in Tier 3.

---

## 2. Design System Decisions

### Vector-First Approach
- **Decision**: All icons and decorative elements use inline SVG with `shapeRendering="geometricPrecision"` for crisp edges at any zoom level.
- **Rationale**: Eliminates raster artifacts, aligns with "600 DPI vector craft" requirement.

### Texture Implementation
- **Decision**: Paper grain implemented via SVG `<feTurbulence>` filter at 4% opacity using `mix-blend-mode: multiply`.
- **Rationale**: Avoids PNG texture pixelation while maintaining gritty aesthetic.

### Color Palette
- **Decision**: Vintage 1930s palette with 6 core colors:
  - Ink Black (#1D3557), Paper White (#F1FAEE), Burgundy (#E63946)
  - Mustard (#FFB703), Sage (#A8DADC), Ocean (#457B9D)
- **Rationale**: Evokes Cuphead era while maintaining accessibility contrast ratios.

---

## 3. Profile Tier Differentiation

### UI Density Scaling
- **Decision**: CSS custom properties dynamically adjust:
  - Font size (18px → 16px → 14px)
  - Touch targets (64px → 48px → 44px)
  - Animation physics (stiffness: 250 → 400)
- **Rationale**: Age-appropriate interaction patterns without code duplication.

### Feature Availability
- **Decision**: Progressive feature unlock:
  - Tier 1: Voice input primary, minimal tools
  - Tier 2: Text + voice, file uploads, calculator
  - Tier 3: Full toolbar including history management
- **Rationale**: Matches cognitive development and user autonomy expectations.

---

## 4. Mascot Persona System

### Character Evolution
- **Decision**: Single character lineage aging across tiers:
  - Professor Whiskers (child with glasses/bowtie)
  - Alex (teen in smart jacket)
  - Dr. Sage (adult professional)
- **Rationale**: Creates emotional continuity while respecting user maturity.

### Animation Implementation
- **Decision**: Used Framer Motion springs (`stiffness: 250, damping: 12`) for squash-and-stretch physics.
- **Rationale**: Achieves rubber-hose cartoon bounce without linear easing.

---

## 5. Technical Architecture

### State Management
- **Decision**: Zustand with persistence middleware for profile selection.
- **Rationale**: Minimal boilerplate, TypeScript-first, built-in localStorage support.

### Component Structure
- **Decision**: Self-contained components with inline styles driven by CSS custom properties.
- **Rationale**: Enables per-profile theming without CSS module complexity.

### Quiz Question Generation
- **Assumption**: Mock questions demonstrate tier-appropriate difficulty.
- **Decision**: Implemented `generateQuizQuestions()` function as placeholder for real question bank.
- **Note**: Production requires integration with actual ECZ past papers and assessment database.

---

## 6. Accessibility Considerations

### Reduced Motion
- **Decision**: `@media (prefers-reduced-motion)` query disables all animations.
- **Rationale**: WCAG 2.1 compliance for vestibular disorders.

### Focus States
- **Decision**: All interactive elements have `:focus-visible` outlines (3px solid accent color).
- **Rationale**: Keyboard navigation support without visual clutter for mouse users.

### Touch Targets
- **Decision**: Minimum 44px touch targets enforced via CSS custom properties.
- **Rationale**: WCAG 2.1 AAA compliance for motor accessibility.

---

## 7. Known Limitations

### Voice Input
- **Limitation**: Web Speech API browser support varies.
- **Fallback**: Graceful alert message if unsupported; text input always available.

### Chat Intelligence
- **Limitation**: Current responses are static templates.
- **Future**: Requires LLM integration or rule-based dialog system for genuine tutoring.

### Progress Tracking
- **Limitation**: Mock progress values in TopicDashboard.
- **Future**: Requires backend integration for persistent user progress storage.

---

## 8. Build Configuration

### Dependencies Added
- `zustand` - State management
- `framer-motion` - Animation engine

### Bundle Optimization
- Production build: ~200KB total (gzipped)
- Code splitting: Vendor chunk separated for caching efficiency

---

*Last Updated: Autonomous Build Phase*
*Author: Principal Design Engineer AI*
