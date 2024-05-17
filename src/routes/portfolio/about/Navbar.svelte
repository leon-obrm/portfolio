<!--
  @component

  Contains navbar with logo, links to sections and email button
-->
<script lang="ts">
    import { themeChange } from "theme-change"
    import WeatherSunny from "svelte-material-icons/WeatherSunny.svelte"
    import WeatherNight from "svelte-material-icons/WeatherNight.svelte"
    import { onMount } from "svelte"

    import MediaQuery from "$lib/MediaQuery.svelte"
    import type { LinkProps } from "$lib/interfaces"
    import { theme } from "../../store"

    export let mediaLinks: LinkProps[]

    const links: LinkProps[] = [
        { name: "About", link: "/" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
    ]

    let currentIndex: number = -1

    let html: HTMLHtmlElement

    onMount(() => {
        html = document.getElementsByTagName("html")[0]
        themeChange(false)

        // Get theme preference from local storage
        const localStorageTheme: string = window.localStorage.getItem("theme") || ""

        if (["light", "dark"].includes(localStorageTheme)) return ($theme = localStorageTheme)
    })

    $: {
        if (html !== undefined && html !== null) html.setAttribute("data-theme", $theme)
    }

    $: {
        theme
    }

    function toggleTheme() {
        theme.set($theme === "light" ? "dark" : "light")
        window.localStorage.setItem("theme", $theme)
    }
</script>

<div class="sticky top-0 z-50 w-full">
    <div class="navbar relative grid grid-cols-2 bg-base-100 text-base-content md:grid-cols-3">
        <a
            class="btn btn-ghost translate-y-1 justify-self-start text-2xl font-bold normal-case hover:bg-transparent hover:text-primary-600 md:translate-y-0 hover:dark:text-primary-300"
            href="/"
        >
            obermann
        </a>
        <MediaQuery breakpoint="md">
            <svelte:fragment slot="above">
                <!-- TODO: Mark currently visited section of page -->

                <div class="flex gap-0 justify-self-center lg:gap-8 xl:gap-20">
                    {#each links as link, i}
                        <a
                            class="btn btn-ghost no-animation relative uppercase hover:bg-transparent hover:text-primary-500 hover:dark:text-primary-300 {currentIndex ===
                                i && 'text-primary-500 dark:text-primary-300'}"
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

                <div class="mr-2 flex gap-2 justify-self-end lg:gap-4">
                    {#each mediaLinks as mediaLink}
                        <div class="tooltip tooltip-bottom" data-tip={mediaLink.name}>
                            <a
                                class="btn btn-circle btn-ghost hover:bg-base-100 hover:text-primary-500"
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

                    <div
                        class="divider divider-horizontal -ml-1 -mr-3 py-1.5 before:bg-base-300 after:bg-base-300"
                    />

                    <!-- Theme toggle -->
                    <label class="swap swap-rotate transition-colors hover:text-primary">
                        <!-- This hidden checkbox controls the state -->
                        <input
                            type="checkbox"
                            data-toggle-theme="light,dark"
                            checked={$theme === "dark"}
                            on:change={toggleTheme}
                        />

                        <span class="btn btn-ghost swap-off hover:bg-transparent">
                            <span class=""><WeatherSunny size="2em" /></span>
                        </span>

                        <span class="btn btn-ghost swap-on hover:bg-transparent">
                            <span class=""><WeatherNight size="1.8em" /></span>
                        </span>
                    </label>
                </div>
            </svelte:fragment>

            <div slot="below" class="dropdown dropdown-end justify-self-end">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <label tabindex="0" class="btn btn-ghost m-1" for="Menu">
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
                    class="menu dropdown-content w-52 rounded-box border border-gray-200 bg-base-100 p-2 shadow"
                >
                    {#each links as link}
                        <li>
                            <a href={link.link}>
                                {link.name}
                            </a>
                        </li>
                    {/each}

                    <div class="divider -my-1 mx-3" />

                    {#each mediaLinks as mediaLink}
                        <li>
                            <a href={mediaLink.link} target="_blank" rel="noopener noreferrer">
                                {mediaLink.name}
                            </a>
                        </li>
                    {/each}

                    <div class="divider -my-1 mx-3" />

                    <!-- Theme toggle -->
                    <li>
                        <label class="swap justify-start">
                            <!-- This hidden checkbox controls the state -->
                            <input
                                type="checkbox"
                                data-toggle-theme="light,dark"
                                checked={$theme === "dark"}
                                on:change={toggleTheme}
                            />

                            <div class="swap-off flex gap-3">
                                <p>Light mode</p>
                                <WeatherSunny size="1.3em" />
                            </div>

                            <div class="swap-on flex gap-4">
                                <p>Dark mode</p>
                                <WeatherNight size="1.2em" />
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
        </MediaQuery>
    </div>
    <div class="divider -my-2 mx-5" />
</div>
