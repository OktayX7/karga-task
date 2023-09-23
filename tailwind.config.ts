import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1800px",
      },
      fontFamily: {
        roboto: ["Roboto Flex", "sans-serif"],
      },

      colors: {
        primary: "#294DFA",
        dark: "#0C0E0F",
        lightDark: "#0B1519",
        secondary: "#4a5568",
        cardBg: "#F5F5F5",
        socialMedia: "#1D284A",
      },
      backgroundImage: {
        "ellipse-left": "url('/assets/ellipse-left.png')",
        "ellipse-mid": "url('/assets/ellipse-mid.png')",
        "ellipse-right": "url('/assets/ellipse-right.png')",
      },
    },
  },
  plugins: [],
};
export default config;
