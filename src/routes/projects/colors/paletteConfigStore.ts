import type { PaletteConfig } from "$lib/interfaces"
import { writable, type Writable } from "svelte/store"

export const paletteConfig: Writable<PaletteConfig> = writable({
    mainColor: "26d9ac",
    hueRotationAmount: 50,
})
