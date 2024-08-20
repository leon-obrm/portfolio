<script lang="ts">
    import { useI18n } from "$lib/useI18n"
    import { onMount } from "svelte"

    const i18n = useI18n()

    /** Determines how much the texts move. */
    let animationAmount: number

    /** Height of screen. */
    let windowHeigth: number

    /** Div containing about intro. */
    let container: HTMLDivElement

    let upperText: HTMLHeadingElement
    let lowerText: HTMLHeadingElement

    /** Position of animation from 0 to 1. */
    let animationPosition: number = 0

    let ticking: boolean = false

    function handleScroll() {
        if (ticking) return

        window.requestAnimationFrame(() => {
            updateAnimation()
            ticking = false
        })
        ticking = true
    }

    function updateAnimation() {
        if (!container) return

        /** Top edge of about intro. */
        const topEdge = container.getBoundingClientRect().top
        /** Bottom edge of about intro. */
        const bottomEdge = container.getBoundingClientRect().bottom

        const topIsInView = topEdge < windowHeigth && topEdge > 0
        const bottomIsInView = bottomEdge < windowHeigth && bottomEdge > 0

        if (!topIsInView && !bottomIsInView) return

        // Calculate position of animation from 0 to 1
        animationPosition = 1 - (topEdge + bottomEdge) / 2 / windowHeigth
        // Make sure position is between 0 and 1
        animationPosition = Math.min(1, Math.max(0, animationPosition))

        const upperKeyframes = {
            transform: `translate(${animationPosition * animationAmount}px, 0px)`,
        }

        const lowerKeyframes = {
            transform: `translate(${animationPosition * -animationAmount}px, 0px)`,
        }

        upperText.animate(upperKeyframes, {
            duration: 5,
            fill: "forwards",
        })

        lowerText.animate(lowerKeyframes, {
            duration: 5,
            fill: "forwards",
        })
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll)

        windowHeigth = window.innerHeight

        // Calculate how much the texts move based on container width
        const containerWidth = container.getBoundingClientRect().width
        animationAmount = containerWidth / 8

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
</script>

<div class="flex w-full justify-center py-28 sm:py-32 md:py-36 lg:py-44">
    <div
        class="flex w-full max-w-sm flex-col items-center justify-center gap-6 text-2xl font-thin tracking-widest xs:max-w-md xs:gap-7 xs:text-3xl sm:max-w-lg sm:gap-8 sm:text-4xl md:max-w-2xl md:gap-10 md:text-5xl lg:max-w-4xl lg:gap-14 lg:text-6xl"
        bind:this={container}
    >
        <h3 class="w-full" bind:this={upperText}>
            {$i18n.t("meetThe")}
            <b class="font-medium">{$i18n.t("person")}</b>
        </h3>

        <!-- ======== Divider ======== -->
        <span class="h-px w-1/6 rounded-full bg-white/80" />

        <h3 class="w-full text-right" bind:this={lowerText}>
            <b class="font-medium">{$i18n.t("behind")}</b>
            {$i18n.t("theCode")}
        </h3>
    </div>
</div>
