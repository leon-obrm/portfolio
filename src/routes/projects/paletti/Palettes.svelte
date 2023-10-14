<script lang="ts">
    import { Plus } from "lucide-svelte"
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import Palette from "./Palette.svelte"

    function addPalette() {}

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
        <Palette
            isFocused={index === $page.data.focusedPalette}
            {mainColor}
            hueRotationAmount={$page.data.hueRotationAmount[$page.data.focusedPalette]}
        />
    {/each}

    <div class="tooltip" data-tip="Add new palette [a]">
        <button class="btn-circle btn-lg btn hover:scale-110" on:click={addPalette}>
            <Plus size={35} />
        </button>
    </div>
</div>
