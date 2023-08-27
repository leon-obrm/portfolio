<!--
  @component

  Contains single skill in normal form
  @param {SkillProps} skill - Skill to display
-->
<script lang="ts">
    import type { SkillProps } from "$lib/interfaces";

    import OnViewTransition from "$lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";

    export let skill: SkillProps;
</script>

<OnViewTransition containerClass="w-full" rootMargin="-5%">
    <div class="drop-shadow transition-all hover:drop-shadow-md">
        <a
            class="transition-scale btn no-animation flex w-full content-center items-center justify-start rounded-md border-0 bg-white p-1 normal-case hover:scale-[102%] hover:bg-white md:py-7"
            href={`https://${skill.link}`}
            target="_blank"
            rel="noopener noreferrer"
            in:scale
        >
            {#if skill.hasLogo}
                <img
                    src={`logos/${skill.name}.png`}
                    alt={`${skill.name} logo`}
                    class="ml-2 max-h-8 w-8 object-contain"
                />
            {:else}
                <p class="text-md ml-2 w-8 text-center font-normal text-black">
                    {skill.abbreviation}
                </p>
            {/if}

            <div class="divider divider-horizontal m-1" />
            <div class="flex flex-col content-center items-start justify-center">
                <p class="text-md font-normal text-black md:text-base">{skill.name}</p>
                <p class="text-xs font-normal text-gray-400 md:text-sm">{skill.description}</p>
            </div>
        </a>
    </div>
</OnViewTransition>
