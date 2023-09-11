<script lang="ts">
    import DiceButton from "./DiceButton.svelte"
    import HueSlider from "./HueSlider.svelte"
</script>

<div class="fixed bottom-6 flex w-screen items-center justify-center gap-12 bg-gray-100">
    <HueSlider />

    <DiceButton />

    <div class="flex w-full max-w-md gap-4">
        <button class="btn">Import</button>
        <button class="btn">Export</button>
        <button class="btn">Share</button>
    </div>
</div>
