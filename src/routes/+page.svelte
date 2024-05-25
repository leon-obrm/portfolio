<script lang="ts">
    import Background from "./Background.svelte"
    import MouseFollow from "./portfolio/MouseFollow.svelte"
    import About from "./portfolio/about/About.svelte"
    import Skills from "./portfolio/skills/Skills.svelte"
    import Websites from "./portfolio/websites/Websites.svelte"
    import Footer from "./Footer.svelte"
</script>

<svelte:head>
    <title>Leon's portfolio</title>
</svelte:head>

<Background />
<MouseFollow />
<About />
<Skills />
<Websites />
<Footer />
