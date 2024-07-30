<script lang="ts">
    // Load TailwindCSS
    import "../app.css"

    import getI18nStore from "$lib/i18n"
    import { setContext } from "svelte"

    // Adapt i18n to usage with SvelteKit (Avoids unwanted syncs between different frontends)
    setContext("i18n", getI18nStore())
</script>

<div class="flex flex-col bg-gray-900 font-nunito text-white">
    <slot />
</div>
