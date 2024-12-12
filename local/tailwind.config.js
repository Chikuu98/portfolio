/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E88E5", // A bold blue for primary elements.
        "primary-hover": "#1565C0", // A darker shade for hover effects.
        secondary: "#0A1C2E", // A very dark blue for background.
        "secondary-hover": "#FFFFFF", // A white shade for hover effects.
        text: "#E0E0E0", // A light gray for main text.
        "text-hover": "#90CAF9", // A lighter blue for text hover states.
        accent: "#FF6D00", // A vibrant orange for highlights or calls to action.
        "accent-hover": "#DD4B00", // A darker orange for accent hover effects.
        neutral: "#424242", // A medium gray for dividers and neutral elements.
        "neutral-hover": "#616161", // Slightly lighter gray for hover on neutral elements.
        background: "#0A1C2E", // A near-black background for high contrast.
        "background-alt": "#1C1C1C", // A softer dark gray background for secondary sections.
      },
      animation: {
        'ripple': 'rippleEffect 8s infinite ease-in-out', // Smooth ripple animation
      },
      keyframes: {
        rippleEffect: {
          '0%': {
            transform: 'scale(1)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '25%': {
            transform: 'scale(1.05)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
          },
          '50%': {
            transform: 'scale(1.1)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
          },
          '75%': {
            transform: 'scale(1.05)',
            borderColor: 'rgba(255, 255, 255, 0.6)',
          },
          '100%': {
            transform: 'scale(1)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],
}
