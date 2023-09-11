<script lang="ts">
    import type { ColorProps, PaletteConfig } from "$lib/interfaces"
    import Color from "./Color.svelte"
    import { PaletteCreator } from "./PaletteCreator"

    export let paletteConfig: PaletteConfig
    let colors: ColorProps[] = []
    const paletteCreator = new PaletteCreator()

    $: colors = paletteCreator.createPalette(paletteConfig)
    $: console.log("In component: " + paletteConfig)

    // TODO: Improve performance by only updating hues when hue rotation amount changes
</script>

<div class="mt-32 flex w-screen">
    {#if colors.length === 0}
        <p>Loading</p>
    {/if}
    {#each colors as color, index}
        <Color {color} {index} />
    {/each}
</div>
