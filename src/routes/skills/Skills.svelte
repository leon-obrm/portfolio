<script lang="ts">
    import ListSelect from "./ListSelect.svelte";
    import NormalList from "./NormalList.svelte";
    import TileList from "./TileList.svelte";
</script>

<div class="py-5 bg-secondary flex flex-col justify-center items-center content-center gap-5">
    <div class="w-10/12 max-w-xl flex justify-between items-center content-center">
        <p class="text-2xl">Skills</p>

        <ListSelect />
    </div>

    <!-- <NormalList /> -->
    <TileList />
</div>

<!-- HexagonList, NormalList, TileList -->
