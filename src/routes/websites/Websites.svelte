<script lang="ts">
    import { websites } from "./websites";
    import Website from "./Website.svelte";
</script>

<div class="w-full mt-2 py-5 flex flex-col justify-start content-center items-center md:gap-3">
    <h1 class="w-10/12 max-w-md mb-5 text-2xl font-medium md:max-w-4xl">Websites</h1>
    {#each websites as website, i}
        <Website {website} isLast={i === websites.length - 1} />
    {/each}
</div>
