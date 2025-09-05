import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
// Makes sure that lucide-svelte can be used with automatic imports and still have fast reload times
// Auto-updates if lucide is updated (May take a few hours)
import lucidePreprocess from "vite-plugin-lucide-preprocess"

export default defineConfig({
    plugins: [lucidePreprocess(), sveltekit()],
})
