<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<div class="flex justify-center pt-12">
    <div class="relative w-[65%] max-w-xl overflow-hidden rounded-[65px]">
        <img class="shadow-image-glow" src="Rooftop-min.JPG" alt="Portrait of Leon Obermann" />
        <h4
            class="absolute bottom-0 w-full bg-gray-800/25 p-2.5 text-center font-medium uppercase tracking-wider backdrop-blur-sm"
        >
            {$i18n.t("contactMe")}
        </h4>
    </div>
</div>
