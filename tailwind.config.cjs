import { colors } from "./src/lib/colors"

const gray = colors.gray
const primary = colors.primary

// ==========================================================
// TODO: Make gradient animate while scrolling
// TODO: Add scrolly telling animations
// ==========================================================

// FIXME: Portrait glass background breaks on mobile

// TODO: Add saturated shadow
// TODO: Replace portals with a better solution
// TODO: Adjust link highlighting to match new colors
// TODO: Adjust headline to match new colors
// TODO: Adjust DHBW link to match new colors
// TODO: Add blur to mobile menu (Somehow does not work)

// TODO: Bring glassmorphism to dark mode

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: ["selector", "[data-theme='dark']"],
    theme: {
        extend: {
            colors,
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: primary[500],
                    "primary-content": primary[50],

                    // Tooltip background
                    neutral: gray[800],
                    // Tooltip text
                    "neutral-content": gray[50],

                    // Blank backgrounds
                    "base-100": gray[50],
                    "base-200": gray[100],
                    "base-300": gray[200],

                    // Button text
                    "base-content": gray[950],
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["light"],

                    // Primary
                    primary: primary[600],
                    "primary-content": primary[50],

                    // Tooltip, mockup-code background
                    neutral: gray[800],
                    // Tooltip text
                    "neutral-content": gray[50],

                    // Used for blank backgrounds
                    "base-100": "#000000",
                    "base-200": gray[800],
                    "base-300": gray[700],

                    // Button text
                    "base-content": gray[100],
                },
            },
        ],
    },
}
