/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                // Primary
                // "primary-900": "#05423E",
                // "primary-800": "#0F675B",
                // "primary-700": "#1B9883",
                // "primary-600": "#28BD9B",
                // "primary-500": "#47D1AC",
                // "primary-400": "#7DE3CB",
                // "primary-300": "#A8F0E1",
                // "primary-200": "#CEF8F1",
                // "primary-100": "#ECFDFC",
                "primary-900": "#043744",
                "primary-800": "#0C5D6A",
                "primary-700": "#168F9C",
                "primary-600": "#22B8C3",
                "primary-500": "#42D2D7",
                "primary-400": "#67E0E4",
                "primary-300": "#8FE9EF",
                "primary-200": "#BAF1F7",
                "primary-100": "#E7FBFE",

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
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],

                    // Primary
                    // primary: "#47D1AC",
                    // "primary-focus": "#28BD9B",
                    // "primary-content": "#ECFDFC",
                    primary: "#42D2D7",
                    "primary-focus": "#22B8C3",
                    "primary-content": "#E7FBFE",

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
};
