<script lang="ts">
    import { Mail, ArrowUpRight } from "lucide-svelte"
    import { onMount } from "svelte"

    let mouseFollow: HTMLDivElement
    let scrollIcon: HTMLSpanElement
    let linkIcon: HTMLSpanElement

    let throttled: boolean = false

    /** Update position values if mouse moves. */
    function handleMouseMove(event: PointerEvent) {
        if (throttled) return

        // Don't show mouse follow on touch devices
        if (event.pointerType === "touch") return

        // @ts-ignore
        const interactable = event.target.closest(".mouse-follow")
        const interacting: boolean = interactable !== null

        let mouseX: number = event.clientX
        let mouseY: number = event.clientY

        // Switches icon according to type of interactable
        if (interactable) {
            const type: string = interactable.dataset.type

            if (type === "link") {
                scrollIcon.className = "hidden"
                linkIcon.className = ""
            }
            if (type === "scroll-down") {
                linkIcon.className = "hidden"
                scrollIcon.className = ""
            }
        }

        const keyframes = {
            transform: `translate(${mouseX - 28}px, ${mouseY - 28}px) scale(${interacting ? 1.2 : 0})`,
            opacity: interacting ? 100 : 0,
        }

        mouseFollow.animate(keyframes, {
            duration: 100,
            fill: "forwards",
        })

        throttled = true

        /** Time in ms that event handler is throttled. Throttle is longer if mouse follow is not above interactable element. */
        const throttleDelay: number = interacting ? 15 : 50

        // Blocks multiple calls due to scroll event within throttleDelay
        setTimeout(() => {
            throttled = false
        }, throttleDelay)
    }

    onMount(() => {
        document.addEventListener("pointermove", handleMouseMove)

        return () => {
            document.removeEventListener("pointermove", handleMouseMove)
        }
    })
</script>

<div
    bind:this={mouseFollow}
    class="glass-border pointer-events-none fixed left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black/25 backdrop-blur-[5px]"
>
    <!-- ======== Scroll Icon ======== -->
    <span bind:this={scrollIcon}>
        <Mail color="#fff" size={24} strokeWidth={1.5} />
    </span>

    <!-- ======== Link Icon ======== -->
    <span bind:this={linkIcon}>
        <ArrowUpRight color="#fff" size={28} strokeWidth={1.5} />
    </span>
</div>
