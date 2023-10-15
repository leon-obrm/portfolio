<script lang="ts">
    import Palettes from "./Palettes.svelte"
    import { goto } from "$app/navigation"
    import { setContext, onMount } from "svelte"
    import { historyBack, historyForward } from "./store"
    import Logo from "./Logo.svelte"
    import BottomControl from "./bottomcontrol/BottomControl.svelte"
    import SideControl from "./sidecontrol/SideControl.svelte"

    /** Data from +page.ts (URL parameters) */
    export let data

    function createUrl(mainColor: string[], hueRotationAmount: number[], focusedPalette: number) {
        return `?mainColor=${mainColor.join(",")}&hueRotationAmount=${hueRotationAmount.join(
            ","
        )}&focusedPalette=${focusedPalette}`
    }

    function updatePalette(
        index: number,
        mainColor?: string,
        hueRotationAmount?: number,
        addToHistory?: boolean
    ) {
        const newMainColor: string[] = [...data.mainColor]
        const newHueRotationAmount: number[] = [...data.hueRotationAmount]

        if (mainColor !== undefined) newMainColor[index] = mainColor
        if (hueRotationAmount !== undefined) newHueRotationAmount[index] = hueRotationAmount

        // If change is only in hueRotationAmount, remove last item from historyBack
        // This way, the history is not cluttered with every change in hue rotation
        if ($historyBack.length > 0 && mainColor === undefined)
            historyBack.update((prev) => prev.slice(0, prev.length - 1))

        if (addToHistory === undefined || addToHistory === true) addToHistory = true
        else addToHistory = false

        const newUrl: string = createUrl(newMainColor, newHueRotationAmount, index)

        navigate(newUrl, addToHistory)
    }

    function addPalette(mainColor: string, hueRotationAmount: number) {
        const newMainColor: string[] = [...data.mainColor, mainColor]
        const newHueRotationAmount: number[] = [...data.hueRotationAmount, hueRotationAmount]
        const newIndex: number = data.mainColor.length

        const newUrl: string = createUrl(newMainColor, newHueRotationAmount, newIndex)

        navigate(newUrl)
    }

    function deletePalette(index: number) {
        const newMainColor: string[] = [
            ...data.mainColor.slice(0, index),
            ...data.mainColor.slice(index + 1),
        ]
        const newHueRotationAmount: number[] = [
            ...data.hueRotationAmount.slice(0, index),
            ...data.hueRotationAmount.slice(index + 1),
        ]
        const newIndex: number = data.focusedPalette > 0 ? data.focusedPalette - 1 : 0

        const newUrl: string = createUrl(newMainColor, newHueRotationAmount, newIndex)

        navigate(newUrl)
    }

    function changeFocus(index: number) {
        const newUrl: string = createUrl(data.mainColor, data.hueRotationAmount, index)

        navigate(newUrl)
    }

    function navigate(url: string, addToHistory: boolean = true) {
        goto(url)

        // Do not alter history
        if (addToHistory === false) return

        // Add new url to historyBack and clear historyForward
        historyBack.update((prev) => [...prev, url])
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
    setContext("updatePalette", updatePalette)
    setContext("addPalette", addPalette)
    setContext("deletePalette", deletePalette)
    setContext("changeFocus", changeFocus)

    // Bugs
    // FIXME: Lightnesses of 0 and 100 turn hue rotation red

    // Features
    // TODO: Make it possible to delete palettes
    // TODO: Add icons for editing and deleting palettes
    // TODO: Mark focused palette
    // TODO: Update exports
    // TODO: Check if everything is still working with multiple palettes
    // TODO: Add settings to url state
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

    // Makes sure the url is updated when the page is loaded without url parameters
    onMount(() => {
        if (data.mainColor.length === 1) updatePalette(0)
    })
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
