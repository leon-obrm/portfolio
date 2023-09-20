<script lang="ts">
    import { colors } from "./store"
</script>

<svelte:head>
    <title>Paletti</title>
</svelte:head>

<div class="m-3 ml-7 flex w-fit content-center items-baseline gap-4">
    <div class="flex">
        <div class="museomoderno -mr-8 text-6xl font-black" style="color: #{$colors[1]}">p</div>
        <div class="museomoderno text-6xl font-black" style="color: #{$colors[4]}">p</div>
        <div class="museomoderno -ml-8 text-6xl font-black" style="color: #{$colors[7]}">p</div>
    </div>
    <p class="comfortaa none text-3xl font-bold">paletti</p>
</div>

<style>
    .comfortaa {
        font-family: "Comfortaa", sans-serif;
    }

    .museomoderno {
        font-family: "MuseoModerno", sans-serif;
    }
</style>
