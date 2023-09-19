<script lang="ts">
    import { colorSettings } from "./store"
    import DiceButton from "./DiceButton.svelte"
    import HueSlider from "./HueSlider.svelte"
    import UndoRedo from "./UndoRedo.svelte"
    import Export from "./Export.svelte"
</script>

<div class="fixed bottom-6 flex w-screen items-center justify-center gap-12 bg-gray-100">
    <UndoRedo />
    <HueSlider />

    <DiceButton />

    <div class="form-control">
        <label class="label flex cursor-pointer flex-col gap-1">
            <span class="label-text">Gaps</span>
            <input type="checkbox" class="toggle border-2" bind:checked={$colorSettings.showGap} />
        </label>
    </div>

    <Export />
</div>
