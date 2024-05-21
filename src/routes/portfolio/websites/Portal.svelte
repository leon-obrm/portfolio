<!--
  @component

  Contains hexagon lottie from Ision Industries ({@link https://lottiefiles.com/21180-impossible-hexagon})
  @param {WebsiteProps} website - The website that this component represents
-->
<script lang="ts">
    import lottie from "lottie-web"
    import { replaceColor } from "lottie-colorify"
    import { onMount } from "svelte"
    import animationData from "./lottiePortal.json"

    import type { WebsiteProps, TailwindPalette } from "$lib/interfaces"
    import { colors } from "$lib/colors"

    export let website: WebsiteProps

    let animationContainer: HTMLElement

    const gray: TailwindPalette = colors.gray
    const primary: TailwindPalette = colors.primary

    onMount(() => {
        let coloredAnimationData = replaceColor("#323843", gray[900], animationData)
        coloredAnimationData = replaceColor("#424A59", gray[800], coloredAnimationData)
        // FIXME: This one gray color does not want to be replaced for some reason (Looks good enough for now though)
        // The rbg values in the lottie file are:
        // 0.298039215686
        // 0.337254901961
        // 0.4
        coloredAnimationData = replaceColor("#4C5666", gray[600], coloredAnimationData)

        lottie.loadAnimation({
            container: animationContainer,
            animationData: coloredAnimationData,
        })
    })
</script>

<div class="drop-shadow-md transition-all duration-500 hover:scale-105 hover:drop-shadow-lg">
    <a
        bind:this={animationContainer}
        class="hex btn no-animation -mb-6 flex h-60 w-60 content-center items-center justify-center border-0 bg-transparent hover:bg-transparent md:-mr-10 md:mb-0"
        href={website.link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <div
            class="hex absolute h-40 w-40 shadow-inner transition-colors duration-300"
            style="background: radial-gradient({primary[500]}, {primary[950]});"
        />
        <p class="absolute w-20 text-center text-lg font-medium normal-case leading-6 text-white">
            Take a look
        </p>
    </a>
</div>

<style>
    .hex {
        clip-path: polygon(50% 10%, 85% 30%, 85% 70%, 50% 90%, 15% 70%, 15% 30%);
    }
</style>
