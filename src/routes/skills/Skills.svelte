<script lang="ts">
    import ListSelect from "./ListSelect.svelte";

    import HexagonList from "./HexagonList.svelte";
    import NormalList from "./NormalList.svelte";
    import TileList from "./TileList.svelte";

    let currentIndex: number = 0;

    function changeIndex(index: number) {
        currentIndex = index;
    }

    const lists: any[] = [HexagonList, NormalList, TileList];
</script>

<div class="py-10 bg-secondary flex flex-col justify-center items-center content-center gap-10">
    <div class="w-10/12 max-w-md flex justify-between items-center content-center lg:max-w-4xl">
        <h1 class="text-2xl font-medium">Skills</h1>

        <ListSelect {currentIndex} {changeIndex} />
    </div>
    <svelte:component this={lists[currentIndex]} />
</div>
