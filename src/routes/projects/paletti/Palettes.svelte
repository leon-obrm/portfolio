<script lang="ts">
    import Palette from "./Palette.svelte"
    import { palettes } from "./store"
</script>

<div class="flex flex-col items-start gap-6 overflow-x-hidden px-3 pb-12">
    {#each $palettes as palette, index}
        <Palette {palette} {index} />
    {/each}
</div>
