<script lang="ts">
    import Palettes from "./Palettes.svelte"
    import { goto } from "$app/navigation"
    import { setContext, onMount } from "svelte"
    import { historyBack, historyForward, palettes } from "./store"
    import Logo from "./Logo.svelte"
    import BottomControl from "./bottomcontrol/BottomControl.svelte"
    import SideControl from "./sidecontrol/SideControl.svelte"
    import { PaletteCreator } from "./PaletteCreator"

    /** Data from +page.ts (URL parameters) */
    export let data

    /** Creates url with state date */
    function createUrl(mainColor: string[], hueRotationAmount: number[], focusedPalette: number) {
        return `?mainColor=${mainColor.join(",")}&hueRotationAmount=${hueRotationAmount.join(
            ","
        )}&focusedPalette=${focusedPalette}`
    }

    /** Updates values of palette based on its index */
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

    /** Adds a new palette */
    function addPalette(mainColor: string, hueRotationAmount: number) {
        const newMainColor: string[] = [...data.mainColor, mainColor]
        const newHueRotationAmount: number[] = [...data.hueRotationAmount, hueRotationAmount]
        const newIndex: number = data.mainColor.length

        data.mainColor = newMainColor
        data.hueRotationAmount = newHueRotationAmount
        data.focusedPalette = newIndex

        const newUrl: string = createUrl(newMainColor, newHueRotationAmount, newIndex)
        navigate(newUrl)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    /** Deletes a palette based on index */
    function deletePalette(index: number) {
        let newMainColor: string[] = [...data.mainColor]
        let newHueRotationAmount: number[] = [...data.hueRotationAmount]

        newMainColor.splice(index, 1)
        newHueRotationAmount.splice(index, 1)

        const newIndex: number = data.focusedPalette > 0 ? data.focusedPalette - 1 : 0

        data.mainColor = newMainColor
        data.hueRotationAmount = newHueRotationAmount
        data.focusedPalette = newIndex

        const newUrl: string = createUrl(newMainColor, newHueRotationAmount, newIndex)
        navigate(newUrl)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    /** Focuses a palette based on index */
    function focusPalette(index: number) {
        const newUrl: string = createUrl(data.mainColor, data.hueRotationAmount, index)

        navigate(newUrl)
        document.dispatchEvent(new Event("updateHslPicker"))
    }

    /** Actually navigates to url with new states */
    function navigate(url: string, addToHistory: boolean = true) {
        goto(url)

        // Do not alter history
        if (addToHistory === false) return

        // Add new url to historyBack and clear historyForward
        historyBack.update((prev) => [...prev, url])
        historyForward.set([])
    }

    /** Moves back and forward through history stack */
    function moveHistory(direction: "forward" | "back") {
        let nextUrl: string = ""

        if (direction === "back") {
            // If there is only one item in historyBack, we are already at the first page
            if ($historyBack.length === 1) return
            // Get current url and move it to historyForward
            const currentUrl: string = $historyBack[$historyBack.length - 1]
            historyBack.update((prev) => prev.slice(0, prev.length - 1))

            historyForward.update((prev) => [...prev, currentUrl])

            // Go to previous page
            if ($historyBack.length === 0) return
            nextUrl = $historyBack[$historyBack.length - 1]
        } else if (direction === "forward") {
            // If there is no item in historyForward, we are already at the last page
            if ($historyForward.length === 0) return

            // Get next url and move it to historyBack
            nextUrl = $historyForward[$historyForward.length - 1]
            historyForward.update((prev) => prev.slice(0, prev.length - 1))

            historyBack.update((prev) => [...prev, nextUrl])
        }

        // Update data based on url
        const newMainColor: string[] = nextUrl.split("?")[1].split("&")[0].split("=")[1].split(",")

        const newHueRotationAmount: number[] = nextUrl
            .split("?")[1]
            .split("&")[1]
            .split("=")[1]
            .split(",")
            .map((n) => parseInt(n))

        const newIndex: number = parseInt(nextUrl.split("?")[1].split("&")[2].split("=")[1])

        data.mainColor = newMainColor
        data.hueRotationAmount = newHueRotationAmount
        data.focusedPalette = newIndex

        goto(nextUrl)

        document.dispatchEvent(new Event("updateHslPicker"))
    }

    setContext("navigate", navigate)
    setContext("moveHistory", moveHistory)
    setContext("updatePalette", updatePalette)
    setContext("addPalette", addPalette)
    setContext("deletePalette", deletePalette)
    setContext("focusPalette", focusPalette)

    // Bugs
    // FIXME: Array export is missing parentheses
    // FIXME: Lightnesses of 0 and 100 turn hue rotation red

    // Features
    // TODO: Mark focused palette
    // TODO: Update exports
    // TODO: Add settings to url state
    // TODO: Make amount of colors per palette customizable
    // TODO: Add some sort of fullscreen option
    // TODO: Make HSL values editable

    // Polishing
    // TODO: Add animation to dice button
    // TODO: Make responsive
    // TODO: Remove steps from hue rotation

    // Testing
    // TODO: Check if saturation logic is still working correctly
    // TODO: Check if everything is still working with multiple palettes
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
        if (e.key === "a" && !e.ctrlKey) document.dispatchEvent(new Event("addPalette"))
        if (e.key === "c" && !e.ctrlKey) document.dispatchEvent(new Event("copyExport"))
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

    const paletteCreator = new PaletteCreator()

    // TODO: Improve performance by only updating hues when hue rotation amount changes
    // Update color palettes when main color or hue rotation amount changes
    $: {
        const newPalettes: string[][] = data.mainColor.map((color, index) =>
            paletteCreator.createPalette(color, data.hueRotationAmount[index])
        )

        palettes.set(newPalettes)
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
