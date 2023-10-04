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

        document.dispatchEvent(
            new CustomEvent("randomPaletteCreated", {
                detail: { newHue, newSaturation, newLightness },
            })
        )

        return convert.hsl.hex([newHue, newSaturation, newLightness])
    }

    /** Creates random palette config */
    function createRandomPaletteConfig() {
        navigate(randomMainColor(), randomInt(-100, 100))
    }
</script>

<div class="tooltip" data-tip="Create random palette">
    <button
        class="btn-primary btn-circle btn h-16 w-16 hover:scale-110"
        on:click={createRandomPaletteConfig}
    >
        <Dice5 size={30} />
    </button>
</div>

<svelte:window
    on:keydown={(e) => {
        if (e.key === " ") createRandomPaletteConfig()
    }}
/>
