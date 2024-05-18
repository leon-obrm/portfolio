<script lang="ts">
    import { colors } from "$lib/colors"
    import type { TailwindPalette } from "$lib/interfaces"
    import { theme } from "../../store"

    const primary: TailwindPalette = colors.primary
</script>

<svg
    class="-mt-12"
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
        d="M0 73L192 88L384 120L576 71L768 108L960 92L1152 82L1344 103L1536 111L1728 122L1920 57L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={$theme === "light" ? primary[50] : primary[900]}
    />
    <path
        d="M0 116L192 160L384 173L576 107L768 175L960 119L1152 149L1344 139L1536 160L1728 106L1920 179L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={$theme === "light" ? primary[100] : primary[800]}
    />
    <path
        d="M0 210L192 185L384 224L576 203L768 191L960 205L1152 182L1344 157L1536 181L1728 213L1920 192L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={$theme === "light" ? primary[200] : primary[700]}
    />
    <path
        d="M0 217L192 237L384 268L576 237L768 244L960 263L1152 226L1344 270L1536 273L1728 269L1920 260L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={$theme === "light" ? primary[300] : primary[600]}
    />
    <path
        d="M0 320L192 266L384 306L576 314L768 283L960 294L1152 265L1344 316L1536 264L1728 308L1920 273L1920 351L1728 351L1536 351L1344 351L1152 351L960 351L768 351L576 351L384 351L192 351L0 351Z"
        fill={$theme === "light" ? primary[400] : primary[500]}
    />
</svg>
