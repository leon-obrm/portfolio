<script lang="ts">
    import { colors } from "$lib/colors"
    import type { TailwindPalette } from "$lib/interfaces"
    import { theme } from "../../store"

    const gray: TailwindPalette = colors.gray
</script>

<svg
    class="-mt-20 translate-y-1"
    id="visual"
    viewBox="0 0 1920 350"
    width="1920"
    height="350"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
>
    <rect class="z-0" x="0" y="0" width="1920" height="350" fill-opacity="0" />
    <path
        d="M0 116L192 160L384 173L576 107L768 175L960 119L1152 149L1344 139L1536 160L1728 106L1920 179L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={gray[50]}
        opacity="0.15"
    />
    <path
        d="M0 210L192 185L384 224L576 203L768 191L960 205L1152 182L1344 157L1536 181L1728 213L1920 192L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={gray[50]}
        opacity="0.25"
    />
    <path
        d="M0 217L192 237L384 268L576 237L768 244L960 263L1152 226L1344 270L1536 273L1728 269L1920 260L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={gray[50]}
        opacity="0.35"
    />
    <path
        d="M0 320L192 266L384 306L576 314L768 283L960 294L1152 265L1344 316L1536 264L1728 308L1920 273L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={gray[50]}
        opacity="0.45"
    />
</svg>
