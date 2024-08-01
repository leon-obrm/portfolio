<script lang="ts">
    import type { IProject } from "$lib/interfaces"
    import { skills } from "$lib/skills"
    import { useI18n } from "$lib/useI18n"

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

{#each projects as project}
    <div class="pt-12">
        <img
            class="rounded shadow-image-glow"
            src="projects/{project.title}.png"
            alt="Screenshot of project {project.title}"
        />
        <div class="relative pt-7">
            <div
                class="absolute -left-5 top-0 -z-50 h-full w-[120%] bg-gradient-to-tr opacity-20 {project.gradientFrom} {project.gradientTo}"
            />

            <h3 class="text-3xl font-bold tracking-wider">{project.title}</h3>
            <div class="flex flex-col gap-4">
                <p>{project.timeframe}</p>
                {#each project.paragraphs.split("\n") as paragraph}
                    <p>{paragraph}</p>
                {/each}

                <div class="flex w-full flex-wrap gap-2">
                    {#each project.skills as skill}
                        <a
                            class="rounded-full bg-white/20 px-3 py-0.5 text-xs"
                            href="https://{skills.find(
                                (pSkill) => pSkill.name === skill || pSkill.abbreviation === skill
                            )?.link}"
                            target="_blank"
                            rel="noopener noreferrer">{skill}</a
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
{/each}
