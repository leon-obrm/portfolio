<script lang="ts">
    import Logo from "$lib/Logo.svelte"
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<!-- ======== Logo ======== -->
<a href="/">
    <Logo
        className="z-[60] h-8 w-8 fixed top-4 left-5 hover:text-gray-200 transition-colors lg:left-11 -translate-y-[0.5px]"
    />
</a>

<!-- ======== Name ======== -->
<h2 class="z-50 w-fit pb-2 pl-[62px] pt-4 text-2xl uppercase tracking-wider lg:pl-[88px]">
    {$i18n.t("heyIAm")}
</h2>
<a
    class="sticky top-4 z-50 w-fit pl-[62px] pr-5 text-2xl uppercase tracking-wider transition-colors hover:text-gray-200 lg:pl-[88px]"
    href="/"
>
    Leon Obermann
</a>
