<script lang="ts">
    import { websites } from "./websites";
    import Website from "./Website.svelte";
</script>

<div class="w-full mt-2 py-5 flex flex-col justify-start content-center items-center gap-7">
    <h1 class="w-10/12 text-2xl font-medium">Websites</h1>
    {#each websites as website, i}
        <Website {website} isLast={i === websites.length - 1} />
    {/each}
</div>
