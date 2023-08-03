<script lang="ts">
    import type { ActivityProps } from "$lib/interfaces";
    import { onMount } from "svelte";
    import { activites } from "./activities";

    /** Unbiased shuffle algorithm
     * Credit: https://stackoverflow.com/a/2450976
     */
    function fisherYatesShuffle(array: ActivityProps[]) {
        let currentIndex = array.length;
        let randomIndex;

        // While there remain elements to shuffle
        while (currentIndex != 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    let randomizedActivites: ActivityProps[] = [];

    onMount(() => {
        randomizedActivites = fisherYatesShuffle(activites);
    });

    let currentActivityIndex: number = 0;
</script>

<div>Hello</div>
<button
    class="btn"
    on:click={() => {
        currentActivityIndex = (currentActivityIndex + 1) % randomizedActivites.length;
    }}
>
    Next
</button>

{#if randomizedActivites.length > 0}
    <div>
        <p>{randomizedActivites[currentActivityIndex].duration}</p>
        <p>{randomizedActivites[currentActivityIndex].name}</p>
    </div>
{/if}
