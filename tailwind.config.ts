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
        cinder: {
          50: "#f5f5fa",
          100: "#e9e9f5",
          200: "#cfd1e8",
          300: "#a4a8d5",
          400: "#737abd",
          500: "#5259a5",
          600: "#3f448a",
          700: "#343770",
          800: "#2e305e",
          900: "#2a2b50",
          950: "#090911",
        },
      },
    },
  },
  plugins: [],
};
export default config;
