<script lang="ts">
    import { Dice5 } from "lucide-svelte"
    import type { PaletteConfig } from "$lib/interfaces"
    import { paletteConfig } from "./paletteConfigStore"

    /** Returns random int in range */
    function randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /** Returns random main color */
    function randomMainColor() {
        return {
            hue: randomInt(0, 360),
            saturation: randomInt(60, 80),
            lightness: randomInt(40, 60),
        }
    }

    /** Creates random palette config */
    function createRandomPaletteConfig() {
        const newPaletteConfig: PaletteConfig = {
            mainColor: randomMainColor(),
            hueRotationAmount: randomInt(-100, 100),
        }

        paletteConfig.set(newPaletteConfig)
    }
</script>

<button
    class="btn-primary btn-circle btn h-20 w-20 -translate-y-10"
    on:click={createRandomPaletteConfig}
>
    <Dice5 size={32} />
</button>
