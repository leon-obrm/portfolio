<!--
  @component

  Displays content of certain slot depending on breakpoint and screen size.

  @slot above - Content to display if screen size is above breakpoint
  @slot below - Content to display if screen size is below breakpoint
  @param {string} breakpoint - Breakpoint to compare screen size to. Must be one of the following: "xs", "sm", "md", "lg", "xl", "2xl"
-->
<script lang="ts">
    import { onMount } from "svelte";
    import type { Hash } from "./interfaces";

    export let breakpoint: "sm" | "md" | "lg" | "xl" | "2xl";

    /** Assigns pixel values to breakpoints */
    const breakpoints: Hash = {
        sm: "640",
        md: "768",
        lg: "1024",
        xl: "1280",
        "2xl": "1536",
    };

    let query: string;
    $: query = `(min-width: ${breakpoints[breakpoint]}px)`;

    let mql: MediaQueryList;
    let mqlListener: (v: any) => void;
    let wasMounted = false;
    let matches = true;

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    }

    // TODO?: Replace deprecated functions

    function addNewListener(query: string) {
        mql = window.matchMedia(query);
        mqlListener = (v) => (matches = v.matches);
        mql.addListener(mqlListener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
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
