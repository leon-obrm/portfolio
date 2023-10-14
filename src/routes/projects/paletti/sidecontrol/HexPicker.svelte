<script lang="ts">
    import { getContext } from "svelte"
    import { fade } from "svelte/transition"
    import { page } from "$app/stores"
    import type { StateChange } from "$lib/interfaces"

    const navigate: (stateChange: StateChange) => void = getContext("navigate")

    /** Updates main color of palette config */
    function setNewColor(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return
        if (inputElement.value.length < 6) return

        let allowedCharacters = /^[\#A-Fa-f0-9]+$/
        if (!allowedCharacters.test(inputElement.value)) return

        let newMainColor: string = inputElement.value.replaceAll("#", "")
        if (newMainColor.length !== 6) return

        newMainColor = newMainColor.toUpperCase()

        const newStateChange: StateChange = {
            type: "update",
            mainColor: newMainColor,
            focusedPalette: $page.data.focusedPalette,
        }

        navigate(newStateChange)
    }
</script>

<input
    in:fade={{ duration: 250 }}
    out:fade={{ duration: 250 }}
    type="text"
    class="input-bordered input col-start-1 row-start-1 h-8 w-full p-0 text-center text-lg"
    maxlength="7"
    value={$page.data.mainColor[$page.data.focusedPalette]}
    on:input={setNewColor}
/>
