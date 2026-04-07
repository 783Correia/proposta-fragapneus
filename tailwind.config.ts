import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#080808",
          yellow: "#F5C800",
          dark: "#101010",
          gray: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        condensed: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
