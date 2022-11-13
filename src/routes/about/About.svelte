<script lang="ts">
    import Titlebar from "./Titlebar.svelte";
    import Headline from "./Headline.svelte";
    import Description from "./Description.svelte";
    import Portrait from "./Portrait.svelte";
    import MediaLinks from "./MediaLinks.svelte";
    import ScrollDown from "./ScrollDown.svelte";
</script>

<Titlebar />
<div class="w-full mt-2 pb-5 flex flex-col justify-start content-center items-center gap-5">
    <Headline />
    <Portrait />
    <ScrollDown />
    <Description />
    <MediaLinks />
</div>
