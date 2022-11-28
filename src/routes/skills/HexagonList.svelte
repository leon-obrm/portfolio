<script lang="ts">
    import HexagonListItem from "./HexagonListItem.svelte";
    import type { SkillProps } from "../../lib/interfaces";
    import { skills } from "./skills";

    let skillRows: SkillProps[][] = [];
    $: skillRows;

    let skillRow: SkillProps[] = [];
    let rowToggle: boolean = true;
    skills.forEach((skill: SkillProps, index: number) => {
        skillRow.push(skill);

        if (skillRow.length < 2) return;
        if ((skillRow.length === 2 && rowToggle) || skillRow.length === 3) {
            skillRows.push(skillRow);
            skillRow = [];
            rowToggle = !rowToggle;
        }
    });
</script>

<div class="w-10/12 max-w-xl flex flex-wrap justify-center items-center content-center">
    {#each skillRows as skillRow, i}
        <div class="w-full flex justify-center items-center content-center gap-4 -my-[0.3rem]">
            {#each skillRow as skill, j}
                <HexagonListItem {skill} />
            {/each}
        </div>
    {/each}
</div>
