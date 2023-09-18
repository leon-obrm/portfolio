<script lang="ts">
    import Control from "./Control.svelte"
    import Palette from "./Palette.svelte"
    import { goto } from "$app/navigation"
    import { setContext } from "svelte"

    /** Data from +page.ts (URL parameters) */
    export let data

    function navigate(mainColor?: string, hueRotationAmount?: number) {
        goto(
            `?mainColor=${mainColor ?? data.mainColor}&hueRotationAmount=${
                hueRotationAmount ?? data.hueRotationAmount
            }`
        )
    }

    setContext("navigate", navigate)
    navigate()

    // TODO: Save palette config in URL
    // TODO: Add undo / redo buttons (Might be easy due to state being in URL)
    // TODO: Implement exports (Maybe also to realtimecolors)
    // TODO: Beautify controls
    // TODO: Make responsive
    // TODO: Choose website name
    // TODO: Add favicon
    // TODO: Use theme colors
</script>

<svelte:head>
    <title>Colors</title>
</svelte:head>

<p class="text-xl font-bold">Amazing colors</p>

<Palette />
<Control />
