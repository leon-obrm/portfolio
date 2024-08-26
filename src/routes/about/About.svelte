<script lang="ts">
    import AboutIntro from "./AboutIntro.svelte"
    import { useI18n } from "$lib/useI18n"
    import { SquareArrowOutUpRight } from "lucide-svelte"

    const i18n = useI18n()
</script>

<AboutIntro />

<div class="relative flex justify-center">
    <!-- ======== Scroll destination for links ======== -->
    <span class="absolute -top-24" id="about" />

    <div class="flex max-w-lg flex-col items-center gap-10 lg:max-w-4xl lg:flex-row lg:gap-12">
        <!-- ======== Portrait ======== -->
        <a
            data-type="link"
            class="mouse-follow relative w-[65%] max-w-xs cursor-none overflow-hidden rounded-[65px] shadow-image-glow sm:w-full"
            href="https://www.linkedin.com/in/leon-obermann-171465208/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="Red_Tree.jpg" alt="Portrait of Leon Obermann" />

            <div
                class="absolute bottom-0 flex w-full items-center justify-center gap-2 bg-gray-800/25 p-[4%] backdrop-blur-sm"
            >
                <h3 class="text-center font-medium tracking-wider lg:text-xl">LinkedIn</h3>
                <span class="-translate-y-px lg:scale-125">
                    <SquareArrowOutUpRight size={14} />
                </span>
            </div>
        </a>

        <div class="relative flex w-full flex-col gap-4 font-light tracking-wide xl:text-lg">
            <!-- ======== Blurred Background Gradient ======== -->
            <div
                class="absolute -left-1/4 -top-2/3 -z-50 h-[175%] w-[150%] rounded-full bg-gradient-to-tr from-[#440309] to-[#C61414] opacity-15 lg:-left-80 lg:-top-[12.5%] lg:h-[125%] lg:w-[200%]"
            />

            <h3 class="text-3xl font-bold tracking-wider xl:text-4xl xl:tracking-widest">
                {$i18n.t("heyAgain")}
            </h3>

            <p>
                {$i18n.t("myNameIs")}
                <b class="font-bold">Leon Obermann</b>{$i18n.t("andIAm")}
            </p>
            <p>
                {$i18n.t("withOver6Years")}
                <b class="font-bold">{$i18n.t("creativityAndTechnology")}</b>{$i18n.t(
                    "toBringYourVision"
                )}
            </p>
            <p>
                {$i18n.t("overTheLast2Years")}
                <b class="font-bold">{$i18n.t("professionalFullStackDeveloper")}</b>{$i18n.t(
                    "IveRefinedMySkills"
                )}
            </p>
            <p>{$i18n.t("letsCreate")}</p>
        </div>
    </div>
</div>
