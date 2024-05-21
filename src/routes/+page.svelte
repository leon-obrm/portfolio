<script lang="ts">
    import MouseFollow from "./portfolio/MouseFollow.svelte"
    import About from "./portfolio/about/About.svelte"
    import Skills from "./portfolio/skills/Skills.svelte"
    import Websites from "./portfolio/websites/Websites.svelte"
    import Footer from "./Footer.svelte"
</script>

<svelte:head>
    <title>Leon's portfolio</title>
</svelte:head>

<div
    class="fixed -z-30 hidden h-screen w-screen bg-gradient-to-br from-primary-900 to-primary-950 dark:flex"
/>
<MouseFollow />
<About />
<Skills />
<Websites />
<Footer />
