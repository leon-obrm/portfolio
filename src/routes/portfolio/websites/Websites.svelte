<!--
  @component

  Contains websites section
-->
<script lang="ts">
    import { websites } from "./websites"
    import Website from "./Website.svelte"
</script>

<div class="relative flex w-full flex-col content-center items-center justify-start py-14 md:gap-3">
    <div id="websites" class="absolute -top-[63px]" />

    <h1 class="mb-8 w-10/12 max-w-md text-2xl font-medium md:max-w-4xl md:text-3xl">Websites</h1>

    {#each websites as website, i}
        <Website {website} isLast={i === websites.length - 1} />
    {/each}
</div>
