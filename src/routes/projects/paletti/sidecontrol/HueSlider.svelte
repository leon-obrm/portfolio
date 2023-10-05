<script lang="ts">
    import convert from "color-convert"
    import { page } from "$app/stores"
    import { getContext, onMount } from "svelte"
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

    // Update hue rotation amount when receiving corresponding event
    onMount(() => {
        function handleKeyDown(multiplier: number) {
            let newValue: number = parseInt($page.data.hueRotationAmount)
            newValue += step * multiplier

            newValue = Math.min(max, Math.max(min, newValue))

            navigate(undefined, newValue)
        }

        document.addEventListener("ArrowLeft", () => {
            handleKeyDown(-1)
        })
        document.addEventListener("ArrowRight", () => {
            handleKeyDown(1)
        })

        return () => {
            document.removeEventListener("ArrowLeft", () => {
                handleKeyDown(-1)
            })
            document.removeEventListener("ArrowRight", () => {
                handleKeyDown(1)
            })
        }
    })
</script>

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
