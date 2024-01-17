import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fefefe",
        dark: "#101010",
        primary: {
          DEFAULT: "#276717",
          light: "#2A8512",
          dark: "#123B08",
          darker: "#495514",
        },
        secondary: {
          DEFAULT: "#FF772A",
          light: "#C3C3C3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
