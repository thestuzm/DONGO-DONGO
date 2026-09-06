# Dongo Dongo Copilot - Zambian Learning Platform

A beautifully designed educational platform tailored for Zambian students from Grade 3 to Grade 12, featuring a unique Cuphead-inspired Disney vector art style with film grain textures and organic ink borders.

## Features

### Three Learning Tiers (Difficulty Profiles)

1. **The Gentle Waltz** (Grades 3-6)
   - Playful, colorful interface
   - Voice-first chat interaction
   - Game-based learning
   - Mascot: Professor Whiskers (nerdy owl with glasses & bow tie)

2. **The Midnight Chase** (Grades 7-9)
   - Balanced design maturity
   - Text + tools chat interface
   - Quiz and game hybrid
   - Mascot: Alex the Guide (mature assistant)

3. **The Last Ride** (Grades 10-12)
   - Sophisticated, professional UI
   - Full toolset including calculator, file uploads, chat history management
   - Advanced assessments with leaderboards
   - Mascot: Dr. Sage (wise mentor)

### Zambian Curriculum Subjects

**Tier 1 (Gentle Waltz):** English, Math, Civic Education, Science, Geography, Computer (I.T), Food & Nutrition, Safety, Arts

**Tier 2 (Midnight Chase):** English, Math, Sciences, Business Studies, Safety & First Aid, Computer (I.T), Civic Education, Geography, Design & Technology

**Tier 3 (Last Ride):** English, Math, Advanced Math, Physics, Chemistry, Biology, Design Tech & AI, Computer (I.T), Literature, Geography, Business Education, Business Studies, Arts & Crafts, Safety & First Aid

### Key Components

- **Loading Screen:** Animated startup with progress bar
- **Profile Selection:** Three beautiful difficulty cards
- **Topics Dashboard:** Netflix-style carousel subject browser
- **Chat Interface:** Mascot-powered assistant with age-appropriate tools
- **Quiz Section:** Games and assessments tailored to each tier

## Design Philosophy

- **Vector-based edges:** Clean, smooth outlines like Adobe Illustrator
- **Disney-style aesthetics:** Playful yet sophisticated
- **Film grain overlay:** 600 DPI texture effect for depth
- **Organic shapes:** Wobbly, hand-drawn border radius
- **Rubber hose animations:** Bouncy, elastic transitions
- **Watercolor fills:** Subtle gradient backgrounds

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Framer Motion for animations
- TailwindCSS for styling
- Zustand for state management
- Lucide React for icons

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Deploy to Netlify
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── Mascot.tsx          # Animated mascot with emotions
│   ├── LoadingScreen.tsx   # Startup loading animation
│   ├── ProfileSelect.tsx   # Difficulty selection screen
│   ├── NavBar.tsx          # Bottom navigation
│   ├── TopicsDashboard.tsx # Subject browser (Netflix-style)
│   ├── ChatInterface.tsx   # Mascot chat with tools
│   └── QuizSection.tsx     # Games and assessments
├── hooks/
│   └── useStore.ts         # Zustand state management
├── data/
│   └── curriculum.ts       # Zambian curriculum data
├── styles/
│   └── global.scss         # Custom CSS with animations
├── App.tsx                 # Main application
└── main.tsx               # Entry point
```

## License

MIT
