<script lang="ts">
    import type { SkillProps } from "../interfaces";
    export let skill: SkillProps;
</script>

<div class="w-20 h-[5.6rem] bg-white image-hex flex justify-center items-center content-center">
    {#if skill.hasLogo}
        <img
            src={`logos/${skill.name}.png`}
            alt={`${skill.name} logo`}
            class="w-12 max-h-12 object-contain"
        />
    {:else}
        <p class="w-12 text-xl text-center">{skill.abbreviation}</p>
    {/if}
</div>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }

    .bg-hex {
        clip-path: polygon(50% 15%, 100% 40%, 100% 75%, 50% 100%, 0% 75%, 0% 40%);
    }

    .hex {
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    }
</style>
