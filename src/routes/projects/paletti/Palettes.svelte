<script lang="ts">
    import { Plus } from "lucide-svelte"
    import { onMount, getContext } from "svelte"
    import { page } from "$app/stores"
    import Palette from "./Palette.svelte"

    const addPalette: (mainColor: string, hueRotationAmount: number) => void =
        getContext("addPalette")

    function addBasePalette() {
        const mainColor: string = "EF347C"
        const hueRotationAmount: number = 50

        addPalette(mainColor, hueRotationAmount)
    }

    // Toggle show gap when receiving corresponding event
    onMount(() => {
        document.addEventListener("addPalette", addBasePalette)

        return () => {
            document.removeEventListener("addPalette", addBasePalette)
        }
    })
</script>

<div class="flex flex-col gap-10">
    {#each $page.data.mainColor as mainColor, index}
        <Palette {index} />
    {/each}

    <div class="tooltip" data-tip="Add new palette [a]">
        <button class="btn-circle btn-lg btn hover:scale-110" on:click={addBasePalette}>
            <Plus size={35} />
        </button>
    </div>
</div>
