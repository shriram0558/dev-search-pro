import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1012",
        "secondary-dark": "#1a2329",
        primary: "#fafafa",
        secondary: "#98d6f0"
      }
    },
  },
  plugins: [],
};
export default config;
