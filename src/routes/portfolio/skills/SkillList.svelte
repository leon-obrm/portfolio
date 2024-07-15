<!--
  @component

  Contains list of skills in hexagon form
-->
<script lang="ts">
    import Skill from "./Skill.svelte"
    import type { SkillProps } from "$lib/interfaces"
    import { skills } from "./skills"

    let width: number
    let isMd: boolean
    $: isMd = width >= 768
    let isLg: boolean
    $: isLg = width >= 1024

    function fillSkillRows(smallRowLength: number, largeRowLength: number) {
        let skillRows: SkillProps[][] = []

        let skillRow: SkillProps[] = []
        let rowToggle: boolean = true

        skills.forEach((skill: SkillProps, index: number) => {
            skillRow.push(skill)

            if (index === skills.length - 1) {
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

    let smSkillRows: SkillProps[][] = fillSkillRows(2, 3)
    let mdSkillRows: SkillProps[][] = fillSkillRows(5, 6)
    let lgSkillRows: SkillProps[][] = fillSkillRows(7, 8)

    let currentSkillRows: SkillProps[][]
    $: currentSkillRows = isLg ? lgSkillRows : isMd ? mdSkillRows : smSkillRows
</script>

<svelte:window bind:outerWidth={width} />

<div class="flex w-10/12 max-w-4xl flex-wrap content-center items-center justify-center md:gap-1">
    {#each currentSkillRows as skillRow, i}
        <div class="flex w-full content-center items-center justify-center gap-4 md:gap-6">
            {#each skillRow as skill, j}
                <Skill {skill} />
            {/each}
        </div>
    {/each}
</div>
