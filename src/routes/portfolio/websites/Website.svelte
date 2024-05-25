<!--
  @component

  Contains single website item
  @param {WebsiteProps} website - Website to display information about
  @param {boolean} isLast - Indicates whether this is the last website in the list
-->
<script lang="ts">
    import type { WebsiteProps } from "$lib/interfaces"
    import Learning from "./Learning.svelte"
    import Portal from "./Portal.svelte"

    export let website: WebsiteProps
    export let isLast: boolean
</script>

<div
    class="flex w-10/12 max-w-4xl flex-col content-center items-center justify-center gap-1 md:flex-row md:justify-between md:gap-8"
>
    <div
        class="flex w-full max-w-md flex-col content-center items-start justify-center gap-5 md:max-w-lg"
    >
        <div class="flex flex-col content-center items-start justify-center gap-2">
            <h2 class="text-xl font-medium text-base-content md:text-2xl">{website.title}</h2>
            <h3 class="text-xs text-gray-700 md:text-sm">{website.timeframe}</h3>
        </div>
        <p class="text-justify text-sm text-base-content md:text-base">{website.description}</p>

        <div class="flex content-center items-center justify-start gap-2">
            {#each website.learnings as learning}
                <Learning {learning} />
            {/each}
        </div>
    </div>
    <Portal {website} />
</div>

{#if !isLast}
    <div
        class="my-12 flex w-11/12 max-w-5xl flex-col content-center items-center justify-center"
    ></div>
{/if}
