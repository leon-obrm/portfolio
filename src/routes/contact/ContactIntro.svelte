<script lang="ts">
    import InViewTransition from "$lib/InViewTransition.svelte"
    import { useI18n } from "$lib/useI18n"
    import { fade, fly } from "svelte/transition"

    const i18n = useI18n()
</script>

<div class="relative flex w-full justify-center py-36 sm:py-40 md:py-44 lg:py-52">
    <!-- ======== Dotted Background ======== -->
    <InViewTransition
        containerClass="absolute -left-1/4 top-0 flex h-full w-[150%] items-center justify-center"
        rootMargin="-40%"
    >
        <div class="dots h-full w-full max-w-screen-2xl" in:fade={{ duration: 1250 }} />
    </InViewTransition>

    <div class="flex flex-col gap-3 text-center sm:gap-5 lg:gap-8">
        <h3
            class="text-2xl font-semibold tracking-wide xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-wider"
        >
            {$i18n.t("haveISparked")}
        </h3>

        <InViewTransition
            containerClass="flex flex-col items-center gap-0.5 tracking-wide xs:text-lg sm:gap-1.5 sm:text-xl md:text-2xl lg:gap-3 lg:text-3xl lg:tracking-wider"
        >
            <p in:fly={{ y: 50, duration: 750 }}>{$i18n.t("feelFreeToSend")}</p>
            <p in:fly={{ y: 50, duration: 750, delay: 200 }}>{$i18n.t("IllBeHappyToHear")}</p>
        </InViewTransition>
    </div>
</div>

<style>
    .dots {
        /* Dotted background */
        background: radial-gradient(rgba(255, 255, 255, 0.2) 18%, transparent 8%);
        background-position: 0% 0%;
        background-size: 2.2vmin 2.2vmin;

        /* Masks out dots with ellipse */
        mask-image: radial-gradient(
            ellipse 60% 43% at center,
            black 0%,
            black 10%,
            transparent 80%
        );
        mask-size: 100%;
        mask-position: center;
    }
</style>
