<script lang="ts">
    import { Dice5 } from "lucide-svelte"

    export let createRandomPaletteConfig: () => void
</script>

<button
    class="btn-primary btn-circle btn h-20 w-20 -translate-y-10"
    on:click={createRandomPaletteConfig}
>
    <Dice5 size={32} />
</button>
