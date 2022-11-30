<script lang="ts">
    import { fly, scale, blur, slide, draw } from "svelte/transition";

    import MediaQuery from "../../lib/MediaQuery.svelte";
    import Titlebar from "./Titlebar.svelte";
    import Headline from "./Headline.svelte";
    import Description from "./Description.svelte";
    import Portrait from "./Portrait.svelte";
    import MediaLinks from "./MediaLinks.svelte";
    import ScrollDown from "./ScrollDown.svelte";

    import OnLoadTransition from "../../lib/OnLoadTransition.svelte";
</script>

<Titlebar />

<MediaQuery breakpoint="lg">
    <div
        slot="above"
        class="mt-16 mb-4 px-14 w-full flex flex-col justify-center items-center content-center gap-8"
    >
        <div class="w-full max-w-7xl flex justify-center items-center content-center gap-32">
            <OnLoadTransition>
                <div
                    class="flex flex-col justify-center items-center content-center gap-10"
                    in:scale={{ duration: 500 }}
                >
                    <Headline />
                    <Description />
                    <MediaLinks />
                </div>
            </OnLoadTransition>

            <div class="-m-7">
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
