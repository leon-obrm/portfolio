<script lang="ts">
    import Palettes from "./Palettes.svelte"
    import { goto } from "$app/navigation"
    import { setContext } from "svelte"
    import { historyBack, historyForward } from "./store"
    import Logo from "./Logo.svelte"
    import BottomControl from "./bottomcontrol/BottomControl.svelte"
    import SideControl from "./sidecontrol/SideControl.svelte"

    /** Data from +page.ts (URL parameters) */
    export let data

    function navigate(mainColor?: string, hueRotationAmount?: number, addToHistory?: boolean) {
        const newUrl: string = `?mainColor=${mainColor ?? data.mainColor}&hueRotationAmount=${
            hueRotationAmount ?? data.hueRotationAmount
        }`

        goto(newUrl)

        // Do not alter history
        if (addToHistory === false) return

        // If change is only in hueRotationAmount, remove last item from historyBack
        // This way, the history is not cluttered with every change in hue rotation
        if ($historyBack.length > 0) {
            const prevMainColor: string = $historyBack[$historyBack.length - 1]
                .split("=")[1]
                .split("&")[0]

            if (mainColor === undefined || prevMainColor === mainColor)
                historyBack.update((prev) => prev.slice(0, prev.length - 1))
        }

        // Add new url to historyBack and clear historyForward
        historyBack.update((prev) => [...prev, newUrl])
        historyForward.set([])
    }

    function moveHistory(direction: "forward" | "back") {
        if (direction === "back") {
            // If there is only one item in historyBack, we are already at the first page
            if ($historyBack.length === 1) return
            // Get current url and move it to historyForward
            const currentUrl: string = $historyBack[$historyBack.length - 1]
            historyBack.update((prev) => prev.slice(0, prev.length - 1))

            historyForward.update((prev) => [...prev, currentUrl])

            // Go to previous page
            if ($historyBack.length === 0) return
            goto($historyBack[$historyBack.length - 1])
        } else if (direction === "forward") {
            // If there is no item in historyForward, we are already at the last page
            if ($historyForward.length === 0) return

            // Get next url and move it to historyBack
            const nextUrl: string = $historyForward[$historyForward.length - 1]
            historyForward.update((prev) => prev.slice(0, prev.length - 1))

            historyBack.update((prev) => [...prev, nextUrl])

            // Go to next page
            goto(nextUrl)
        }
        document.dispatchEvent(new Event("colorChange"))
    }

    setContext("navigate", navigate)
    setContext("moveHistory", moveHistory)
    navigate()

    // Bugs

    // Features
    // TODO: Add settings to url state
    // TODO: Make it possible to have multiple color palettes
    // TODO: Make amount of colors per palette customizable
    // TODO: Add some sort of fullscreen option
    // TODO: Make HSL values editable

    // Polishing
    // TODO: Add animation to dice button
    // TODO: Add more shadows
    // TODO: Make responsive
    // TODO: Remove steps from hue rotation

    // Testing
    // TODO: Check if saturation logic is still working correctly
    // TODO: Check for compatibility with other browsers

    // Other
    // TODO: Move to own repository (Would make favicon setup more accessible)

    function handleKeyDown(e: KeyboardEvent) {
        if (!isNaN(Number(e.key)))
            document.dispatchEvent(new CustomEvent("changeExportOption", { detail: Number(e.key) }))

        if (e.key === " ") {
            document.dispatchEvent(new Event("createRandomPaletteConfig"))
            // This prevents dialoges from closing when pressing spacebar
            e.preventDefault()
        }
        if (e.key === "a") document.dispatchEvent(new Event("addPalette"))
        if (e.key === "c") document.dispatchEvent(new Event("copyExport"))
        if (e.key === "e") document.dispatchEvent(new Event("toggleExport"))
        if (e.key === "g") document.dispatchEvent(new Event("toggleShowGap"))
        if (e.key === "m") document.dispatchEvent(new Event("toggleColorMode"))
        if (e.key === "ArrowLeft" || e.key === "ArrowRight")
            document.dispatchEvent(new Event(e.key))

        if (!e.ctrlKey) return

        if (e.key === "z") moveHistory("back")
        else if (e.key === "y") moveHistory("forward")
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="flex h-screen w-screen" data-theme="paletti">
    <div class="flex w-5/6 flex-col justify-between">
        <Logo />
        <Palettes />
        <BottomControl />
    </div>
    <SideControl />
</div>
