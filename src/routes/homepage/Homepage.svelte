<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<!-- ======== Gradient ======== -->
<div
    class="absolute left-0 top-0 -z-50 h-screen w-full bg-gradient-to-bl from-[#cf750f] to-[#1C0D00] opacity-20"
/>

<div class="flex flex-col items-center lg:flex-row-reverse lg:items-end lg:justify-center">
    <!-- ======== Portrait ======== -->
    <div class="flex justify-center pt-12 lg:pt-0">
        <div class="relative w-[65%] max-w-xl overflow-hidden rounded-[65px] shadow-image-glow">
            <img src="Rooftop-min.JPG" alt="Portrait of Leon Obermann" />
            <h4
                class="absolute bottom-0 w-full bg-gray-800/25 p-[4%] text-center font-medium uppercase tracking-wider backdrop-blur-sm lg:text-xl"
            >
                {$i18n.t("contactMe")}
            </h4>
        </div>
    </div>

    <!-- ======== Job Title ======== -->
    <div
        class="flex w-fit flex-col gap-2 pt-8 font-inria-sans text-6xl uppercase tracking-wider sm:text-7xl md:text-8xl lg:translate-y-20 lg:tracking-widest xl:translate-y-32 xl:text-9xl"
    >
        <h3 class="translate-x-1.5 text-2xl tracking-wide lg:translate-x-2.5 lg:text-4xl">Web</h3>
        <h3>Designer <span class="text-3xl lg:text-5xl">&</span></h3>
        <h3>Developer</h3>
    </div>
</div>
