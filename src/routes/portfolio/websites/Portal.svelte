<!--
  @component

  Contains hexagon lottie from Ision Industries ({@link https://lottiefiles.com/21180-impossible-hexagon})
  @param {string} color - Color of inside of hexagon
  @param {string} hoverColor - Color of inside of hexagon when hovered
  @param {string} link - Link to open when portal is clicked
-->
<script lang="ts">
    import { onMount } from "svelte"
    import lottie from "lottie-web"
    import animationData from "./lottiePortal.json"

    import { Motion } from "svelte-motion"

    export let color: string
    export let hoverColor: string
    export let link: string

    let finalColor: string = color

    let animationContainer: HTMLElement

    onMount(() => {
        lottie.loadAnimation({
            container: animationContainer,
            animationData: animationData,
        })
    })
</script>

<Motion let:motion whileHover={{ scale: 1.05 }}>
    <div class="drop-shadow-md transition-all hover:drop-shadow-lg">
        <a
            use:motion
            bind:this={animationContainer}
            class="hex no-animation btn -mb-6 flex h-60 w-60 content-center items-center justify-center border-0 bg-transparent hover:bg-transparent md:-mr-10 md:mb-0"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            on:mouseenter={() => {
                finalColor = hoverColor
            }}
            on:mouseleave={() => {
                finalColor = color
            }}
        >
            <div class="hex absolute h-40 w-40 {finalColor} transition-colors duration-300" />
            <p class="absolute w-20 text-center text-lg font-normal normal-case text-white">
                Take a look
            </p>
        </a>
    </div>
</Motion>

<style>
    .hex {
        clip-path: polygon(50% 10%, 85% 30%, 85% 70%, 50% 90%, 15% 70%, 15% 30%);
    }
</style>
