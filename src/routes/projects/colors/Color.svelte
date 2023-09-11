<script lang="ts">
    import type { ColorProps } from "$lib/interfaces"

    export let color: ColorProps
    export let index: number

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
        return `#${f(0)}${f(8)}${f(4)}`
    }
</script>

<div class="flex w-[90%] flex-col items-center">
    <div
        class="h-96 w-full"
        style="background-color: hsl({color.hue}, {color.saturation}%, {color.lightness}%);"
    />
    <p class={`text-lg ${index !== 4 ? "text-gray-500" : "font-bold"}`}>{hslToHex(color)}</p>
</div>
