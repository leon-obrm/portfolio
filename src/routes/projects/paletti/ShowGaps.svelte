<script lang="ts">
    import { colorSettings } from "./store"
</script>

<div class="form-control">
    <label class="label flex cursor-pointer flex-col gap-1">
        <span class="font-semibold">Gaps</span>
        <input type="checkbox" class="toggle border-2" bind:checked={$colorSettings.showGap} />
    </label>
</div>

<div class="join">
    <input class="join-item btn" type="radio" name="options" aria-label="Radio 1" />
    <input class="join-item btn" type="radio" name="options" aria-label="Radio 2" />
</div>
