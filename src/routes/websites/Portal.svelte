<!--
  @component

  Contains hexagon lottie from Ision Industries ({@link https://lottiefiles.com/21180-impossible-hexagon})
  @param {string} color - Color of inside of hexagon
  @param {string} hoverColor - Color of inside of hexagon when hovered
  @param {string} link - Link to open when portal is clicked
-->
<script lang="ts">
    import { onMount } from "svelte";
    import lottie from "lottie-web";
    import animationData from "./lottiePortal.json";

    export let color: string;
    export let hoverColor: string;
    export let link: string;

    let finalColor: string = color;

    let animationContainer: HTMLElement;

    onMount(() => {
        lottie.loadAnimation({
            container: animationContainer,
            animationData: animationData,
        });
    });
</script>

<a
    bind:this={animationContainer}
    class="hex btn bg-transparent border-0 hover:bg-transparent w-60 h-60 flex justify-center items-center content-center -mb-6 md:-mr-10 md:mb-0"
    href={link}
    target="new"
    on:mouseenter={() => {
        finalColor = hoverColor;
    }}
    on:mouseleave={() => {
        finalColor = color;
    }}
>
    <div class="absolute w-40 h-40 hex {finalColor} transition-colors duration-300" />
    <p class="absolute w-20 text-center text-lg text-white font-normal normal-case">Take a look</p>
</a>

<style>
    .hex {
        clip-path: polygon(50% 10%, 85% 30%, 85% 70%, 50% 90%, 15% 70%, 15% 30%);
    }
</style>
