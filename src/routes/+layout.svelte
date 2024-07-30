<script lang="ts">
    import BackgroundBlur from "./BackgroundBlur.svelte"

    // Load TailwindCSS
    import "../app.css"

    import getI18nStore from "$lib/i18n"
    import { setContext } from "svelte"

    // Adapt i18n to usage with SvelteKit (Avoids unwanted syncs between different frontends)
    setContext("i18n", getI18nStore())
</script>

<BackgroundBlur />

<div class="flex flex-col font-nunito text-white">
    <slot />
</div>
