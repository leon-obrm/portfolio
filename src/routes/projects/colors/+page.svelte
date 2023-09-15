<script lang="ts">
    import { paletteConfig } from "./paletteConfigStore"
    import type { PaletteConfig } from "$lib/interfaces"
    import Control from "./Control.svelte"
    import Palette from "./Palette.svelte"
    import type { Unsubscriber } from "svelte/store"
    import { onDestroy } from "svelte"

    // TODO: Save palette config in URL
    // TODO: Add undo / redo buttons (Might be easy due to state being in URL)
    // TODO: Implement exports (Maybe also to realtimecolors)
    // TODO: Beautify controls
    // TODO: Make responsive
    // TODO: Choose website name
    // TODO: Add favicon
    // TODO: Use theme colors

    let prevPaletteConfigs: PaletteConfig[] = []

    /** Adds palette config to history and makes sure history does not get too large */
    function addToHistory(newPaletteConfig: PaletteConfig) {
        // TODO: Increase max history length
        const maxHistoryLength: number = 3

        if (prevPaletteConfigs.length >= maxHistoryLength) prevPaletteConfigs.shift()
        prevPaletteConfigs = [...prevPaletteConfigs, { ...newPaletteConfig }]
    }

    const unsubscribe: Unsubscriber = paletteConfig.subscribe((newPaletteConfig) => {
        // Add palette to history if there is no history yet
        const isHistoryEmpty: boolean = prevPaletteConfigs.length === 0
        if (isHistoryEmpty) return addToHistory(newPaletteConfig)

        // Add palette to history color is different from the last one
        const prevPaletteConfig: PaletteConfig = prevPaletteConfigs[prevPaletteConfigs.length - 1]

        const isColorDifferent: boolean = prevPaletteConfig.mainColor !== newPaletteConfig.mainColor

        if (isColorDifferent) return addToHistory(newPaletteConfig)

        // Add palette to history if hue rotation amount is different enough from the last one
        const hueRotationDifference: number = Math.abs(
            newPaletteConfig.hueRotationAmount - prevPaletteConfig.hueRotationAmount
        )

        const minDifference: number = 10

        if (hueRotationDifference > minDifference) return addToHistory(newPaletteConfig)
    })

    $: console.log(...prevPaletteConfigs)

    onDestroy(() => {
        unsubscribe()
    })
</script>

<svelte:head>
    <title>Colors</title>
</svelte:head>

<p class="text-xl font-bold">Amazing colors</p>
<Palette />
<Control />
