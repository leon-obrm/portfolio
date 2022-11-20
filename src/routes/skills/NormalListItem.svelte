<script lang="ts">
    import type { SkillProps } from "../interfaces";
    export let skill: SkillProps;
</script>

<a
    class="btn normal-case hover:bg-gray-100 border-0 w-full max-w-xl p-1 bg-white rounded-md flex justify-start content-center items-center"
    href={`https://${skill.link}`}
    target="new"
>
    {#if skill.hasLogo}
        <img
            src={`logos/${skill.name}.png`}
            alt={`${skill.name} logo`}
            class="w-8 max-h-8 object-contain ml-2"
        />
    {:else}
        <p class="w-8 text-md ml-2 text-center">{skill.abbreviation}</p>
    {/if}

    <div class="divider divider-horizontal m-1" />
    <div class="flex flex-col justify-center items-start content-center">
        <p class="text-md font-normal text-black">{skill.name}</p>
        <p class="text-xs font-normal text-gray-400">{skill.description}</p>
    </div>
</a>
