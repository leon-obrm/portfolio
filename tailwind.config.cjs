/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                // Primary
                "primary-900": "#05423E",
                "primary-800": "#0F675B",
                "primary-700": "#1B9883",
                "primary-600": "#28BD9B",
                "primary-500": "#47D1AC",
                "primary-400": "#7DE3CB",
                "primary-300": "#A8F0E1",
                "primary-200": "#CEF8F1",
                "primary-100": "#ECFDFC",

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
                    primary: "#47D1AC",
                    "primary-focus": "#28BD9B",
                    "primary-content": "#ECFDFC",

                    // Secondary
                    secondary: "#FF385C",
                    "secondary-focus": "#E51A3E",
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
