<script lang="ts">
    import { getContext } from "svelte"
    import { slide, scale, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings, palettes } from "./store"
    import { PaletteCreator } from "./PaletteCreator"
    import Color from "./Color.svelte"
    import type { StateChange } from "$lib/interfaces"

    const navigate: (stateChange: StateChange) => void = getContext("navigate")

    export let index: number

    $: isFocused = false && index === $page.data.focusedPalette

    const paletteCreator = new PaletteCreator()

    $: palettes.update((prev) => {
        return {
            ...prev,
            [index]: paletteCreator.createPalette(
                $page.data.mainColor[index],
                $page.data.hueRotationAmount[index]
            ),
        }
    })

    function changeFocusedPalette() {
        const newStateChange: StateChange = {
            type: "focus",
            focusedPalette: index,
        }

        navigate(newStateChange)
    }

    // TODO: Improve performance by only updating hues when hue rotation amount changes
</script>

<div in:slide={{ delay: 550 }} class="m-3 flex flex-col items-start gap-2">
    <button class="pl-1.5 text-xl font-bold" on:click={changeFocusedPalette}>Primary</button>
    <div
        class={`flex w-full items-start gap-0 transition-[height] duration-1000 ${
            isFocused ? "h-80 outline outline-primary" : "h-32"
        } ${$colorSettings.showGap && "!gap-1.5"}`}
    >
        {#if $palettes[index].length === 0}
            <p>Loading</p>
        {/if}

        {#each $palettes[index] as color, colorIndex}
            <Color
                {isFocused}
                color={colorIndex === 4 ? $page.data.mainColor[index] : color}
                index={colorIndex}
            />
        {/each}
    </div>
</div>
