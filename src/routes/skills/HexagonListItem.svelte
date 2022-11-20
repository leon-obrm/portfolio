<script lang="ts">
    import type { SkillProps } from "../interfaces";
    export let skill: SkillProps;
</script>

<div
    class="tooltip tooltip-primary"
    data-tip={skill.abbreviation !== "" ? skill.abbreviation : skill.name}
>
    <a
        class="btn hover:bg-gray-100 border-0 w-20 h-[5.6rem] bg-white image-hex flex justify-center items-center content-center"
        href={`https://${skill.link}`}
        target="new"
    >
        {#if skill.hasLogo}
            <img
                src={`logos/${skill.name}.png`}
                alt={`${skill.name} logo`}
                class="w-12 max-h-12 object-contain"
            />
        {:else}
            <p class="w-12 text-xl text-center text-black font-normal">{skill.abbreviation}</p>
        {/if}
    </a>
</div>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
</style>
