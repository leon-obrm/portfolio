<script lang="ts">
    import Control from "./Control.svelte"
    import Palette from "./Palette.svelte"
    import type { PaletteConfig } from "$lib/interfaces"

    /** Returns random int in range */
    function randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /** Returns random main color */
    function randomMainColor() {
        return {
            hue: randomInt(0, 360),
            saturation: randomInt(40, 80),
            lightness: randomInt(40, 60),
        }
    }

    /** Creates random palette config */
    function createRandomPaletteConfig() {
        const newPaletteConfig: PaletteConfig = {
            mainColor: randomMainColor(),
            hueRotationAmount: 50,
        }

        paletteConfig = newPaletteConfig
    }

    /** Default palette config */
    let paletteConfig: PaletteConfig = {
        mainColor: randomMainColor(),
        hueRotationAmount: 50,
    }

    // TODO: Use i18n for color page
</script>

<svelte:head>
    <title>Colors</title>
</svelte:head>

<p class="text-xl font-bold">Amazing colors</p>
<Palette {paletteConfig} />
<Control {createRandomPaletteConfig} />
