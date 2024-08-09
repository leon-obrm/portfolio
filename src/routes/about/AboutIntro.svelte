<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()

    // TODO: Triff die PERSON? --> Könnte besser vom Layout passen
</script>

<div class="flex w-full justify-center py-28 sm:py-32 md:py-36 lg:py-44">
    <div
        class="flex w-full max-w-sm flex-col items-center justify-center gap-6 text-2xl font-thin tracking-widest xs:max-w-md xs:gap-7 xs:text-3xl sm:max-w-lg sm:gap-8 sm:text-4xl md:max-w-2xl md:gap-10 md:text-5xl lg:max-w-4xl lg:gap-14 lg:text-6xl"
    >
        <h3 class="w-full">
            {$i18n.t("meetThe")}
            <b class="font-medium">{$i18n.t("person")}</b>
        </h3>

        <!-- ======== Divider ======== -->
        <span class="h-px w-1/6 rounded-full bg-white/80" />

        <h3 class="w-full text-right">
            <b class="font-medium">{$i18n.t("behind")}</b>
            {$i18n.t("theCode")}
        </h3>
    </div>
</div>
