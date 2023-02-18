<!--
  @component

  Contains list of skills in tile form
-->
<script lang="ts">
    import TileListItem from "./TileListItem.svelte";

    import { skills } from "./skills";
</script>

<div
    class="w-10/12 max-w-4xl p-1 pb-3 flex justify-start items-center content-center gap-4 overflow-x-scroll overflow-visible"
>
    {#each skills as skill, i}
        <TileListItem {skill} />
    {/each}
</div>
