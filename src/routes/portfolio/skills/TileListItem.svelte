<!--
  @component

  Contains single skill in tile form
  @param {SkillProps} skill - Skill to display
-->
<script lang="ts">
    import type { SkillProps } from "$lib/interfaces"
    import OnViewTransition from "$lib/OnViewTransition.svelte"
    import { scale } from "svelte/transition"

    export let skill: SkillProps
</script>

<OnViewTransition containerClass="w-36 lg:w-40" repeat={true}>
    <div class="drop-shadow transition-all hover:drop-shadow-lg">
        <a
            class="transition-scale no-animation btn-md btn flex h-56 w-36 flex-col content-center items-center justify-between gap-4 rounded-md border-0 bg-white p-4 px-1.5 font-normal normal-case text-black hover:scale-[103%] hover:bg-white lg:h-60 lg:w-40"
            href={`https://${skill.link}`}
            target="_blank"
            rel="noopener noreferrer"
            in:scale
        >
            <div class="flex flex-col content-center items-center justify-center gap-3">
                {#if skill.hasLogo}
                    <img
                        src={`logos/${skill.name}.png`}
                        alt={`${skill.name} logo`}
                        class="h-12 w-12 object-contain"
                    />
                {:else}
                    <p
                        class="flex h-12 w-12 items-center justify-center p-2 text-center text-xl font-normal text-gray-600"
                    >
                        {skill.abbreviation}
                    </p>
                {/if}

                <p class="text-md text-center font-medium lg:text-base">{skill.name}</p>
            </div>

            <p class="text-center text-xs lg:text-sm">{skill.description}</p>

            <a
                href={`https://${skill.link}`}
                target="_blank"
                rel="noopener noreferrer"
                class="link-primary link text-[0.65rem] lg:text-xs"
            >
                {skill.link}
            </a>
        </a>
    </div>
</OnViewTransition>
