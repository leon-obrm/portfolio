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
            <SpinAnimation delay={0.3}>
                <div class="tooltip" data-tip={link.name}>
                    <a
                        class="btn btn-square btn-secondary mask mask-hexagon"
                        href={link.link}
                        target="new"
                    >
                        <svelte:component this={link.icon} size="1.75em" color="#000" />
                    </a>
                </div>
            </SpinAnimation>
        {/each}
    </div>
</div>
