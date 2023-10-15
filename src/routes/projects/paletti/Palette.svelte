<script lang="ts">
    import { getContext } from "svelte"
    import { slide, scale, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings, palettes } from "./store"
    import Color from "./Color.svelte"

    const focusPalette: (index: number) => void = getContext("focusPalette")

    export let index: number

    $: isFocused = false && index === $page.data.focusedPalette
</script>

<div in:slide={{ delay: 550 }} class="m-3 flex flex-col items-start gap-2">
    <button
        class="pl-1.5 text-xl font-bold"
        on:click={() => {
            focusPalette(index)
        }}>Primary</button
    >
    <div
        class={`flex w-full items-start gap-0 transition-[height,gap] ${
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
