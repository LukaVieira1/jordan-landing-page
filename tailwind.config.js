/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7", // primary
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        success: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        warning: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
        error: {
          DEFAULT: "#ef4444",
          dark: "#dc2626",
        },
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
      },
      borderRadius: {
        card: "0.75rem",
      },
      fontSize: {
        "heading-1": ["3.5rem", { lineHeight: "1.2" }],
        "heading-2": ["2.5rem", { lineHeight: "1.3" }],
        "heading-3": ["2rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
