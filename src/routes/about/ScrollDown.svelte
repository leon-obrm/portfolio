<!--
  @component

  Contains scroll down lottie from MJ Mohiddin ({@link https://lottiefiles.com/11514-swipe-down-arrows})
-->
<script lang="ts">
    import { onMount } from "svelte";
    import lottie from "lottie-web";
    import animationData from "../../lib/lottieScrollDown.json";

    let animationContainer: HTMLElement;

    onMount(() => {
        setTimeout(() => {
            lottie.loadAnimation({
                container: animationContainer,
                animationData: animationData,
            });
        }, 2000);
    });
</script>

<a href="#skills" bind:this={animationContainer} class="w-28 h-28 -m-8 md:w-36 md:h-36">{" "}</a>
