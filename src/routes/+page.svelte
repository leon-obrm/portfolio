<script lang="ts">
    import NavBar from "./navbar/NavBar.svelte"
    import Homepage from "./homepage/Homepage.svelte"
    import Projects from "./projects/Projects.svelte"
    import Skills from "./skills/Skills.svelte"
</script>

<NavBar />
<div class="w-full p-5 lg:p-10">
    <Homepage />
    <Projects />
    <Skills />
</div>
