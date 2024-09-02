<script lang="ts">
    import { Triangle } from "lucide-svelte"
    import { fly } from "svelte/transition"

    export let y: number = 50
    export let duration: number = 750
    export let delay: number = 0
    export let scrollAnchor: HTMLDivElement
</script>

<button
    class="rotate-180 animate-pulse lg:scale-[2]"
    in:fly={{ y, duration, delay }}
    on:click={() => {
        scrollAnchor.scrollIntoView({ behavior: "smooth" })
    }}
>
    <Triangle fill="white" size={12} />
</button>
