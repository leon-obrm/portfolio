<script lang="ts">
    import type { ILink } from "$lib/interfaces"
    import { useI18n } from "$lib/useI18n"

    export let internalLinks: ILink[]
    export let externalLinks: ILink[]
    export let languages: string[]

    const i18n = useI18n()
</script>

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
