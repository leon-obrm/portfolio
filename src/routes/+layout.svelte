<script lang="ts">
    import ScrollUpButton from "./ScrollUpButton.svelte"
    import BackgroundBlur from "./BackgroundBlur.svelte"
    import MouseFollow from "./MouseFollow.svelte"

    // Loads TailwindCSS
    import "../app.css"

    import getI18nStore from "$lib/i18n"
    import { setContext } from "svelte"
    import NavBar from "./navbar/NavBar.svelte"
    import Footer from "./footer/Footer.svelte"

    // Adapts i18n to usage with SvelteKit (Avoids unwanted syncs between different frontends)
    setContext("i18n", getI18nStore())

    // ======== Bug Fixes ========
    // FIXME: Skill sections lags (Other sections too, but this one is the most noticeable)
    // FIXME:? Zooming on laptop touchpad creates white vignette

    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<svelte:head>
    <title>{$i18n.t("leonObermannsPortfolio")}</title>
</svelte:head>

<ScrollUpButton />

<BackgroundBlur />

<MouseFollow />

<div class="relative flex w-full flex-col overflow-clip font-nunito text-white">
    <NavBar />

    <div class="w-full p-5 pb-16 lg:p-10 lg:pb-28">
        <slot />
    </div>

    <Footer />
</div>
