<!--
  @component

  Contains websites section
-->
<script lang="ts">
    import { websites } from "./websites";
    import Website from "./Website.svelte";
</script>

<div class="relative w-full py-14 flex flex-col justify-start content-center items-center md:gap-3">
    <div id="websites" class="absolute -top-[71px]" />

    <h1 class="w-10/12 max-w-md mb-8 text-2xl md:max-w-4xl md:text-3xl">Websites</h1>

    {#each websites as website, i}
        <Website {website} isLast={i === websites.length - 1} />
    {/each}
</div>
