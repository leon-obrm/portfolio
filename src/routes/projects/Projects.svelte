<script lang="ts">
    import type { IProject } from "$lib/interfaces"
    import { skills } from "$lib/skills"
    import { useI18n } from "$lib/useI18n"
    import { SquareArrowOutUpRight } from "lucide-svelte"
    import ProjectsIntro from "./ProjectsIntro.svelte"
    import SecondProjectIntro from "./SecondProjectIntro.svelte"

    const i18n = useI18n()

    let projects: IProject[]
    $: projects = [
        {
            title: "Paletti",
            timeframe: $i18n.t("palettiTimeframe"),
            paragraphs: $i18n.t("palettiParagraphs"),
            skills: ["Svelte", "SvelteKit", "Tailwind CSS", "daisyUI"],
            link: "paletti.one",
            gradientFrom: "from-[#440322]",
            gradientTo: "to-[#FF1E6F]",
        },
        {
            title: "Boredom Buster",
            timeframe: $i18n.t("boredomBusterTimeframe"),
            paragraphs: $i18n.t("boredomBusterParagraphs"),
            skills: ["Svelte", "SvelteKit", "Tailwind CSS", "i18next"],
            link: "boredom-buster.obrm.de",
            gradientFrom: "from-[#2F0344]",
            gradientTo: "to-[#9714C6]",
        },
    ]
</script>

<ProjectsIntro />

<div class="relative flex flex-col items-center">
    <!-- ======== Scroll destination for links ======== -->
    <span class="absolute -top-20" id="projects" />

    {#each projects as project, index}
        <div
            class="flex max-w-lg flex-col gap-7 lg:max-w-6xl lg:items-center lg:gap-12 {index %
                2 ===
            0
                ? 'lg:flex-row '
                : 'lg:flex-row-reverse'}"
        >
            <a
                class="mouse-follow relative cursor-none shadow-image-glow lg:w-2/3"
                data-type="link"
                href="https://{project.link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                <!-- ======== Screenshot ======== -->
                <img
                    class="rounded"
                    src="projects/{project.title}.webp"
                    alt="Screenshot of project {project.title}"
                />
                <!-- ======== Click Indicator ======== -->
                <div
                    class="absolute right-0 top-0 rounded-bl-xl rounded-tr bg-black/20 p-2.5 backdrop-blur-[3px] sm:p-3"
                >
                    <span class="sm:hidden"><SquareArrowOutUpRight size={20} /></span>
                    <span class="hidden sm:flex"><SquareArrowOutUpRight size={24} /></span>
                </div>
            </a>
            <div class="relative flex flex-col lg:w-1/3">
                <!-- ======== Blurred Background Gradient ======== -->
                <div
                    class="absolute -left-1/4 -top-[12.5%] -z-50 h-[125%] w-[150%] rounded-full bg-gradient-to-tr opacity-25 lg:w-[200%] {project.gradientFrom} {project.gradientTo} {index %
                        2 ===
                    0
                        ? 'lg:-left-2/3'
                        : 'lg:-left-1/3'}"
                />

                <!-- ======== Title ======== -->
                <h3 class="text-3xl font-bold tracking-wider xl:text-4xl xl:tracking-widest">
                    {project.title}
                </h3>
                <div class="flex flex-col gap-4 xl:text-lg">
                    <!-- ======== Timeframe ======== -->
                    <p>{project.timeframe}</p>
                    {#each project.paragraphs.split("\n") as paragraph}
                        <p>{paragraph}</p>
                    {/each}

                    <!-- ======== Project Skills ======== -->
                    <div class="flex w-full flex-wrap gap-2">
                        {#each project.skills as skill}
                            <a
                                class="rounded-full bg-white/20 px-3 py-0.5 text-xs transition-colors hover:bg-gray-200/20"
                                href="https://{skills.find(
                                    (pSkill) =>
                                        pSkill.name === skill || pSkill.abbreviation === skill
                                )?.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {skill}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        {#if index === 0}
            <SecondProjectIntro />
        {/if}
    {/each}
</div>
