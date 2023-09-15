<script lang="ts">
    import { paletteConfig } from "./paletteConfigStore"
    import { colorSettings } from "./settingsStore"
    import { PaletteCreator } from "./PaletteCreator"
    import Color from "./Color.svelte"

    let colors: string[] = []
    const paletteCreator = new PaletteCreator()

    $: colors = paletteCreator.createPalette($paletteConfig)

    // TODO: Improve performance by only updating hues when hue rotation amount changes
</script>

<div class={`mt-32 flex w-screen items-start ${$colorSettings.showGap && "gap-2"}`}>
    {#if colors.length === 0}
        <p>Loading</p>
    {/if}
    {#each colors as color, index}
        <Color {color} {index} />
    {/each}
</div>
