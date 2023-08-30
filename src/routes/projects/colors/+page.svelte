<script lang="ts">
    import type { ColorProps } from "$lib/interfaces"
    import { paletteCreator } from "./paletteCreator"
    import Color from "./Color.svelte"

    let changeHueDirection: boolean = false

    let colorPalettes: ColorProps[][] = []
    $: colorPalettes = paletteCreator.createTestPalettes(changeHueDirection)
</script>

<button
    class={`btn fixed top-0 right-0 ${!changeHueDirection ? "bg-green-500" : "bg-red-500"}`}
    on:click={() => {
        changeHueDirection = !changeHueDirection
    }}>Toggle</button
>
<div class="flex w-full flex-col items-center justify-center gap-x-8">
    {#each colorPalettes as colorPalette, index}
        <div class={`flex flex-col ${index % 6 == 0 && "mt-8"}`}>
            <div class="flex">
                {#each colorPalette as color}
                    <Color {color} />
                {/each}
            </div>
        </div>
    {/each}
</div>
