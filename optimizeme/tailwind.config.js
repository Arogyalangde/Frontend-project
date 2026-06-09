export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b', // Deep zinc dark mode
        panel: '#18181b',      // Slightly lighter card panels
        accent: '#10b981',     // Emerald green for optimal performance scores
        warning: '#f59e0b',    // Amber for moderate performance
        danger: '#ef4444',     // Red for poor performance
      },
    },
  },
  plugins: [],
}