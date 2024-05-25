<!--
  @component

  Contains websites section
-->
<script lang="ts">
    import { websites } from "./websites"
    import Website from "./Website.svelte"
</script>

<div
    class="relative -mt-6 flex w-full flex-col content-center items-center justify-start py-14 md:gap-3"
>
    <div id="projects" class="absolute -top-[63px]" />

    <h1
        class="pb-8 text-3xl font-semibold uppercase tracking-widest md:pb-14 lg:text-4xl dark:text-white"
    >
        Projects
    </h1>

    {#each websites as website, i}
        <Website {website} isLast={i === websites.length - 1} />
    {/each}
</div>
