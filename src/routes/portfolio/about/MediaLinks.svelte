<!--
  @component

  Contains buttons with links to LinkedIn, GitHub and email
-->
<script lang="ts">
    import SpinAnimation from "$lib/SpinAnimation.svelte";

    import Linkedin from "svelte-material-icons/Linkedin.svelte";
    import Github from "svelte-material-icons/Github.svelte";
    import Email from "svelte-material-icons/Email.svelte";

    interface LinkProps {
        name: string;
        icon: any;
        link: string;
    }

    const links: LinkProps[] = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            link: "https://www.linkedin.com/in/leon-obermann-171465208/",
        },
        { name: "GitHub", icon: Github, link: "https://github.com/Jesus-Cries" },
        { name: "Email", icon: Email, link: "mailto:leon.oberm@gmail.com" },
    ];
</script>

<div
    class="flex w-3/4 max-w-md flex-col content-center items-center justify-center md:w-full md:max-w-lg"
>
    <div class="flex w-full content-center items-center justify-between">
        {#each links as link}
            <SpinAnimation delay={0.5}>
                <div class="tooltip" data-tip={link.name}>
                    <div class="drop-shadow-md transition-all hover:drop-shadow-lg">
                        <a
                            class="transition-scale mask mask-hexagon btn border-none bg-gray-700 duration-300 ease-out hover:scale-110 hover:border-none hover:bg-gray-700"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svelte:component this={link.icon} size="1.75em" color="#fff" />
                        </a>
                    </div>
                </div>
            </SpinAnimation>
        {/each}
    </div>
</div>
