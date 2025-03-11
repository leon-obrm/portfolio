import defaultTheme from "tailwindcss/defaultTheme"

import { colors } from "./src/lib/colors"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors,
            screens: {
                xs: "500px",
            },
            fontFamily: {
                nunito: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
                "inria-sans": ["Inria Sans", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                "image-glow": "0px 0px 105px rgba(255, 255, 255, 0.15)",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        base: false,
    },
}
