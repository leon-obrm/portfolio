<script lang="ts">
    import type { ColorProps } from "$lib/interfaces"
    import { paletteCreator } from "./paletteCreator"
    import ColorField from "./ColorField.svelte"

    const colorPalettes: ColorProps[][] = paletteCreator.createTestPalettes()

    // Absolute and relative change both don't seem to work too well
    // TODO: Try to split remaining sat and light into chunks instead
</script>

<div class="flex w-full flex-col items-center justify-center gap-x-8">
    {#each colorPalettes as colorPalette, index}
        <div class={`flex flex-col ${index % 6 == 0 && "mt-8"}`}>
            <div class="flex">
                {#each colorPalette as color}
                    <ColorField {color} />
                {/each}
            </div>
        </div>
    {/each}
</div>
