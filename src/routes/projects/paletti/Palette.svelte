<script lang="ts">
    import { getContext } from "svelte"
    import { slide, fade } from "svelte/transition"
    import { page } from "$app/stores"
    import { colorSettings } from "./store"
    import Color from "./Color.svelte"
    import { Pencil, Trash } from "lucide-svelte"

    const focusPalette: (index: number) => void = getContext("focusPalette")
    const deletePalette: (index: number) => void = getContext("deletePalette")

    export let palette: string[]
    export let index: number

    $: isFocused = index === $page.data.focusedPalette
</script>

<div in:slide={{ delay: 550 }} out:fade class="flex w-full flex-col items-start gap-2">
    <div class="flex w-full justify-between">
        <button
            class="pl-1.5 text-xl font-bold"
            on:click={() => {
                focusPalette(index)
            }}
        >
            {$page.data.names[index]}
        </button>
        <div>
            {#if $page.data.mainColors.length >= 2 && index !== $page.data.focusedPalette}
                <button
                    class="btn-sm btn-circle btn"
                    on:click={() => {
                        focusPalette(index)
                    }}
                >
                    <Pencil size={15} />
                </button>
            {/if}
            {#if $page.data.mainColors.length >= 2}
                <button
                    disabled={$page.data.mainColors.length <= 1}
                    class="btn-sm btn-circle btn"
                    on:click={() => {
                        deletePalette(index)
                    }}
                >
                    <Trash size={15} />
                </button>
            {/if}
        </div>
    </div>
    <div
        class={`flex w-full items-start gap-0 transition-[height,gap] ${
            isFocused ? "h-72" : "h-32"
        } ${$colorSettings.showGap && "!gap-1.5"}`}
    >
        {#if palette.length === 0}
            <p>Loading</p>
        {/if}

        {#each palette as color, colorIndex}
            <Color
                {isFocused}
                color={colorIndex === 4 ? $page.data.mainColors[index] : color}
                index={colorIndex}
            />
        {/each}
    </div>
</div>
