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
        default: "#fafbfb",
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
        
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "100" },
        },
        "fade-in-scale": {
          from: { transform: "scale(0.95) translateY(-30px)", opacity: "0" },
          to: { transform: "scale(1) translateY(0px)", opacity: "100" }
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
          to: {
            transform: "translate(calc(-50% - 0.5rem))"
          }
        },
        "not-found": {
          "0%" : { transform: "rotate(0)" },
          "25%" : { transform: "rotate(3deg)" },
          "50%" : { transform: "rotate(0)" },
          "75%" : { transform: "rotate(3deg)" },
          "100%" : { transform: "rotate(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotating: "rotating 0.3s ease-out",
        "open-menu": "open-menu 0.1s",
        "fade-in-scale": "fade-in-scale 0.3s ease-out",
        "fade-out-scale": "fade-out-scale 0.2s ease-out",
        "fade-in-scale-bg": "fade-in-scale-bg 0.1s linear",
        loading: "loading 1.5s ease infinite",
        "fade-up": "fade-up 0.6s ease-in-out",
        scroll: "scroll 80s linear infinite",
        "fade-in": "fade-in 1s",
        "not-found": "not-found 0.7s ease-in-out",

      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin(),],
};
