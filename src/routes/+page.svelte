<script lang="ts">
    import Homepage from "./homepage/Homepage.svelte"
    import Projects from "./projects/Projects.svelte"
    import Skills from "./skills/Skills.svelte"
    import About from "./about/About.svelte"
    import Contact from "./contact/Contact.svelte"
    import { onMount } from "svelte"

    // Scrolls to scroll destination on page load
    onMount(() => {
        /** ID of scroll destination. */
        const hash: string = window.location.hash

        // Do nothing if there is no scroll destination
        if (!hash) return

        // Delay slightly to ensure DOM is painted
        requestAnimationFrame(() => {
            /** Element to scroll to. */
            const scrollDestination = document.querySelector(hash)

            // Do nothing if there is no element to scroll to
            if (!scrollDestination) return

            // Scroll to scroll destination
            setTimeout(() => {
                scrollDestination.scrollIntoView({ behavior: "auto" })
            }, 250)
        })
    })
</script>

<Homepage />
<Projects />
<Skills />
<About />
<Contact />
