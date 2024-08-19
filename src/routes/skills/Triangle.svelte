<script lang="ts">
    import { Triangle } from "lucide-svelte"
    import { fly } from "svelte/transition"

    export let delay: number = 0
</script>

<div class="rotate-180 animate-pulse lg:scale-[2]" in:fly={{ y: 50, duration: 750, delay }}>
    <Triangle fill="white" size={12} />
</div>
