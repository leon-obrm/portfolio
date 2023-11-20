<!--
  @component

  Contains skill section, including button group for toggling between list types and the currently selected list
-->
<script lang="ts">
    import ListSelect from "./ListSelect.svelte"

    import HexagonList from "./HexagonList.svelte"
    import NormalList from "./NormalList.svelte"
    import TileList from "./TileList.svelte"
    import TopPeakDivider from "./TopPeakDivider.svelte"
    import BottomPeakDivider from "./BottomPeakDivider.svelte"

    let currentIndex: number = 0

    function changeIndex(index: number) {
        currentIndex = index
    }

    const lists: any[] = [HexagonList, NormalList, TileList]
</script>

<div class="overflow-hidden">
    <TopPeakDivider />
    <div
        class="relative flex flex-col content-center items-center justify-center gap-10 bg-primary-300 py-14"
    >
        <div id="skills" class="absolute -top-[64px]" />

        <div class="flex w-10/12 max-w-4xl content-center items-center justify-between font-medium">
            <h1 class="text-2xl md:text-3xl">Skills</h1>

            <ListSelect {currentIndex} {changeIndex} />
        </div>
        <svelte:component this={lists[currentIndex]} />
    </div>
    <BottomPeakDivider />
</div>
