<script lang="ts">
    import type { IProject } from "$lib/interfaces"
    import { skills } from "$lib/skills"

    const projects: IProject[] = [
        {
            title: "Paletti",
            timeframe: "August 2023 - Now",
            paragraphs: [
                "I’ve always struggled with finding fitting colors for my website.",
                "That is why I created Paletti, an easy to use and fast way to create indivdual color palettes for web design and development.",
            ],
            skills: ["Svelte", "SvelteKit", "Tailwind CSS", "daisyUI"],
            link: "paletti.one",
            gradientFrom: "from-[#440322]",
            gradientTo: "to-[#FF1E6F]",
        },
        {
            title: "Boredom Buster",
            timeframe: "August 2023",
            paragraphs: [
                "This is a quick side project that I created to find some inspiration when bored.",
                "It randomly chooses a fun activity and a fitting duration for you get up and have some fun.",
            ],
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
                {#each project.paragraphs as paragraph}
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
