<script lang="ts">
    import { Plus } from "lucide-svelte"
    import Palette from "./Palette.svelte"
    import { onMount } from "svelte"

    let isFocused: boolean = true

    function addPalette() {
        isFocused = !isFocused
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
    <Palette {isFocused} />
    {#if !isFocused}
        <Palette isFocused={true} />
    {/if}
    <div class="tooltip" data-tip="Add new palette [a]">
        <button class="btn-circle btn-lg btn hover:scale-110" on:click={addPalette}>
            <Plus size={35} />
        </button>
    </div>
</div>
