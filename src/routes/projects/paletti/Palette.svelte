<script lang="ts">
    import { page } from "$app/stores"
    import { colorSettings, colors } from "./store"
    import { PaletteCreator } from "./PaletteCreator"
    import Color from "./Color.svelte"

    const paletteCreator = new PaletteCreator()

    $: colors.set(paletteCreator.createPalette($page.data.mainColor, $page.data.hueRotationAmount))

    // TODO: Improve performance by only updating hues when hue rotation amount changes
</script>

<div class="m-3">
    <div
        class={`flex w-full items-start gap-0 transition-[gap] ${
            $colorSettings.showGap && "!gap-2"
        }`}
    >
        {#if $colors.length === 0}
            <p>Loading</p>
        {/if}
        {#each $colors as color, index}
            <Color {color} {index} />
        {/each}
    </div>
</div>

<style>
    .test {
    }
</style>
