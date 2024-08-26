<script lang="ts">
    import ScrollUpButton from "./ScrollUpButton.svelte"
    import BackgroundBlur from "./BackgroundBlur.svelte"
    import MouseFollow from "./MouseFollow.svelte"

    // Loads TailwindCSS
    import "../app.css"

    import getI18nStore from "$lib/i18n"
    import { setContext } from "svelte"

    // Adapts i18n to usage with SvelteKit (Avoids unwanted syncs between different frontends)
    setContext("i18n", getI18nStore())

    // ======== Enhancements ========
    // TODO: Decrease opacity of image click indicators on hover

    // ======== Bug Fixes ========
    // FIXME: 404 favicon.ico not found in browser console
    // FIXME: Skill sections lags (Other sections too, but this one is the most noticeable)
    // FIXME:? Zooming on laptop touchpad creates white vignette
</script>

<ScrollUpButton />

<BackgroundBlur />

<MouseFollow />

<div class="relative flex w-full flex-col overflow-clip font-nunito text-white">
    <slot />
</div>
