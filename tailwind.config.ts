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
      colors: {
        brand: {
          DEFAULT: "#29AA00",
          50: "#E1F7D1",
          100: "#C4EFB3",
          200: "#9DE48D",
          300: "#77D967",
          400: "#50CE41",
          500: "#29AA00",
          600: "#1F8000",
          700: "#165600",
          800: "#0C2C00",
          900: "#020200",
        },
      },
    },
  },
  plugins: [],
};
export default config;
