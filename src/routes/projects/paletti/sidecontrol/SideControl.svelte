<script lang="ts">
    import ColorPicker from "./ColorPicker.svelte"
    import HueSlider from "./HueSlider.svelte"
    import ShowGaps from "./ShowGaps.svelte"
    import Export from "./Export.svelte"
</script>

<div
    class="row-span-8 col-start-6 m-3 ml-1 flex flex-col justify-between rounded-xl border-2 border-gray-200 bg-gray-100 p-4 shadow-md"
>
    <div class="flex w-full flex-col items-start gap-8">
        <p class="-mb-4 text-lg font-bold">Settings</p>

        <ColorPicker />

        <div class="divider -my-4" />

        <HueSlider />

        <ShowGaps />
    </div>

    <Export />
</div>

<style>
    .row-span-8 {
        grid-row: span 8 / span 8;
    }
</style>
