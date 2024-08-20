<script lang="ts">
    import { Triangle } from "lucide-svelte"
    import { fly } from "svelte/transition"

    export let y: number = 50
    export let duration: number = 750
    export let delay: number = 0
</script>

<div class="rotate-180 animate-pulse lg:scale-[2]" in:fly={{ y, duration, delay }}>
    <Triangle fill="white" size={12} />
</div>
