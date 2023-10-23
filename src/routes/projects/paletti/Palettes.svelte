<script lang="ts">
    import { Plus } from "lucide-svelte"
    import { onMount, getContext } from "svelte"
    import Palette from "./Palette.svelte"
    import { palettes } from "./store"

    const addPalette: (mainColor: string, hueRotation: number) => void = getContext("addPalette")

    function addBasePalette() {
        const mainColor: string = "EF347C"
        const hueRotation: number = 50

        addPalette(mainColor, hueRotation)
    }

    // Toggle show gap when receiving corresponding event
    onMount(() => {
        document.addEventListener("addPalette", addBasePalette)

        return () => {
            document.removeEventListener("addPalette", addBasePalette)
        }
    })
</script>

<div class="mb-4 flex flex-col gap-6 overflow-x-hidden">
    {#each $palettes as palette, index}
        <Palette {palette} {index} />
    {/each}

    <div class="tooltip" data-tip="Add new palette [a]">
        <button class="btn-circle btn-lg btn" on:click={addBasePalette}>
            <Plus size={35} />
        </button>
    </div>
</div>
