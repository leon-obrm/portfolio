<!--
  @component

  Contains single learning
  @param {string} learning - Learning to display
-->
<script lang="ts">
    import type { SkillProps } from "$lib/interfaces"
    import { skills } from "../skills/skills"
    import { dismissedSkills } from "../skills/dismissedSkills"

    import OnViewTransition from "$lib/OnViewTransition.svelte"
    import { scale } from "svelte/transition"

    export let learning: string

    const skill: SkillProps | undefined =
        // Search for skill in both active and dismissed skills
        skills.find((skill) => skill.name === learning || skill.abbreviation === learning) ||
        dismissedSkills.find((skill) => skill.name === learning || skill.abbreviation === learning)
</script>

<OnViewTransition>
    <div
        class="tooltip"
        data-tip={skill !== undefined && skill.name !== undefined && skill.name.length > 20
            ? skill?.abbreviation
            : skill?.name}
        in:scale
    >
        <a
            class="transition-scale glassmorphism btn btn-sm flex aspect-square h-11 content-center items-center justify-center rounded-full border-0 shadow duration-300 ease-out hover:scale-110 hover:shadow-md"
            href={`https://${skill?.link}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {#if skill?.hasLogo}
                <img
                    src={`logos/${skill?.name}.png`}
                    alt={`${skill?.name} logo`}
                    class="object-contain {skill.name === 'Svelte Kit'
                        ? 'w-full scale-150'
                        : 'max-h-6 w-10'}"
                />
            {:else}
                <p class="w-fit text-center text-xs font-normal text-base-content">
                    {skill?.abbreviation}
                </p>
            {/if}
        </a>
    </div>
</OnViewTransition>
