<script lang="ts">
    import { scale } from "svelte/transition";

    import MediaQuery from "../../lib/MediaQuery.svelte";
    import Navbar from "./Navbar.svelte";
    import Headline from "./Headline.svelte";
    import Description from "./Description.svelte";
    import Portrait from "./Portrait.svelte";
    import MediaLinks from "./MediaLinks.svelte";
    import ScrollDown from "./ScrollDown.svelte";

    import OnLoadTransition from "../../lib/OnLoadTransition.svelte";
</script>

<Navbar />

<MediaQuery breakpoint="md">
    <div
        slot="above"
        class="pt-16 pb-4 px-14 w-full flex flex-col justify-center items-center content-center gap-8"
    >
        <div class="w-full max-w-7xl flex justify-center items-center content-center gap-20">
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
        id="about"
        slot="below"
        class="w-full pt-6 pb-10 flex flex-col justify-start content-center items-center gap-5"
    >
        <Headline />
        <Portrait />
        <ScrollDown />
        <Description />
        <MediaLinks />
    </div>
</MediaQuery>
