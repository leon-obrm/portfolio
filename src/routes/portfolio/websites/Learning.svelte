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
        class="tooltip tooltip-bottom"
        data-tip={skill?.abbreviation !== "" ? skill?.abbreviation : skill?.name}
        in:scale
    >
        <div class="drop-shadow transition-all hover:drop-shadow-lg">
            <a
                class="image-hex transition-scale btn btn-sm flex h-12 w-[2.65rem] content-center items-center justify-center border-0 bg-base-200 duration-300 ease-out hover:scale-110 hover:bg-base-200"
                href={`https://${skill?.link}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {#if skill?.hasLogo}
                    <img
                        src={`logos/${skill?.name}.png`}
                        alt={`${skill?.name} logo`}
                        class="max-h-6 w-10 object-contain"
                    />
                {:else}
                    <p class="w-10 text-center text-xs font-normal text-base-content">
                        {skill?.abbreviation}
                    </p>
                {/if}
            </a>
        </div>
    </div>
</OnViewTransition>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
</style>
