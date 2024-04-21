const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", flowbite.content(),],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        default: "#fafafb",
        primary: "#09090b",
        secondary: "#7070FF"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        rotating: {
          "0%": { transform: "rotate(0)" },
          "20%": { transform: "rotate(14deg)" },
          "100%": { transform: "rotate(0)" },
        },
        "open-menu": {
          from: { transform: "rotate(45deg)", opacity: "50" },
          to: { transform: "rotate(90deg)", opacity: "100" },
        },
        "close-menu": {
          from: { opacity: "0" },
          to: { opacity: "100" },
        },
        "fade-in-scale": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "100" }
        },
        "fade-out-scale": {
          from: { transform: "scale(1)", opacity: "100" },
          to: { transform: "scale(0.9)", opacity: "0" }
        },
        "fade-in-scale-bg": {
          from: { opacity: "0" },
          to: { opacity: "100" }
        },
        loading: {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { transform: "translateY(-15px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "100" },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotating: "rotating 0.3s ease-out",
        "open-menu": "open-menu 0.1s",
        "close-menu": "close-menu 0.1s",
        "fade-in-scale": "fade-in-scale 0.2s ease-in",
        "fade-out-scale": "fade-out-scale 0.2s ease-out",
        "fade-in-scale-bg": "fade-in-scale-bg 0.1s linear",
        loading: "loading 1.5s ease infinite",
        "fade-up": "fade-up 0.6s ease-in-out",
        scroll: 'scroll 40s linear infinite',

      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin(),],
};
