import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        sparkle: {
          "0%, 100%": {
            opacity: "0.85",
            transform: "scale(1)",
          },
          "20%": {
            opacity: "0.3",
            transform: "scale(0.95)",
          },
          "40%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
          "60%": {
            opacity: "0.4",
            transform: "scale(0.98)",
          },
          "80%": {
            opacity: "0.9",
            transform: "scale(1.02)",
          },
        },
      },
      animation: {
        sparkle: "sparkle 2.5s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
