# Dongo Dongo Copilot - Cuphead Edition

A 1930s cartoon-styled educational copilot application inspired by Cuphead's aesthetic, built for Zambian Grade 12 students.

## 🎨 Visual Features

- **Hand-Drawn Ink Borders**: Organic wobbly borders using asymmetric border-radius
- **Watercolor Fill Effects**: Radial gradients with vintage color palette
- **Rubber-Hose Animations**: Custom bezier curves for 1930s cartoon bounce
- **Film Grain Overlay**: SVG noise filter with animated grain shift
- **Paper Texture**: 8% opacity noise overlay on all surfaces
- **Squash & Stretch**: Interactive hover/press states with scale transformations
- **Ink Bleed Shadows**: Multi-layer shadows for depth

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
DongoDongo-Cuphead/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # React entry point
│   ├── components/
│   │   ├── NavBar.tsx          # Animated navigation bar
│   │   ├── TopicDashboard.tsx  # Topic cards with progress
│   │   ├── ChatInterface.tsx   # Chat bubbles with ink effects
│   │   └── MascotOverlay.tsx   # Animated mascot character
│   └── styles/
│       └── global.scss         # Design system & mixins
├── dist/                       # Production build output
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Tech Stack

- **React 19** with TypeScript
- **Vite** for blazing fast builds
- **Sass/SCSS** for advanced styling
- **Framer Motion** for rubber-hose animations
- **Three.js** for 3D background effects
- **SVG Filters** for film grain and ink effects

## 🎨 Design System

### Color Palette (WCAG 2.1 AA Compliant)
- **Ink Black**: `#1a1a1a` - Primary text and borders
- **Paper White**: `#f4e4c1` - Background base
- **Burgundy Red**: `#8b1538` - Accents and highlights
- **Mustard Yellow**: `#d4a017` - Secondary accents

### Typography
- Primary: 'Courier New', monospace (typewriter aesthetic)
- Headings: Bold, hand-drawn feel
- Body: Readable monospace for educational content

### Animation Curves
- Rubber-hose bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Smooth ease: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

## 📦 Build Output

Production build generates:
- `dist/index.html` - Entry HTML file
- `dist/assets/index.[hash].js` - Minified JavaScript bundle (~1.36 MB)
- `dist/assets/index.[hash].css` - Minified CSS bundle (~2.51 KB)

## 🌐 Deployment

The `dist/` folder contains all production-ready files. Deploy to any static hosting:

- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect repository and set build command to `npm run build`
- **GitHub Pages**: Push `dist/` to gh-pages branch
- **Azure Static Web Apps**: Configure build output to `dist`

## 🎮 Interactive Features

1. **Navigation Bar**: Wobbly hover effects with ink bleed shadows
2. **Topic Cards**: Progress bars with watercolor fills
3. **Chat Interface**: Hand-drawn chat bubbles with contextual mascot reactions
4. **Mascot Overlay**: 4 animation states (idle, thinking, happy, explaining)

## ♿ Accessibility

- WCAG 2.1 AA contrast ratios maintained throughout
- Keyboard navigation support
- Screen reader friendly structure
- Reduced motion option via CSS media query

## 📝 License

Educational project for Zambian Grade 12 students.

---

**Built with ❤️ for Dongo Dongo**
