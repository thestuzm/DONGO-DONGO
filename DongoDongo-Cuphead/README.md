# Dongo Dongo Copilot - Cuphead Style Educational App

A 1930s cartoon-styled educational tutor application for Zambian Grade 12 students, inspired by the visual aesthetic of Cuphead.

## 🎨 Visual Features

- **Hand-drawn Ink Borders**: Organic, wobbly borders that mimic 1930s animation
- **Watercolor Textures**: Subtle paper grain and watercolor fill effects
- **Rubber Hose Animations**: Bouncy, elastic transitions and movements
- **Vintage Color Palette**: Ink Black, Paper White, Burgundy Red, Mustard Yellow
- **Animated Mascot**: "Dongo" the owl with 8 emotional states

## 🛠️ Tech Stack

- **Runtime**: Electron (v44)
- **Frontend**: React 19 + TypeScript
- **Styling**: SCSS with custom mixins for Cuphead effects
- **Build**: Webpack 5
- **Platform**: Windows (NSIS installer)

## 📁 Project Structure

```
DongoDongo-Cuphead/
├── src/
│   ├── main/           # Electron main process
│   │   ├── main.js
│   │   └── preload.js
│   └── renderer/       # React frontend
│       ├── components/ # UI components
│       │   ├── NavBar.tsx
│       │   ├── TopicDashboard.tsx
│       │   ├── ChatInterface.tsx
│       │   └── MascotOverlay.tsx
│       ├── styles/     # SCSS styles
│       │   ├── global.scss
│       │   └── components.scss
│       ├── App.tsx
│       └── index.tsx
├── public/
│   └── assets/         # Images, fonts, textures
├── package.json
├── webpack.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
cd DongoDongo-Cuphead
npm install
```

### Development

```bash
npm start
```

This will:
1. Start webpack in watch mode
2. Launch the Electron app
3. Open DevTools automatically

### Production Build

```bash
npm run build
```

Output will be in the `release/` folder as a Windows installer.

## 🎭 Mascot States

The owl mascot "Dongo" has 8 animated states:
- **Idle**: Gentle breathing animation
- **Happy**: Smiling on dashboard
- **Teaching**: Speech bubble in chat
- **Thinking**: Looking sideways with thought bubbles
- **Excited**: Flapping wings
- **Celebrating**: Jumping animation
- **Confused**: Tilting head
- **Sleeping**: Closed eyes (after inactivity)

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ink Black | #1a1a1a | Borders, text |
| Paper White | #f5f1e8 | Backgrounds |
| Burgundy Red | #8b1538 | Primary actions |
| Mustard Yellow | #d4a017 | Highlights |
| Vintage Cream | #f9f4e6 | Main background |
| Watercolor Blue | #4a6fa5 | Secondary accents |
| Sepia Tone | #704214 | Muted text |

### Key Effects
- **Ink Border**: Asymmetric border-radius for hand-drawn look
- **Paper Noise**: SVG turbulence filter at 8% opacity
- **Rubber Easing**: cubic-bezier(0.68, -0.55, 0.265, 1.55)
- **Watercolor Fill**: Radial gradients + noise texture

## 📝 Next Steps

1. Add real AI integration (Azure OpenAI / local LLM)
2. Create frame-by-frame sprite animations for mascot
3. Add quiz system with scoring
4. Implement student progress tracking
5. Add local language support (Bemba, Nyanja)
6. Create achievement system with badges

## 📄 License

MIT License - Dongo Dongo Team
