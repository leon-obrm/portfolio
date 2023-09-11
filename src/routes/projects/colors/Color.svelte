<script lang="ts">
    import type { ColorProps } from "$lib/interfaces"

    export let color: ColorProps
    export let index: number
</script>

<div class="flex w-[90%] flex-col items-center">
    <div
        class="h-96 w-full"
        style="background-color: hsl({color.hue}, {color.saturation}%, {color.lightness}%);"
    />
    <p class={`text-lg ${index !== 4 ? "text-gray-500" : "font-bold"}`}>DBA2F2</p>
</div>
