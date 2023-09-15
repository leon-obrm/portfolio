<script lang="ts">
    import Control from "./Control.svelte"
    import Palette from "./Palette.svelte"

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
