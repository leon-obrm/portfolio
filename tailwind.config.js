import defaultTheme from "tailwindcss/defaultTheme"

import { colors } from "./src/lib/colors"

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors,
            fontFamily: {
                nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
                "inria-sans": ["Inria Sans", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                "image-glow": "0px 0px 105px rgba(255, 255, 255, 0.1)",
            },
        },
    },
    plugins: [],
}
