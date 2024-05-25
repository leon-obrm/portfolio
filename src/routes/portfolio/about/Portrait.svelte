<!--
  @component

  Contains portrait of Leon Obermann and some hexagon eye candy
-->
<script lang="ts">
    import SpinAnimation from "$lib/SpinAnimation.svelte"
</script>

<div class="relative mt-12 flex w-full flex-col content-center items-center justify-center">
    <div class="relative w-2/5 max-w-xs md:w-4/5">
        <SpinAnimation
            delay={0.9}
            className="w-3 h-3 absolute bottom-10 left-1/3 rounded-full bg-white/35"
        />
        <SpinAnimation
            delay={0.7}
            className="w-5 h-5 absolute bottom-2 left-1/2 rounded-full bg-white/40"
        />
        <SpinAnimation
            delay={0.5}
            className="w-7 h-7 absolute top-0 right-3/4 rounded-full bg-white/45"
        />
        <SpinAnimation
            delay={0.3}
            className="w-9 h-9 absolute top-0 left-3/4 rounded-full bg-white/45"
        />
    </div>

    <div class="w-[85%] max-w-sm">
        <SpinAnimation
            className="w-full relative flex flex-col items-center"
            hoverAnimation={false}
        >
            <div
                class="gradient-border absolute bottom-0 aspect-square w-full max-w-xs rounded-full bg-gradient-to-bl from-white/50 to-gray-300/10 shadow-md backdrop-blur-md md:w-11/12"
            />

            <img
                src="Portrait.png"
                alt="Portrait of Leon Obermann"
                class="z-10 w-3/5 max-w-xs rounded-full md:w-11/12"
            />
        </SpinAnimation>
    </div>
</div>

<style>
    .gradient-border::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 9999px;
        padding: 1px;
        background: linear-gradient(to bottom left, #ffffff50, #bdc0ce50);
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
</style>
