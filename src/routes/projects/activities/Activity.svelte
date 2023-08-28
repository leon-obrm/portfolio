<script lang="ts">
    import { i18n } from "$lib/i18n"
    import SpinAnimation from "$lib/SpinAnimation.svelte"

    export let i18nKey: string
</script>

<SpinAnimation className="w-fit inline-block relative" hoverAnimation={false} delay={0.6}>
    <p class="text-3xl font-bold tracking-wide">
        {$i18n.t(i18nKey)}
    </p>
</SpinAnimation>
