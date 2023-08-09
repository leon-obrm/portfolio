<script lang="ts">
    import { onMount } from "svelte";
    import type { ActivityProps } from "$lib/interfaces";
    import { i18n } from "$lib/i18n";
    import SpinAnimation from "$lib/SpinAnimation.svelte";
    import { activites } from "./activities";
    import { tick } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

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
    let show: boolean = true;

    // TODO: Add call to action
    // TODO: Add background animation
    // TODO: Add eye candy
    // TODO: Add a timer that counts down the time left for the current activity
</script>

{#if randomizedActivites.length > 0}
    <button
        class="bg-[#7C45C1] w-screen h-screen flex flex-col justify-center items-center content-center text-white gap-20"
        on:click={async () => {
            currentActivityIndex = (currentActivityIndex + 1) % randomizedActivites.length;
            show = false;
            await tick();
            show = true;
        }}
    >
        {#if show}
            <div class="flex justify-center items-baseline content-center gap-2">
                <div
                    class="text-3xl font-bold"
                    in:fly={{ y: -200, duration: 600, easing: cubicOut }}
                >
                    {randomizedActivites[currentActivityIndex].duration}
                </div>

                <div
                    class="text-xl"
                    in:fly={{ x: 100, duration: 500, delay: 300, easing: cubicOut }}
                >
                    minutes of
                </div>
            </div>

            <SpinAnimation className="" hoverAnimation={false} delay={0.6}>
                <p class="text-4xl font-bold">
                    {$i18n.t(randomizedActivites[currentActivityIndex].key)}
                </p>
            </SpinAnimation>
        {/if}
    </button>
{/if}
