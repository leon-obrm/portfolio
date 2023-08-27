<!--
  @component

  Contains about section, including the navbar
-->
<script lang="ts">
    import MediaQuery from "$lib/MediaQuery.svelte";
    import Navbar from "./Navbar.svelte";
    import Headline from "./Headline.svelte";
    import Description from "./Description.svelte";
    import Portrait from "./Portrait.svelte";
    import MediaLinks from "./MediaLinks.svelte";
    import ScrollDown from "./ScrollDown.svelte";
</script>

<Navbar />

<MediaQuery breakpoint="md">
    <div
        slot="above"
        class="flex w-full flex-col content-center items-center justify-between gap-16 px-14 pt-16 pb-6"
    >
        <div class="flex w-full max-w-4xl content-center items-center justify-between gap-20">
            <div class="flex flex-col content-center items-center justify-center gap-10">
                <Headline />
                <Description />
                <MediaLinks />
            </div>

            <div class="-m-7">
                <Portrait />
            </div>
        </div>

        <ScrollDown />
    </div>

    <div
        id="about"
        slot="below"
        class="flex w-full flex-col content-center items-center justify-start gap-5 pt-6 pb-10"
    >
        <Headline />
        <Portrait />
        <ScrollDown />
        <Description />
        <MediaLinks />
    </div>
</MediaQuery>
