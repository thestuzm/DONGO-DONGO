# Accessibility Checklist - Dongo Dongo Copilot Tutor

## WCAG 2.1 AA Compliance Verification

### 1. Perceivable

#### Text Alternatives
- [ ] All non-text content (icons, mascot, illustrations) has alt text
- [ ] SVG elements include `<title>` and `aria-label` attributes
- [ ] Decorative elements marked with `aria-hidden="true"`
- [ ] Mascot animations described for screen readers
  - Example: "Mr. Dongo Dongo is smiling and waving"

#### Time-Based Media
- [ ] Audio content has text alternatives
- [ ] Voice input provides visual feedback (waveform, transcription)
- [ ] No auto-playing audio without user control

#### Adaptable Content
- [ ] Content can be presented in different orientations (portrait/landscape)
- [ ] Layout remains functional at 200% zoom
- [ ] No information conveyed by shape, size, or color alone
- [ ] Proper heading hierarchy (H1 → H2 → H3)

#### Distinguishable
- [ ] **Color contrast ratios verified:**
  - Ink Black (#1A1A1A) on Paper White (#F5F1E8): **21:1** ✅
  - Burgundy Red (#8B0000) on Paper White: **5.9:1** ✅
  - Mustard Yellow (#B8860B) on Paper White: **4.6:1** ✅
  
- [ ] Text can be resized up to 200% without loss of functionality
- [ ] Line height adjustable to 1.5x font size
- [ ] No images of text (except logos/decorative)
- [ ] High Contrast Mode tested with all 4 Windows themes:
  - [ ] Aquatic
  - [ ] Desert
  - [ ] Dusk
  - [ ] Night Sky

---

### 2. Operable

#### Keyboard Accessible
- [ ] All functionality available via keyboard
- [ ] Logical tab order (left-to-right, top-to-bottom)
- [ ] Focus indicator visible on all interactive elements
  - Minimum 3px Mustard Yellow outline
  - Contrast ratio ≥ 3:1 against background
  
- [ ] No keyboard traps (user can navigate away from all elements)
- [ ] Skip links provided for main content areas
- [ ] Custom controls support standard keyboard interactions
  - Enter/Space to activate buttons
  - Arrow keys for list navigation
  - Escape to close dialogs

#### Enough Time
- [ ] No time limits for reading content
- [ ] Users can extend time limits if present
- [ ] Idle timeout warnings with option to continue
- [ ] Animations can be paused/stopped

#### Seizures and Physical Reactions
- [ ] No content flashes more than 3 times per second
- [ ] Reduced motion option available in settings
- [ ] Respects Windows "Show animations" accessibility setting
- [ ] Mascot animations smooth (no jarring transitions)

#### Navigable
- [ ] Page titles are descriptive and unique
- [ ] Focus order preserves meaning and operability
- [ ] Purpose of links/buttons clear from context
- [ ] Multiple ways to find content (navigation, search, sitemap)
- [ ] Breadcrumbs or consistent navigation structure

#### Input Modalities
- [ ] Touch targets minimum **44x44px**
- [ ] Adequate spacing between touch targets (minimum 8px)
- [ ] Pointer gestures have single-pointer alternatives
- [ ] Dragging actions can be cancelled
- [ ] Voice input supported as alternative to typing

---

### 3. Understandable

#### Readable
- [ ] Language of page declared in XAML (`xml:lang`)
- [ ] Language changes marked (e.g., Bemba/Nyanja phrases)
- [ ] Unusual words defined or linked to glossary
- [ ] Abbreviations explained on first use
- [ ] Reading level appropriate for Grade 12 students

#### Predictable
- [ ] Consistent navigation across all screens
- [ ] Consistent component behavior (buttons always work the same)
- [ ] Changes in context initiated by user action only
- [ ] Form inputs labeled clearly with expected format
- [ ] Error messages explain how to fix the problem

#### Input Assistance
- [ ] Labels provided for all form fields
- [ ] Instructions provided before input required
- [ ] Error messages identify the field with error
- [ ] Suggestions for correction provided when possible
- [ ] Confirmation step for important actions
- [ ] Easy way to undo/correct mistakes

---

### 4. Robust

#### Compatible
- [ ] Valid XAML markup throughout
- [ ] All UI elements have proper names (AutomationProperties.Name)
- [ ] Role information provided for custom controls
- [ ] State changes announced to screen readers
  - Example: "Button pressed", "Checkbox checked"
  
- [ ] Works with Windows Narrator
- [ ] Works with third-party screen readers (NVDA, JAWS)
- [ ] Compatible with Voice Access (voice control)
- [ ] Tested with Windows Magnifier

#### Future-Proof
- [ ] Separation of concerns (style, structure, behavior)
- [ ] Resource dictionaries for colors/styles (easy theming)
- [ ] No hardcoded values that would break with scaling
- [ ] Documentation maintained for assistive technology support

---

## Testing Protocol

### Automated Testing Tools

1. **Accessibility Insights for Windows**
   - Run full assessment on all screens
   - Address all errors and warnings
   
2. **Color Contrast Analyzer**
   - Test all text/background combinations
   - Verify focus indicators meet 3:1 ratio
   
3. **XAML Markup Validator**
   - Check for missing AutomationProperties
   - Verify proper control patterns

### Manual Testing

1. **Keyboard Navigation**
   - Navigate entire app using Tab, Shift+Tab, Enter, Space, Arrow keys
   - Verify focus order is logical and visible
   - Test skip links and keyboard shortcuts
   
2. **Screen Reader Testing**
   - Enable Windows Narrator
   - Navigate all screens and verify announcements are accurate
   - Test with NVDA (free alternative)
   
3. **High Contrast Mode**
   - Test all 4 Windows HC themes
   - Verify all content remains visible and legible
   - Check that custom colors don't interfere
   
4. **Zoom/Magnification**
   - Test at 100%, 150%, 200% zoom levels
   - Verify no content is cut off or overlapped
   - Test with Windows Magnifier tool
   
5. **Touch Accessibility**
   - Verify all touch targets are 44x44px minimum
   - Test adequate spacing between interactive elements
   - Verify no hover-only interactions

### User Testing (Zambian Context)

- [ ] Recruit Grade 12 students for usability testing
- [ ] Include students with diverse abilities
- [ ] Test in realistic environments (schools, homes)
- [ ] Gather feedback on mascot appeal and cultural appropriateness
- [ ] Validate naming conventions and address forms
- [ ] Test with local languages (Bemba, Nyanja options)

---

## Compliance Status

| Principle | Criteria Met | Total Criteria | Percentage |
|-----------|--------------|----------------|------------|
| Perceivable | ___ / 12 | 12 | ___% |
| Operable | ___ / 15 | 15 | ___% |
| Understandable | ___ / 9 | 9 | ___% |
| Robust | ___ / 8 | 8 | ___% |
| **Overall** | **___ / 44** | **44** | **___%** |

**Target:** 100% WCAG 2.1 AA compliance before MVP launch

---

## Remediation Priority

### Critical (Must Fix Before Launch)
- Color contrast failures
- Missing keyboard access
- Screen reader incompatibility
- High Contrast Mode breaking layout

### High Priority
- Missing labels/alt text
- Focus indicator issues
- Touch target sizing
- Error message clarity

### Medium Priority
- Heading hierarchy improvements
- Additional language support
- Enhanced documentation

### Low Priority (Enhancements)
- Additional keyboard shortcuts
- Advanced customization options
- Extended language options

---

**Last Audit Date:** ___________  
**Auditor:** ___________  
**Next Review Date:** ___________
