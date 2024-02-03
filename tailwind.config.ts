import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary":"#D9D9D9",
        "secondary":"#0057FF",
        "third":"#0C1523",
        "fourth":"#000000",
        "co-primary":"#FFFF",
        "co-secondary":"#0057FF",
        "co-third":"#0C1523"
      },
    },
  },
  plugins: [],
};
export default config;
