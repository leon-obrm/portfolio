<script lang="ts">
    import type { SkillProps } from "../../lib/interfaces";
    export let skill: SkillProps;

    import OnViewTransition from "../../lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";
</script>

<OnViewTransition>
    <div
        class="tooltip tooltip-primary"
        data-tip={skill.name.length > 20 ? skill.abbreviation : skill.name}
        in:scale
    >
        <a
            class="btn hover:bg-gray-100 border-0 w-20 h-[5.6rem] bg-white image-hex flex justify-center items-center content-center lg:w-28 lg:h-[124px]"
            href={`https://${skill.link}`}
            target="new"
        >
            {#if skill.hasLogo}
                <img
                    src={`logos/${skill.name}.png`}
                    alt={`${skill.name} logo`}
                    class="w-12 max-h-12 object-contain lg:w-14 lg:max-h-14"
                />
            {:else}
                <p class="w-12 text-xl text-center text-black font-normal lg:w-14 lg:text-2xl">
                    {skill.abbreviation}
                </p>
            {/if}
        </a>
    </div>
</OnViewTransition>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
</style>
