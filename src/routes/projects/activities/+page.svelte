<script lang="ts">
    import { onMount } from "svelte"
    import type { ActivityProps } from "$lib/interfaces"

    import { activites } from "./activities"
    import { tick } from "svelte"

    import Time from "./Time.svelte"
    import Activity from "./Activity.svelte"
    import { i18n } from "$lib/i18n"

    /** Unbiased shuffle algorithm
     * Credit: https://stackoverflow.com/a/2450976
     */
    function fisherYatesShuffle(array: any[]) {
        let currentIndex = array.length
        let randomIndex

        // While there remain elements to shuffle
        while (currentIndex != 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            // And swap it with the current element
            ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    let randomizedActivites: ActivityProps[] = []
    let colors: string[] = []

    onMount(() => {
        randomizedActivites = fisherYatesShuffle(activites)
        colors = [
            "7C45C1",
            ...fisherYatesShuffle([
                "D73DA7",
                "FF5882",
                "FF8C61",
                "FFAA42",
                "7894E1",
                "3953bd",
                "28C195",
            ]),
        ]
    })

    let currentActivityIndex: number = -1
    let show: boolean = true

    // TODO: Add a timer that counts down the time left for the current activity
</script>

<svelte:head>
    <title>Activities</title>
</svelte:head>

{#if randomizedActivites.length > 0}
    <button
        class="flex h-screen w-screen flex-col content-center items-center justify-center gap-20 text-white transition-colors"
        style="background-color: #{colors[
            currentActivityIndex === -1 ? 0 : currentActivityIndex % colors.length
        ]}"
        on:click={async () => {
            currentActivityIndex = (currentActivityIndex + 1) % randomizedActivites.length
            show = false
            await tick()
            show = true
        }}
    >
        {#if show}
            <div
                class="dots align-center flex h-screen w-screen flex-col items-center justify-center gap-14"
            >
                <p class="fixed top-14 text-4xl font-black tracking-wider">Activities</p>

                {#if currentActivityIndex === -1}
                    <p class="animate-pulse text-3xl font-bold">
                        {$i18n.t("tapToStart")}
                    </p>
                {:else}
                    <Time duration={randomizedActivites[currentActivityIndex].duration} />

                    <Activity i18nKey={randomizedActivites[currentActivityIndex].key} />
                {/if}
            </div>
        {/if}
    </button>
{/if}

<style>
    .dots {
        background: radial-gradient(rgba(255, 255, 255, 0.1) 8%, transparent 8%);

        background-position: 0% 0%;
        background-size: 5vmin 5vmin;
    }
</style>
