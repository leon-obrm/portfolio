<script lang="ts">
    import TileListItem from "./TileListItem.svelte";

    import { skills } from "./skills";
</script>

<div class="w-10/12 max-w-xl grid grid-cols-2 gap-2">
    {#each skills as skill, i}
        <TileListItem {skill} />
    {/each}
</div>
