<script lang="ts">
    import convert from "color-convert"
    import { Dice5 } from "lucide-svelte"

    import { getContext } from "svelte"

    const navigate: (
        mainColor?: string,
        hueRotationAmount?: number,
        addToHistory?: boolean
    ) => void = getContext("navigate")

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

        navigate(randomMainColor(), newHueRotationAmount)
        document.dispatchEvent(new Event("colorChange"))
    }
</script>

<svelte:window
    on:keydown|stopPropagation={(e) => {
        if (e.key === " ") createRandomPaletteConfig()
    }}
/>

<div class="tooltip" data-tip="Create random palette [Spacebar]">
    <button
        class="btn-primary btn-circle btn h-16 w-16 hover:scale-110"
        on:click={createRandomPaletteConfig}
    >
        <Dice5 size={30} />
    </button>
</div>
