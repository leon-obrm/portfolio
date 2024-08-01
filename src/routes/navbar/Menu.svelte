<script lang="ts">
    import type { ILink } from "$lib/interfaces"
    import { Github, Linkedin, Menu } from "lucide-svelte"
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()

    let internalLinks: ILink[]

    $: internalLinks = [
        {
            name: $i18n.t("projects"),
            link: "/projects",
        },
        {
            name: $i18n.t("skills"),
            link: "/skills",
        },
        {
            name: $i18n.t("about"),
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

    const languages: string[] = ["en", "de"]
</script>

<!-- ================ Mobile ================ -->
<div class="z-50 lg:hidden">
    <Menu color="#fff" size={36} strokeWidth={1} />
</div>

<!-- ================ Desktop ================ -->
<div class="z-50 hidden items-center gap-16 lg:flex">
    <div class="flex items-center gap-20">
        {#each internalLinks as link}
            <a class="text-lg font-light tracking-wider" href={link.link}>{link.name}</a>
        {/each}
    </div>

    <!-- Divider -->
    <span class="h-7 w-0.5 bg-white/40" />

    <div class="flex items-center gap-10">
        {#each externalLinks as link}
            <a href={link.link} target="_blank" rel="noopener noreferrer">
                <svelte:component this={link.icon} size={28} strokeWidth={1} />
            </a>
        {/each}

        <div class="flex items-center gap-3">
            {#each languages as language}
                <!-- ================== Check if opacity transition is cool ================== -->
                <button
                    class="text-lg font-light uppercase transition-opacity {$i18n.resolvedLanguage !==
                        language && 'opacity-40'}"
                    on:click={() => {
                        $i18n.changeLanguage(language)
                    }}>{language}</button
                >
            {/each}
        </div>
    </div>
</div>
