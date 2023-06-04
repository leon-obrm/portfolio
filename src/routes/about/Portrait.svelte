<!--
  @component

  Contains portrait of Leon Obermann and some hexagon eye candy
-->
<script lang="ts">
    import SpinAnimation from "../../lib/SpinAnimation.svelte";
</script>

<div class="w-full relative mt-12 flex flex-col justify-center items-center content-center">
    <div class="w-2/5 max-w-xs relative md:w-4/5">
        <SpinAnimation delay={0.9} className="w-3 h-3 absolute bottom-10 left-1/3 bg-primary hex" />
        <SpinAnimation delay={0.7} className="w-5 h-5 absolute bottom-2 left-1/2 bg-primary hex" />
        <SpinAnimation delay={0.5} className="w-7 h-7 absolute top-0 right-3/4 bg-primary hex" />
        <SpinAnimation delay={0.3} className="w-9 h-9 absolute top-0 left-3/4 bg-primary hex" />
    </div>

    <div class="w-[85%] max-w-sm">
        <SpinAnimation
            className="w-full relative flex flex-col items-center"
            hoverAnimation={false}
        >
            <div
                class="w-3/5 max-w-xs h-full absolute bg-primary bg-hex md:w-11/12 border-b-8 border-black"
            />

            <img
                src="Portrait-min-small-min.png"
                alt="Portrait of Leon Obermann"
                class="w-3/5 max-w-xs image-hex md:w-11/12"
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
