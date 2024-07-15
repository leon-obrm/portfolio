<!--
  @component

  Contains skill section, including button group for toggling between list types and the currently selected list
-->
<script lang="ts">
    import SkillList from "./SkillList.svelte"
    import TopPeakDivider from "./TopPeakDivider.svelte"
    import BottomPeakDivider from "./BottomPeakDivider.svelte"
</script>

<div class="overflow-hidden">
    <TopPeakDivider />
    <div
        class="relative z-30 flex flex-col content-center items-center justify-center gap-10 bg-gray-50/45 pb-16 pt-14 backdrop-blur-3xl"
    >
        <div id="skills" class="absolute -top-[64px]" />

        <h1 class="pb-8 text-3xl font-semibold uppercase tracking-widest lg:text-4xl">Skills</h1>

        <SkillList />
    </div>
    <BottomPeakDivider />
</div>
