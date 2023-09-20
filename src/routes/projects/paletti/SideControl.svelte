<script lang="ts">
    import HueSlider from "./HueSlider.svelte"
    import ShowGaps from "./ShowGaps.svelte"
    import Export from "./Export.svelte"

    // TODO: Normalize labels
</script>

<div
    class="m-3 ml-1 flex w-1/5 min-w-[300px] flex-col justify-between rounded-xl border border-gray-200 bg-gray-100 p-4 shadow-md"
>
    <div class="flex w-full flex-col items-start gap-8">
        <p class="font-semibold">Settings</p>

        <HueSlider />

        <ShowGaps />
    </div>

    <Export />
</div>
