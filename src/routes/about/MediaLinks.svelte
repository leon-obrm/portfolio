<script lang="ts">
    import Linkedin from "svelte-material-icons/Linkedin.svelte";
    import Github from "svelte-material-icons/Github.svelte";
    import Email from "svelte-material-icons/Email.svelte";

    interface LinkProps {
        icon: any;
        link: string;
    }

    const links: LinkProps[] = [
        { icon: Linkedin, link: "https://www.linkedin.com/in/leon-obermann-171465208/" },
        { icon: Github, link: "https://github.com/Jesus-Cries" },
        { icon: Email, link: "mailto:leon.oberm@gmail.com" },
    ];
</script>

<div class="w-full flex justify-evenly content-center items-center">
    {#each links as link}
        <a class="btn btn-square btn-secondary mask mask-hexagon" href={link.link} target="new">
            <svelte:component this={link.icon} size="1.75em" color="#000" />
        </a>
    {/each}
</div>
