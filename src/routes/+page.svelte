<script lang="ts">
    import NavBar from "./navbar/NavBar.svelte"
    import Homepage from "./homepage/Homepage.svelte"
    import Projects from "./projects/Projects.svelte"
    import Skills from "./skills/Skills.svelte"
    import About from "./about/About.svelte"
    import Contact from "./contact/Contact.svelte"
    import Footer from "./footer/Footer.svelte"
</script>

<NavBar />

<div class="w-full p-5 pb-16 lg:p-10 lg:pb-28">
    <Homepage />
    <Projects />
    <Skills />
    <About />
    <Contact />
</div>

<Footer />
