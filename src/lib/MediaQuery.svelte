<!--
  @component

  Displays content of certain slot depending on breakpoint and screen size.

  @slot above - Content to display if screen size is above breakpoint
  @slot below - Content to display if screen size is below breakpoint
  @param {string} breakpoint - Breakpoint to compare screen size to. Must be one of the following: "xs", "sm", "md", "lg", "xl", "2xl"
-->
<script lang="ts">
    import { onMount } from "svelte"
    import type { Hash } from "./interfaces"

    export let breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"

    /** Assigns pixel values to breakpoints */
    const breakpoints: Hash = {
        sm: "640",
        md: "768",
        lg: "1024",
        xl: "1280",
        "2xl": "1536",
    }

    let wasMounted = false
    let matches = true

    let query: string
    $: query = `(min-width: ${breakpoints[breakpoint]}px)`

    let mql: MediaQueryList
    let mqlListener: (event: any) => void

    onMount(() => {
        wasMounted = true
        return () => {
            removeActiveListener()
        }
    })

    function addNewListener(query: string) {
        mql = matchMedia(query)
        mqlListener = (event) => (matches = event.matches)
        mql.addEventListener("change", mqlListener)
        matches = mql.matches
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeEventListener("change", mqlListener)
        }
    }

    $: {
        if (wasMounted) {
            removeActiveListener()
            addNewListener(query)
        }
    }
</script>

<!-- Determines what slot to show based on breakpoint -->
{#if wasMounted}
    {#if matches}
        <slot name="above" />
    {:else}
        <slot name="below" />
    {/if}
{:else}
    <!-- Shows full screen div before component is loaded to avoid disruptive page loading -->
    <div class="h-screen" />
{/if}
