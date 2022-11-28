<script lang="ts">
    import MediaQuery from "../../lib/MediaQuery.svelte";
    import Titlebar from "./Titlebar.svelte";
    import Headline from "./Headline.svelte";
    import Description from "./Description.svelte";
    import Portrait from "./Portrait.svelte";
    import MediaLinks from "./MediaLinks.svelte";
    import ScrollDown from "./ScrollDown.svelte";
</script>

<Titlebar />

<MediaQuery breakpoint="lg">
    <div
        slot="above"
        class="mt-16 mb-2 px-14 w-full flex flex-col justify-center items-center content-center"
    >
        <div class="w-full max-w-7xl flex justify-around items-center content-center">
            <div
                class="w-full flex flex-1 flex-col justify-center items-center content-center gap-10"
            >
                <Headline />
                <Description />
                <MediaLinks />
            </div>

            <div class="w-1/2 flex-1">
                <Portrait />
            </div>
        </div>

        <ScrollDown />
    </div>

    <div
        slot="below"
        class="w-full mt-2 pb-10 flex flex-col justify-start content-center items-center gap-5"
    >
        <Headline />
        <Portrait />
        <ScrollDown />
        <Description />
        <MediaLinks />
    </div>
</MediaQuery>
