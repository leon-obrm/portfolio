<!--
  @component

  Contains single learning
  @param {string} learning - Learning to display
-->
<script lang="ts">
    import type { SkillProps } from "../../lib/interfaces";
    import { skills } from "../skills/skills";

    import OnViewTransition from "../../lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";

    export let learning: string;
    const skill: SkillProps | undefined = skills.find(
        (skill) => skill.name === learning || skill.abbreviation === learning
    );
</script>

<OnViewTransition>
    <div
        class="tooltip tooltip-primary"
        data-tip={skill?.abbreviation !== "" ? skill?.abbreviation : skill?.name}
        in:scale
    >
        <a
            class="btn btn-sm hover:bg-gray-300 border-0 w-[2.65rem] h-12 bg-gray-200 image-hex flex justify-center items-center content-center"
            href={`https://${skill?.link}`}
            target="new"
        >
            {#if skill?.hasLogo}
                <img
                    src={`logos/${skill?.name}.png`}
                    alt={`${skill?.name} logo`}
                    class="w-10 max-h-6 object-contain"
                />
            {:else}
                <p class="w-10 text-md text-center text-black font-normal">{skill?.abbreviation}</p>
            {/if}
        </a>
    </div>
</OnViewTransition>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
</style>
