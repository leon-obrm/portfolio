import { colors } from "./src/lib/colors"

const gray = colors.gray
const primary = colors.primary

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
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
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],

                    // Primary
                    primary: "#52AEE0",
                    "primary-focus": "#2B95CA",
                    "primary-content": "#E5F8FF",

                    // Secondary
                    secondary: "#FF385C",
                    "secondary-focus": "#E51A3C",
                    "secondary-content": "#FFEBEB",

                    // Gray
                    neutral: "#383D47",
                    "neutral-focus": "#222933",
                    "neutral-content": "#F7F8FB",
                },
            },
        ],
    },
}
