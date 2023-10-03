<script lang="ts">
    import { getContext } from "svelte"
    import { page } from "$app/stores"

    const navigate: (mainColor?: string, hueRotationAmount?: number) => void =
        getContext("navigate")

    /** Updates main color of palette config */
    function setNewColor(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return
        if (inputElement.value.length < 6) return

        let allowedCharacters = /^[\#A-Fa-f0-9]+$/
        if (!allowedCharacters.test(inputElement.value)) return

        let newMainColor: string = inputElement.value.replaceAll("#", "")
        if (newMainColor.length !== 6) return

        // TODO: Also update hue rotation amount

        newMainColor = newMainColor.toUpperCase()
        navigate(newMainColor)
    }
</script>

<input
    type="text"
    class="input-bordered input-primary input m-0 h-7 w-24 max-w-xs p-0 text-center text-lg"
    maxlength="7"
    value={$page.data.mainColor}
    on:input={setNewColor}
/>
