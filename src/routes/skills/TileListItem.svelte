<script lang="ts">
    import type { SkillProps } from "../../lib/interfaces";
    import OnViewTransition from "../../lib/OnViewTransition.svelte";
    import { scale } from "svelte/transition";

    export let skill: SkillProps;
</script>

<OnViewTransition containerClass="w-36 lg:w-40" repeat={true}>
    <a
        class="btn btn-md normal-case hover:bg-gray-100 border-0 w-36 lg:w-40 h-56 p-4 px-1.5 flex flex-col justify-between items-center content-center bg-white rounded-md gap-4 text-black font-normal lg:h-60"
        href={`https://${skill.link}`}
        target="new"
        in:scale
    >
        <div class="flex flex-col justify-center items-center content-center gap-3">
            {#if skill.hasLogo}
                <img
                    src={`logos/${skill.name}.png`}
                    alt={`${skill.name} logo`}
                    class="w-12 h-12 object-contain "
                />
            {:else}
                <p
                    class="w-12 h-12 p-2 text-xl text-gray-600 font-normal text-center flex justify-center items-center"
                >
                    {skill.abbreviation}
                </p>
            {/if}

            <p class="text-md text-center font-medium lg:text-base">{skill.name}</p>
        </div>

        <p class="text-xs text-center lg:text-sm">{skill.description}</p>

        <a
            href={`https://${skill.link}`}
            target="new"
            class="link link-primary text-[0.65rem] lg:text-xs"
        >
            {skill.link}
        </a>
    </a>
</OnViewTransition>
