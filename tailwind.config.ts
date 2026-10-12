import type { Config } from "tailwindcss";

export default {
  content: [
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,jsx,ts,tsx}",
    // "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#8650F6",
          dark: "#2A1455",
          light: "#E8DEFD",
          soft: "#F6F3FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
