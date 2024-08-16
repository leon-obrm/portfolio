<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<!-- ======== Name ======== -->
<h2 class="z-50 w-fit pb-2 pl-5 pt-5 text-2xl uppercase tracking-wider lg:pl-10">
    {$i18n.t("heyIAm")}
</h2>
<a
    class="sticky top-4 z-50 w-fit px-5 text-2xl uppercase tracking-wider transition-colors hover:text-gray-200 lg:pl-10"
    href="/"
>
    Leon Obermann
</a>
