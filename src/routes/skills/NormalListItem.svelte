<!--
  @component

  Contains single skill in normal form
  @param {SkillProps} skill - Skill to display
-->
<script lang="ts">
    import type { SkillProps } from "../../lib/interfaces";

    import OnViewTransition from "../../lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";

    export let skill: SkillProps;
</script>

<OnViewTransition containerClass="w-full" rootMargin="-5%">
    <a
        class="btn normal-case hover:bg-gray-100 border-0 w-full p-1 bg-white rounded-md flex justify-start content-center items-center transition-scale hover:scale-[102%] md:py-7"
        href={`https://${skill.link}`}
        target="_blank"
        rel="noopener noreferrer"
        in:scale
    >
        {#if skill.hasLogo}
            <img
                src={`logos/${skill.name}.png`}
                alt={`${skill.name} logo`}
                class="w-8 max-h-8 object-contain ml-2"
            />
        {:else}
            <p class="w-8 text-md ml-2 text-center text-black font-normal">
                {skill.abbreviation}
            </p>
        {/if}

        <div class="divider divider-horizontal m-1" />
        <div class="flex flex-col justify-center items-start content-center">
            <p class="text-md font-normal text-black md:text-base">{skill.name}</p>
            <p class="text-xs font-normal text-gray-400 md:text-sm">{skill.description}</p>
        </div>
    </a>
</OnViewTransition>
