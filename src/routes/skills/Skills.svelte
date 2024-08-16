<script lang="ts">
    import SkillsIntro from "./SkillsIntro.svelte"

    import { skills } from "$lib/skills"
    import type { ISkill } from "$lib/interfaces"

    let width: number
    let isMd: boolean
    $: isMd = width >= 768
    let isLg: boolean
    $: isLg = width >= 1024

    function fillSkillRows(smallRowLength: number, largeRowLength: number) {
        let skillRows: ISkill[][] = []

        let skillRow: ISkill[] = []
        let rowToggle: boolean = true

        const filteredSkills: ISkill[] = skills.filter((skill: ISkill) => !skill.isHidden)

        filteredSkills.forEach((skill: ISkill, index: number) => {
            skillRow.push(skill)

            if (index === filteredSkills.length - 1) {
                skillRows.push(skillRow)
                skillRow = []
                rowToggle = !rowToggle
            }

            if (skillRow.length < (rowToggle ? smallRowLength : largeRowLength)) return
            if (
                (skillRow.length === smallRowLength && rowToggle) ||
                skillRow.length === largeRowLength
            ) {
                skillRows.push(skillRow)
                skillRow = []
                rowToggle = !rowToggle
            }
        })

        return skillRows
    }

    let smSkillRows: ISkill[][] = fillSkillRows(2, 3)
    let mdSkillRows: ISkill[][] = fillSkillRows(5, 6)
    let lgSkillRows: ISkill[][] = fillSkillRows(7, 8)

    let currentSkillRows: ISkill[][]
    $: currentSkillRows = isLg ? lgSkillRows : isMd ? mdSkillRows : smSkillRows
</script>

<SkillsIntro />

<svelte:window bind:outerWidth={width} />

<div
    class="relative flex w-full flex-wrap content-center items-center justify-center gap-3 md:gap-4 xl:gap-5"
>
    <!-- ======== Gray Background Blur ======== -->
    <div
        class="absolute left-1/2 top-0 -z-50 h-full w-full max-w-sm -translate-x-1/2 bg-gradient-to-tr from-gray-800/10 to-gray-500/10 md:max-w-2xl lg:max-w-5xl"
    />
    {#each currentSkillRows as skillRow, i}
        <div class="flex w-full content-center items-center justify-center gap-7 md:gap-8 xl:gap-9">
            {#each skillRow as skill, j}
                <!-- ======== Single Skill ======== -->
                <a
                    class="glass-border relative flex h-20 w-20 content-center items-center justify-center overflow-clip rounded-full shadow transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg xl:h-24 xl:w-24"
                    href="https://{skill.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={skill.name}
                >
                    <!-- ======== Logo ======== -->
                    <img
                        src={`logos/${skill.name}.png`}
                        alt={`${skill.name} logo`}
                        class="object-contain {skill.customSize
                            ? skill.customSize
                            : 'max-h-10 w-10 xl:max-h-12 xl:w-12'}"
                    />

                    <!-- ======== Blurred Logo ======== -->
                    <img
                        src={`logos/${skill.name}.png`}
                        alt={`${skill.name} logo`}
                        class="absolute -z-30 object-contain {skill.customSize
                            ? skill.customSize
                            : 'max-h-10 w-10 xl:max-h-12 xl:w-12'}"
                    />

                    <!-- ======== Additional Back Light ======== -->
                    {#if skill.backlight}
                        <div class="absolute -z-30 h-[55%] w-[55%] {skill.backlight}" />
                    {/if}

                    <!-- ======== Blur Layer ======== -->
                    <div
                        class="absolute left-0 top-0 -z-20 h-full w-full backdrop-blur-[14px] xl:backdrop-blur-[17px]"
                    />
                </a>
            {/each}
        </div>
    {/each}
</div>
