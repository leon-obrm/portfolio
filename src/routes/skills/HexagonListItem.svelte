<!--
  @component

  Contains single skill in hexagon form
  @param {SkillProps} skill - Skill to display
-->
<script lang="ts">
    import type { SkillProps } from "../../lib/interfaces";
    export let skill: SkillProps;

    import OnViewTransition from "../../lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";
</script>

<OnViewTransition>
    <div
        class="tooltip"
        data-tip={skill.name.length > 20 ? skill.abbreviation : skill.name}
        in:scale
    >
        <div class="drop-shadow hover:drop-shadow-lg transition-all">
            <a
                class="btn no-animation hover:bg-white border-0 w-20 h-[5.6rem] bg-white image-hex flex justify-center items-center content-center transition-scale ease-out duration-300 hover:scale-110 md:w-24 md:h-[104px]"
                href={`https://${skill.link}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {#if skill.hasLogo}
                    <img
                        src={`logos/${skill.name}.png`}
                        alt={`${skill.name} logo`}
                        class="w-12 max-h-12 object-contain md:w-14 md:max-h-14"
                    />
                {:else}
                    <p class="w-12 text-xl text-center text-black font-normal md:w-14 md:text-2xl">
                        {skill.abbreviation}
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
