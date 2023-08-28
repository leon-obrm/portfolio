<!--
  @component

  Contains list of skills in tile form
-->
<script lang="ts">
    import TileListItem from "./TileListItem.svelte"

    import { skills } from "./skills"
</script>

<div
    class="flex w-10/12 max-w-4xl content-center items-center justify-start gap-4 overflow-visible overflow-x-scroll p-1 pb-3"
>
    {#each skills as skill, i}
        <TileListItem {skill} />
    {/each}
</div>

<style>
    /* Height */
    ::-webkit-scrollbar {
        height: 6px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #7bc5ea;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #52aee0;
    }
</style>
