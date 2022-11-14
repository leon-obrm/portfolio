<script lang="ts">
    import ViewModule from "svelte-material-icons/ViewModule.svelte";
    import ViewList from "svelte-material-icons/ViewList.svelte";
    import ViewColumn from "svelte-material-icons/ViewColumn.svelte";

    let currentList: number = 0;

    const lists: any[] = [ViewModule, ViewList, ViewColumn];
</script>

<div class="btn-group">
    {#each lists as list, i}
        <button
            class="btn btn-square btn-sm"
            class:btn-active={currentList === i}
            on:click={() => (currentList = i)}
        >
            <svelte:component this={list} size="1.75em" />
        </button>
    {/each}
</div>
