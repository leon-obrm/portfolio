<script lang="ts">
    import ScrollUpButton from "./ScrollUpButton.svelte"
    import BackgroundBlur from "./BackgroundBlur.svelte"
    import MouseFollow from "./MouseFollow.svelte"

    // Load TailwindCSS
    import "../app.css"

    import getI18nStore from "$lib/i18n"
    import { setContext } from "svelte"

    // Adapt i18n to usage with SvelteKit (Avoids unwanted syncs between different frontends)
    setContext("i18n", getI18nStore())

    // ======== Enhancements ========
    // TODO: Add scroll up button
    // TODO: Add visual email confirmation
    // TODO: Add project intros
    // TODO: Add in view transitions / animations

    // ======== Bug Fixes ========
    // FIXME:? Zooming on laptop touchpad creates white vignette
</script>

<ScrollUpButton />

<BackgroundBlur />

<MouseFollow />

<div class="relative flex w-full flex-col overflow-clip font-nunito text-white">
    <slot />
</div>
