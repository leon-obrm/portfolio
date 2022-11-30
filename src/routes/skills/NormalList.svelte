<script lang="ts">
    import { skills } from "./skills";

    import NormalListItem from "./NormalListItem.svelte";
</script>

<div
    class="w-10/12 max-w-4xl flex flex-col justify-center items-center align-center gap-2 md:grid md:grid-cols-2"
>
    {#each skills as skill}
        <NormalListItem {skill} />
    {/each}
</div>
