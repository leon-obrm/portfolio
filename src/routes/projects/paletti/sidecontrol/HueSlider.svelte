<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext } from "svelte"
    import Slider from "./Slider.svelte"
    import SettingWrapper from "./SettingWrapper.svelte"

    const min: number = -100
    const max: number = 100
    const step: number = 10

    const navigate: (
        mainColor?: string,
        hueRotationAmount?: number,
        addToHistory?: boolean
    ) => void = getContext("navigate")

    function setHueRotationAmount(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return

        navigate(undefined, parseInt(inputElement.value))
    }

    let mainHue: number
    $: mainHue = convert.hex.hsl($page.data.mainColor)[0]

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return

        let newValue: number = parseInt($page.data.hueRotationAmount)
        if (e.key === "ArrowRight") newValue += step
        if (e.key === "ArrowLeft") newValue -= step

        newValue = Math.min(max, Math.max(min, newValue))

        navigate(undefined, newValue)
    }
</script>

<svelte:window on:keydown|stopPropagation={handleKeyDown} />

<SettingWrapper label="Hue Rotation">
    <Slider
        style="background: linear-gradient(90deg, hsl({mainHue - 30}, 100%, 65%) 0%, hsl({mainHue +
            30}, 100%, 65%) 100%);"
        {min}
        {max}
        {step}
        value={$page.data.hueRotationAmount}
        onInput={setHueRotationAmount}
    />
</SettingWrapper>
