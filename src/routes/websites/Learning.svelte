<!--
  @component

  Contains single learning
  @param {string} learning - Learning to display
-->
<script lang="ts">
    import type { SkillProps } from "../../lib/interfaces";
    import { skills } from "../skills/skills";
    import { dismissedSkills } from "../skills/dismissedSkills";

    import OnViewTransition from "../../lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";

    export let learning: string;

    const skill: SkillProps | undefined =
        // Search for skill in both active and dismissed skills
        skills.find((skill) => skill.name === learning || skill.abbreviation === learning) ||
        dismissedSkills.find((skill) => skill.name === learning || skill.abbreviation === learning);
</script>

<OnViewTransition>
    <div
        class="tooltip"
        data-tip={skill?.abbreviation !== "" ? skill?.abbreviation : skill?.name}
        in:scale
    >
        <div class="drop-shadow hover:drop-shadow-lg transition-all">
            <a
                class="btn btn-sm hover:bg-gray-100 border-0 w-[2.65rem] h-12 bg-gray-100 image-hex flex justify-center items-center content-center transition-scale ease-out duration-300 hover:scale-110"
                href={`https://${skill?.link}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {#if skill?.hasLogo}
                    <img
                        src={`logos/${skill?.name}.png`}
                        alt={`${skill?.name} logo`}
                        class="w-10 max-h-6 object-contain"
                    />
                {:else}
                    <p class="w-10 text-md text-center text-black font-normal">
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
