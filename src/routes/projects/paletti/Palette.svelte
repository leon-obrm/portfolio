<script lang="ts">
    import { getContext, onMount } from "svelte"
    import { slide, scale, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings, palettes } from "./store"
    import { PaletteCreator } from "./PaletteCreator"
    import Color from "./Color.svelte"

    const changeFocus: (index: number) => void = getContext("changeFocus")

    export let index: number

    $: isFocused = false && index === $page.data.focusedPalette

    const paletteCreator = new PaletteCreator()

    $: palettes.update((prev) => {
        const newPalette: string[] = paletteCreator.createPalette(
            $page.data.mainColor[index],
            $page.data.hueRotationAmount[index]
        )

        prev[index] = newPalette

        console.log(prev.length)

        return prev
    })

    onMount(() => {
        palettes.update((prev) => {
            const newPalette: string[] = paletteCreator.createPalette(
                $page.data.mainColor[index],
                $page.data.hueRotationAmount[index]
            )

            return [...prev, newPalette]
        })
    })

    // TODO: Improve performance by only updating hues when hue rotation amount changes
</script>

<div in:slide={{ delay: 550 }} class="m-3 flex flex-col items-start gap-2">
    <button
        class="pl-1.5 text-xl font-bold"
        on:click={() => {
            changeFocus(index)
        }}>Primary</button
    >
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
