<!--
  @component

  Contains buttons with links to LinkedIn, GitHub and email
-->
<script lang="ts">
    import SpinAnimation from "../../lib/SpinAnimation.svelte";

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
    class="w-3/4 max-w-md flex flex-col justify-center items-center content-center md:w-full md:max-w-lg"
>
    <div class="w-full flex justify-between content-center items-center">
        {#each links as link}
            <SpinAnimation delay={0.5}>
                <div class="tooltip" data-tip={link.name}>
                    <div class="drop-shadow-md hover:drop-shadow-lg transition-all">
                        <a
                            class="btn bg-gray-700 mask mask-hexagon transition-scale ease-out duration-300 hover:scale-110 hover:bg-gray-700 hover:border-none border-none"
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
