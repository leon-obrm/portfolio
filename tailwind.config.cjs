/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                // Primary
                "primary-900": "#003247",
                "primary-800": "#0A5476",
                "primary-700": "#16709C",
                "primary-600": "#2B95CA",
                "primary-500": "#52AEE0",
                "primary-400": "#7BC5EA",
                "primary-300": "#A6DAF2",
                "primary-200": "#C6EBFA",
                "primary-100": "#E5F8FF",

                // Secondary
                "secondary-900": "#570001",
                "secondary-800": "#880712",
                "secondary-700": "#B80F25",
                "secondary-600": "#E51A3C",
                "secondary-500": "#FF385C",
                "secondary-400": "#FF6680",
                "secondary-300": "#FF99A7",
                "secondary-200": "#FFC7CC",
                "secondary-100": "#FFEBEB",

                // Gray
                "gray-900": "#0F1720",
                "gray-800": "#222933",
                "gray-700": "#383D47",
                "gray-600": "#575B66",
                "gray-500": "#747883",
                "gray-400": "#90949E",
                "gray-300": "#C1C5CD",
                "gray-200": "#E7EAEF",
                "gray-100": "#F7F8FB",

                // Paletti
                "paletti-900": "#330008",
                "paletti-800": "#6D021F",
                "paletti-700": "#A4063A",
                "paletti-600": "#DA0D57",
                "paletti-500": "#EF347C",
                "paletti-400": "#F55F95",
                "paletti-300": "#FB8CB0",
                "paletti-200": "#FEBACC",
                "paletti-100": "#FFEBEE",
            },
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
            {
                paletti: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],

                    // Primary
                    primary: "#EF347C",
                    "primary-focus": "#DA0D57",
                    "primary-content": "#FFEBEE",

                    // Gray
                    neutral: "#383D47",
                    "neutral-focus": "#222933",
                    "neutral-content": "#F7F8FB",
                },
            },
        ],
    },
}
