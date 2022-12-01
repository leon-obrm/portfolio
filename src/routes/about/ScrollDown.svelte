<script lang="ts">
    import { onMount } from "svelte";
    import lottie from "lottie-web";
    import animationData from "./lottieScrollDown.json";

    let animationContainer: HTMLElement;

    onMount(() => {
        lottie.loadAnimation({
            container: animationContainer,
            animationData: animationData,
        });
    });
</script>

<div bind:this={animationContainer} class="w-28 h-28 -m-8 md:w-36 md:h-36" />
