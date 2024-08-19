<script lang="ts">
    import InViewTransition from "$lib/InViewTransition.svelte"
    import { useI18n } from "$lib/useI18n"
    import Triangle from "./Triangle.svelte"

    const i18n = useI18n()
</script>

<div class="relative flex w-full justify-center py-20 lg:py-44">
    <!-- ======== Scroll destination for links ======== -->
    <span class="absolute top-4" id="skills" />

    <div class="flex w-full max-w-5xl justify-center lg:justify-between">
        <!-- ======== Desktop Triangles ======== -->
        <InViewTransition containerClass="hidden flex-col justify-around lg:flex">
            <Triangle delay={100} />
            <Triangle />
        </InViewTransition>

        <!-- ======== Transition Text ======== -->
        <div class="flex w-fit flex-col items-center gap-1 sm:gap-2 lg:gap-4">
            <h3
                class="text-3xl font-thin tracking-wider xs:text-4xl sm:text-5xl lg:text-7xl lg:tracking-widest"
            >
                <span class="capitalize">{$i18n.t("from")}</span>
                <b>{$i18n.t("concept")}</b>
                {$i18n.t("to")}
                <b>{$i18n.t("code")}</b>
            </h3>

            <p class="font-thin tracking-wide xs:text-lg sm:text-2xl lg:text-4xl lg:tracking-wider">
                {$i18n.t("hereAreTheSkills")}
            </p>

            <!-- ======== Mobile Triangles ======== -->
            <div class="relative flex h-5 w-full justify-around lg:hidden">
                <Triangle />
                <Triangle />
                <Triangle />
            </div>
        </div>

        <!-- ======== Desktop Triangles ======== -->
        <InViewTransition containerClass="hidden flex-col justify-around lg:flex">
            <Triangle delay={100} />
            <Triangle />
        </InViewTransition>
    </div>
</div>
