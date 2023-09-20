<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext } from "svelte"

    const navigate: (mainColor?: string, hueRotationAmount?: number) => void =
        getContext("navigate")

    function setHueRotationAmount(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        navigate(undefined, parseInt(inputElement.value))
    }

    let mainHue: number
    $: mainHue = convert.hex.hsl($page.data.mainColor)[0]
</script>

<div class="flex w-full max-w-md flex-col gap-2">
    <label for="hue-rotation-amount" class="font-semibold">Tint</label>
    <input
        class="slider h-3 w-full rounded-full"
        style="background: linear-gradient(90deg, hsl({mainHue - 30}, 100%, 65%) 0%, hsl({mainHue +
            30}, 100%, 65%) 100%);"
        type="range"
        min="-100"
        max="100"
        step="10"
        on:input={setHueRotationAmount}
        value={$page.data.hueRotationAmount}
    />
</div>

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
