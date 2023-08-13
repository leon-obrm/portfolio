<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { i18n } from "$lib/i18n";

    export let duration: string;
</script>

<div class="flex justify-center items-baseline content-center gap-2 w-fit">
    <div class="text-3xl font-semibold" in:fly={{ y: -200, duration: 600, easing: cubicOut }}>
        {duration}
    </div>

    <div class="text-xl" in:fly={{ x: 100, duration: 500, delay: 300, easing: cubicOut }}>
        {$i18n.t("minutesOf")}
    </div>
</div>
