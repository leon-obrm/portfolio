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
            <SpinAnimation delay={0.5}>
                <div class="tooltip" data-tip={mediaLink.name}>
                    <div class="drop-shadow-md transition-all hover:drop-shadow-lg">
                        <a
                            class="transition-scale mask mask-hexagon btn border-none bg-gray-700 duration-300 ease-out hover:scale-110 hover:border-none hover:bg-gray-700"
                            href={mediaLink.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svelte:component this={mediaLink.icon} size="1.75em" color="#fff" />
                        </a>
                    </div>
                </div>
            </SpinAnimation>
        {/each}
    </div>
</div>
