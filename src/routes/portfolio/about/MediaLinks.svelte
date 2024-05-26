<!--
  @component

  Contains buttons with links to LinkedIn, GitHub and email
-->
<script lang="ts">
    import SpinAnimation from "$lib/SpinAnimation.svelte"
    import type { LinkProps } from "$lib/interfaces"

    export let mediaLinks: LinkProps[]
</script>

<div
    class="flex w-3/4 max-w-md flex-col content-center items-center justify-center md:w-full md:max-w-lg"
>
    <div class="flex w-full content-center items-center justify-between">
        {#each mediaLinks as mediaLink}
            <SpinAnimation delay={0}>
                <div class="tooltip" data-tip={mediaLink.name}>
                    <a
                        class="glassmorphism btn aspect-square w-fit rounded-3xl border-none p-0 text-gray-950 shadow transition-all duration-300 ease-out hover:scale-110 hover:border-none hover:shadow-lg"
                        href={mediaLink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svelte:component this={mediaLink.icon} size="1.75em" />
                    </a>
                </div>
            </SpinAnimation>
        {/each}
    </div>
</div>
