<!--
  @component

  Contains button group for toggling between list types
  @param {number} currentIndex - Index of current list type
  @param {(index: number) => void} changeIndex - Function to change index of current list type
-->
<script lang="ts">
    import ViewModule from "svelte-material-icons/ViewModule.svelte"
    import ViewList from "svelte-material-icons/ViewList.svelte"
    import ViewColumn from "svelte-material-icons/ViewColumn.svelte"

    export let currentIndex: number
    export let changeIndex: (index: number) => void

    const icons: any[] = [ViewModule, ViewList, ViewColumn]
</script>

<div class="btn-group drop-shadow">
    {#each icons as icon, i}
        <button
            class={`no-animation btn-square btn-sm btn border-none bg-gray-800 text-white hover:border-primary-600 hover:bg-primary-600 ${
                currentIndex === i && "!border-primary-600 !bg-primary-600"
            }`}
            class:border-primary-600={currentIndex === i}
            on:click={() => changeIndex(i)}
        >
            <svelte:component this={icon} size="1.75em" />
        </button>
    {/each}
</div>
