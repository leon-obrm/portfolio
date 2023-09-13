<script lang="ts">
    import { Copy } from "lucide-svelte"
    import type { ColorProps } from "$lib/interfaces"

    export let color: ColorProps
    export let index: number

    let colorHex: string
    $: colorHex = hslToHex(color)

    /** Transforms HSL values to hex
     * Credit: https://stackoverflow.com/a/44134328
     * */
    function hslToHex(colorHsl: ColorProps) {
        let { hue, saturation, lightness } = colorHsl

        lightness /= 100
        const a = (saturation * Math.min(lightness, 1 - lightness)) / 100
        const f = (n: number) => {
            const k = (n + hue / 30) % 12
            const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
            return Math.round(255 * color)
                .toString(16)
                .padStart(2, "0") // convert to Hex and prefix "0" if needed
        }
        return `#${f(0)}${f(8)}${f(4)}`.toUpperCase()
    }

    /** Transforms hex values to RGB values */
    function hexToRgb(hex: string): number[] {
        // Remove # from hex string
        hex = hex.replace(/^#/, "")

        // Check if hex string valid
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
            return [0, 0, 0]
        }

        // Parse hex string into RGB values
        const r = parseInt(hex.slice(0, 2), 16)
        const g = parseInt(hex.slice(2, 4), 16)
        const b = parseInt(hex.slice(4, 6), 16)

        return [r, g, b]
    }

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

        var lum1 = luminance(hexToRgb(hslToHex(currentColor)))
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
</script>

<div class={`flex flex-col items-center gap-2 ${index !== 4 ? "w-[10.5%]" : "w-[16%]"}`}>
    <div
        class="h-96 w-full"
        style="background-color: hsl({color.hue}, {color.saturation}%, {color.lightness}%);"
    >
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
                    navigator.clipboard.writeText(colorHex)

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
    <p class={`text-lg ${index !== 4 ? "text-gray-500" : "font-bold"}`}>
        {colorHex.replace("#", "")}
    </p>
</div>
