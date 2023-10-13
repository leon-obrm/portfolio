<script lang="ts">
    import { slide, scale, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings, colors } from "./store"
    import { PaletteCreator } from "./PaletteCreator"
    import Color from "./Color.svelte"

    export let isFocused: boolean

    const paletteCreator = new PaletteCreator()

    $: colors.set(paletteCreator.createPalette($page.data.mainColor, $page.data.hueRotationAmount))

    // TODO: Improve performance by only updating hues when hue rotation amount changes
</script>

<div in:slide={{ delay: 550 }} class="m-3 flex flex-col gap-2">
    <h1 class="pl-1.5 text-xl font-bold">Primary</h1>
    <div
        class={`flex w-full items-start gap-0 transition-[height] duration-1000 ${
            isFocused ? "h-80" : "h-32"
        } ${$colorSettings.showGap && "!gap-1.5"}`}
    >
        {#if $colors.length === 0}
            <p>Loading</p>
        {/if}

        {#each $colors as color, index}
            <Color {isFocused} color={index === 4 ? $page.data.mainColor : color} {index} />
        {/each}
    </div>
</div>
