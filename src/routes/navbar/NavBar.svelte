<script lang="ts">
    import { useI18n } from "$lib/useI18n"
    import Menu from "./Menu.svelte"

    const i18n = useI18n()
</script>

<div
    class="fixed left-0 top-0 z-40 flex h-20 w-screen items-center justify-end pr-4 backdrop-blur-[6vmax]"
>
    <Menu />
</div>

<h2 class="z-50 pb-2 pl-5 pt-5 text-2xl uppercase tracking-wider">{$i18n.t("heyIAm")}</h2>
<h2 class="sticky top-6 z-50 pl-5 text-2xl uppercase tracking-wider">Leon Obermann</h2>
