<!--
  @component

  Contains about section, including the navbar
-->
<script lang="ts">
    import Linkedin from "svelte-material-icons/Linkedin.svelte"
    import Github from "svelte-material-icons/Github.svelte"
    import Email from "svelte-material-icons/Email.svelte"
    import MediaQuery from "$lib/MediaQuery.svelte"
    import Navbar from "./Navbar.svelte"
    import Headline from "./Headline.svelte"
    import Description from "./Description.svelte"
    import Portrait from "./Portrait.svelte"
    import MediaLinks from "./MediaLinks.svelte"
    import ScrollDown from "./ScrollDown.svelte"
    import type { LinkProps } from "$lib/interfaces"

    const mediaLinks: LinkProps[] = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/leon-obermann-171465208/",
            icon: Linkedin,
        },
        { name: "GitHub", link: "https://github.com/Jesus-Cries", icon: Github },
        { name: "Email", link: "mailto:leon.oberm@gmail.com", icon: Email },
    ]
</script>

<Navbar {mediaLinks} />

<MediaQuery breakpoint="md">
    <div
        slot="above"
        class="flex w-full flex-col content-center items-center justify-between gap-16 px-14 pb-6 pt-16"
    >
        <div class="flex w-full max-w-4xl content-center items-center justify-between gap-20">
            <div class="flex flex-col content-center items-center justify-center gap-10">
                <Headline />
                <Description />
                <MediaLinks {mediaLinks} />
            </div>

            <div class="-m-7">
                <Portrait />
            </div>
        </div>

        <ScrollDown />
    </div>

    <div
        id="about"
        slot="below"
        class="flex w-full flex-col content-center items-center justify-start gap-5 pb-10 pt-6"
    >
        <Headline />
        <Portrait />
        <ScrollDown />
        <Description />
        <MediaLinks {mediaLinks} />
    </div>
</MediaQuery>
