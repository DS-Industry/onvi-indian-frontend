import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
    },
    colors: {
      white: {
        400: "#C2C2C2",
        500: "#FFF",
        700: "#F5F5F5",
        800: "#9E9E9E",
        900: "#868585",
      },
      green: {
        300: "#80f3e2",
        500: "#2DD4BF",
        600: "#14b8a6",
      },
      red: {
        300: "#FCA5A5",
        400: "#F87171",
        500: "#FF0000",
        600: "#DC2626",
      },
      black: {
        400: "#0A0A0A",
        500: "#000",
      },
      blue: {
        500: "#044557"
      },
      primary: {
        500: "#00A0E3",
        600: "#0073A4",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 750ms linear infinite",
      },
      backgroundImage: {
        'banner-main': "url('/assets/banner.png')",
        'term-main': "url('/assets/terms.jpeg')",
        'privacy-main': "url('/assets/privacy.jpeg')",
        'refund-main': "url('/assets/refund.jpeg')",
        'franchise-main': "url('/assets/franchise1.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
