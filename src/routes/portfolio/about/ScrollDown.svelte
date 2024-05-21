<!--
  @component

  Contains scroll down lottie from MJ Mohiddin ({@link https://lottiefiles.com/11514-swipe-down-arrows})
-->
<script lang="ts">
    import lottie from "lottie-web"
    import { flatten } from "lottie-colorify"
    import { onMount } from "svelte"
    import animationData from "$lib/lottieScrollDown.json"
    import { theme } from "../../store"

    let whiteAnimationContainer: HTMLElement
    let blackAnimationContainer: HTMLElement

    onMount(() => {
        setTimeout(() => {
            lottie.loadAnimation({
                container: whiteAnimationContainer,
                animationData: flatten("#ffffff", animationData),
            })

            lottie.loadAnimation({
                container: blackAnimationContainer,
                animationData: flatten("#000000", animationData),
            })
        }, 2000)
    })
</script>

<a
    href="#skills"
    bind:this={whiteAnimationContainer}
    class="-m-8 h-28 w-28 md:h-36 md:w-36 {$theme === 'light' && 'hidden'}">{" "}</a
>
<a
    href="#skills"
    bind:this={blackAnimationContainer}
    class="-m-8 h-28 w-28 md:h-36 md:w-36 {$theme === 'dark' && 'hidden'}">{" "}</a
>
