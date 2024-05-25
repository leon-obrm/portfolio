<script lang="ts">
    import { colors } from "$lib/colors"
    import type { TailwindPalette } from "$lib/interfaces"
    import { theme } from "../../store"

    const gray: TailwindPalette = colors.gray
</script>

<svg
    class="z-20 -translate-y-1"
    viewBox="0 0 1920 350"
    width="1920"
    height="350"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
>
    <rect x="0" y="0" width="1920" height="350" fill-opacity="0" />
    <path
        d="M0 207L192 229L384 209L576 189L768 203L960 212L1152 186L1344 155L1536 192L1728 232L1920 244L1920 0L1728 0L1536 0L1344 0L1152 0L960 0L768 0L576 0L384 0L192 0L0 0Z"
        fill={gray[50]}
        opacity="0.15"
    />
    <path
        d="M0 159L192 149L384 126L576 112L768 129L960 145L1152 159L1344 129L1536 189L1728 127L1920 123L1920 0L1728 0L1536 0L1344 0L1152 0L960 0L768 0L576 0L384 0L192 0L0 0Z"
        fill={gray[50]}
        opacity="0.25"
    />
    <path
        d="M0 118L192 87L384 106L576 96L768 117L960 76L1152 80L1344 97L1536 130L1728 101L1920 107L1920 0L1728 0L1536 0L1344 0L1152 0L960 0L768 0L576 0L384 0L192 0L0 0Z"
        fill={gray[50]}
        opacity="0.35"
    />
    <path
        d="M0 42L192 66L384 72L576 32L768 81L960 78L1152 49L1344 48L1536 53L1728 52L1920 86L1920 0L1728 0L1536 0L1344 0L1152 0L960 0L768 0L576 0L384 0L192 0L0 0Z"
        fill={gray[50]}
        opacity="0.45"
    />
</svg>
