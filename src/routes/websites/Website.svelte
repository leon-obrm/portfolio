<script lang="ts">
    import type { WebsiteProps } from "../interfaces";
    import Learning from "./Learning.svelte";
    import Portal from "./Portal.svelte";

    export let website: WebsiteProps;
    export let isLast: boolean;
</script>

<div
    class="w-10/12 max-w-3xl mt-5 flex flex-col justify-center items-center content-center gap-1 md:flex-row md:justify-between md:gap-8"
>
    <div class="w-full max-w-md flex flex-col justify-center items-start content-center gap-5">
        <div class="flex flex-col justify-center items-start content-center gap-2">
            <h2 class="text-xl">{website.title}</h2>
            <h3 class="text-xs text-gray-400">{website.timeframe}</h3>
        </div>
        <p class="text-justify">{website.description}</p>

        <div class="flex justify-start items-center content-center gap-3">
            <h3>Learnings</h3>

            <div class="flex justify-start items-center content-center gap-1">
                {#each website.learnings as learning}
                    <Learning {learning} />
                {/each}
            </div>
        </div>
    </div>
    <Portal color={website.color} link={website.link} />
</div>

{#if !isLast}
    <div class="w-11/12 max-w-6xl flex flex-col justify-center items-center content-center">
        <div class="divider" />
    </div>
{/if}
