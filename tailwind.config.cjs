const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        background: {
          100: "hsl(var(--ds-background-100))",
          200: "hsl(var(--ds-background-200))",
        },
        contrast: "hsl(var(--ds-contrast-fg))",
        success: {
          DEFAULT: "var(--geist-success)",
          lighter: "var(--geist-success-lighter)",
          light: "var(--geist-success-light)",
          dark: "var(--geist-success-dark)",
        },
        accents: {
          1: "var(--accents-1)",
          2: "var(--accents-2)",
          3: "var(--accents-3)",
          4: "var(--accents-4)",
          5: "var(--accents-5)",
          6: "var(--accents-6)",
          7: "var(--accents-7)",
          8: "var(--accents-8)",
        },
        gray: {
          100: "hsl(var(--ds-gray-100))",
          200: "hsl(var(--ds-gray-200))",
          300: "hsl(var(--ds-gray-300))",
          400: "hsl(var(--ds-gray-400))",
          500: "hsl(var(--ds-gray-500))",
          600: "hsl(var(--ds-gray-600))",
          700: "hsl(var(--ds-gray-700))",
          800: "hsl(var(--ds-gray-800))",
          900: "hsl(var(--ds-gray-900))",
          1000: "hsl(var(--ds-gray-1000))",
        },
        "gray-alpha": {
          100: "var(--ds-gray-alpha-100)",
          200: "var(--ds-gray-alpha-200)",
          300: "var(--ds-gray-alpha-300)",
          400: "var(--ds-gray-alpha-400)",
          500: "var(--ds-gray-alpha-500)",
          600: "var(--ds-gray-alpha-600)",
          700: "var(--ds-gray-alpha-700)",
          800: "var(--ds-gray-alpha-800)",
          900: "var(--ds-gray-alpha-900)",
          1000: "var(--ds-gray-alpha-1000)",
        },
        blue: {
          100: "hsl(var(--ds-blue-100))",
          200: "hsl(var(--ds-blue-200))",
          300: "hsl(var(--ds-blue-300))",
          400: "hsl(var(--ds-blue-400))",
          500: "hsl(var(--ds-blue-500))",
          600: "hsl(var(--ds-blue-600))",
          700: "hsl(var(--ds-blue-700))",
          800: "hsl(var(--ds-blue-800))",
          900: "hsl(var(--ds-blue-900))",
          1000: "hsl(var(--ds-blue-1000))",
        },
        red: {
          100: "hsl(var(--ds-red-100))",
          200: "hsl(var(--ds-red-200))",
          300: "hsl(var(--ds-red-300))",
          400: "hsl(var(--ds-red-400))",
          500: "hsl(var(--ds-red-500))",
          600: "hsl(var(--ds-red-600))",
          700: "hsl(var(--ds-red-700))",
          800: "hsl(var(--ds-red-800))",
          900: "hsl(var(--ds-red-900))",
          1000: "hsl(var(--ds-red-1000))",
        },
        amber: {
          100: "hsl(var(--ds-amber-100))",
          200: "hsl(var(--ds-amber-200))",
          300: "hsl(var(--ds-amber-300))",
          400: "hsl(var(--ds-amber-400))",
          500: "hsl(var(--ds-amber-500))",
          600: "hsl(var(--ds-amber-600))",
          700: "hsl(var(--ds-amber-700))",
          800: "hsl(var(--ds-amber-800))",
          900: "hsl(var(--ds-amber-900))",
          1000: "hsl(var(--ds-amber-1000))",
        },
        green: {
          100: "hsl(var(--ds-green-100))",
          200: "hsl(var(--ds-green-200))",
          300: "hsl(var(--ds-green-300))",
          400: "hsl(var(--ds-green-400))",
          500: "hsl(var(--ds-green-500))",
          600: "hsl(var(--ds-green-600))",
          700: "hsl(var(--ds-green-700))",
          800: "hsl(var(--ds-green-800))",
          900: "hsl(var(--ds-green-900))",
          1000: "hsl(var(--ds-green-1000))",
        },
        teal: {
          100: "hsl(var(--ds-teal-100))",
          200: "hsl(var(--ds-teal-200))",
          300: "hsl(var(--ds-teal-300))",
          400: "hsl(var(--ds-teal-400))",
          500: "hsl(var(--ds-teal-500))",
          600: "hsl(var(--ds-teal-600))",
          700: "hsl(var(--ds-teal-700))",
          800: "hsl(var(--ds-teal-800))",
          900: "hsl(var(--ds-teal-900))",
          1000: "hsl(var(--ds-teal-1000))",
        },
        purple: {
          100: "hsl(var(--ds-purple-100))",
          200: "hsl(var(--ds-purple-200))",
          300: "hsl(var(--ds-purple-300))",
          400: "hsl(var(--ds-purple-400))",
          500: "hsl(var(--ds-purple-500))",
          600: "hsl(var(--ds-purple-600))",
          700: "hsl(var(--ds-purple-700))",
          800: "hsl(var(--ds-purple-800))",
          900: "hsl(var(--ds-purple-900))",
          1000: "hsl(var(--ds-purple-1000))",
        },
        pink: {
          100: "hsl(var(--ds-pink-100))",
          200: "hsl(var(--ds-pink-200))",
          300: "hsl(var(--ds-pink-300))",
          400: "hsl(var(--ds-pink-400))",
          500: "hsl(var(--ds-pink-500))",
          600: "hsl(var(--ds-pink-600))",
          700: "hsl(var(--ds-pink-700))",
          800: "hsl(var(--ds-pink-800))",
          900: "hsl(var(--ds-pink-900))",
          1000: "hsl(var(--ds-pink-1000))",
        },
      },

      boxShadow: {
        inner: "var(--ds-shadow-inset)",
        border: "var(--ds-shadow-border)",
        small: "var(--ds-shadow-small)",
        ["border-small"]: "var(--ds-shadow-border-small)",
        ["input-ring"]: "var(--ds-shadow-input-ring)",
        medium: "var(--ds-shadow-medium)",
        large: "var(--ds-shadow-large)",
        ["border-large"]: "var(--ds-shadow-border-large)",
        tooltip: "var(--ds-shadow-tooltip)",
        menu: "var(--ds-shadow-menu)",
        modal: "var(--ds-shadow-modal)",
        fullscreen: "var(--ds-shadow-fullscreen)",
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "spinner-spin": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.15" },
        },
        "copy-button-fadeIn": {
          "0%": { opacity: "0", scale: "0.5" },
          "100%": { opacity: "1", scale: "1" },
        },
        "copy-button-fadeOut": {
          "0%": { opacity: "1", scale: "1" },
          "100%": { opacity: "0", scale: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "spinner-spin": "spinner-spin 1.2s linear infinite",
        "copy-button-fadeIn": "copy-button-fadeIn 150ms ease-out forwards",
        "copy-button-fadeOut": "copy-button-fadeOut 150ms ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
