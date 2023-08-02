<!--
  @component

  Contains list of skills in normal form
-->
<script lang="ts">
    import { skills } from "./skills";
    import NormalListItem from "./NormalListItem.svelte";
</script>

<div
    class="w-10/12 max-w-4xl max-h-[420px] p-1 pr-3 overflow-y-scroll grid grid-cols-1 gap-2 md:grid md:grid-cols-2 lg:gap-3 "
>
    {#each skills as skill}
        <NormalListItem {skill} />
    {/each}
</div>

<style>
    /* Width */
    ::-webkit-scrollbar {
        width: 6px;
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
