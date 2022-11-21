<script lang="ts">
    import { onMount } from "svelte";
    import lottie from "lottie-web";
    import animationData from "./lottiePortal.json";

    export let color: string;
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
    class="btn bg-transparent border-0 hover:bg-transparent w-60 h-60 flex justify-center items-center content-center"
    href={link}
    target="new"
>
    <div
        class="absolute w-40 h-40 hex {finalColor}"
        on:mouseenter={() => {
            finalColor = "bg-[#ffffff]";
        }}
        on:mouseleave={() => {
            finalColor = color;
        }}
    />
    <p class="absolute w-20 text-center text-lg text-white font-normal normal-case">Take a look</p>
</a>

<style>
    .hex {
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    }
</style>
