<script lang="ts">
    import { onMount } from "svelte";
    import type { Hash } from "./interfaces";

    export let breakpoint: string;

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

{#if wasMounted}
    {#if matches}
        <slot name="above" />
    {:else}
        <slot name="below" />
    {/if}
{:else}
    <div class="h-screen" />
{/if}
