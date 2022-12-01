<script lang="ts">
    import TileListItem from "./TileListItem.svelte";

    import { skills } from "./skills";
</script>

<div class="w-10/12 max-w-4xl flex flex-wrap justify-center gap-3">
    {#each skills as skill, i}
        <TileListItem {skill} />
    {/each}
</div>
