<script lang="ts">
    import convert from "color-convert"
    import { Copy } from "lucide-svelte"
    import { ntc } from "$lib/ntc"
    import type { ColorProps } from "$lib/interfaces"
    import { paletteConfig } from "./paletteConfigStore"

    export let color: ColorProps
    export let index: number

    let colorHex: string
    $: colorHex = convert.hsl.hex([color.hue, color.saturation, color.lightness])

    /** Calculates contrast ratio between two colors
     * Credit: https://stackoverflow.com/a/9733420
     */
    function getContrast(currentColor: ColorProps, testColor: number[]): number {
        function luminance(rgb: number[]) {
            const RED = 0.2126
            const GREEN = 0.7152
            const BLUE = 0.0722

            const GAMMA = 2.4

            var a = rgb.map((v) => {
                v /= 255
                return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA)
            })
            return a[0] * RED + a[1] * GREEN + a[2] * BLUE
        }

        var lum1 = luminance(
            convert.hsl.rgb([currentColor.hue, currentColor.saturation, currentColor.lightness])
        )
        var lum2 = luminance(testColor)
        var brightest = Math.max(lum1, lum2)
        var darkest = Math.min(lum1, lum2)
        return (brightest + 0.05) / (darkest + 0.05)
    }

    /** Returns text color with most contrast out of white and black */
    function getTextColor(currentColor: ColorProps): string {
        const contrastWhite: number = getContrast(currentColor, [255, 255, 255])
        const contrastBlack: number = getContrast(currentColor, [0, 0, 0])

        return contrastWhite > contrastBlack ? "#FFFFFF" : "#000000"
    }

    /** Color of copy icon and copy success message
     * Depends on contrast ratio between background color and white / black
     */
    let textColor: string
    $: textColor = getTextColor(color)

    let isClicked = false
    // Hides copy success message after change of color
    $: if (color) isClicked = false

    let timeout: NodeJS.Timeout

    /** Converts hex color from input to hsl and updates palette config */
    function setNewColor(e: Event) {
        const inputElement = e.target as HTMLInputElement
        if (inputElement === null) return
        if (inputElement.value.length < 6) return
        let allowedCharacters = /^[A-Fa-f0-9]+$/
        if (!allowedCharacters.test(inputElement.value)) return

        // TODO: Check for invalid hex values
        const hsl: number[] = convert.hex.hsl(inputElement.value)

        paletteConfig.update((config) => {
            config.mainColor = {
                hue: hsl[0],
                saturation: hsl[1],
                lightness: hsl[2],
            }
            return config
        })
    }
</script>

<div class={`flex flex-col items-center gap-2 ${index !== 4 ? "w-[10.5%]" : "w-[16%]"}`}>
    <div
        class="flex h-96 w-full flex-col items-center justify-center"
        style="background-color: hsl({color.hue}, {color.saturation}%, {color.lightness}%);"
    >
        <p class="relative top-6 z-50 font-medium" style:color={textColor}>
            {ntc.name(colorHex)[1]}
        </p>
        <label
            class={`swap swap-rotate h-full w-full opacity-0 transition-opacity duration-150 hover:opacity-100 ${
                isClicked && "opacity-100"
            }`}
            style:color={textColor}
        >
            <input
                type="checkbox"
                bind:checked={isClicked}
                on:change={() => {
                    // Copies hex value of color to clipboard
                    navigator.clipboard.writeText("#" + colorHex)

                    // Shows "Copied!" for 1 second when clicked
                    isClicked = true
                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        isClicked = false
                    }, 1000)
                }}
            />
            <div class="swap-off flex content-center items-center justify-center">
                <Copy size={32} />
            </div>
            <div class="swap-on text-lg">Copied!</div>
        </label>
    </div>
    {#if index === 4}
        <input
            type="text"
            class="input-bordered input-primary input m-0 h-7 w-24 max-w-xs p-0 text-center text-lg"
            maxlength="6"
            value={colorHex}
            on:input={setNewColor}
        />
    {:else}
        <p class={`text-lg ${index !== 4 ? "text-gray-500" : "font-bold"}`}>
            {colorHex}
        </p>
    {/if}
</div>
