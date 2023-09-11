<script lang="ts">
    import { paletteConfig } from "./paletteConfigStore"

    function setHueRotationAmount(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        paletteConfig.update((config) => {
            config.hueRotationAmount = parseInt(inputElement.value)
            return config
        })
    }
</script>

<div class="flex w-full max-w-md flex-col gap-2">
    <label for="hue-rotation-amount" class="font-semibold">Tint</label>
    <!-- TODO: Replace with gradient of actual hues  -->
    <input
        type="range"
        min="-100"
        max="100"
        class="range range-sm"
        on:input={setHueRotationAmount}
        value={$paletteConfig.hueRotationAmount}
    />
</div>
