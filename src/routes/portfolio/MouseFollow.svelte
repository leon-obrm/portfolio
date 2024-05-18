<script lang="ts">
    import { onMount } from "svelte"

    const size: number = 500

    let blob: HTMLSpanElement

    let isThrottled: boolean = false
    const throttleDelay: number = 100

    function updateMousePosition(e: MouseEvent) {
        // Do nothing if throttled
        if (isThrottled) return

        // Activate throttling
        isThrottled = true

        // Deactive throttling after delay
        setTimeout(() => {
            isThrottled = false
        }, throttleDelay)

        blob.animate(
            {
                left: `${e.clientX - size / 2}px`,
                top: `${e.clientY - size / 2}px`,
            },
            { duration: 500, fill: "forwards" }
        )
    }

    onMount(() => {
        window.addEventListener("pointermove", updateMousePosition)

        return () => {
            window.removeEventListener("pointermove", updateMousePosition)
        }
    })
</script>

<span
    bind:this={blob}
    class="spin-slow fixed -z-20 rounded-full bg-white bg-gradient-to-r from-primary-50 to-primary-400 dark:from-primary-400 dark:to-primary-800"
    style="width: {size}px; height: {size}px;"
/>

<span class="fixed -z-10 h-screen w-screen backdrop-blur-[12vmax]" />

<style>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            scale: 1 1.5;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spin-slow {
        animation: spin 20s linear infinite;
    }
</style>
