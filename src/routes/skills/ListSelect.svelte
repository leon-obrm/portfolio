<script lang="ts">
    let currentList: number = 0;

    const lists: string[] = ["list", "list", "list"];
</script>

<div class="btn-group">
    {#each lists as list, i}
        <button
            class={`btn btn-square btn-sm ${currentList === i && "btn-active"}`}
            on:click={() => (currentList = i)}
        >
            <img src={`${list}.svg`} alt="LinkedIn Logo" />
        </button>
    {/each}
</div>

<!-- TODO: Choose new icon library -->
