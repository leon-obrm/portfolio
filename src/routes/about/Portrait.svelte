<div class="w-full relative mt-12 flex flex-col justify-center items-center content-center">
    <!-- FIXME: Small hexagons don't stick to positions -->
    <div class="w-2/5 max-w-xs relative">
        <div class="w-3 h-3 absolute bottom-10 left-1/3 bg-primary hex" />
        <div class="w-5 h-5 absolute bottom-2 left-1/2 bg-primary hex" />
        <div class="w-7 h-7 absolute top-0 right-3/4 bg-primary hex" />
        <div class="w-9 h-9 absolute top-0 left-3/4 bg-primary hex" />
    </div>
    <div class="w-2/5 max-w-xs h-full absolute bg-primary bg-hex" />
    <img src="Portrait.png" alt="Portrait of Leon Obermann" class="w-2/5 max-w-xs image-hex" />
</div>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }

    .bg-hex {
        clip-path: polygon(50% 15%, 100% 40%, 100% 75%, 50% 100%, 0% 75%, 0% 40%);
    }

    .hex {
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    }
</style>
