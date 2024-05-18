<script lang="ts">
    import { colors } from "$lib/colors"
    import type { TailwindPalette } from "$lib/interfaces"
    import { theme } from "./store"

    const primary: TailwindPalette = colors.primary
</script>

<svg
    class="absolute bottom-10"
    id="visual"
    viewBox="0 0 1920 1080"
    width="1920"
    height="1080"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
>
    <rect x="0" y="0" width="1920" height="1080" fill-opacity="0" />
    <path
        d="M0 937L192 904L384 916L576 944L768 904L960 893L1152 911L1344 916L1536 947L1728 899L1920 951L1920 1081L1728 1081L1536 1081L1344 1081L1152 1081L960 1081L768 1081L576 1081L384 1081L192 1081L0 1081Z"
        fill={$theme === "light" ? primary[50] : primary[900]}
    />
    <path
        d="M0 970L192 998L384 963L576 995L768 991L960 955L1152 947L1344 955L1536 948L1728 955L1920 1000L1920 1081L1728 1081L1536 1081L1344 1081L1152 1081L960 1081L768 1081L576 1081L384 1081L192 1081L0 1081Z"
        fill={$theme === "light" ? primary[100] : primary[800]}
    />
    <path
        d="M0 1012L192 1007L384 1040L576 1045L768 1039L960 1013L1152 1007L1344 1040L1536 1006L1728 1009L1920 1004L1920 1081L1728 1081L1536 1081L1344 1081L1152 1081L960 1081L768 1081L576 1081L384 1081L192 1081L0 1081Z"
        fill={$theme === "light" ? primary[200] : primary[700]}
    />
</svg>
