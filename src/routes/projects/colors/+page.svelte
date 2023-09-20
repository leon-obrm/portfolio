<script lang="ts">
    import Control from "./Control.svelte"
    import Palette from "./Palette.svelte"
    import { goto } from "$app/navigation"
    import { setContext } from "svelte"
    import { historyBack, historyForward } from "./store"
    import Logo from "./Logo.svelte"

    /** Data from +page.ts (URL parameters) */
    export let data

    function navigate(mainColor?: string, hueRotationAmount?: number) {
        const newUrl: string = `?mainColor=${mainColor ?? data.mainColor}&hueRotationAmount=${
            hueRotationAmount ?? data.hueRotationAmount
        }`

        goto(newUrl)

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
    }

    setContext("navigate", navigate)
    setContext("moveHistory", moveHistory)
    navigate()

    // TODO: Beautify controls
    // TODO: Make responsive
    // TODO: Use theme colors
</script>

<Logo />

<Palette />
<Control />
