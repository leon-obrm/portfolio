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
    <input
        class="slider h-3 w-full rounded-full"
        style="background: linear-gradient(90deg, hsl({$paletteConfig.mainColor.hue -
            30}, 100%, 65%) 0%, hsl({$paletteConfig.mainColor.hue + 30}, 100%, 65%) 100%);"
        type="range"
        min="-100"
        max="100"
        on:input={setHueRotationAmount}
        value={$paletteConfig.hueRotationAmount}
    />
</div>

<svelte:window
    on:keydown={(e) => {
        let direction = 0

        if (e.key === "a" || e.key === "ArrowLeft") direction = -1
        else if (e.key === "d" || e.key === "ArrowRight") direction = 1

        paletteConfig.update((config) => {
            config.hueRotationAmount = Math.min(
                100,
                Math.max(config.hueRotationAmount + 10 * direction, -100)
            )
            return config
        })
    }}
/>

<style>
    /* 
    Custom slider styling
    Credit: https://www.w3schools.com/howto/howto_js_rangeslider.asp 
    */

    /* The slider itself */
    .slider {
        -webkit-appearance: none; /* Override default CSS styles */
        appearance: none;
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #fff; /* Green background */
        cursor: pointer; /* Cursor on hover */
        border-radius: 100%;
        border: 2px solid #90949e;
        transition: transform 0.2s ease-in-out;
    }

    .slider::-webkit-slider-thumb:hover {
        transform: scale(1.1);
    }

    .slider::-moz-range-thumb {
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #fff; /* Green background */
        cursor: pointer; /* Cursor on hover */
        border-radius: 100%;
        border: 2px solid #90949e;
        transition: transform 0.2s ease-in-out;
    }

    .slider::-moz-range-thumb:hover {
        transform: scale(1.1);
    }
</style>
