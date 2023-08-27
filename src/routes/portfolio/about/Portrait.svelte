<!--
  @component

  Contains portrait of Leon Obermann and some hexagon eye candy
-->
<script lang="ts">
    import SpinAnimation from "$lib/SpinAnimation.svelte";
</script>

<div class="relative mt-12 flex w-full flex-col content-center items-center justify-center">
    <div class="relative w-2/5 max-w-xs md:w-4/5">
        <SpinAnimation
            delay={0.9}
            className="w-3 h-3 absolute bottom-10 left-1/3 bg-primary-100 hex"
        />
        <SpinAnimation
            delay={0.7}
            className="w-5 h-5 absolute bottom-2 left-1/2 bg-primary-200 hex"
        />
        <SpinAnimation
            delay={0.5}
            className="w-7 h-7 absolute top-0 right-3/4 bg-primary-300 hex"
        />
        <SpinAnimation delay={0.3} className="w-9 h-9 absolute top-0 left-3/4 bg-primary-300 hex" />
    </div>

    <div class="w-[85%] max-w-sm">
        <SpinAnimation
            className="w-full relative flex flex-col items-center"
            hoverAnimation={false}
        >
            <div
                class="bg-hex absolute h-full w-3/5 max-w-xs border-b-8 border-black bg-primary-400 md:w-11/12"
            />

            <img
                src="Portrait-min-small-min.png"
                alt="Portrait of Leon Obermann"
                class="image-hex w-3/5 max-w-xs md:w-11/12"
            />
        </SpinAnimation>
    </div>
</div>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }

    .bg-hex {
        clip-path: polygon(50% 15%, 100% 40%, 100% 75%, 50% 100%, 0% 75%, 0% 40%);
    }
</style>
