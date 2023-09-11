import type { PaletteConfig } from "$lib/interfaces"
import { writable, type Writable } from "svelte/store"

export const paletteConfig: Writable<PaletteConfig> = writable({
    mainColor: {
        hue: 165,
        saturation: 70,
        lightness: 50,
    },
    hueRotationAmount: 50,
})
