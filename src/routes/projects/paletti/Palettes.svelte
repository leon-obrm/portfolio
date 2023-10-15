<script lang="ts">
    import { Plus } from "lucide-svelte"
    import { onMount, getContext } from "svelte"
    import { page } from "$app/stores"
    import Palette from "./Palette.svelte"
    import type { StateChange } from "$lib/interfaces"

    const navigate: (stateChange: StateChange) => void = getContext("navigate")

    function addPalette() {
        const newStateChange: StateChange = {
            type: "add",
            mainColor: "EF347C",
            hueRotationAmount: 50,
        }

        navigate(newStateChange)
    }

    // Toggle show gap when receiving corresponding event
    onMount(() => {
        document.addEventListener("addPalette", addPalette)

        return () => {
            document.removeEventListener("addPalette", addPalette)
        }
    })
</script>

<div class="flex flex-col gap-10">
    {#each $page.data.mainColor as mainColor, index}
        <Palette {index} />
    {/each}

    <div class="tooltip" data-tip="Add new palette [a]">
        <button class="btn-circle btn-lg btn hover:scale-110" on:click={addPalette}>
            <Plus size={35} />
        </button>
    </div>
</div>
