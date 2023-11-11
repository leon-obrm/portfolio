<!--
  @component

  Contains hexagon lottie from Ision Industries ({@link https://lottiefiles.com/21180-impossible-hexagon})
  @param {WebsiteProps} website - The website that this component represents
-->
<script lang="ts">
    import { onMount } from "svelte"
    import lottie from "lottie-web"
    import animationData from "./lottiePortal.json"

    import type { WebsiteProps } from "$lib/interfaces"

    export let website: WebsiteProps

    let animationContainer: HTMLElement

    onMount(() => {
        lottie.loadAnimation({
            container: animationContainer,
            animationData: animationData,
        })
    })
</script>

<div class="drop-shadow-md transition-all duration-500 hover:scale-105 hover:drop-shadow-lg">
    <a
        bind:this={animationContainer}
        class="hex no-animation btn -mb-6 flex h-60 w-60 content-center items-center justify-center border-0 bg-transparent hover:bg-transparent md:-mr-10 md:mb-0"
        href={website.link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <div
            class="hex absolute h-40 w-40 shadow-inner transition-colors duration-300"
            style="background: radial-gradient({website.gradientStartColor}, {website.gradientEndColor});"
        />
        <p class="absolute w-20 text-center text-lg font-normal normal-case leading-6 text-white">
            Take a look
        </p>
    </a>
</div>

<style>
    .hex {
        clip-path: polygon(50% 10%, 85% 30%, 85% 70%, 50% 90%, 15% 70%, 15% 30%);
    }
</style>
