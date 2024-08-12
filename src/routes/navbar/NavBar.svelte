<script lang="ts">
    import type { ILink } from "$lib/interfaces"
    import { useI18n } from "$lib/useI18n"

    import { Github, Linkedin } from "lucide-svelte"
    import { fade } from "svelte/transition"

    let showDrawer: boolean = false

    const i18n = useI18n()

    let internalLinks: ILink[]

    $: internalLinks = [
        {
            name: $i18n.t("projects"),
            link: "#projects",
        },
        {
            name: $i18n.t("skills"),
            link: "#skills",
        },
        {
            name: $i18n.t("about"),
            link: "#about",
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

<!-- ================ Name ================ -->
<h2 class="z-50 w-fit pb-2 pl-5 pt-5 text-2xl uppercase tracking-wider lg:pl-10">
    {$i18n.t("heyIAm")}
</h2>
<a
    class="sticky top-4 z-50 w-fit px-5 text-2xl uppercase tracking-wider transition-colors hover:text-gray-200 lg:pl-10"
    href="/"
>
    Leon Obermann
</a>

<!-- ======== Mobile Hamburger Menu ======== -->
<div class="fixed right-[5px] top-[6px] z-50 flex lg:hidden">
    <button
        class="p-4"
        on:click={() => {
            showDrawer = !showDrawer
        }}
    >
        <div
            class="flex h-5 w-8 flex-col justify-between gap-2 [&_*]:w-full [&_span]:h-px [&_span]:rounded-full [&_span]:bg-white"
        >
            <span class="transition-opacity {showDrawer && 'opacity-0'}" />

            <!-- ======== Inner Line (Turns into X) ======== -->
            <div class="relative">
                <span
                    class="absolute left-0 top-0 transition-transform {showDrawer && 'rotate-45'}"
                />
                <span
                    class="absolute left-0 top-0 transition-transform {showDrawer && '-rotate-45'}"
                />
            </div>

            <span class="transition-opacity {showDrawer && 'opacity-0'}" />
        </div>
    </button>
</div>

<!-- ================ Mobile Drawer ================ -->
{#if showDrawer}
    <div
        class="fixed left-0 top-0 z-40 h-screen w-full bg-black/30 backdrop-blur-[10vmax]"
        transition:fade={{ duration: 150 }}
    >
        <div
            class="flex h-full w-full flex-col items-center justify-center gap-7 text-2xl font-light tracking-widest"
        >
            <!-- ======== Internal Links ======== -->
            {#each internalLinks as link}
                <a
                    href={link.link}
                    on:click={() => {
                        showDrawer = false
                    }}>{link.name}</a
                >
            {/each}

            <!-- ======== Divider ======== -->
            <span class="h-0.5 w-10 rounded-full bg-white/40" />

            <!-- ======== External Links ======== -->
            {#each externalLinks as link}
                <a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
            {/each}

            <!-- ======== Language Toggle ======== -->
            <div class="flex items-center gap-5">
                {#each languages as language, index}
                    <button
                        class="uppercase transition-opacity {$i18n.resolvedLanguage !== language &&
                            'opacity-40'}"
                        on:click={() => {
                            $i18n.changeLanguage(language)
                        }}>{language}</button
                    >

                    {#if index % 2 == 0}
                        <span class="h-7 w-0.5 rounded-full bg-white/40" />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
{/if}

<!-- ================ NavBar ================ -->
<div
    class="fixed left-0 top-0 z-30 flex h-16 w-full items-center justify-end pr-5 backdrop-blur-[16px] md:pr-10"
>
    <!-- ======== Desktop Menu ======== -->
    <div class="z-50 hidden items-center gap-7 lg:flex xl:gap-14">
        <div class="flex items-center gap-7 xl:gap-12">
            <!-- ======== Internal Links ======== -->
            {#each internalLinks as link}
                <a
                    class="px-4 py-2 text-lg font-light tracking-wider transition-colors hover:text-gray-200"
                    href={link.link}>{link.name}</a
                >
            {/each}
        </div>

        <!-- Divider -->
        <span class="h-7 w-0.5 rounded-full bg-white/40" />

        <!-- ======== External Links ======== -->
        <div class="flex items-center gap-2 xl:gap-4">
            {#each externalLinks as link}
                <a
                    class="px-4 py-2 transition-colors hover:text-gray-200"
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                >
                    <svelte:component this={link.icon} size={28} strokeWidth={1.2} />
                </a>
            {/each}

            <!-- ======== Language Toggle ======== -->
            <div class="flex items-center">
                {#each languages as language}
                    <button
                        class="px-1.5 py-2 text-lg font-light uppercase transition-opacity {$i18n.resolvedLanguage !==
                            language && 'opacity-50 hover:opacity-75'}"
                        on:click={() => {
                            $i18n.changeLanguage(language)
                        }}>{language}</button
                    >
                {/each}
            </div>
        </div>
    </div>
</div>
