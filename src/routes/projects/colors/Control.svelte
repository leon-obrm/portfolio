<script lang="ts">
    import DiceButton from "./DiceButton.svelte"

    export let createRandomPaletteConfig: () => void
</script>

<div class="fixed bottom-6 flex w-screen items-center justify-center gap-12 bg-gray-100">
    <div class="flex w-full max-w-md flex-col gap-2">
        <label for="hue-rotation-amount" class="font-semibold">Tint</label>
        <!-- TODO: Replace with gradient of actual hues  -->
        <input type="range" min="-100" max="100" class="range range-sm" />
    </div>

    <DiceButton {createRandomPaletteConfig} />

    <div class="flex w-full max-w-md gap-4">
        <button class="btn">Import</button>
        <button class="btn">Export</button>
        <button class="btn">Share</button>
    </div>
</div>
