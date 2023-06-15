<!--
  @component

  Contains skill section, including button group for toggling between list types and the currently selected list
-->
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

<div
    class="relative pt-14 pb-16 bg-primary-300 flex flex-col justify-center items-center content-center gap-10 shadow-inner"
>
    <div id="skills" class="absolute -top-[64px]" />

    <div class="w-10/12 max-w-4xl font-medium flex justify-between items-center content-center">
        <h1 class="text-2xl md:text-3xl">Skills</h1>

        <ListSelect {currentIndex} {changeIndex} />
    </div>
    <svelte:component this={lists[currentIndex]} />
</div>
