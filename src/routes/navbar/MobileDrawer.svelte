<script lang="ts">
    import type { ILink } from "$lib/interfaces"
    import { useI18n } from "$lib/useI18n"
    import { fade } from "svelte/transition"

    export let showDrawer: boolean
    export let internalLinks: ILink[]
    export let externalLinks: ILink[]
    export let languages: string[]

    const i18n = useI18n()
</script>

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
