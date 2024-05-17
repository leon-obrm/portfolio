<!--
  @component

  Contains skill section, including button group for toggling between list types and the currently selected list
-->
<script lang="ts">
    import HexagonList from "./HexagonList.svelte"
    import TopPeakDivider from "./TopPeakDivider.svelte"
    import BottomPeakDivider from "./BottomPeakDivider.svelte"
</script>

<div class="overflow-hidden">
    <TopPeakDivider />
    <div
        class="relative flex flex-col content-center items-center justify-center gap-10 bg-primary-400 py-14 dark:bg-primary-500"
    >
        <div id="skills" class="absolute -top-[64px]" />

        <h1 class="pb-8 text-3xl font-semibold uppercase tracking-widest text-white lg:text-4xl">
            Skills
        </h1>

        <HexagonList />
    </div>
    <BottomPeakDivider />
</div>
