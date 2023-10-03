<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext } from "svelte"
    import Slider from "./Slider.svelte"

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

<Slider
    style="background: linear-gradient(90deg, hsl({mainHue - 30}, 100%, 65%) 0%, hsl({mainHue +
        30}, 100%, 65%) 100%);"
    min={-100}
    max={100}
    step={10}
    value={$page.data.hueRotationAmount}
    onInput={setHueRotationAmount}
/>
