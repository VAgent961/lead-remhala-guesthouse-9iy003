import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#5D4037",
  "secondary": "#8D9E71",
  "accent": "#D4A373",
  "background": "#FDFBF7",
  "surface": "#FFFFFF",
  "ink": "#2C2C2C",
  "muted": "#A0A0A0",
  "dark": "#1A1A1A"
},
      fontFamily: {
  "heading": [
    "Playfair Display",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
