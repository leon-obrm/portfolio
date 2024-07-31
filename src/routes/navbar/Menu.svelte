<script lang="ts">
    import type { ILink } from "$lib/interfaces"
    import { ChevronDown, Github, Linkedin, Menu } from "lucide-svelte"

    const internalLinks: ILink[] = [
        {
            name: "Projects",
            link: "/projects",
        },
        {
            name: "Skills",
            link: "/skills",
        },
        {
            name: "About",
            link: "/about",
        },
    ]

    const externalLinks: ILink[] = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/leon-obermann-171465208/",
            icon: Linkedin,
        },
        { name: "GitHub", link: "https://github.com/Jesus-Cries", icon: Github },
    ]
</script>

<!-- ================ Mobile ================ -->
<div class="z-50 sm:hidden">
    <Menu color="#fff" size={40} strokeWidth={1} />
</div>

<!-- ================ Desktop ================ -->
<div class="z-50 hidden items-center gap-16 sm:flex">
    <div class="flex items-center gap-24">
        {#each internalLinks as link}
            <a class="text-xl font-light tracking-wider" href={link.link}>{link.name}</a>
        {/each}
    </div>

    <!-- Divider -->
    <span class="h-12 w-0.5 bg-white/40" />

    <div class="flex items-center gap-10">
        {#each externalLinks as link}
            <a href={link.link} target="_blank" rel="noopener noreferrer">
                <svelte:component this={link.icon} size={32} strokeWidth={1} />
            </a>
        {/each}

        <div class="flex items-center">
            <span class="text-xl font-light">EN</span>
            <ChevronDown size={32} />
        </div>
    </div>
</div>
