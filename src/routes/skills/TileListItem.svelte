<script lang="ts">
    import type { SkillProps } from "../interfaces";
    export let skill: SkillProps;
</script>

<div
    class="h-56 p-4 px-1.5 flex flex-col justify-between items-center content-center bg-white rounded-md gap-4"
>
    <div class="flex flex-col justify-center items-center content-center gap-2">
        {#if skill.hasLogo}
            <img
                src={`logos/${skill.name}.png`}
                alt={`${skill.name} logo`}
                class="w-12 h-12 object-contain "
            />
        {:else}
            <p
                class="w-12 h-12 p-2 text-xl font-semibold text-center flex justify-center items-center"
            >
                {skill.abbreviation}
            </p>
        {/if}

        <p class="text-md text-center">{skill.name}</p>
    </div>

    <p class="text-sm text-center">{skill.description}</p>

    <a href={`https://${skill.link}`} target="new" class="link link-primary text-xs">
        {skill.link}
    </a>
</div>
