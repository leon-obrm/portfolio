<!--
  @component

  Contains navbar with logo, links to sections and email button
-->
<script lang="ts">
    import MediaQuery from "$lib/MediaQuery.svelte"
    import type { LinkProps } from "$lib/interfaces"

    export let mediaLinks: LinkProps[]

    const links: LinkProps[] = [
        { name: "About", link: "/" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
    ]

    let currentIndex: number = -1
</script>

<div class="sticky top-0 z-50 w-full">
    <div class="navbar relative flex content-center items-start justify-between bg-base-100">
        <a
            class="btn-ghost btn text-2xl font-bold normal-case hover:bg-transparent hover:text-primary-600"
            href="/">obermann</a
        >
        <MediaQuery breakpoint="md">
            <svelte:fragment slot="above">
                <!-- TODO: Mark currently visited section of page -->

                <div class="flex gap-8 lg:gap-20">
                    {#each links as link, i}
                        <a
                            class="btn-ghost no-animation btn relative hover:bg-transparent hover:text-primary"
                            class:text-primary-600={currentIndex === i}
                            href={link.link}
                            on:click={() => (currentIndex = i)}
                        >
                            {link.name}

                            <div
                                class="absolute -bottom-[9px] h-0.5 w-full bg-primary-500 transition-all duration-500"
                                class:w-0={currentIndex !== i}
                                class:w-full={currentIndex === i}
                            />
                        </a>
                    {/each}
                </div>

                <div class="mr-2 flex gap-4">
                    {#each mediaLinks as mediaLink}
                        <div class="tooltip tooltip-bottom" data-tip={mediaLink.name}>
                            <a
                                class="btn-ghost btn-circle btn hover:bg-white hover:text-primary-500"
                                href={mediaLink.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svelte:component
                                    this={mediaLink.icon}
                                    size={mediaLink.name === "Email" ? "2.15em" : "2.25em"}
                                />
                            </a>
                        </div>
                    {/each}
                </div>
            </svelte:fragment>

            <div slot="below" class="dropdown-end dropdown">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <label tabindex="0" class="btn-ghost btn m-1" for="Menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-8 w-8 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box w-52 border border-gray-200 bg-base-100 p-2 shadow"
                >
                    {#each links as link}
                        <li>
                            <a href={link.link}>
                                {link.name}
                            </a>
                        </li>
                    {/each}

                    <div class="divider mx-3 -my-1" />

                    {#each mediaLinks as mediaLink}
                        <li>
                            <a href={mediaLink.link} target="_blank" rel="noopener noreferrer">
                                {mediaLink.name}
                            </a>
                        </li>
                    {/each}

                    <div class="divider mx-3 -my-1" />

                    <li>
                        <a href="mailto:leon.oberm@gmail.com" class="font-semibold">Contact me</a>
                    </li>
                </ul>
            </div>
        </MediaQuery>
    </div>
    <div class="divider mx-5 -my-2" />
</div>
