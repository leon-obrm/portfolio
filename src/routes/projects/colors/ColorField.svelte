<script lang="ts">
    import type { ColorProps } from "$lib/interfaces"

    export let color: ColorProps
</script>

<div
    class="h-[80px] w-[80px]"
    style="background-color: hsl({color.hue}, {color.saturation}%, {color.lightness}%);"
/>
