<script lang="ts">
    import BackgroundBlur from "./BackgroundBlur.svelte"

    // Load TailwindCSS
    import "../app.css"

    import getI18nStore from "$lib/i18n"
    import { setContext } from "svelte"

    // Adapt i18n to usage with SvelteKit (Avoids unwanted syncs between different frontends)
    setContext("i18n", getI18nStore())

    // TOOD: Add links: "Leon Obermann" --> Top of page    &    "Contact me" --> Contact
    // TODO: Add in view transitions / animations
    // FIXME: Skill section lags
    // FIXME: Zooming on laptop touchpad creates white vignette
</script>

<BackgroundBlur />

<div class="relative flex w-full flex-col overflow-clip font-nunito text-white">
    <slot />
</div>
