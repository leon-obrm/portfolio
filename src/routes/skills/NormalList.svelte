<script lang="ts">
    import { skills } from "./skills";

    import NormalListItem from "./NormalListItem.svelte";
</script>

<div class="w-full flex flex-col justify-center items-center align-center gap-2">
    {#each skills as skill}
        <NormalListItem {skill} />
    {/each}
</div>
