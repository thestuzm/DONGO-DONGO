/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1a1a1a',
        'paper-white': '#f5f1e8',
        'burgundy-red': '#8b1538',
        'mustard-yellow': '#d4a017',
        'vintage-cream': '#e8dcc5',
        'charcoal': '#36454f',
      },
      fontFamily: {
        'handwritten': ['"Comic Sans MS"', '"Chalkboard SE"', 'sans-serif'],
        'display': ['"Impact"', '"Arial Black"', 'sans-serif'],
      },
      borderRadius: {
        'organic': '255px 15px 225px 15px / 15px 225px 15px 255px',
        'wobbly': '245px 15px 235px 25px / 25px 215px 15px 245px',
      },
      animation: {
        'wobble': 'wobble 2s ease-in-out infinite',
        'bounce-custom': 'bounce-custom 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'grain': 'grain 0.5s steps(10) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'bounce-custom': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.85)' },
        },
        grain: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '10px 10px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
