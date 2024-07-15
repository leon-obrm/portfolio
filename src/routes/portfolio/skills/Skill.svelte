<!--
  @component

  Contains single skill in hexagon form
  @param {SkillProps} skill - Skill to display
-->
<script lang="ts">
    import type { SkillProps } from "$lib/interfaces"
    export let skill: SkillProps

    import OnViewTransition from "$lib/OnViewTransition.svelte"
    import { scale } from "svelte/transition"
</script>

<OnViewTransition>
    <div
        class="tooltip"
        data-tip={skill.name.length > 20 ? skill.abbreviation : skill.name}
        in:scale
    >
        <a
            class="transition-scale glassmorphism btn no-animation flex aspect-square h-20 w-20 content-center items-center justify-center rounded-full border-0 shadow duration-300 ease-out hover:scale-110 hover:shadow-lg md:h-24 md:w-24"
            href={`https://${skill.link}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {#if skill.hasLogo}
                <img
                    src={`logos/${skill.name}.png`}
                    alt={`${skill.name} logo`}
                    class="rounded-md object-contain {skill.name === 'Svelte Kit'
                        ? 'w-full scale-125'
                        : 'max-h-12 w-12 md:max-h-14 md:w-14'}"
                />
            {:else}
                <p class="w-full text-center text-3xl font-light text-base-content md:text-4xl">
                    {skill.abbreviation}
                </p>
            {/if}
        </a>
    </div>
</OnViewTransition>
