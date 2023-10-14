<script lang="ts">
    import convert from "color-convert"
    import { Dice5 } from "lucide-svelte"
    import { page } from "$app/stores"
    import type { StateChange } from "$lib/interfaces"

    import { getContext, onMount } from "svelte"

    const navigate: (stateChange: StateChange) => void = getContext("navigate")

    /** Returns random int in range */
    function randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /** Returns random main color */
    function randomMainColor(): string {
        const newHue: number = randomInt(0, 360)
        const newSaturation: number = randomInt(10, 90)
        const newLightness: number = randomInt(45, 55)

        return convert.hsl.hex([newHue, newSaturation, newLightness])
    }

    /** Creates random palette config */
    function createRandomPaletteConfig() {
        const newHueRotationAmount: number = randomInt(-10, 10) * 10

        const newStateChange: StateChange = {
            type: "update",
            mainColor: randomMainColor(),
            hueRotationAmount: newHueRotationAmount,
            focusedPalette: $page.data.focusedPalette,
        }

        navigate(newStateChange)
        document.dispatchEvent(new Event("colorChange"))
    }

    // Create random palette when receiving corresponding event
    onMount(() => {
        document.addEventListener("createRandomPaletteConfig", createRandomPaletteConfig)

        return () => {
            document.removeEventListener("createRandomPaletteConfig", createRandomPaletteConfig)
        }
    })
</script>

<div class="tooltip" data-tip="Create random palette [Spacebar]">
    <button
        class="btn-primary btn-circle btn-lg btn hover:scale-110"
        on:click={createRandomPaletteConfig}
    >
        <Dice5 size={30} />
    </button>
</div>
