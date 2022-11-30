<script lang="ts">
    import HexagonListItem from "./HexagonListItem.svelte";
    import type { SkillProps } from "../../lib/interfaces";
    import { skills } from "./skills";

    let width: number;
    let isLg: boolean;
    $: isLg = width >= 1024;

    $: console.log(isLg);

    function fillSkillRows(smallRowLength: number, largeRowLength: number) {
        let skillRows: SkillProps[][] = [];

        let skillRow: SkillProps[] = [];
        let rowToggle: boolean = true;

        skills.forEach((skill: SkillProps, index: number) => {
            skillRow.push(skill);

            if (index === skills.length - 1) {
                skillRows.push(skillRow);
                skillRow = [];
                rowToggle = !rowToggle;
            }

            if (skillRow.length < (rowToggle ? smallRowLength : largeRowLength)) return;
            if (
                (skillRow.length === smallRowLength && rowToggle) ||
                skillRow.length === largeRowLength
            ) {
                skillRows.push(skillRow);
                skillRow = [];
                rowToggle = !rowToggle;
            }
        });

        return skillRows;
    }

    let verticalSkillRows: SkillProps[][] = fillSkillRows(2, 3);
    let horizontalSkillRows: SkillProps[][] = fillSkillRows(6, 5);
</script>

<svelte:window bind:outerWidth={width} />

<div class="w-10/12 max-w-xl flex flex-wrap justify-center items-center content-center">
    {#each isLg ? horizontalSkillRows : verticalSkillRows as skillRow, i}
        <div
            class="w-full flex justify-center items-center content-center gap-4 -my-[0.3rem] lg:-my-[0.6rem]"
        >
            {#each skillRow as skill, j}
                <HexagonListItem {skill} />
            {/each}
        </div>
    {/each}
</div>
